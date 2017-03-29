import dotenv from 'dotenv';

dotenv.config({
  path: '../../.env',
});

const config = {
  get production(): boolean {
    return process.env.NODE_ENV === 'production';
  },
  get mongoUri(): string {
    return process.env.WL_MONGO_URI;
  },
  get port(): number {
    return process.env.WL_PORT;
  },
};

export { config };
