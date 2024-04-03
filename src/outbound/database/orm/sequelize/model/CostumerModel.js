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
                    email: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    inactive: {
                        type: DataTypes.BOOLEAN,
                    },
                    createdAt: {
                        type: DataTypes.DATE
                    },
                    updatedAt: {
                        type: DataTypes.DATE
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

