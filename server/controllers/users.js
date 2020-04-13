const jwt = require('jsonwebtoken');
const users = require('../models/users');
const secretKey = require('../config/jwt');

module.exports = {
  users: {
    signin: async (req, res) => {
      const result = await users.users.signin(req.body);
      if (result.message === 'login success') {
        const token = jwt.sign({ id: result.id }, secretKey.key);
        res.json(token);
      } else {
        res.send(result.message);
      }
    },
    signup: async (req, res) => {
      const result = await users.users.signup(req.body);
      res.send(result);
    },
    signout: async (req, res) => {
      try {
        const token = req.get('accessToken');
        if (token) {
          res.send('exist token');
        } else {
          res.send('invalid token');
        }
      } catch (err) {
        res.send(err);
      }
    },
    secession: async (req, res) => {
      try {
        const token = req.get('accessToken');
        if (typeof token !== 'undefined') {
          const decoded = jwt.verify(JSON.parse(token), secretKey.key);
          const result = await users.users.secession(decoded);
          res.send(result);
        } else {
          res.sendStatus(403);
        }
      } catch (err) {
        res.send(err);
      }
    },
    info: async (req, res) => {
      try {
        const token = req.get('accessToken');
        if (token) {
          const decoded = jwt.verify(JSON.parse(token), secretKey.key);
          const result = await users.users.info(decoded);
          const year = result.createdAt.getFullYear();
          const month = result.createdAt.getMonth() + 1;
          const date = result.createdAt.getDate();
          const infoData = {
            name: result.name,
            email: result.email,
            age: result.age,
            gender: result.gender,
            createdAt: `${year}/${month}/${date}`,
          };
          res.send(JSON.stringify(infoData));
        } else {
          res.sendStatus(403);
        }
      } catch (err) {
        res.send(err);
      }
    },
    isDuplicate: async (req, res) => {
      // console.log(req.params);
      const result = await users.users.isDuplicate(req.params);
      res.send(result);
    },
  },

};
