import{test,expect} from '@playwright/test'
test('browser Context playwrightrest',async({browser})=>{
    const context= await browser.newContext()
    const page = await context.newPage()
    await page.goto('https://www.amazon.in')
})
// test - used to create test case
//expect - used to validate
//@playwrighttest - is the official playwright test number package used to write, execute and validate
//test - used to define as test case
//async - is java script keyword used for asynchronisation
//browse is a fixture provides access to browser to run test step
//await to make code wait until operation completes
//new context to create a new browse context
//new page: function to open new tab
//goto used for launching url
//browser starts; creates session=> creates a tab in it=> url launches 