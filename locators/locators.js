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
        this.addToCartButton1 = this.page.locator("//button[@name='add-to-cart-sauce-labs-backpack']");
        this.addToCartButton2 = this.page.locator("//button[@name='add-to-cart-sauce-labs-bike-light']");
        this.addToCartButton3 = this.page.locator("//button[@name='add-to-cart-sauce-labs-bolt-t-shirt']");


        this.shoppingCartIcon = this.page.locator("//a[@class='shopping_cart_link']");

        this.checkoutButton = this.page.locator("//button[@name='checkout']");
    }




}