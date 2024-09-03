'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Transactions', {
      fields: ['delivery_address_id'],
      type: 'foreign key',
      name: 'transaction_address_association',
      references: {
        table: 'Adresses',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Transactions', {
      fields: ['delivery_address_id'],
      type: 'foreign key',
      name: 'transaction_address_association',
      references: {
        table: 'Adresses',
        field: 'id'
      }
    })
  }
};
