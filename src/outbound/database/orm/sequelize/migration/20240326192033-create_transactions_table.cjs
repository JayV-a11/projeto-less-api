'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('Transactions', {
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
            transaction_date: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            value: {
                type: Sequelize.DECIMAL(10, 2),
                allowNull: false,
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            items: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            coupon: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            delivery_address_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            card_id: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            created_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
            },
            updated_at: {
                type: 'TIMESTAMP',
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false,
            },
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Transactions');
    },
};
