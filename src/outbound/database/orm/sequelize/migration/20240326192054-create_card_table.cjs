"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cards", {
      id: {
        type: Sequelize.UUID,
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
      },
      customer_id: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      numero_cartao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nome_cartao: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      validade: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      bandeira: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigo_seguranca: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      preferencial: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      created_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
      updated_at: {
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cards");
  },
};
