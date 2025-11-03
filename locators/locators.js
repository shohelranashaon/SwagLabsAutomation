export default class Locators{


    constructor(page){

        this.page = page;

        this.userName= this.page.locator("//input[@id='user-name']");
        this.userPassword = this.page.locator("//input[@id='password']");
        this.loginButton = this.page.locator("//input[@id='login-button']");
        this.errorMessage = this.page.locator("//h3[@data-test='error']");

        // this.errorMessage = this.page.locator("//span[text()='Epic sadface: Sorry, this user has been locked out.']");[Need to Discuss with Ridoy vaiya Why not working]
        this.buttonBurgerMenu= this.page.locator("//button[@id='react-burger-menu-btn']");
        this.appResetLink =this.page.locator("//a[@id='reset_sidebar_link']");
        this.closeBurgerMenu = this.page.locator("//button[@id='react-burger-cross-btn']");
    }




}