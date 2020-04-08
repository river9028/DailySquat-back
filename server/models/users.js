const db = require('../db');

const Users = db.sequelize.define('users', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: 'N',
  },
});

module.exports = { Users };
