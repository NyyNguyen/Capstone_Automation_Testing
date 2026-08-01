import { test, expect } from "../fixtures/page-fixtures";
import { TimeOutConstants } from "../constants/TimeOutConstants";

test.describe("Suite Kiểm thử Chức năng Popup Đăng Nhập ở Trang Chủ - demo5.cybersoft.edu.vn", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.gotoLoginPage();
  });

  test("TC01 - Kiểm tra hiển thị đầy đủ các phần tử trên Popup Đăng nhập", async ({ loginPage }) => {
    await expect(loginPage.EmailInput).toBeVisible();
    await expect(loginPage.PasswordInput).toBeVisible();
    await expect(loginPage.LoginButton).toBeVisible();
    await expect(loginPage.RegisterNowLink).toBeVisible();
  });

  test("TC02 - Xác minh Đăng nhập với thông tin hợp lệ", async ({ loginPage, page }) => {
    await loginPage.login("testt3244@gmail.com", "123123Cc");

    await expect(loginPage.SwalPopup.first()).toBeVisible({ timeout: TimeOutConstants.TIME_OUT_MEDIUM });
    await expect(loginPage.SwalPopup.first()).toContainText(/Đăng nhập thành công/i);

    const userHeader = page.locator("header, nav").first();
    await expect(userHeader).toContainText("testt3244@gmail.com");
  });

  test("TC03 - Xác minh Đăng nhập khi nhập đúng Email nhưng sai Mật khẩu", async ({ loginPage }) => {
    await loginPage.login("testt3244@gmail.com", "WrongPassword999!");

    await expect(loginPage.SwalPopup.first()).toBeVisible({ timeout: TimeOutConstants.TIME_OUT_MEDIUM });
    await expect(loginPage.SwalPopup.first()).toContainText(/Email hoặc mật khẩu không đúng/i);
  });

  test("TC04 - Xác minh Đăng nhập khi nhập Email chưa đăng ký hệ thống", async ({ loginPage }) => {
    await loginPage.login("unregistered_qa_user_999@gmail.com", "123123Cc");

    await expect(loginPage.SwalPopup.first()).toBeVisible({ timeout: TimeOutConstants.TIME_OUT_MEDIUM });
    await expect(loginPage.SwalPopup.first()).toContainText(/Email hoặc mật khẩu không đúng/i);
  });

  test("TC05 - Xác minh Đăng nhập với trường [Tài khoản] để trống", async ({ loginPage }) => {
    await loginPage.enterPassword("123123Cc");
    await loginPage.clickLoginButton();

    await expect(loginPage.ErrorMessageLabel.first()).toBeVisible();
    await expect(loginPage.ErrorMessageLabel.first()).toHaveText("Vui lòng không bỏ trống");
  });

  test("TC06 - Xác minh Đăng nhập với trường [Mật khẩu] để trống", async ({ loginPage }) => {
    await loginPage.enterEmail("testt3244@gmail.com");
    await loginPage.clickLoginButton();

    await expect(loginPage.ErrorMessageLabel.first()).toBeVisible();
    await expect(loginPage.ErrorMessageLabel.first()).toHaveText("Vui lòng không bỏ trống");
  });

  test("TC07 - Xác minh Đăng nhập khi để trống cả 2 trường [Tài khoản] và [Mật khẩu]", async ({ loginPage }) => {
    await loginPage.clickLoginButton();

    await expect(loginPage.ErrorMessageLabel).toHaveCount(2);
    await expect(loginPage.ErrorMessageLabel.nth(0)).toHaveText("Vui lòng không bỏ trống");
    await expect(loginPage.ErrorMessageLabel.nth(1)).toHaveText("Vui lòng không bỏ trống");
  });

  test("TC08 - Xác minh Đăng nhập với trường [Mật khẩu] dưới 6 ký tự", async ({ loginPage }) => {
    await loginPage.enterEmail("testt32244@gmail.com");
    await loginPage.enterPassword("1233");
    await loginPage.clickLoginButton();

    await expect(loginPage.ErrorMessageLabel.first()).toBeVisible();
    await expect(loginPage.ErrorMessageLabel.first()).toHaveText("Mật khẩu từ 6 đến 32 ký tự");
  });

  test("TC09 - Xác minh định dạng email ở trường nhập [Tài khoản]", async ({ loginPage }) => {
    await loginPage.enterEmail("invalid_email_format");
    await loginPage.enterPassword("123123Cc");
    await loginPage.clickLoginButton();

    await expect(loginPage.ErrorMessageLabel.first()).toBeVisible();
    await expect(loginPage.ErrorMessageLabel.first()).toHaveText("Vui lòng nhập đúng định dạng email");
  });

  test("TC10 - Xác minh định dạng giá trị mật khẩu (ẩn ký tự với type='password')", async ({ loginPage }) => {
    await expect(loginPage.PasswordInput).toHaveAttribute("type", "password");
  });

  test("TC11 - Xác minh nút Đóng / Hủy Popup Đăng nhập", async ({ loginPage }) => {
    if (await loginPage.CloseModalButton.isVisible()) {
      await loginPage.closeLoginModal();
      await expect(loginPage.EmailInput).not.toBeVisible();
    } else {
      await loginPage.EmailInput.press("Escape");
      await expect(loginPage.EmailInput).not.toBeVisible();
    }
  });

  test("TC12 - Xác minh chuyển hướng hoặc mở Popup Đăng ký từ Popup Đăng nhập", async ({ loginPage, page }) => {
    await loginPage.clickRegisterNow();
    await page.waitForTimeout(2000);

    const isRegisterRoute = page.url().includes("register");
    const isRegisterModalVisible = (await page.locator("#name, #phone, input[placeholder*='tên'], input[placeholder*='điện thoại']").count()) > 0 || (await page.locator("h3:has-text('Đăng ký')").count()) > 0;

    expect(isRegisterRoute || isRegisterModalVisible).toBeTruthy();
  });
});
