import {test} from '@playwright/test'
test ('frames in playwright', async({page})=>{
    await page.goto('https://demoqa.com/frames')
    const frame1 = page.frameLocator('#frame1')    //for frames use page.frameLocator to locate
    console.log(await frame1.locator('#sampleHeading').textContent()) // trying to print thr text inside frame by locating the text directly from frame1. textContent is used to fetch the text from element.
//VISUAL TESTING
})