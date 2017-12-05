import { Ng2KeycloakSecPage } from './app.po';

describe('ng2-keycloak-sec App', function() {
  let page: Ng2KeycloakSecPage;

  beforeEach(() => {
    page = new Ng2KeycloakSecPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
