// AdminDashboardPage.js
const BasePage = require('../../../global/BasePage');

class AdminDashboardPage extends BasePage {
  
  // Define page-specific elements and actions
  get btnMenu() {
    return $('#react-burger-menu-btn');
  }

  get logoutLink() {
    return $('#logout_sidebar_link');
  }

  // Define the logout method
  async logout() {
    await this.waitForElementToBeClickable(this.btnMenu);
    await this.btnMenu.click();

    await this.waitForElementToBeClickable(this.logoutLink);
    await this.logoutLink.click();
  }

  // Add other page-specific elements and actions

}

module.exports = new AdminDashboardPage();
