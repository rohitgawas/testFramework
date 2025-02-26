import {test ,Page , expect, BrowserContext} from "@playwright/test";
import { LoginPage } from "../src/pageObjects/loginPage";
import { HomePage } from "../src/pageObjects/homePage";
import { CartPage } from "../src/pageObjects/cartPage";
import { PaymentPage } from "../src/pageObjects/paymentPage";
import { OrderPlacedPage } from "../src/pageObjects/orderPlacedPage";
import { OrdersPage } from "../src/pageObjects/ordersPage";

const iterData =JSON.parse(JSON.stringify(require('./testData.json')))

let browserContext:BrowserContext;
let page : Page;
let loginPage:LoginPage;
let homePage: HomePage;
let cartPage:CartPage;
let paymentPage:PaymentPage;
let orderPlacedPage:OrderPlacedPage;
let ordersPage:OrdersPage;

test.describe('End to End test', async()=>{

    test.beforeEach(async({browser})=>{

        browserContext= await browser.newContext();
        page= await browserContext.newPage();
        loginPage=new LoginPage(page);
        homePage=new HomePage(page);
        cartPage = new CartPage(page);
        paymentPage= new PaymentPage(page);
        orderPlacedPage=new OrderPlacedPage(page);
        ordersPage=new OrdersPage(page);
        await loginPage.login(process.env.DEFAULT_USERNAME!,process.env.DEFAULT_PASSWORD!);

    })
    for(const data of iterData){
        test(`Place and order for ${data.productNames.addidas}`,async()=>{
        
            await homePage.addProductToCart(data.productNames.addidas);
            await homePage.goToCart();
            await cartPage.checkProductIsListed(data.productNames.addidas);
            await cartPage.checkOut();
            await paymentPage.fillPersonalInfo();
            await paymentPage.placeOrder();
            const orderID=await orderPlacedPage.getOrderID();
            await paymentPage.goToOrders();
            await ordersPage.viewOrderFromTable(orderID);
            
        })

    }
    
})