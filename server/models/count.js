const db = require('../db');

const Count = db.sequelize.define('count', {
  user_id: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  category_id: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  count: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
},
{
  freezeTableName: true,
  tableName: 'count',
});

module.exports = {
  count: {
    insertCount(data) {
      return Count.sync({force: true})
        .then(() => {
          Count.create({
            user_id: data.userId,
            category_id: data.categoryId,
            count: data.count,
          });
        });
    },
  },
};
