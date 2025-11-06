import { test, expect } from "@playwright/test";
import { Login } from "../pages/loginPage";
import { Inventory } from "../pages/inventoryPage";
import { Checkout } from "../pages/checkoutPage";
import { ConfirmationPage } from "../pages/confirmationPage";

test.describe.configure({ mode: "serial" });

test.describe("Swag Labs For Automation", () => {
  let context, page, login,inventory,checkout,confirmation;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    login = new Login(page);
    inventory = new Inventory(page);
    checkout = new Checkout(page);
    confirmation = new ConfirmationPage(page);
    await login.openUrl();
    await login.enterUserName("standard_user");
    await login.enterPassword("secret_sauce");
    await login.buttonLogin();
    // await page.pause();
    await expect(page).toHaveURL(/inventory/);
  });

    test("Veify Products Name and Verify Confirmation Message", async()=>{
        await inventory.hamburgerMenu();
        await inventory.resetLink();
        await inventory.closeMenu();
        await inventory.addToCartItem1();
        await inventory.addToCartItem2();
        await inventory.addToCartItem3();
        await inventory.shopingCartPage();
        await inventory.checkoutPage();
        await checkout.fillUserInformation();
        await checkout.continueToFinalCheckoutPage();
        await checkout.verifyProductsNames();
        await checkout.clickButtonFinish();
        await confirmation.verifyConfirmationMessage();
        await confirmation.backHomePage();
        await inventory.hamburgerMenu();
        await inventory.resetLink();
        //await page.pause();
     });

         test.afterAll("Logout Successfully",async () => {
            await inventory.clickButtonLogout();
            // await page.pause();
  });
 
});












// test("Reset App state Successfully", async ()=>{
//           await  inventory.resetLink();
//         });


//         test("Close Humburger Menu Successfully", async()=>{
//           await  inventory.closeMenu();

//         })
        
//         test("Add 3 Item to the cart Successfully", async()=>{
//           await inventory.addToCartItem1();
//           await inventory.addToCartItem2();
//           await inventory.addToCartItem3();
//           // await page.pause();
//         })


//         test("Shoping Cart Page Open Succefully", async ()=>{

//           await inventory.shopingCartPage();
          
//         })

//         test("Navigate Checkout Page Successfully", async ()=>{
//           await inventory.checkoutPage();
          

//         })

//         test(" Fill Customer name and zip code Successfully", async()=>{

//           await checkout.fillUserInformation();
//           // await page.pause();
//         })


//         test("Go to Final Checkout Page Successfully", async()=>{
//           await checkout.continueToFinalCheckoutPage();
          
//         })


//         test("Verifiy 3 products Name Successfully", async()=>{

//           await checkout.verifyProductsNames();
//           // await page.pause();
//         })

//         test("Finish Button Work Successfully on CheckOut Page", async()=>{

//           await checkout.clickButtonFinish();
//           })
          

//         test ("Verify SucceccSully order Completion Message", async()=>{

//           await confirmation.verifyConfirmationMessage();
          
//         })


//         test("Reset App state", async ()=>{
//           await confirmation.backHomePage();
//           await inventory.hamburgerMenu();
//           await  inventory.resetLink();
          
//         });