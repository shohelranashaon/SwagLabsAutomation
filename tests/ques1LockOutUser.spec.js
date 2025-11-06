import { Login } from "../pages/loginPage";
import { test } from '@playwright/test';

test("Error Message Verified Succecfully", async ({page})=>{
  const object = new Login(page);
  await object.openUrl();
  await object.enterUserName("locked_out_user");
  await object.enterPassword("secret_sauce");
  await object.buttonLogin();
  await object.verifyErrorMessage();
//   await page.pause();
});


