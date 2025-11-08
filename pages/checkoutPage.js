import Locators from "../locators/locators";
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
        console.log("Product verification successful:");
        console.log("Product 1:", item1.trim());
        console.log("Product 2:", item2.trim());
        console.log("Product 3:", item3.trim());
        
        }

    async verifyProductsNames1(){
        const item4 = await this.locator.itemName4.textContent();
        expect(item4).toBe("Test.allTheThings() T-Shirt (Red)");
        console.log("Product verification successful:");
        console.log("Product 1:", item4.trim());
        }


    async clickButtonFinish(){
        await this.locator.finishButton.click();
     }

     async verifyTotalPrice() {

        const prices = await this.page.locator(".inventory_item_price").allTextContents();
        const numericPrices = prices.map(price => parseFloat(price.replace("$", "")));
        const expectedSubTotal = numericPrices.reduce((a, b) => a + b, 0);
        const subTotalText = await this.locator.subTotal.textContent();
        const displayedSubTotal = parseFloat(subTotalText.replace("Item total: $", "").trim());
        expect(displayedSubTotal).toBeCloseTo(expectedSubTotal, 2);
        console.log("Expected Subtotal:", expectedSubTotal);
        console.log("Displayed Subtotal on Page:", displayedSubTotal);
  }

}
