import { DataTypes } from 'sequelize';
import AbstractModel from './AbstractModel.js';

export default class CupomModel extends AbstractModel {
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
                    valor: {
                        type: DataTypes.STRING,
                        allowNull: false
                    },
                    ativo: {
                        type: DataTypes.BOOLEAN,
                        allowNull: false,
                        defaultValue: false
                    },
                },
                options: {
                    modelName: 'Cupom',
                    tableName: 'Cupoms',
                    underscored: true
                }
            }
        );
    }
}
