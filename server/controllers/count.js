const count = require('../models/count');

module.exports = {
  count: {
    // 토큰, 유저 아이디, 운동 아이디, 카운트 횟수
    saveCount: async (req, res) => {
      const result = await count.count.insertCount(req.body);
      res.send(result);
    },
    getCount: async (req, res) => {

    },
  },
};
