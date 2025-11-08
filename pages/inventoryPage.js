import Locators from "../locators/locators";


export class Inventory{

    constructor(page){
        
        this.page =page;
        this.locator = new Locators(page);
    }



    async hamburgerMenu(){

        await this.locator.buttonBurgerMenu.click();
    }

    async resetLink(){

        await this.locator.appResetLink.click();
    }

    async closeMenu(){

        await this.locator.closeBurgerMenu.click();
    }

    async addToCartItem1(){
        await this.locator.addToCartButton1.click();


    }

    async addToCartItem2(){
        await this.locator.addToCartButton2.click();

        
    }

    async addToCartItem3(){
        await this.locator.addToCartButton3.click();   
    }

    async addToCartItem4(){
        await this.locator.addToCartButton4.click();   
    }

    async shopingCartPage(){

        await this.locator.shoppingCartIcon.click();
    }

    async checkoutPage(){

        await this.locator.checkoutButton.click();
    }

    async clickButtonLogout(){

        await this.locator.logoutButton.click();
    }

    async shortingProducts(){

        await this.locator.shortProducts.click();
        await this.page.waitForTimeout(3000);
        await this.locator.shortProducts.selectOption('za');
        // await this.page.pause();
    }


};