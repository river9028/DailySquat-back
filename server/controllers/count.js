const jwt = require('jsonwebtoken');
const count = require('../models/count');
const secretKey = require('../config/jwt');

module.exports = {
  count: {
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
    getTotalCount: async (req, res) => {
      const token = req.get('accessToken');
      if (token) {
        const decoded = jwt.verify(JSON.parse(token), secretKey.key);
        const idData = {
          userId: decoded.id,
          categoryId: req.params.categoryId,
        };
        const result = await count.count.get(idData);
        console.log('받아온 값! ', result);
        if (result !== '0') {
          res.send(JSON.stringify({ totalCount: result }));
        } else {
          res.send(JSON.stringify({ totalCount: '0' }));
        }
      }
    },
    // 최근 카운트
    getRecentCount: async (req, res) => {
      const token = req.get('accessToken');
      if (token) {
        const decoded = jwt.verify(JSON.parse(token), secretKey.key);
        const idData = {
          userId: decoded.id,
          categoryId: req.params.categoryId,
        };
        const result = await count.count.recentGet(idData);
        res.send(JSON.stringify(result.pop()));
      }
    },
  },
};
