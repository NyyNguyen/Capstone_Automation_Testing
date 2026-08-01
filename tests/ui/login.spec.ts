import { expect, test } from "../../fixtures/page-fixture";

test("TC_Login: Verify that user can login successfully with valid account", async ({
  page,
  homePage,
  loginPage,
}) => {
  const email = "testt3244@gmail.com";
  const password = "123123Cc";

  await page.goto("/");

  homePage.getTopBarComponent().navigateToLoginPage();

  await loginPage.enterEmailInput(email);
  await loginPage.enterPasswordInput(password);
  await loginPage.clickLoginButton();

  const successLbl = page.getByRole("heading", {
    name: "Đăng nhập thành công",
  });
  await expect(successLbl).toBeVisible;
});
