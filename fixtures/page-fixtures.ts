import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RoomDetailPage } from "../pages/RoomDetailPage";

type MyFixture = {
  homePage: HomePage;
  loginPage: LoginPage;
  roomDetailPage: RoomDetailPage;
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page }, use) => {
    const homePage = new HomePage(page);
    await use(homePage);
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
