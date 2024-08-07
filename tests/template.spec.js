import { test, expect } from '@playwright/test';

const password = process.env.PASSWORD;

// The beforeAll method, which is present in the test object, is the method that will be executed by default before all the tests within a file.
test.beforeAll(async ({ playwright }) => {
    test.skip(
      !!process.env.PROD,
      'Test intentionally skipped in production due to data dependency.'
    );
    // start a server
    // create a db connection
    // reuse a sign in state
});

// This is going to be executed by default before each method.
test.beforeEach(async ({ page }, testInfo) => {
    console.log(`Running ${testInfo.title}`);
    // open a URL
    // clean up the DB
    // create a page object
    // dismiss a modal
    // load params
});

test.afterAll(async ({ page }, testInfo) => {
    console.log('Test file completed.');
    // close a DB connection
});

test.afterEach( async ({ page }, testInfo) => {
    console.log(`Finished ${testInfo.title} with status ${testInfo.status}`);

    if (testInfo.status !== testInfo.expectedStatus)
        console.log(`Did not run as expected, ended up at ${page.url()}`);
    // clean up all the data we created for this test through API calls
});

// all the above can be considered as "Arrange" methods

test.describe.skip('Test Case', () => {
    // Inside the describe, we have the test scenarios.
    test('Test Scenario One', async ({ page }) => {
        await test.step('Step One', async () => {
            // for each test scenario, you could just do test.only or test.skip.
            // ...
        });

        await test.step('Step Two', async () => {
            // ...
        });

        // ...
    });
});

// an option: skip, the test will skip all the tests within this test case
// an option: only, and it would only run the tests that are inside this describe.
// describe is optional as well, and you can have multiple describes within one test file. It is better to split the file in case we have multiple describes.
