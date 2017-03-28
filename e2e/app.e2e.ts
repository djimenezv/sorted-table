import { VelocityTestPage } from './app.po';

describe('velocity-test App', function() {
  let page: VelocityTestPage;

  beforeEach(() => {
    page = new VelocityTestPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('velocity-test works!');
  });
});
