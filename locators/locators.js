export default class Locators{


    constructor(page){

        this.page = page;

        this.userName= this.page.locator("//input[@id='user-name']");
        this.userPassword = this.page.locator("//input[@id='password']");
        this.loginButton = this.page.locator("//input[@id='login-button']");
        this.logoutButton = this.page.locator("//a[@id='logout_sidebar_link']");
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

        this.enterFirstName = this.page.locator("//input[@name='firstName']");
        this.enterLastName = this.page.locator("//input[@name='lastName']");
        this.enterZipCode = this.page.locator("//input[@id='postal-code']");
        this.progressContinue =this.page.locator("//input[@id='continue']");

        this.itemName1 =this.page.locator("//div[text()='Sauce Labs Backpack']");
        this.itemName2 =this.page.locator("//div[text()='Sauce Labs Bike Light']");
        this.itemName3 =this.page.locator("//div[text()='Sauce Labs Bolt T-Shirt']");

        this.finishButton= this.page.locator("//button[@id='finish']");

        this.confirmationMessage =this.page.locator("//h2[text()='Thank you for your order!']");

        this.buttonBacktoHome =this.page.locator("//button[@id='back-to-products']");
        


    }




}