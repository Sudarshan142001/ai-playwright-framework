import { test, expect } from '@playwright/test';

test.describe('SauceDemo Login', () => {
  test('Successful login', async ({ page }) => {
    await test.step('Open SauceDemo login page', async () => {
      await page.goto('https://www.saucedemo.com');
    });

    await test.step('Enter username', async () => {
      await page.fill('#user-name', 'standard_user');
    });

    await test.step('Enter password', async () => {
      await page.fill('#password', 'secret_sauce');
    });

    await test.step('Click Login button', async () => {
      await page.click('#login-button');
    });

    await test.step('Should see Products page', async () => {
      const title = await page.locator('span.title');
      await expect(title).toHaveText('Products');
    });
  });
});
