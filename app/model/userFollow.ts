module.exports = (app) => {
  const { INTEGER, DATE } = app.Sequelize;

  const UserFollow = app.model.define('userFollows', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: INTEGER },
    followId: { type: INTEGER },
    createdAt: {
      allowNull: false,
      defaultValue: app.Sequelize.NOW,
      type: DATE,
    },
    updatedAt: {
      allowNull: false,
      defaultValue: app.Sequelize.NOW,
      type: DATE,
    },
  });

  UserFollow.associate = () => {
    app.model.UserFollow.belongsTo(app.model.User, {
      foreignKey: 'userId',
      targetKey: 'id',
      //   as: 'userId',
    });
    app.model.UserFollow.belongsTo(app.model.User, {
      foreignKey: 'followId',
      targetKey: 'id',
      //   as: 'followId',
    });
  };

  return UserFollow;
};
