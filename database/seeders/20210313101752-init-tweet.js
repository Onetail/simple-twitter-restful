'use strict';

const tableName = 'tweets';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          title: 'testA',
          content: 'testA content',
          userId: 1,
        },
        {
          id: 2,
          title: 'testB',
          content: 'testC content',
          userId: 2,
        },
        {
          id: 3,
          title: 'testAA',
          content: 'testAA content',
          userId: 1,
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
