import { AngularBasicAppPage } from './app.po';

describe('angular-basic-app App', () => {
  let page: AngularBasicAppPage;

  beforeEach(() => {
    page = new AngularBasicAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
