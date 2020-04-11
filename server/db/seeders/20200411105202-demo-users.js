'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [{
      id: '1',
      name: '박코딩',
      email: 'park@naver.com',
      password: '0000',
      age: '44',
      gender: 'female',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    },
    {
      id: '2',
      name: '김코딩',
      email: 'kim@naver.com',
      password: 'asdf',
      age: '24',
      gender: 'male',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    },
    {
      id: '3',
      name: '유코딩',
      email: 'yoo@naver.com',
      password: 'zxcv',
      age: '38',
      gender: 'male',
      createdAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
      updatedAt: new Date().toISOString().replace(/T/, ' ').replace(/\..+/, ''),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
