const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const cookieparser = require('cookie-parser');
const session = require('express-session');
const helmet = require('helmet');
const compression = require('compression');

const app = express();

// cors 적용
app.use(cors());

// bodyparser 적용
app.use(bodyparser());

// session 적용
app.use(session());

// cookieparser 적용
app.use(cookieparser());

// helmet 적용
app.use(helmet());

// compression 적용
app.use(compression());


app.get('/', (req, res) => {
  res.send('ok!!!!');
});

app.listen(3000);
