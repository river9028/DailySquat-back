const db = require('../db');

const Users = db.sequelize.define('users', {
  name: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  // 자체 구현시 필요한 패스워드 추가
  password: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  age: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  gender: {
    type: db.Sequelize.STRING,
    allowNull: false,
  },
  status: {
    type: db.Sequelize.STRING,
    allowNull: false,
    defaultValue: 'N',
  },
},
{
  freezeTableName: true,
  tableName: 'users',
});


module.exports = {
  users: {
    // 회원 가입
    signup(body) {
      return Users.sync()
        // findOrCreate 적용해서 수정하기
        .then(() => Users.findOne({ where: { email: body.email } }))
        .then((data) => {
          let result;
          if (!data) {
            Users.create({
              name: body.name,
              email: body.email,
              // 자체 구현시 필요한 패스워드 추가
              password: body.password,
              age: body.age,
              gender: body.gender,
            });
            result = 'success signup';
          } else {
            result = 'fail signup. exist email';
          }
          return result;
        })
        .catch((err) => err);
    },

    // 로그인
    signin(body) {
      return Users.sync()
        // .then(() => Users.findOne({ where: { email: body.email, status: 'N' } }))
        // 자체 구현시 필요한 패스워드 추가
        .then(() => Users.findOne({ where: { email: body.email, password: body.password, status: 'N' } }))
        .then((data) => {
          let result;
          if (data) {
            result = { message: 'login success', id: JSON.stringify(data.id) };
          } else {
            result = { message: 'login fail', id: null };
          }
          return result;
        })
        .catch((err) => err);
    },

    // 회원 탈퇴
    secession(body) {
      return Users.sync()
        .then(() => Users.findOne({ where: { id: body.id, status: 'N' } }))
        .then((data) => {
          let result;
          if (data) {
            Users.update({ status: 'Y' }, { where: { id: body.id } });
            result = 'success secession';
          } else {
            result = 'already secession';
          }
          return result;
        })
        .catch((err) => err);
    },

    // 회원 정보 보기
    info() {

    },
  },
};
