'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Orders', {
      fields: ['book_id'],
      type: 'foreign key',
      name: 'order_book_association',
      references: {
        table: 'Books',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Orders', {
      fields: ['book_id'],
      type: 'foreign key',
      name: 'order_book_association',
      references: {
        table: 'Books',
        field: 'id'
      }
    })
  }
};
