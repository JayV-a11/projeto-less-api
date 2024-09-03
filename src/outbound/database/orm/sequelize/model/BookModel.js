import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';

export default class BookModel extends AbstractModel {
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
                    autor: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    editora: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    ano: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    edicao: {
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
                    modelName: 'Book',
                    tableName: 'Books',
                    underscored: true
                }
            }
        );
    }
}

