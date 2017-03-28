export class VelocityTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('velocity-test-app h1')).getText();
  }
}
