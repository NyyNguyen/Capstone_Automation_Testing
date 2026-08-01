import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";

type MyFixture = {
  homePage: HomePage;
  registerPage: RegisterPage;
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    // set up homePage
    const homePage = new HomePage(page);

    // khai báo sử dụng homePage trong test
    await use(homePage);
  },

  registerPage: async ({ page }, use) => {
    // set register page
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
});

export { expect } from "@playwright/test";
