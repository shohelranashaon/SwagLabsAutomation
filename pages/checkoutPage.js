import Locators from "../locators/locators";
import { Inventory } from "./inventoryPage";
import { Login } from "./loginPage";
import { expect } from "playwright/test";

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

    async verifyProductsNames(){

        const item1 = await this.locator.itemName1.textContent();
        const item2 = await this.locator.itemName2.textContent();
        const item3 = await this.locator.itemName3.textContent();
        expect(item1).toBe("Sauce Labs Backpack");
        expect(item2).toBe("Sauce Labs Bike Light");
        expect(item3).toBe("Sauce Labs Bolt T-Shirt");

}
  async clickButtonFinish(){
    await this.locator.finishButton.click();
  }

}
