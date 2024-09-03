import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';
import CostumerModel from './CostumerModel.js';

export default class CartModel extends AbstractModel {
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
                    createdAt: {
                        type: DataTypes.DATE
                    },
                    updatedAt: {
                        type: DataTypes.DATE
                    }
                }, 
                options: {
                    modelName: 'Cart',
                    tableName: 'Carts',
                    underscored: true
                }
            }
        );
    }

    static associate() {
        this.belongsTo(CostumerModel, { foreignKey: 'customer_id', as: 'customer' });
    }
}

