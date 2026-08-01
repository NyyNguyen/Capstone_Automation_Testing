import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { RegisterPage } from "../pages/RegisterPage";
import { LoginPage } from "../pages/LoginPage";
import { RoomDetailPage } from "../pages/RoomDetailPage";

type MyFixture = {
  homePage: HomePage;
  registerPage: RegisterPage;
  loginPage: LoginPage;
  roomDetailPage: RoomDetailPage;
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
  },
  registerPage: async ({ page }, use) => {
    const registerPage = new RegisterPage(page);
    await use(registerPage);
  },
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  roomDetailPage: async ({ page }, use) => {
    const roomDetailPage = new RoomDetailPage(page);
    await use(roomDetailPage);
  },
});

export { expect } from "@playwright/test";