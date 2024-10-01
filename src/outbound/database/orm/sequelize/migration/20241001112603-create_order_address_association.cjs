'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Orders', {
      fields: ['address_id'],
      type: 'foreign key',
      name: 'order_address_association',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Orders', {
      fields: ['address_id'],
      type: 'foreign key',
      name: 'order_address_association',
      references: {
        table: 'Addresses',
        field: 'id'
      }
    })
  }
};
