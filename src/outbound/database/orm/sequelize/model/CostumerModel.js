import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';

export default class CostumerModel extends AbstractModel {
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
                    name: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    last_name: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    email: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    birthdate: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    cpf: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    phone: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    password: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    ranking: {
                        type: DataTypes.INTEGER,
                        allowNull: false
                    },
                    inactive: {
                        type: DataTypes.BOOLEAN,
                        allowNull: false,
                        defaultValue: false
                    },
                    created_at: {
                        type: DataTypes.DATE,
                    },
                    updated_at: {
                        type: DataTypes.DATE,
                    }
                },
                options: {
                    modelName: 'Customer',
                    tableName: 'Customers',
                    underscored: true
                }
            }
        );
    }
}
