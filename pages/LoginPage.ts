import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class LoginPage extends CommonPage {
  private txtEmail: Locator;
  private txtPassword: Locator;
  private btnLogin: Locator;
  private lblErrorMessage: Locator;
  private swalPopup: Locator;
  private lnkRegisterNow: Locator;

  private btnUserMenu: Locator;
  private btnOpenLoginModal: Locator;

  private btnCloseModal: Locator;

  constructor(page: Page) {
    super(page);
    this.btnUserMenu = page.locator("button.rounded-full, header button:has(svg)").first();
    this.btnOpenLoginModal = page.locator("button:has-text('Đăng nhập'), a:has-text('Đăng nhập')").or(page.locator("text=Đăng Nhập"));
    this.txtEmail = page.locator("#email");
    this.txtPassword = page.locator("#password");
    this.btnLogin = page.locator("button[type='submit']");
    this.lblErrorMessage = page.locator(".text-red-500, span.text-red-500");
    this.swalPopup = page.locator(".swal2-popup, .swal2-html-container, .swal2-title, .ant-message, .ant-message-notice");
    this.lnkRegisterNow = page.locator("form a, form span, form button").filter({ hasText: /đăng ký/i }).first();
    this.btnCloseModal = page.locator(".ant-modal-close, button[aria-label='Close'], button.ant-modal-close").first();
  }

  async gotoLoginPage() {
    await this.page.goto("/");
    await this.page.waitForLoadState("domcontentloaded");
    
    await this.btnUserMenu.waitFor({ state: "visible", timeout: TimeOutConstants.TIME_OUT_DEFAULT });
    await this.click(this.btnUserMenu);
    
    await this.btnOpenLoginModal.first().waitFor({ state: "visible", timeout: TimeOutConstants.TIME_OUT_DEFAULT });
    await this.click(this.btnOpenLoginModal.first());

    await this.txtEmail.waitFor({ state: "visible", timeout: TimeOutConstants.TIME_OUT_DEFAULT });
  }

  async enterEmail(
    email: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.inputText(this.txtEmail, email, timeOut);
  }

  async enterPassword(
    password: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.inputText(this.txtPassword, password, timeOut);
  }

  async clickLoginButton(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.click(this.btnLogin, timeOut);
  }

  async login(
    email: string,
    password: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.enterEmail(email, timeOut);
    await this.enterPassword(password, timeOut);
    await this.clickLoginButton(timeOut);
  }

  async clickRegisterNow(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.click(this.lnkRegisterNow, timeOut);
  }

  async closeLoginModal(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    if (await this.btnCloseModal.isVisible()) {
      await this.click(this.btnCloseModal, timeOut);
    }
  }

  get EmailInput(): Locator {
    return this.txtEmail;
  }

  get PasswordInput(): Locator {
    return this.txtPassword;
  }

  get LoginButton(): Locator {
    return this.btnLogin;
  }

  get RegisterNowLink(): Locator {
    return this.lnkRegisterNow;
  }

  get CloseModalButton(): Locator {
    return this.btnCloseModal;
  }

  get ErrorMessageLabel(): Locator {
    return this.lblErrorMessage;
  }

  get SwalPopup(): Locator {
    return this.swalPopup;
  }

  async getErrorMessageText(): Promise<string> {
    return await this.lblErrorMessage.innerText();
  }

  async getSwalErrorMessageText(): Promise<string> {
    await this.swalPopup.waitFor({ state: "visible", timeout: TimeOutConstants.TIME_OUT_DEFAULT });
    return await this.swalPopup.innerText();
  }
}
