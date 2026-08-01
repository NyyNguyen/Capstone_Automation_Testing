import { Page, Locator } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { IRegisterData } from "../type/register.type";

export class RegisterPage extends CommonPage {
  // thuộc tính
  private registerTitle: Locator;
  private fullnameInput: Locator;
  private emailInput: Locator;
  private passwordInput: Locator;
  private showPasswordIcon: Locator;
  private hidePasswordIcon: Locator;
  private phonenumberInput: Locator;
  private birthdayInput: Locator;
  private calendarIcon: Locator;
  private datePickerDropdown: Locator;
  private genderDropdown: Locator;
  private maleOption: Locator;
  private femaleOption: Locator;
  private registerButton: Locator;

  constructor(page: Page) {
    super(page);
    this.registerTitle = page.getByRole("heading", {
      name: "Đăng ký tài khoản",
    });
    this.fullnameInput = page.getByRole("textbox", { name: "Name" });
    this.emailInput = page.getByRole("textbox", { name: "Email" });
    this.passwordInput = page.getByRole("textbox", {
      name: "Password",
      exact: true,
    });
    this.hidePasswordIcon = page.locator("//span[@aria-label='eye-invisible']");
    this.showPasswordIcon = page.locator('//span[@aria-label="eye"]');
    this.phonenumberInput = page.getByRole("textbox", { name: "Phone Number" });
    this.birthdayInput = page.getByRole("textbox", { name: "Birthday" });
    this.calendarIcon = page.locator("//span[@aria-label='calendar']");
    this.datePickerDropdown = page.locator(
      "//div[contains(@class, 'ant-picker-dropdown')]",
    );
    this.genderDropdown = page.getByRole("combobox", { name: "Gender" });
    this.maleOption = page.getByText("Nam", { exact: true });
    this.femaleOption = page.getByText("Nữ", { exact: true });
    this.registerButton = page.getByRole("button", { name: "Đăng ký" });
  }

  getRegisterTitle() {
    return this.registerTitle;
  }

  getFullnameInput() {
    return this.fullnameInput;
  }

  getEmailInput() {
    return this.emailInput;
  }

  getPasswordInput() {
    return this.passwordInput;
  }

  getPhonenumberInput() {
    return this.phonenumberInput;
  }

  getBirthdayInput() {
    return this.birthdayInput;
  }

  getGenderDropdown() {
    return this.genderDropdown;
  }

  getMaleOption() {
    return this.maleOption;
  }

  getFemaleOption() {
    return this.femaleOption;
  }

  getRegisterButton() {
    return this.registerButton;
  }

  gethidePasswordIcon() {
    return this.hidePasswordIcon;
  }
  getshowPasswordIcon() {
    return this.showPasswordIcon;
  }

  getCalendarIcon() {
    return this.calendarIcon;
  }

  getdatePickerDropdown() {
    return this.datePickerDropdown;
  }

  async enterFullnameInput(fullname: string) {
    await this.fullnameInput.fill(fullname);
  }

  async enterEmailInput(email: string) {
    await this.emailInput.fill(email);
  }

  async enterPasswordInput(password: string) {
    await this.passwordInput.fill(password);
  }
  async enterPhonenumberInput(phonenumber: string) {
    await this.phonenumberInput.fill(phonenumber);
  }

  async selectBirthdayInput(day: string, month: string, year: string) {
    // Mở DatePicker
    await this.birthdayInput.click();

    // =========================
    // 1. CHỌN NĂM
    // =========================

    const yearButton = this.page.locator(
      "//button[contains(@class,'ant-picker-year-btn')]",
    );

    await yearButton.click();

    const targetYear = Number(year);

    const targetYearLocator = this.page
      .locator("//div[contains(@class,'ant-picker-cell-inner')]")
      .filter({
        hasText: new RegExp(`^${targetYear}$`),
      });

    const previousButton = this.page.locator(
      "//button[contains(@class, 'ant-picker-header-super-prev-btn')]",
    );

    const nextButton = this.page.locator(
      "//button[contains(@class, 'ant-picker-header-super-next-btn')]",
    );

    while (!(await targetYearLocator.isVisible())) {
      const pickerText = await this.page
        .locator("//div[contains(@class,'ant-picker-header-view')]")
        .innerText();

      const years = pickerText.match(/\d{4}/g);

      if (!years || years.length == 0) {
        throw new Error("Không lấy được khoảng năm hiện tại");
      }

      const firstYear = Number(years[0]);
      const lastYear = Number(years[years.length - 1]);

      if (targetYear < firstYear) {
        await previousButton.click();
      } else if (targetYear > lastYear) {
        await nextButton.click();
      } else {
        break;
      }
    }

    await targetYearLocator.click();

    // =========================
    // 2. CHỌN THÁNG
    // =========================

    const monthButton = this.page.locator(
      "//button[contains(@class, 'ant-picker-month-btn')]",
    );

    if (await monthButton.isVisible()) {
      await monthButton.click();
    }

    await this.page
      .locator("//div[contains(@class,'ant-picker-cell-inner')]")
      .filter({
        hasText: new RegExp(`^${month}$`),
      })
      .click();

    // =========================
    // 3. CHỌN NGÀY
    // =========================

    const targetDay = this.page
      .locator(
        '//td[contains(@class, "ant-picker-cell-in-view")]/descendant::div',
      )
      .filter({
        hasText: new RegExp(`^${day}$`),
      });

    await targetDay.click();
  }

  async selectGender(gender: "Nam" | "Nữ") {
    const genderSelect = this.page.locator(
      "//div[@name='gender']//div[contains(@class,'ant-select-selector')]",
    );

    await genderSelect.click();

    if (gender === "Nam") {
      await this.maleOption.click();
    } else {
      await this.femaleOption.click();
    }
  }
  async clickRegisterButton() {
    await this.registerButton.click();
  }

  // async register(
  //   fullname: string,
  //   email: string,
  //   password: string,
  //   phonenumber: string,
  //   day: string,
  //   month: string,
  //   year: string,
  //   gender: "Nam" | "Nữ",
  // ) {
  //   await this.enterFullnameInput(fullname);
  //   await this.enterEmailInput(email);
  //   await this.enterPasswordInput(password);
  //   await this.enterPhonenumberInput(phonenumber);
  //   await this.selectBirthdayInput(day, month, year);
  //   await this.selectGender(gender);
  //   await this.clickRegisterButton();
  // }
  async register(data: IRegisterData) {
    await this.enterFullnameInput(data.fullname);
    await this.enterEmailInput(data.email);
    await this.enterPasswordInput(data.password);
    await this.enterPhonenumberInput(data.phonenumber);
    await this.selectBirthdayInput(data.day, data.month, data.year);
    await this.selectGender(data.gender);
    await this.clickRegisterButton();
  }
}
