'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Cards', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'card_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Cards', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'card_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  }
};
