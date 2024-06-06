'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Carts', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'cart_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Carts', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'cart_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  }
};
