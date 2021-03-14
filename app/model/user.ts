module.exports = (app) => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const User = app.model.define('users', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: STRING },
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

  User.associate = () => {
    app.model.User.hasMany(app.model.UserFollow, {
      foreignKey: 'userId',
    });
    app.model.User.hasMany(app.model.UserFollow, {
      foreignKey: 'followId',
    });
    app.model.User.hasMany(app.model.Tweet, {
      foreignKey: 'userId',
    });
  };

  return User;
};
