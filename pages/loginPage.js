import { expect } from "playwright/test";
import Locators from "../locators/locators";


export class Login{

    constructor(page){

        this.page = page;
        this.locator = new Locators(page);
    }

    async openUrl() {
    await this.page.goto('https://www.saucedemo.com/');
    }

    async enterUserName(username){

        await this.locator.userName.fill(username);

    }


    async enterPassword(password){

        await this.locator.userPassword.fill(password);
    }

    async buttonLogin(){

        await this.locator.loginButton.click();
    }


    async verifyErrorMessage(){
        await expect(this.locator.errorMessage).toHaveText("Epic sadface: Sorry, this user has been locked out.");
    }

}