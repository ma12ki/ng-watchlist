import { db } from '../../../db';

const collections = {
  get show() {
    return db.collection('show');
  },
  get episode() {
    return db.collection('episode');
  },
  get userShow() {
    return db.collection('userShow');
  },
  get userEpisode() {
    return db.collection('userEpisode');
  },
};

export { collections };
