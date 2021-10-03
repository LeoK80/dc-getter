import express from 'express';
import cors from 'cors';
import { getUserInfo } from './service/discourse.js';
import { getCurrentTime, getCurrentIsoTime, getDuration } from './utils/timer.js';

const app = express();
app.use(cors());

app.get('/', function (req, res, next) {
  res.send('Hi, there\'s nothing here. Thanks for visiting though!');
});

app.get('/user-info', function (req, res, next) {
  const start = getCurrentTime();
  console.log(getCurrentIsoTime(), 'incoming request: ', req.path);
  getUserInfo()
    .then(userinfo => {
      console.log(getCurrentIsoTime(), 'response: ', userinfo);
      res.statusCode = 200;
      res.json(userinfo);
      const end = getCurrentTime();
      console.log(getCurrentIsoTime(), `response time /user-info: ${getDuration(start, end)}`);
    }
    )
    .catch(error => {
      res.statusCode = 500;
      res.send(`error occurred: ${error.message}`);
    });
});

app.listen(process.env.PORT);