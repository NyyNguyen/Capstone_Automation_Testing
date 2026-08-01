import { test as base } from "playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";

type MyFixture = {
  homePage: HomePage;
  loginPage: LoginPage;
  registerPage: RegisterPage;
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    //set up homePage
    const homePage = new HomePage(page);
    //khai báo sử dụng homePage trong test
    await use(homePage);
  },

  loginPage: async ({ page }, use) => {
    // set login page
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },

  registerPage: async ({ page }, use) => {
    // set register page
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});
export { expect } from "@playwright/test";
