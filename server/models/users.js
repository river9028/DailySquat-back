const db = require('../db/models/index.js');

module.exports = {
  users: {
    // 회원 가입
    signup(body) {
      return db.sequelize.sync()
        // 중복된 이메일이 에러 처리가 돼서 db에 저장은 안되는데, 그 다음 데이터가 저장될 때 id가 에러 처리된 만큼 띄어져서 늘어남.
        .then(() => db.users.create({
          name: body.name,
          email: body.email,
          password: body.password,
          age: body.age,
          gender: body.gender,
        }))
        .then(() => 'success signup')
        .catch((err) => err);
    },

    // 로그인
    signin(body) {
      return db.sequelize.sync()
        // 자체 구현시 필요한 패스워드 추가
        .then(() => db.users.findOne({ where: { email: body.email, password: body.password, status: 'N' } }))
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
      return db.sequelize.sync()
        .then(() => db.users.findOne({ where: { id: body.id, status: 'N' } }))
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
  },
};
