const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

const userRouter = require('./routes/users');

// cors 적용
app.use(cors());

// bodyparser 적용
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

// session 적용
app.use(session(
  {
    secret: '@YouknowYouknow',
    resave: false,
    saveUninitialized: true,
  },
));

// cookieparser 적용
app.use(cookieparser());

// helmet 적용
app.use(helmet());

// compression 적용
app.use(compression());

app.use('/users', userRouter);

app.get('/', (req, res) => {
  res.send('ok!!!!');
});

app.listen(3000);
