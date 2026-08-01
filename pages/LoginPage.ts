import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
export class LoginPage extends CommonPage {
  // thuộc tính
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", {
      name: "Mật khẩu",
      exact: true,
    });
    this.loginButton = page.getByRole("button", { name: "Đăng nhập" });
  }

  async enterEmailInput(account: string) {
    await this.emailInput.fill(account);
  }
  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }
  async clickLoginButton() {
    await this.loginButton.click();
  }
  async login(account: string, password: string) {
    await this.enterEmailInput(account);
    await this.enterPasswordInput(password);
    await this.clickLoginButton();
  }
}
