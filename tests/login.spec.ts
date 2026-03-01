import { test, expect } from '@playwright/test';

test.describe('Create Lead Suite', () => {

  test('Create a new lead successfully', async ({ page }) => {

    await test.step('Perform login', async () => {
      await page.goto('http://leaftaps.com/opentaps/control/main');

      await page.locator('#username').fill('demosalesmanager');
      await page.locator('#password').fill('crmsfa');
      await page.locator('.decorativeSubmit').click();

      await expect(
        page.getByRole('heading', { name: /Welcome/ })
      ).toBeVisible();
    });

    await test.step('Navigate to CRM/SFA', async () => {
      await page.getByRole('link', { name: 'CRM/SFA' }).click();

      await expect(
        page.getByRole('link', { name: 'Create Lead' })
      ).toBeVisible();
    });

    await test.step('Open Create Lead page', async () => {
      await page.getByRole('link', { name: 'Create Lead' }).click();

      await expect(
        page.locator('#createLeadForm_companyName')
      ).toBeVisible();
    });

    await test.step('Fill lead details', async () => {
      await page.locator('#createLeadForm_companyName').fill('TestCompany');
      await page.locator('#createLeadForm_firstName').fill('Sudarshan');
      await page.locator('#createLeadForm_lastName').fill('B');
    });

    await test.step('Submit the form', async () => {
      await page.locator('input[name="submitButton"]').click();
    });
await test.step('Verify lead creation', async () => {

  await expect(
    page.locator('#viewLead_companyName_sp')
  ).toBeVisible();

  await expect(
    page.locator('#viewLead_companyName_sp')
  ).toContainText('TestCompany');

});

  });

});