const Sequelize = require('sequelize');

const password = 'root';
// process.env.DATABASE_SPRINT_PASSWORD;

const host = 'localhost';

const sequelize = new Sequelize('chat', 'root', password, {
  host,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = { Sequelize, sequelize };
