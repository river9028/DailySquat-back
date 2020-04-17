const router = require('express').Router();
const controller = require('../controllers/users');

router.post('/signin', controller.users.signin);

router.post('/signup', controller.users.signup);

router.get('/signout', controller.users.signout);

router.get('/secession', controller.users.secession);

router.get('/info', controller.users.info);

router.get('/isDuplicate/:email', controller.users.isDuplicate);

module.exports = router;
