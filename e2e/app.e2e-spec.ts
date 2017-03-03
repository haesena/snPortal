import { SnPortalPage } from './app.po';

describe('sn-portal App', () => {
  let page: SnPortalPage;

  beforeEach(() => {
    page = new SnPortalPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
