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
                    customer_id: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    book_id: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    address_id: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    status: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    valor: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    frete: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    pagamento: {
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
                    modelName: 'Order',
                    tableName: 'Orders',
                    underscored: true
                }
            }
        );
    }
}
