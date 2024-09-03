import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';
import CostumerModel from './CostumerModel.js';

export default class CardModel extends AbstractModel {
    static init() {
        return super.init(
            {
                attributes: {
                    id: {
                        type: DataTypes.UUID,
                        primaryKey: true,
                        defaultValue: DataTypes.UUIDV4,
                        allowNull: false,
                        autoIncrement: false,
                    },
                    customer_id: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    numero_cartao: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    nome_cartao: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    validade: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    bandeira: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    codigo_seguranca: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    preferencial: {
                        type: DataTypes.BOOLEAN,
                        allowNull: false
                    },
                    created_at: {
                        type: DataTypes.DATE,
                    },
                    updated_at: {
                        type: DataTypes.DATE,
                    }
                },
                options: {
                    modelName: 'Card',
                    tableName: 'Cards',
                    underscored: true
                }
            }
        );
    }

    static associate() {
        this.belongsTo(CostumerModel, { foreignKey: 'customer_id', as: 'customer' });
    }
}
