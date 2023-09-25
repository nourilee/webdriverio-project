// BaseTest.js

const SHORT_TIMEOUT = 3000; // Constant timeout in milliseconds


class BaseTest {

  // Get the title of the current page
  async getPageTitle() {
    await browser.pause(SHORT_TIMEOUT);
    const title = await browser.getTitle();
    return title;
  }

  // Get the URL of the current page
  async getCurrentURL() {
    await browser.pause(SHORT_TIMEOUT);
    const url = await browser.getUrl();
    return url;
  }

  


  // Add other common test functions here
}

module.exports = new BaseTest();
