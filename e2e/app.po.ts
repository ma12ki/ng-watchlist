import { browser, element, by } from 'protractor';

export class ZooPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('wl-root h1')).getText();
  }
}
