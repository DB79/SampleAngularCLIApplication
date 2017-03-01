import { SimpleApplicationPage } from './app.po';

describe('simple-application App', function() {
  let page: SimpleApplicationPage;

  beforeEach(() => {
    page = new SimpleApplicationPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
