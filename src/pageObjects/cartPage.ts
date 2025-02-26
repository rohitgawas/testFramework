import {test , Page , expect} from "@playwright/test";

export class CartPage{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }


    public async checkProductIsListed(productName: string){

        await this.page.locator('ul li .infoWrap').last().isVisible();
        let products =await this.page.locator('ul li .infoWrap');
        let desiredProduct = await products.filter({hasText: `${productName}`});
        let text = await desiredProduct.allTextContents();
        expect(text.includes(`${productName}`));
    }

    public async checkOut(){

        await this.page.getByRole("button",{name:`Checkout`}).isVisible();
        await this.page.getByRole("button",{name:`Checkout`}).click();
        await this.page.getByRole('button',{name:`Place Order `}).isVisible();
    }
}