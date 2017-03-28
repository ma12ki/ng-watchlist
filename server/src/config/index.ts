import dotenv from 'dotenv';

dotenv.config({
  path: '../../.env',
});

const config = {
  get production() {
    return process.env.NODE_ENV === 'production';
  },
  get mongoUri() {
    return process.env.WL_MONGO_URI;
  },
  get port() {
    return process.env.WL_PORT;
  },
};

export { config };
