import {test , Page , expect} from "@playwright/test";

export class OrdersPage{
    page:Page;

    constructor(page:Page){
        this.page=page;
    }

    public async viewOrderFromTable(orderID:string){
        const table =await this.page.locator('table tr');
        const desiredRow = await table.filter({hasText:orderID});
        await expect(desiredRow).toBeVisible();
        const viewButton = await desiredRow.getByRole('button',{name:`view`}).click();
        expect(await this.page.locator('.row .col-text').innerText()).toContain(orderID);

    }
}