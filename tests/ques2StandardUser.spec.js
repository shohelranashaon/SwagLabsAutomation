import { test, expect } from "@playwright/test";
import { Login } from "../pages/loginPage";
import { Inventory } from "../pages/inventoryPage";

test.describe.configure({ mode: "serial" });

test.describe("Swag Labs For Automation", () => {
  let context, page, login;

  test.beforeAll(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    login = new Login(page);
   
    await login.openUrl();
    await login.enterUserName("standard_user");
    await login.enterPassword("secret_sauce");
    await login.buttonLogin();
    // await page.pause();
    await expect(page).toHaveURL(/inventory/);
  });


        

    test("Hamburger menu Open Succesfully", async()=>{

        const  inventory = new Inventory(page);
        await inventory.hamburgerMenu();
        //await page.pause();
     });

        test("Reset App state Successfully", async ()=>{
          const  inventory = new Inventory(page);
          await  inventory.resetLink();
        });


        test("Close Humburger Menu Successfully", async()=>{

          const  inventory = new Inventory(page);
          await  inventory.closeMenu();

        })
  





//   test.afterAll(async () => {
//     await context.close();
//   });
});
