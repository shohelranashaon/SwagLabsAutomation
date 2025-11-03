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


};