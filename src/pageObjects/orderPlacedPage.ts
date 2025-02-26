import {test , Page , expect} from "@playwright/test";

export class OrderPlacedPage{

    page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public async getOrderID(){

        const orderID= await this.page.locator('tr td label').last().innerText();
        return (orderID.split("|")[1].trim());
    }
}