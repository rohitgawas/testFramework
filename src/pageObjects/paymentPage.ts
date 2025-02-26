import {test , Page , expect} from "@playwright/test";

export class PaymentPage{
    page :Page;

    constructor(page:Page){
        this.page = page;
    }

    public async fillPersonalInfo(){

        await this.page.locator('form').getByRole('textbox').nth(2).isVisible();
        await this.page.locator('form').getByRole('textbox').nth(2).fill('123456')
        await this.page.getByPlaceholder(`Select Country`).isVisible();
        await this.page.getByPlaceholder(`Select Country`).pressSequentially(`india`);
        await this.page.locator('section.ta-results').getByRole('button',{name: ` India`}).nth(1).click();
    }

    public async placeOrder(){
        await this.page.locator('.details__user .actions .btnn').click();
        let text=await this.page.locator('tr td h1').textContent();
        expect(text?.includes(' Thankyou for the order. ')).toBeTruthy();
    }


    public async goToOrders(){
        await this.page.locator('button[routerlink="/dashboard/myorders"]').click();
        await this.page.locator('h1',{hasText: `Your Orders`}).isVisible();
    }
}