import Locators from "../locators/locators";
import { Inventory } from "./inventoryPage";
import { Login } from "./loginPage";

export class Checkout{

    constructor(page){
        
        this.page =page;
        this.locator = new Locators(page);
    }

    async fillUserInformation(){

        await this.locator.enterFirstName.fill("Shohel");
        await this.locator.enterLastName.fill("Rana");
        await this.locator.enterZipCode.fill("1216");
    }


    async continueToFinalCheckoutPage(){
        await this.locator.progressContinue.click();
    }

}