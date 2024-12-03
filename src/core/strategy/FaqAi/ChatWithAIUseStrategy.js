import Groq from "groq-sdk";
import AbstractStrategy from '../AbstractStrategy.js';
import Result from '../../util/Result.js';

export default class ChatWithAIUseStrategy extends AbstractStrategy {
    constructor({
        result = new Result()
    } = {}) {
        super();
        this.result = result;
    }

    async execute(chat, result = this.result) {
        try {
            const groq = new Groq({
                apiKey: process.env.AI_KEY
            })
            const books = [];

            chat.books.map(item => books.push(item.dataValues))
            const messages = []
            messages.push( {
                role: "system",
                content: `
                Você deve servir apenas como um chat de suporte para um sistema/site de e-commerce de livros. Você estará se comunicando através da plataforma. 

                Site: Leituras em foco.
                
Vou lhe passar um FAQ ao qual você poderá utilizar como base para responder algumas perguntas mais comuns:

Sobre Compras:
1.Como faço para comprar um livro no site?
R: Na aba /catalog de nosso site, existe uma variedade de livors para seleção. Escolha o que mais lhe agradar e adicione ao carrinho para seguir com o processo de pagamento

2.Quais são os métodos de pagamento aceitos?
R: No momento, trabalhamos apenas com cartões de crédito e débito. É possivel utilizar mais de um para realizar o pagamento, contanto que não ultrapasse o valor da compra

3. É possível parcelar minhas compras?
R: No momento não, apenas dividir o pagamento em mais de um cartão.

4. Como aplicar um cupom de desconto no meu pedido?
R: Caso você possua cupons de trocas disponiveis, basta seleciona-lo na lista de cupoms que está presente na tela de pagamento (CARRINHO)

Sobre Pedidos:
1. Como acompanho o status do meu pedido?
R: Basta ir na aba pedidos, lá você pode visualizar o status atual do pedido.
2. Como solicitar a troca ou devolução de um livro?
R: Na mesma tela que se pode visualizar o status de cada pedido é possivel solicitar trocas de pedidos com defeito
3. O que fazer se recebi um livro com defeito ou errado?
R: É possivel solicitar a troca. Esse processo, caso aprovado, irá gerar um cupom de troca no valor do(s) item(s) (não reembolsamos)

Sobre Produtos:
1. Todos os livros são novos ou também há usados?
R: Todos os livros são novos. Apenas vendemos livros NOVOS
2. Vocês vendem livros em formato digital (e-books)?
R: Não.
3. Posso encomendar um livro que não está no catálogo?
R: Não.

Além disso, estarei te fornecendo uma lista com os livros atualmente cadastrado no sistema (UTILIZE APENAS EM OCASIÕES COERENTES):
${books.map((item, index) => `Livro no. ${index}: Nome: ${item.name} - Autor ${item.autor} - Editora: ${item.editora} - Quantidade em estoque: ${item.quantidade} - Preço: R$ ${item.valor}`)}

Foque em perguntas relacionadas ao E-COMMERCE apenas, mas não seja rude. 
`
            })
            chat.messages.map(item => messages.push({
                role: item.role,
                content: item.message
            }))
        
            await groq.chat.completions.create({
                model: "gemma2-9b-it",
                messages: messages,
                temperature: 1,
                max_tokens: 1024,
                top_p: 1,
                stream: false,
                stop: null,
                seed: null,
            }).then((chatCompletion) => {
                result.status = 201;
                result.data = chatCompletion.choices[0]?.message?.content || "";
            })
            
        } catch (error) {
            result.status = 500;
            result.error.push(error.message);
        }

        return {
            entity: chat,
            result
        };
    }
}
