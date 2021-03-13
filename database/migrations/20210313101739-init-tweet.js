'use strict';

const tableName = 'tweets';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        title: { type: STRING },
        content: { type: STRING },
        title: { type: STRING },
        user: {
          type: INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        createdAt: { type: DATE, defaultValue: Sequelize.literal('NOW()') },
        updatedAt: {
          type: DATE,
          defaultValue: Sequelize.literal('NOW() ON UPDATE NOW()'),
        },
      },
      {
        charset: 'utf8', // default: null
      },
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
