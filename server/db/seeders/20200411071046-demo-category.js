'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('categories', [{
      id: '1',
      name: 'squat',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    },
    {
      id: '2',
      name: 'lunge',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    },
    {
      id: '3',
      name: 'pushUp',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('categories', null, {});
  }
};
