import {expect, test} from '@playwright/test'
import { LoginPage } from '../Pages/loginpage'
import {testdata} from '../utils/testdata.json'

test ('Correct username and wrong password validation', async({page})=>{
    await page.goto ('https://www.saucedemo.com/')
    const username= page.locator('#user-name')
    await username.fill('standard_user')
    const password=page.locator('#password')
    await password.fill('secret_sauce_wrong')
    const loginbutton= page.locator('#login-button')
    await loginbutton.click()

    const errorMessgae = page.locator("//h3[@data-test='error']")
    await expect(errorMessgae).toBeVisible()
})

test ('Wrong username and correct password validation', async({page})=>{
    await page.goto ('https://www.saucedemo.com/')
    const username= page.locator('#user-name')
    await username.fill('standard_user22')
    const password=page.locator('#password')
    await password.fill('secret_sauce')
    const loginbutton= page.locator('#login-button')
    await loginbutton.click()

    const errorMessgae = page.locator("//h3[@data-test='error']")
    await expect(errorMessgae).toBeVisible()
})

test ('Wrong username and wrong password validation', async({page})=>{
    await page.goto ('https://www.saucedemo.com/')
    const username= page.locator('#user-name')
    await username.fill('standard_user22')
    const password=page.locator('#password')
    await password.fill('secret_sauce_wrong')
    const loginbutton= page.locator('#login-button')
    await loginbutton.click()

    const errorMessgae = page.locator("//h3[@data-test='error']")
    await expect(errorMessgae).toBeVisible()
})

test.only ('Correct username and correct password validation', async({page})=>{
    //await page.goto ('https://www.saucedemo.com/')
    //const username= page.locator('#user-name')
    //await username.fill('standard_user')
    //const password=page.locator('#password')
    //await password.fill('secret_sauce')
    //const loginbutton= page.locator('#login-button')
    //await loginbutton.click()

    //const errorMessgae = page.locator("//h3[@data-test='error']")
    //await expect(errorMessgae).toBeVisible()
    const usernamevalue = testdata.usernamevalue()
    const passwordvalue = testdata.passwordvalue()
    const login=new LoginPage(page) //constructor invoking
    await login.navigateToApplication()
    await login.fillUsernameOnUsernameField(usernamevalue)
    await login.fillPasswordOnPasswordField(passwordvalue)
    await login.clickLoginButton()
    await login.validateSuccessfulLogin()

})

//POM Page Object Model