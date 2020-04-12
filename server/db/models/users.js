'use strict';
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING,
    status: DataTypes.STRING,
  }, {});
  users.associate = function(models) {
    users.hasMany(models.count);
  };
  return users;
};