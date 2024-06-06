'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Book_Cart', {
      fields: ['cart_id'],
      type: 'foreign key',
      name: 'bookcart_book_association',
      references: {
        table: 'Books',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Book_Cart', {
      fields: ['cart_id'],
      type: 'foreign key',
      name: 'bookcart_book_association',
      references: {
        table: 'Books',
        field: 'id'
      }
    })
  }
};
