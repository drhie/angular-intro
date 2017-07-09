import { AngularIntroPage } from './app.po';

describe('angular-intro App', () => {
  let page: AngularIntroPage;

  beforeEach(() => {
    page = new AngularIntroPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
