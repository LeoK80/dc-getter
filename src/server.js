import express from 'express';
import cors from 'cors';
import { getUserInfo } from './service/discourse.js';

const app = express();
app.use(cors());

app.get('/', function (req, res, next) {
  res.send('Hi, there\'s nothing here. Thanks for visiting though!');
});

app.get('/user-info', function (req, res, next) {
  console.log(Date.now().toString(), 'incoming request: ', req.path);
  getUserInfo()
    .then(userinfo => {
      console.log(Date.now().toString(), 'response: ', userinfo);
      res.statusCode = 200;
      res.json(userinfo);
    }
    )
    .catch(error => {
      res.statusCode = 500;
      res.send(`error occurred: ${error.message}`);
    });
});

app.listen(process.env.PORT);