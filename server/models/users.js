const crypto = require('crypto');
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
          const buff = Buffer.alloc(16, user.dataValues.id);
          const salt = crypto.randomFillSync(buff).toString('hex');
          const pwd = crypto.scryptSync(user.dataValues.password, salt, 64).toString('hex');
          console.log('회원가입할 때 salt는 : ', salt);
          console.log('회원가입할 때 pwd는 : ', pwd);
          db.users.update({ st: salt, password: pwd }, { where: { email: user.dataValues.email } })
            .catch((err) => err);
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
      return db.users.findOne({ where: { email: body.email, status: 'N' } })
        .then((data) => {
          console.log('탈퇴했을 때??', data);
          let result;
          const salt = data.dataValues.st;
          const pwd = crypto.scryptSync(body.password, salt, 64).toString('hex');
          console.log('로그인 할 때 암호화된 pwd는 : ', pwd);
          if (data.dataValues.password === pwd) {
            result = { message: 'login success', id: JSON.stringify(data.id) };
          } else {
            result = { message: 'login fail', id: null };
          }
          return result;
        })
        .catch((err) => { console.log('탈퇴했을 때??', err); return err; });
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
    info(token) {
      return db.users.findOne({ where: { id: token.id, status: 'N' } })
        .then((data) => {
          let result;
          if (data) {
            result = data.dataValues;
          } else {
            result = 'fail';
          }
          return result;
        })
        .catch((err) => err);
    },
    isDuplicate(params) {
      return db.users.findOne({ where: { email: params.email } })
        .then((data) => !!data);
    },
  },
};
