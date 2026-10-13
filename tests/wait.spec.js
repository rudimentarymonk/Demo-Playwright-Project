

test('browserContext1 playwrighttest1',async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.waitForLoadState("networkidle")
})