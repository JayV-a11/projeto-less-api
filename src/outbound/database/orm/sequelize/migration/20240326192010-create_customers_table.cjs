'use strict'
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable(
            'Customers',
            {
                id: {
                    type: Sequelize.UUID,
                    allowNull: false,
                    autoIncrement: false,
                    primaryKey: true
                },
                name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                last_name: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                email: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                birthdate: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                cpf: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                phone: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                password: {
                    type: Sequelize.STRING,
                    allowNull: false
                },
                ranking: {
                    type: Sequelize.INTEGER,
                    allowNull: false
                },
                inactive: {
                    type: Sequelize.BOOLEAN,
                    allowNull: false,
                    defaultValue: false,
                },
                created_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false
                },
                updated_at: {
                    type: 'TIMESTAMP',
                    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                    allowNull: false
                }
            }
        );
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('Customers');
    }
}