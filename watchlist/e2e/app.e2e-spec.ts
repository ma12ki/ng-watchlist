import { WatchlistPage } from './app.po';

describe('watchlist App', () => {
  let page: WatchlistPage;

  beforeEach(() => {
    page = new WatchlistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
