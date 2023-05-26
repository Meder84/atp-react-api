const BAD_REQUEST = 400;
const NOT_FOUND = 404;
const SERVER_ERROR = 500;
const SALT_ROUNDS = 10;
const regexLink = /(http|https):\/\/([a-zA-Z0-9]([a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z]{2,}/;
const {
  MONGO_DATA_BASE,
  NODE_ENV,
  JWT_SECRET,
  PORT = 3001,
} = process.env;

const JWT = NODE_ENV === 'production' ? JWT_SECRET : 'jwt_secret';
const DATA_BASE = NODE_ENV === 'production' ? MONGO_DATA_BASE : 'mongodb://localhost:27017/atp';

module.exports = {
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
  regexLink,
  SALT_ROUNDS,
  JWT,
  DATA_BASE,
  PORT,
};
