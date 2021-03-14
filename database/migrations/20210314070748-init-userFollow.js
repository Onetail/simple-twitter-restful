'use strict';

const tableName = 'userFollows';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { DATE, INTEGER, STRING } = Sequelize;
    await queryInterface.createTable(
      tableName,
      {
        id: { type: INTEGER, primaryKey: true, autoIncrement: true },
        userId: {
          type: INTEGER,
          allowNull: false,
          references: {
            model: 'users',
            key: 'id',
          },
        },
        followId: {
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
    queryInterface.addConstraint(tableName, ['userId', 'followId'], {
      type: 'unique',
      name: 'user_follow_userId_followId_unique_constraint',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(tableName);
  },
};
