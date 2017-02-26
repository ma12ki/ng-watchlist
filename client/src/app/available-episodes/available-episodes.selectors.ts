const base = (state) => state.availableEpisodes;

const items = (state) => base(state).items;
const isFetching = (state) => base(state).isFetching;
const error = (state) => base(state).error;

export default {
  items,
  isFetching,
  error,
};

export {
  items,
  isFetching,
  error,
};
