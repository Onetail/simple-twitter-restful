module.exports = (app) => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const Tweet = app.model.define('tweets', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    userId: { type: INTEGER },
    title: { type: STRING },
    content: { type: STRING },
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

  Tweet.associate = () => {
    app.model.Tweet.belongsTo(app.model.User, {
      foreignKey: 'userId',
      targetKey: 'id',
    });
  };

  return Tweet;
};
