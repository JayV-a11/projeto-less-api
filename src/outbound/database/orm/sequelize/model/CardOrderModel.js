import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';

export default class OrderModel extends AbstractModel {
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
                    order_id: {
                        type: DataTypes.UUID,
                        allowNull: false
                    },
                    card_id: {
                        type: DataTypes.UUID,
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
                    modelName: 'Card_Order',
                    tableName: 'Card_Orders',
                    underscored: true
                }
            }
        );
    }
}
