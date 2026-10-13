import{test} from '@playwright/test'
test ('multiple window', async({page,context})=>{                 //context  represents an isolated page
    await page.goto('https://demo.guru99.com/popup.php')
    const window = context.waitForEvent('page')
    const clickHereButton = page.locator("//a[text()='Click Here']")
    await clickHereButton.click()
    
    const newWindow = await window
    await newWindow.waitForLoadState()
    const emailid = newWindow.locator("//input[@name='emailid']")
    await emailid.fill('test@obsqura.com')
    const submitButton = newWindow.locator("//input[@type='submit']")
    await submitButton.click()


})