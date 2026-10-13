import {test} from '@playwright/test'
test('events', async({page})=>{
    await page.goto('https://selenium.qabible.in/')
    const othersButton = page.locator('#others')
    await othersButton.hover()

})