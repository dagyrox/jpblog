import { JpblogPage } from './app.po';

describe('jpblog App', () => {
  let page: JpblogPage;

  beforeEach(() => {
    page = new JpblogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
