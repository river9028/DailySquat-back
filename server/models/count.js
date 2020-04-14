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
          console.log(counts);
          let result;
          if (counts.length !== 0) {
            const total = counts.map((acc) => acc.dataValues.count)
              .reduce((acc, curr) => Number(acc) + Number(curr));
            result = total;
          } else {
            result = '0';
          }
          return result;
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
