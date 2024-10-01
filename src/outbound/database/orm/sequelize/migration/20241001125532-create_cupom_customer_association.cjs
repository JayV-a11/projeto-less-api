'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Cupoms', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'cupom_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Cupoms', {
      fields: ['customer_id'],
      type: 'foreign key',
      name: 'cupom_customer_association',
      references: {
        table: 'Customers',
        field: 'id'
      }
    })
  }
};
