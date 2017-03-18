import { base as showsBase } from '../shows.selectors';

const base = (state) => showsBase(state).upcomingEpisodes;

const items = (state) => base(state).items;
const isFetching = (state) => base(state).isFetching;
const error = (state) => base(state).error;

export {
  items,
  isFetching,
  error,
};
