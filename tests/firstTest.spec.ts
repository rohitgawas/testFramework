import {test , Page , BrowserContext } from "@playwright/test";

let browserContext:BrowserContext;
let page:Page;


test.describe("open google" , async()=>{

    test.beforeAll(async({browser})=>{

        browserContext= await browser.newContext();
        page = await browserContext.newPage();
    })

    test("access the url",async()=>{
        await page.goto("/")
        await page.locator('[alt="Google"]').isVisible();
        await page.locator('[alt="Google"]').click();
    })
})