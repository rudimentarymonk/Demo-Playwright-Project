import {test, expect} from '@playwright/test' //if you use
test ('static visuals', async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    //initial screenshot taken for comparison is baseline screenshot
    //to take baseline screenshot use --update-snapshots in terminal after execution command
    await page.waitForLoadState('networkidle') // for waiting till the page is in idle state
    await expect(page).toHaveScreenshot('saucedemo.png', {
        threshold:0.2   //threshold: amount of colour difference approved 0.1-10%, 0.2-20% etc
    })
})