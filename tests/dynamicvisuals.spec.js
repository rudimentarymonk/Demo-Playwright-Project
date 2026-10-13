import {expect, test} from '@playwright/test'
test ('Dynamic visuals test', async({page})=>{
    await page.goto('https://selenium.qabible.in/index.php')
    //await page.waitForLoadState('networkidle')
    //to hide banners and sliders while taking screenshot
    await page.locator('.carousel').evaluate((element)=>{
        element.style.display='none'
    })
            await expect(page).toHaveScreenshot('Obsqura.png', {
                threshold:0.2
            })


})