const db = require('../db/models');

module.exports = {
  count: {
    save(data) {
      return db.count.create({
        userId: data.userId,
        categoryId: data.categoryId,
        count: data.count,
      })
        .then(() => 'saved')
        .catch((err) => err);
    },
    get(data) {
      return db.count.findAll({
        attributes: ['count'],
        where: {
          userId: data.userId,
          categoryId: data.categoryId,
        },
      })
        .then((counts) => {
          if (!counts) {
            const total = counts.map((acc) => acc.dataValues.count)
              .reduce((acc, curr) => Number(acc) + Number(curr));
            return total;
          }
          return '0';
        })
        .catch((err) => err);
    },
    recentGet(data) {
      return db.count.findAll({
        attributes: ['count'],
        where: {
          userId: data.userId,
          categoryId: data.categoryId,
        },
      })
        .then((datas) => datas);
    },
  },
};
