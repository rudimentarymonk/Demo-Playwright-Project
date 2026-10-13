import {expect} from '@playwright/test'
export class LoginPage { //Export is used so that somewhere we can import
    constructor(page){
        this.page=page
        this.username= page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginbutton= page.locator('#login-button')
        this.errorMessgae = page.locator("//h3[@data-test='error']")
        this.productstitle = page.locator('.title')

        //actions should be written as methods outside constructor
    }
    async navigateToApplication(){
        await this.page.goto ('https://www.saucedemo.com/')
    }
    async fillUsernameOnUsernameField(usernamevalue){
        await this.username.fill('usernamevalue')
    }
    async fillPasswordOnPasswordField(passwordvalue){
        await this.password.fill('passwordvalue')        
    }
    async clickLoginButton(){
        await this.loginbutton.click()
    }
    async validateSuccessfulLogin(){
        await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')

    }

}