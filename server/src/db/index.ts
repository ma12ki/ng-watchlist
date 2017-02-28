import { Db, MongoClient } from 'mongodb';

let db: Db = null;

const connect: () => Promise<void> = () => {
  return MongoClient.connect('mongodb://localhost:27017/watchlist-dev')
    .then((database) => {
      console.log('Connected to db.');
      db = database;
    });
};

export {
  connect,
  db
};
