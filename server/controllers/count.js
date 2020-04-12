const jwt = require('jsonwebtoken');
const count = require('../models/count');
const secretKey = require('../config/jwt');

module.exports = {
  count: {
    // 유저 아이디, 운동 아이디, 카운트 횟수
    addCount: async (req, res) => {
      const token = req.get('accessToken');
      if (token) {
        const decoded = jwt.verify(JSON.parse(token), secretKey.key);
        const countData = {
          userId: decoded.id,
          categoryId: req.body.categoryId,
          count: req.body.count,
        };
        const result = await count.count.save(countData);
        res.send(result);
      }
    },
    // 1.헤더에 토큰, 2.바디에 운동 아이디를 담아 요청해야됨
    getCount: async (req, res) => {
      const token = req.get('accessToken');
      // 토큰 확인
      if (token) {
        const decoded = jwt.verify(JSON.parse(token), secretKey.key);
        const idData = {
          userId: decoded.id,
          categoryId: req.body.categoryId,
        };
        const result = await count.count.get(idData);
        res.send(JSON.stringify({ totalCount: result }));
      }
    },
  },
};
