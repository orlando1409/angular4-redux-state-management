import { ReduxLayoutTutorialAppPage } from './app.po';

describe('redux-layout-tutorial-app App', () => {
  let page: ReduxLayoutTutorialAppPage;

  beforeEach(() => {
    page = new ReduxLayoutTutorialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
