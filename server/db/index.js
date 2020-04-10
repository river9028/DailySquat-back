const Sequelize = require('sequelize');

const password = 'jaemin93';
// const password = process.env.DATABASE_SPRINT_PASSWORD;

const host = 'localhost';

const sequelize = new Sequelize('dailySquat', 'root', password, {
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
