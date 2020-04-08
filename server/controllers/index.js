const users = require('../models/users');

module.exports = {
  users: {
    signin: (req, res) => {
      res.send(req.body);
    },
    signup: (/* req, res */) => { },
    signout: (/* req, res */) => { },
    secession: (/* req, res */) => { },
    info: (/* req, res */) => { },
  },

};
