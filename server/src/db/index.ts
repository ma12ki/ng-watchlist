import { connect as mongooseConnect } from 'mongoose';

const connect = () => {
  console.log('Attempting to connect to db...');
  return mongooseConnect('mongodb://localhost:27017/watchlist-dev')
    .then(() => {
      console.log('Successfully connected to db');
    });
};


export {
  connect
};
