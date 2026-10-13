import {test} from '@playwright/test'
test.only ('assignment for drops and clicks', async({page})=>{
    await page.goto ('https://selenium.qabible.in/')
    await page.goto ('https://selenium.qabible.in/simple-form-demo.php')

    const inputformmessage = page.locator("#single-input-field")
    await inputformmessage.fill('Assignment for Playwright First Assignment')
    const showMessage = page.locator("//button[@id='button-one']")
    await showMessage.click()
    const inputformmessage2 = page.locator("#value-a")
    await inputformmessage2.fill('590')
    const inputformmessage3 = page.locator("#value-b")
    await inputformmessage3.fill('410')
    const gettotatl =page.locator("//button[@id='button-two']")
    await gettotatl.click()
 })

test ('checkboxdemo', async({page})=>{
    await page.goto('https://selenium.qabible.in/check-box-demo.php')

    const SingleCheckboxDemo =page.locator("//input[@id='gridCheck']")
    await SingleCheckboxDemo.check()
    const multipleCheck =page.locator("//input[@id='check-box-one']")
    await multipleCheck.check()
    const multipleCheck2 =page.locator("//input[@id='check-box-threee']")
    await multipleCheck2.click()
    await multipleCheck.uncheck()
    const selectAll =page.locator("//input[@value='Select All']")
    const unselectAll =page.locator("//input[@value='Unselect All']")
    await selectAll.click()
    await unselectAll.click()
})

test ('radio-button-demo', async({page})=>{
    await page.goto('https://selenium.qabible.in/radio-button-demo.php')

    const RadioButtonDemo = page.locator("//input[@id='inlineRadio2']")
    await RadioButtonDemo.click()
    await page.getByText('Show Selected Value').click()
    const RadioButtonDemo2 = page.locator("#inlineRadio21")
    await RadioButtonDemo2.click()
    const RadioButtonDemo3 = page.locator("//input[@value='19 to 44']")
    await RadioButtonDemo3.click()
    await page.getByText('Get Results').click()


})