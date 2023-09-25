// BasePage.js

class BasePage {

  // Wait for an element to exist
  async waitForElementToExist(element) {
    await element.waitForExist();
  }

  // Wait for an element to be displayed
  async waitForElementToBeClickable(element) {
    await element.waitForClickable();
  }

  // Wait for an element to be displayed
  async waitForElementDisplayed(element) {
    await element.waitForDisplayed();
  }

  // Get the text of an element with a constant timeout
  async getElementText(element) {
    this.waitForElementDisplayed(element);
    return element.getText();
  }

  // Get the value of an element's attribute with a constant timeout
  async getElementAttribute(element, attributeName) {
    this.waitForElementDisplayed(element);
    return element.getAttribute(attributeName);
  }

  // Refactored getCurrentURL function
  async getCurrentURL() {
    const currentURL = await browser.getUrl();

    // Wait until the URL changes from the current URL
    await browser.waitUntil(async () => {
      const newURL = await browser.getUrl();
      return newURL !== currentURL;
    }, {
      timeout: 10000, // Adjust the timeout as needed
      timeoutMsg: 'URL did not change within the specified time.',
    });

    return browser.getUrl(); // Return the updated URL
  }

  // ...
}

module.exports = BasePage;