import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class TopBarComponent extends BasePage {
  private userIcon: Locator;
  private lnkRegister: Locator;
  private lnkLogin: Locator;

  constructor(page: Page) {
    super(page);
    this.userIcon = page.locator("(//img)[2]");
    this.lnkRegister = page.getByRole("button", { name: "Đăng ký" });
    this.lnkLogin = page.getByRole("button", { name: "Đăng Nhập" });
  }

  getLoginButton() {
    return this.lnkLogin;
  }

  getRegisterButton() {
    return this.lnkRegister;
  }

  async clickUserIcon(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.click(this.userIcon, timeOut);
  }

  async navigateToRegisterPage(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.userIcon, timeOut);
    await this.click(this.lnkRegister, timeOut);
  }

  async navigateToLoginPage(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.userIcon, timeOut);
    await this.click(this.lnkLogin, timeOut);
  }
}
