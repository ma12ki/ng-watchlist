import mockShows from './mock-shows';

export default {
  shows() {
    console.log('shows resolver');
    return mockShows;
  }
};
