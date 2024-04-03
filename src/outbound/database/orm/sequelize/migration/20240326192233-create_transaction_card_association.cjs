'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Transactions', {
      fields: ['card_id'],
      type: 'foreign key',
      name: 'transaction_card_association',
      references: {
        table: 'Card',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Transactions', {
      fields: ['card_id'],
      type: 'foreign key',
      name: 'transaction_card_association',
      references: {
        table: 'Card',
        field: 'id'
      }
    })
  }
};
