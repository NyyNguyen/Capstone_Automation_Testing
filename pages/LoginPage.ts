import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class LoginPage extends CommonPage {
  // Login page elements
  private emailInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  // Additional elements
  private lblErrorMessage: Locator;
  private swalPopup: Locator;
  private lnkRegisterNow: Locator;
  private btnUserMenu: Locator;
  private btnOpenLoginModal: Locator;
  private btnCloseModal: Locator;

  constructor(page: Page) {
    super(page);

    // Login elements
    this.emailInput = page.getByRole("textbox", { name: "Email" });

    this.passwordInput = page.getByRole("textbox", {
      name: "Mật khẩu",
      exact: true,
    });

    this.loginButton = page.getByRole("button", {
      name: "Đăng nhập",
    });

    // Additional elements
    this.lblErrorMessage = page.locator(
      ".text-red-500, span.text-red-500",
    );

    this.swalPopup = page.locator(
      ".swal2-popup, .swal2-html-container, .swal2-title, .ant-message, .ant-message-notice",
    );

    this.lnkRegisterNow = page
      .locator("form a, form span, form button")
      .filter({ hasText: /đăng ký/i })
      .first();

    this.btnUserMenu = page
      .locator("button.rounded-full, header button:has(svg)")
      .first();

    this.btnOpenLoginModal = page
      .locator(
        "button:has-text('Đăng nhập'), a:has-text('Đăng nhập')",
      )
      .or(page.locator("text=Đăng Nhập"));

    this.btnCloseModal = page
      .locator(
        ".ant-modal-close, button[aria-label='Close'], button.ant-modal-close",
      )
      .first();
  }

  // =========================
  // Open Login Page
  // =========================

  async gotoLoginPage() {
    await this.page.goto("/");
    await this.page.waitForLoadState("domcontentloaded");

    // Open user menu
    await this.btnUserMenu.waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });

    await this.click(
      this.btnUserMenu,
      TimeOutConstants.TIME_OUT_DEFAULT,
    );

    // Click Login option
    await this.btnOpenLoginModal.first().waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });

    await this.click(
      this.btnOpenLoginModal.first(),
      TimeOutConstants.TIME_OUT_DEFAULT,
    );

    // Wait for Login modal
    await this.emailInput.waitFor({
      state: "visible",
      timeout: TimeOutConstants.TIME_OUT_DEFAULT,
    });
  }

  // =========================
  // Enter Email
  // =========================

  async enterEmailInput(account: string) {
    await this.emailInput.fill(account);
  }

  async enterEmail(
    email: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.inputText(this.emailInput, email, timeOut);
  }

  // =========================
  // Enter Password
  // =========================

  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }

  async enterPassword(
    password: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.inputText(this.passwordInput, password, timeOut);
  }

  // =========================
  // Click Login
  // =========================

  async clickLoginButton(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.loginButton, timeOut);
  }

  // =========================
  // Login
  // =========================

  async login(account: string, password: string) {
    await this.enterEmailInput(account);
    await this.enterPasswordInput(password);
    await this.clickLoginButton();
  }

  // =========================
  // Register
  // =========================

  async clickRegisterNow(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await this.click(this.lnkRegisterNow, timeOut);
  }

  // =========================
  // Close Login Modal
  // =========================

  async closeLoginModal(
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    if (await this.btnCloseModal.isVisible()) {
      await this.click(this.btnCloseModal, timeOut);
    }
  }

  // =========================
  // Getters
  // =========================

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

  // =========================
  // Get Error Message
  // =========================

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