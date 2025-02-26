import {test , Page , BrowserContext , expect } from "@playwright/test";
import {LoginPage} from "../src/pageObjects/loginPage";

let browserContext:BrowserContext;
let page:Page;
let loginPage:LoginPage;
const{
    DEFAULT_USERNAME,
    DEFAULT_PASSWORD,

}=process.env;


test.describe("open google" , async()=>{

    test.beforeAll(async({browser})=>{

        browserContext= await browser.newContext();
        page = await browserContext.newPage();
        loginPage = new LoginPage(page);
    })

    test("access the url",async()=>{
        await loginPage.login(DEFAULT_USERNAME!, DEFAULT_PASSWORD!);
    })
})
