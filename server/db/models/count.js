
module.exports = (sequelize, DataTypes) => {
  const count = sequelize.define('count', {
    userId: DataTypes.STRING,
    categoryId: DataTypes.STRING,
    count: DataTypes.STRING,
  }, {});
  count.associate = function(models) {
    count.belongsTo(models.users, {
      foreignKey: 'userId',
    });
    count.belongsTo(models.category, {
      foreignKey: 'categoryId',
    });
  };
  return count;
};
