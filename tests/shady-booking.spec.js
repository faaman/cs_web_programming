// @ts-check
const { test, expect } = require('@playwright/test');
const exp = require('constants');

test.only('doing some actions on demo website', async ({ page }) => {
  await page.goto('https://automationintesting.online/');

  await page.getByRole('link', {name: 'home page'}).click();
  await page.getByText('home page', {exact:true}).click();

  expect(page.getByText('Welcome to Shady Meadows')).toBeVisible;
  expect(page.getByText('Book this room')).toBeVisible;
  await page.getByRole('button', {name: 'Book this room'}).click();
  expect(page.getByText('Today')).toBeVisible;
  expect(page.getByText('Firstname')).toBeVisible;
  await page.getByLabel('Firstname').fill('Jane');
  //commenting out the below to test for error messages:
  //await expect(page.getByText('Lastname')).toBeVisible;
  //await page.getByLabel('Lastname').fill('Austen');
  expect(page.getByText('Email')).toBeVisible;
  await page.locator('xpath=/html/body/div/div[2]/div/div[4]/div/div[2]/div[3]/div[3]/input').fill('janea21@newmails.com');

  expect(page.getByText('Phone')).toBeVisible;
  await page.locator('xpath=/html/body/div/div[2]/div/div[4]/div/div[2]/div[3]/div[4]/input').fill('1234567');

  await page.getByRole('button', {name: 'Book'}).click();

  await expect(page.getByText('Lastname should not be blank'), 'Lastname should not be blank').toBeVisible();
  await expect(page.getByText('size must be between 11 and 21'), 'size must be between 11 and 21').toBeVisible();
  expect(page.getByText('must not be null')).toBeVisible;

  await page.screenshot({ path: 'screenshot_shady.png', fullPage: true });
});