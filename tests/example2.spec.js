import { test, expect, Page } from '@playwright/test';

//use the AAA pattern to help us organize the test

const URL = 'https://automationintesting.online/';

test.beforeEach(async ({page}) => {
    await page.goto(URL);
});

async function clickGetStarted(Page) {
    await Page.getByRole('link', { name: 'home page' }).click();
  }

test('has text', async ({ page }) => {
    expect(page.getByText('Welcome to Shady Meadows')).toBeVisible;
    //I don't think the page has a title, or find out how to extract the title
    //await expect(page).toHaveTitle(/Welcome to Restful Booker Platform/);
});
  
test('test some starting link', async ({ page }) => {
    await page.getByRole('link', { name: 'restful-booker-platform source', exact: true }).click();
    expect(page.getByText('A platform of web services that forms a Bed and Breakfast booking system.')).toBeVisible;
});
  
test.describe.only('bed n breakfast test suite', () => {

    test('check Shady page', async ({ page }) => {
        await page.goto(URL);
    
        await clickGetStarted(page);
    
        //this is only useful for a drop-down
        //await page.getByRole('button', { name: 'Book this room' }).hover();
    
        await page.getByRole('button', {name: 'Book this room'}).nth(0).click();
    
        expect(page.getByText('Today')).toBeVisible;
        expect(page.getByText('Firstname')).toBeVisible;
        await page.getByLabel('Firstname').fill('Jane');
        await expect(page.getByText('Lastname')).toBeVisible;
        await page.getByLabel('Lastname').fill('Austen');
        
        expect(page.getByText('Email')).toBeVisible;
        //don't use an xpath, this is discouraged because it's not user-visible, and it's fragile, since if a single div changes in the chain, the path will no longer be valid.
        await page.locator('xpath=/html/body/div/div[2]/div/div[4]/div/div[2]/div[3]/div[3]/input').fill('janea21@newmails.com');
        await page.getByLabel('Email').nth(0).fill('janea22@newmails.com');
        await page.getByLabel('Email').nth(1).fill('austenj22@newmails.com'); //this serves no purpose in the flow - just to illustrate the 'nth' function
    
        expect(page.getByText('Phone')).toBeVisible;
        //await page.locator('xpath=/html/body/div/div[2]/div/div[4]/div/div[2]/div[3]/div[4]/input').fill('1234567');
        await page.getByLabel('Phone').nth(0).fill('1234567');
      
        await page.getByRole('button', {name: 'Book'}).click();
      
        await expect(page.getByText('size must be between 11 and 21'), 'size must be between 11 and 21').toBeVisible();
        expect(page.getByText('must not be null')).toBeVisible;
    
        await page.screenshot({ path: 'screenshot_shady_ofexample2.png', fullPage: true });
    
    });
    
    test('check MW page', async ({ page }) => {
        expect(page.getByText('restful-booker-platform v')).toBeVisible;
        await page.getByText('Mark Winteringham', { exact: true }).click();
        await expect(page).toHaveURL('https://www.mwtestconsultancy.co.uk/');
        await expect(page.getByText('Jane Austen', { exact: true })).not.toBeVisible();
        await page.getByText('Books', { exact: true }).click();
        const javaDescription = `I am a published author focusing on topics that span quality, strategy, technical testing and the future of testing. Read on to learn more about my published work.`;
        await expect(page.getByText(javaDescription)).toBeVisible();
        
        await page.screenshot({ path: 'screenshot_MWpage_ofexample2.png', fullPage: true });
      
        // this is for a drop down selection at the top of a page, we don't have it at our AUT:
        // await page.getByRole('navigation', { name: 'Main' }).getByText('Java').click(); // in case the locator above doesn't work, you can use this line. Remove the line above and use this one instead.
    
    });
})