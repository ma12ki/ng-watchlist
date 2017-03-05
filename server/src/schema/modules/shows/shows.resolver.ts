import shows from './mock-data/shows';

export default {
  shows() {
    return shows
      .map((show: any) => {
        show.episodes = [
          { _id: 'xDmAO'}
        ];
        return show;
      });
  },
};
