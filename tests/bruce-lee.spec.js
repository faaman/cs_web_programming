// A program for Mr. T
// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test('doing some actions on demo website', async ({ page }) => {
  await page.goto('https://www.google.com/');

  expect(page.getByText('About')).toBeVisible;
  await page.getByTitle('Search').fill('Bruce Lee');
  await page.getByRole('button', {name: 'Google Search'}).click();
  
  await expect(page.getByText('The Legend of Bruce Lee'), 'The Legend of Bruce Lee').toBeVisible();

  await page.screenshot({ path: 'screenshot_bruce.png', fullPage: true });
});