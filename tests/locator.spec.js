import{ test}from '@playwright/test'
test('locators in playwright',async({page})=>{
    await page.goto('https://www.saucedemo.com/')
    const usernamefield=page.locator('#user-name')//id locator
    //const Passwordfield=page.locator('.input_error form_input')// class locator
    const Passwordfield=page.locator("//input[@id='password']")
    const Loginbutton = page.locator("//input[@id='login-button']")
   // await usernamefield.type('Akshay')
   // await usernamefield.type('Mohan')
   //FILL/
   await usernamefield.fill('standard_user')
   await Passwordfield.fill('secret_sauce')
   //click
   await Loginbutton.click()

   //special locators
   //https://groceryapp.uniqassosiates.com/admin/login
   //admin   admin
   //ARIA -accessible rich internet application

})

test('special locators in playwright', async({page})=>{
    await page.goto('https://groceryapp.uniqassosiates.com/admin/login')
    const usernametwo= page.locator("//input[@name='username']")
    await usernametwo.fill('admin')
    const passwordtwo= page.locator("//input[@name='password']")
    await passwordtwo.fill('admin')
    const signinbutton= page.locator("//button[text()='Sign In']")
    await signinbutton.click()
    await page.goto('https://groceryapp.uniqassosiates.com/admin/list-admin')
    //await page.getByRole('role="button"').nth(1).click()
    await page.getByText('Active').nth(1).click
})