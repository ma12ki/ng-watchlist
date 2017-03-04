interface Show {
  _id: string;
  name: string;
  premiereDate: Date;
  category: string;
  frequency: string;
};

interface Episode {
  _id: string;
  showId: string;
  season: number;
  episode: number;
  premiereDate: Date;
};

interface UserShows {
  _id: string;
  userId: string;
  showId: string;
  tracked: boolean;
};

interface UserEpisodes {
  _id: string;
  userId: string;
  showId: string;
  episodeId: string;
};
