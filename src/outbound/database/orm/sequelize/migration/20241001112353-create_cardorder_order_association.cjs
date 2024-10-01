'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Card_Orders', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'cardorder_order_association',
      references: {
        table: 'Orders',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Card_Orders', {
      fields: ['order_id'],
      type: 'foreign key',
      name: 'cardorder_order_association',
      references: {
        table: 'Orders',
        field: 'id'
      }
    })
  }
};
