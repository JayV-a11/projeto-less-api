import { DataTypes } from "sequelize";
import AbstractModel from "./AbstractModel.js";
import CartModel from "./CartModel.js";
import BookModel from "./BookModel.js";

export default class BookCartModel extends AbstractModel {
  static init() {
    return super.init({
      attributes: {
        id: {
          type: DataTypes.UUID,
          primaryKey: true,
          defaultValue: DataTypes.UUIDV4,
          allowNull: false,
          autoIncrement: false,
        },
        cart_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        book_id: {
          type: DataTypes.UUID,
          allowNull: false,
        },
        value: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        quantity: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: DataTypes.DATE,
        },
        updated_at: {
          type: DataTypes.DATE,
        },
      },
      options: {
        modelName: "BookCart",
        tableName: "Book_Cart",
        underscored: true,
      },
    });
  }

  static associate() {
    this.belongsTo(CartModel, { foreignKey: "cart_id", as: "cart" });
    this.belongsTo(BookModel, { foreignKey: "book_id", as: "book" });
  }
}
