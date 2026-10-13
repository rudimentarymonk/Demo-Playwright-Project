import {test, expect} from '@playwright/test'
test('calendaer validation',async({page})=>{
    await page.goto('https://selenium.qabible.in/date-picker.php')
    const dateinput = page.locator('#single-input-field')
    await dateinput.click()
    await expect(page.locator('.datepicker-dropdown')).toBeVisible()
    const targetyear= 1997

    const monthswitch= page.locator('.datepicker-switch:visible')
    await monthswitch.click()
    await monthswitch.click()
    let attempts = 10
    while(attempts--){
        const decadetext=await monthswitch.innerText()             //to fetch decade text
        const startyear= parseInt(decadetext.split('-')[0].trim())
        if(targetyear>=startyear&& targetyear<=startyear+9)
            break
        await page.locator('.prev:visible').click()

    }
    await page.locator('.year:visible').filter({hasText:'1997'}).click()
    await page.locator('.month:visible').filter({hasText:'May'}).click()
    await page.locator('.day:not(.old):not(.new)',{hasText:/^6$/}).click() // not to choose old or next month dates
    const showdate= page.locator('#button-one')
    await showdate.click()

})