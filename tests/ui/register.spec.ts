import { expect, test } from "../../fixtures/page-fixture";

// callback function: hàm được truyền vào trong hàm khác như 1 tham số
// test("verify register function", async ({ page }) => {
//   // thực hiện logic các bước đăng ký tài khoản
//   // Bước 1: Tới trang https://demo1.cybersoft.edu.vn/
//   await page.goto("https://demo1.cybersoft.edu.vn");
//   // Bước 2: Click vào "Đăng ký"
//   const registerLink = page.getByRole("link", { name: "Đăng Ký" });
//   // Cách 2: sử dụng Xpath
//   // const regiterLink = page.locator("//a[@href='/sign-up']");
//   await registerLink.click();
//   const account = crypto.randomUUID();
//   const password = "testing15_playwright";
//   const fullname = "Testing Playwright";
//   const email = `${account}@gmail.com`;

//   // Bước 3: Nhập account name
//   const accountInput = page.getByRole("textbox", { name: "Tài Khoản" });
//   await accountInput.fill(account);

//   // Bước 4: Nhập password
//   const passwordInput = page.getByRole("textbox", {
//     name: "Mật Khẩu",
//     exact: true,
//   });
//   await passwordInput.fill(password);

//   // Bước 5: Nhập re-password
//   const rePasswordInput = page.getByRole("textbox", {
//     name: "Nhập lại mật khẩu",
//   });
//   await rePasswordInput.fill(password);

//   // Bước 6: Nhập fullname
//   const fullnameInput = page.getByRole("textbox", { name: "Họ Tên" });
//   await fullnameInput.fill(fullname);

//   // Bước 7: Nhập email
//   const emailInput = page.getByRole("textbox", { name: "Email" });
//   await emailInput.fill(email);

//   // Bước 8: Click vào "Đăng ký"
//   await page.getByRole("button", { name: "Đăng ký" }).click();

//   // Bước 9: Verify point
//   const successLbl = page.getByRole("heading", { name: "Đăng ký thành công" });
//   // assertion: mong đợi successLabl hiển thị trên UI
//   await expect(successLbl).toBeVisible;
// });
test("Verify register function with POM (Page Object Model)", async ({
  page,
  homePage,
  registerPage,
}) => {
  const fullname = "Testing Playwright";
  const email = `${crypto.randomUUID()}@gmail.com`;
  const password = "testing15_playwright";
  const phonenumber = "0123456789";
  const year = "2005";
  const month = "Aug";
  const day = "15";
  const gender = "Nữ";

  await page.goto("/");

  await homePage.getTopBarComponent().navigateToRegisterPage();

  await registerPage.enterFullnameInput(fullname);
  await registerPage.enterEmailInput(email);
  await registerPage.enterPasswordInput(password);
  await registerPage.enterPhonenumberInput(phonenumber);
  await registerPage.selectBirthdayInput(day, month, year);
  await registerPage.selectGender(gender);
  await registerPage.clickRegisterButton();

  const successLbl = page.getByRole("heading", { name: "Đăng ký thành công" });
  await expect(successLbl).toBeVisible;
});
