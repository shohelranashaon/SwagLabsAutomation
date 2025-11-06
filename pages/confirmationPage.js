import Locators from "../locators/locators";
import { expect } from "playwright/test";


export class ConfirmationPage{

    constructor(page){
        
        this.page =page;
        this.locator = new Locators(page);
    }


    async verifyConfirmationMessage(){

       const message = await this.locator.confirmationMessage.textContent();
       expect(message).toBe("Thank you for your order!");

    }

    async backHomePage(){

        await this.locator.buttonBacktoHome.click();
    }

}
