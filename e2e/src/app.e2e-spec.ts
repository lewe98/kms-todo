import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should ', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Liste nach Kategorie filtern');
  });
});
