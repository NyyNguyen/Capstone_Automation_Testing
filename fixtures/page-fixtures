import { test as base, expect } from "@playwright/test";
import { HomePage } from "../pages/HomePage";

type MyFixture ={
  homePage: HomePage;
};

export const test = base.extend<MyFixture>({
  homePage: async ({ page },use) => {
    //set up homePage
    const homePage = new HomePage(page);
    //khai báo sử dụng homePage trong test
    await use(homePage);
  },

  
});

export { expect } from "@playwright/test";
