import {test} from '@playwright/test'
test('handling dropdown in playwright', async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const dropDown = page.locator("#dropdowm-menu-1")
    //await dropDown.selectOption({index:2}) // index
    //await dropDown.selectOption({value:'c#'})   //selection with value attribute
    await dropDown.selectOption({label:'SQL'})
})

test.only  ('handling Checkboxes in playwright',async({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const checkbox = page.locator("//input[@value='option-1']") // can give both .check or .click
    await checkbox.check()
    //await checkbox.uncheck()
    console.log(await checkbox.isChecked)
    //tohaveURL, tobevisible, tobeenabled
})

test ('handling radio button', async ({page})=>{
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
    const radiobutton = page.locator("//input[@value='orange']")
    await radiobutton.click()
})