const db = require('../db/models/index.js');

module.exports = {
  users: {
    // 회원 가입
    signup(body) {
      let result;
      return db.users.findOrCreate({
        where: { email: body.email },
        defaults: {
          name: body.name,
          email: body.email,
          password: body.password,
          age: body.age,
          gender: body.gender,
        },
      }).spread((user, created) => {
        if (created) {
          result = 'signup success';
        } else {
          result = 'exist email';
        }
        return result;
      })
        .catch((err) => err);
    },

    // 로그인
    signin(body) {
      return db.users.findOne({ where: { email: body.email, password: body.password, status: 'N' } })
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
      return db.users.findOne({ where: { id: body.id, status: 'N' } })
        .then((data) => {
          let result;
          if (data) {
            db.users.update({ status: 'Y' }, { where: { id: body.id } });
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
    isDuplicate(params) {
      return db.users.findOne({ where: { email: params.email } })
        .then((data) => !!data);
    },
  },
};
