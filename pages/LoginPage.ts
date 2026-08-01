import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class LoginPage extends CommonPage {
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  private lblErrorMessage: Locator;
  private swalPopup: Locator;
  private lnkRegisterNow: Locator;
  private btnUserMenu: Locator;
  private btnOpenLoginModal: Locator;
  private btnCloseModal: Locator;

  constructor(page: Page) {
    super(page);

    this.emailInput = page.locator("#email").or(page.getByRole("textbox", { name: "Email" })).first();
    this.passwordInput = page.locator("#password").or(page.getByRole("textbox", { name: "Mật khẩu", exact: true })).first();
    this.loginButton = page.locator("button[type='submit']").or(page.getByRole("button", { name: "Đăng nhập" })).first();

    this.lblErrorMessage = page.locator(".text-red-500, span.text-red-500");
    this.swalPopup = page.locator(".swal2-popup, .swal2-html-container, .swal2-title, .ant-message, .ant-message-notice");
    this.lnkRegisterNow = page.locator("form a, form span, form button").filter({ hasText: /đăng ký/i }).first();
    this.btnUserMenu = page.locator("button.rounded-full, header button:has(svg)").first();
    this.btnOpenLoginModal = page.locator("button:has-text('Đăng nhập'), a:has-text('Đăng nhập')").or(page.locator("text=Đăng Nhập"));
    this.btnCloseModal = page.locator(".ant-modal-close, button[aria-label='Close'], button.ant-modal-close").first();
  }

  async gotoLoginPage() {
    await this.page.goto("/");
    await this.page.waitForLoadState("domcontentloaded");

    await this.btnUserMenu.waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });
    await this.click(this.btnUserMenu, TimeOutConstants.TIME_OUT_DEFAULT);

    await this.btnOpenLoginModal.first().waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });
    await this.click(this.btnOpenLoginModal.first(), TimeOutConstants.TIME_OUT_DEFAULT);

    await this.emailInput.waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });
  }

  async enterEmailInput(account: string) {
    await this.emailInput.fill(account);
  }

  async enterEmail(
    email: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.inputText(this.emailInput, email, timeOut);
  }

  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterPassword(
    password: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.inputText(this.passwordInput, password, timeOut);
  }

  async clickLoginButton(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.click(this.loginButton, timeOut);
  }

  async login(account: string, password: string) {
    await this.enterEmail(account);
    await this.enterPassword(password);
    await this.clickLoginButton();
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
    return this.emailInput;
  }

  get PasswordInput(): Locator {
    return this.passwordInput;
  }

  get LoginButton(): Locator {
    return this.loginButton;
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
    await this.swalPopup.waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });
    return await this.swalPopup.innerText();
  }
}