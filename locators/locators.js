export default class Locators{


    constructor(page){

        this.page = page;

        this.userName= this.page.Locators("//input[@id='user-name']");
        this.userPassword = this.page.Locators("//input[@id='password']");
        this.loginButton = this.page.Locators("//input[@id='login-button']");

    }




}