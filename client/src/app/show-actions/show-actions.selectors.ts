const base = (state) => state.showActions;

const showIsFetching = (state, showId) => {
  const baseState = base(state);
  const show = baseState[showId];
  if (!show) {
    return false;
  }
  if (show.isFetching) {
    return true;
  }

  const episodes = show.episodes;
  const episodeIds = Object.keys(episodes);

  const isFetching = episodeIds.reduce((fetching, episodeId) => {
    return fetching || !!episodes[episodeId].isFetching;
  }, false);
};

const showError = (state, showId) => {
  const baseState = base(state);
  const show = baseState[showId];
  if (!show) {
    return null;
  }
  return show.error;
};

const episodeIsFetching = (state, showId, episodeId) => {
  const baseState = base(state);
  const show = baseState[showId];
  if (!show) {
    return false;
  }
  if (show.isFetching) {
    return true;
  }

  const episodes = show.episodes;
  if (!episodes) {
    return false;
  }
  const episode = episodes[episodeId];
  if (!episode) {
    return false;
  }
  return episode.isFetching;
};

const episodeError = (state, showId, episodeId) => {
  const baseState = base(state);
  const show = baseState[showId];
  if (!show) {
    return null;
  }

  const episodes = show.episodes;
  if (!episodes) {
    return null;
  }
  const episode = episodes[episodeId];
  if (!episode) {
    return null;
  }
  return episode.error;
};

export default {
  showIsFetching,
  showError,
  episodeIsFetching,
  episodeError,
};

export {
  showIsFetching,
  showError,
  episodeIsFetching,
  episodeError,
};
