import { Angular2AnimateCssPage } from './app.po';

describe('angular2-animate-css App', function() {
  let page: Angular2AnimateCssPage;

  beforeEach(() => {
    page = new Angular2AnimateCssPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
