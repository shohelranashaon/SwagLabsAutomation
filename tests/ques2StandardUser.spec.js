import { Login } from "../pages/loginPage";

import { test} from '@playwright/test';

test("Standard user logged in successfully with valid credentials.",async({page})=>{

    const object1 = new Login(page);

    await object1.openUrl();
    await object1.enterUserName("standard_user");
    await object1.enterPassword("secret_sauce");
    await object1.buttonLogin();
})




