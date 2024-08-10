# Notes on the code
This is code from the learning from the CS50 Web Programming, and TAU's Introduction to Playwright courses.

## Playwright
- AAA pattern: This is a pattern that suggests structuring our code in sections.
    - The first section is the Arrange section. The second is Act, and the third is Assert.
- Ideally, all the variables should come at the very beginning of a file or a method. 
- A test.describe represents the test case. Inside of describe, you have test scenarios. Inside a test scenario, you can have steps and commands after them, or you can have just a simple test scenario without steps. You could use .only and .skip to run one specific test scenario. All the way back to the top, we do have our variables at the beginning, beforeAll, beforeEach, afterAll, and afterEach.
- POM is a representation of a page or a group of elements in a page.
- Unlike toHaveText, toContainText, when specified with the partial text, it will assert and confirm the element with its presence. You don't need to provide the exact text like toHaveText.

## Javascript
The old versions of JavaScript had no import, include, or require, so many different approaches to this problem have been developed. To enable "ESM" (vs. Node.js's previous CommonJS-style module system you either use "type": "module" in package.json or give the files the extension .mjs. For e.g. const { PlaywrightDevPage } = require('../pages/playwright-dev-page.js') may not work, in that case add "type": "module" in your package.json file.
 // "type": "module",