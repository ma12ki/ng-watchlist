import { collections } from './collections';
import shows from './mock-data/shows';

export default {
  shows() {
    return collections.show.find();

    // return shows
    //   .map(function(show: any) {
    //     show.episodes = [
    //       { _id: 'xDmAO'}
    //     ];
    //     return show;
    //   });
  },
};
