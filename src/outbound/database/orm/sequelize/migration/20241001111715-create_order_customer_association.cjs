'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Orders', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'order_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Orders', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'order_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  }
};
