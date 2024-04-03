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
                    cep: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    rua: {
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
                    cidade: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    estado: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    complemento: {
                        type: DataTypes.STRING,
                        allowNull: true
                    },
                    createdAt: {
                        type: DataTypes.DATE
                    },
                    updatedAt: {
                        type: DataTypes.DATE
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

