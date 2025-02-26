import {test , Page ,expect} from "@playwright/test";

export class HomePage{

  page:Page;

  constructor(page:Page){
    this.page=page;
  }

  public async addProductToCart(productName: string){

    const cards=await this.page.locator('.card-body');
    const element= await cards.filter({hasText:`${productName}`});
    await element.locator('button.btn').last().click();
  }

  public async goToCart(){

    await this.page.locator('[routerlink="/dashboard/cart"]').isVisible();
    await this.page.locator('[routerlink="/dashboard/cart"]').click();
    await this.page.getByRole('button', { name: 'Continue Shopping❯' }).isVisible();
  }

}