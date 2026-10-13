import {test, expect} from '@playwright/test'
test('alert handling in playwright', async({page})=>{
    await page.goto('https://selenium.qabible.in/javascript-alert.php')
    page.on('dialog',async dialog=>{
        expect(dialog.message()).toBe ('I am a Javascript alert box!') //use accept() for ok and dismiss( ) for cancel
        await dialog.accept()
    })

    const clickmebutton = page.locator("//button[@class='btn btn-success']")
    await clickmebutton.click()
})