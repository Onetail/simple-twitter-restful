'use strict';

const tableName = 'users';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        name: { type: STRING },
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
    queryInterface.addConstraint(tableName, ['name'], {
      type: 'unique',
      name: 'user_name_unique_constraint',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
