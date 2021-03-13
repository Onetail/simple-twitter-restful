'use strict';

const tableName = 'users';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      tableName,
      [
        {
          id: 1,
          name: 'a',
        },
        {
          id: 2,
          name: 'b',
        },
      ],
      {},
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
