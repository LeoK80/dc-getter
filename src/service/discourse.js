import { PROTOCOL, API_PATH_USERS_LIST, API_PATH_USER, API_RESOURCE_EXTENSION } from '../constants.js';
import got from 'got';
import User from '../models/User.js';

const host = process.env.HOST;
const key = process.env.API_KEY;
const user = process.env.API_USERNAME;
const protocol = PROTOCOL;
const userListPath = API_PATH_USERS_LIST;
const userPath = API_PATH_USER;
const fileExt = API_RESOURCE_EXTENSION;

const options = {
  headers: {
    'Api-Key': key,
    'Api-Username': user,
    Accept: 'application/json'
  }
}

const getUsernames = async () => {
  const url = protocol + host + userListPath;
  return getResponse(url)
    .then(result => {
      return result.map(user => {
        if (user.id >= 0) {
          return user.username;
        } else {
          return undefined;
        }
      }).filter(user => {
        if (user !== undefined) {
          return user;
        }
      });
    })
    .catch(error => {
      console.log(`Error getting usernames: ${error}`);
      return [];
    });
}

const getUser = async (userName) => {
  return new Promise((resolve, reject) => {
    const url = protocol + host + userPath + `/${userName}` + fileExt;
    getResponse(url)
      .then(response => {
        resolve(new User(response.user.id,
          response.user.username,
          response.user.user_fields['8'] || 'unknown',
          response.user.user_fields['9'] || 'unknown',
          response.user.user_fields['10'] || 'unknown',
          response.user.primary_group_name
        ));
      })
      .catch(error => {
        reject(error);
      });
  });
};

const getUserInfo = async () => {
  const userNames = await getUsernames();
  return Promise.all(userNames.map(username => getUser(username)))
    .then(result => {
      result.sort(User.comparator);
      return result;
    })
    .catch(error => {
      console.log(error);
      return 'get user info error';
    });
}

const getResponse = async (url) => {
  return got(url, options)
    .then(response => {
      try {
        return JSON.parse(response.body);
      } catch (error) {
        return response.body;
      }
    })
    .catch(error => {
      if (error.response) {
        return error.response.body;
      } else {
        console.log(`GetResponse Error: ${error.message}`);
        return [];
      }
    });
};

export { getUserInfo };
