'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addConstraint('Card_Orders', {
      fields: ['card_id'],
      type: 'foreign key',
      name: 'cardorder_card_association',
      references: {
        table: 'Cards',
        field: 'id'
      }
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeConstraint('Card_Orders', {
      fields: ['card_id'],
      type: 'foreign key',
      name: 'cardorder_card_association',
      references: {
        table: 'Cards',
        field: 'id'
      }
    })
  }
};
