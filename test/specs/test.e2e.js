const expect = require('chai').expect;

const AdminDashboardPage = require('../modules/admin-dashboard/pages/AdminDashboardPage');
const LoginActions = require('../modules/login/actions/LoginActions');

const BaseTest = require('../global/BaseTest')

describe('Admin Dashboard Tests', () => {

  // Before running the tests, open the application and log in as admin
  beforeEach(async () => {
    // Retrieve the BASE_URL from .env
    const baseUrl = process.env.BASE_URL;

    // Open the browser URL
    await browser.url(baseUrl);

    // Delete cookies before starting the test
    await browser.deleteAllCookies();

    // Perform any setup actions if needed
    await LoginActions.loginAsAdmin();
  });

  // After all tests, perform any necessary cleanup
  afterEach(async () => {
    // Perform any cleanup actions if needed
    await AdminDashboardPage.logout();
  });

  it('should open dashboard page', async () => {
    const PAGE_URL = await BaseTest.getCurrentURL();
    // Use assertions with Chai here if needed
    // For example:
    await expect(PAGE_URL).to.include('inventory');
  });

  // Add other test cases for Admin Dashboard functionality
});
