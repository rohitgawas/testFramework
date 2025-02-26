import {test , Page , expect} from "@playwright/test";

export class LoginPage{

    page:Page;
    
    constructor(page:Page){
        this.page =page;
    } 

   /**
    * This function is to login into system
    * @param username : string user name of the user
    * @param password : string password of the user
    */
    public async login(username:string , password:string){

        await this.page.goto("/client")
        await this.page.locator('#userEmail').fill(username);
        await this.page.locator('#userPassword').fill(password);
        await this.page.locator('#login').isEnabled();
        await this.page.locator('#login').click();
        await expect(this.page.locator('.fa-sign-out')).toBeVisible();
    }
}

