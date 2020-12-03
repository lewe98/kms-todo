import { AppPage } from './app.po';

describe('new App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should be blank', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toContain('Liste nach Kategorie filtern\n' +
        '      Filter wählen...\n' +
        '      ToDos\n' +
        '      Hier klicken, um ToDo hinzuzufügen.');
  });
});
