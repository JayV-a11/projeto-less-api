import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';
import CostumerModel from './CostumerModel.js';

export default class AddressModel extends AbstractModel {
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
                    tipo_residencia: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    tipo_logradouro: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    logradouro: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    numero: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    bairro: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    cep: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    cidade: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    estado: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    pais: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    observacoes: {
                        type: DataTypes.STRING,
                        allowNull: true
                    },
                    tipo_endereco: {
                        type: DataTypes.STRING,
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
                    modelName: 'Address',
                    tableName: 'Adresses',
                    underscored: true
                }
            }
        );
    }

    static associate() {
        this.belongsTo(CostumerModel, { foreignKey: 'customer_id', as: 'customer' });
    }
}
