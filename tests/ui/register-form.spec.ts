import { expect, test } from "../../fixtures/page-fixtures";
import { RegisterPage } from "../../pages/RegisterPage";
import { registerData } from "../../test-data/register.data";

test.describe("Register Form", () => {
  test.beforeEach(async ({ page, homePage }) => {
    await page.goto("/");

    // Mở popup đăng ký
    await homePage.getTopBarComponent().navigateToRegisterPage();
  });

  test("TC_Register_01: Verify registration form is displayed", async ({
    registerPage,
  }) => {
    // Lấy các locator
    const registerTitle = registerPage.getRegisterTitle();
    const fullnameInput = registerPage.getFullnameInput();
    const emailInput = registerPage.getEmailInput();
    const passwordInput = registerPage.getPasswordInput();
    const phoneNumberInput = registerPage.getPhonenumberInput();
    const birthdayInput = registerPage.getBirthdayInput();
    const genderDropdown = registerPage.getGenderDropdown();
    const registerButton = registerPage.getRegisterButton();
    const showPasswordIcon = registerPage.getshowPasswordIcon();
    const hidePasswordIcon = registerPage.gethidePasswordIcon();

    // Verify các thành phần hiển thị
    await expect(registerTitle).toBeVisible();
    await expect(fullnameInput).toBeVisible();
    await expect(emailInput).toBeVisible();
    await expect(passwordInput).toBeVisible();
    await expect(phoneNumberInput).toBeVisible();
    await expect(birthdayInput).toBeVisible();
    await expect(genderDropdown).toBeVisible();
    await expect(registerButton).toBeVisible();

    // Verify password mặc định đang được ẩn
    await expect(passwordInput).toHaveAttribute("type", "password");

    // Verify icon Ẩn mật khẩu hiển thị
    await expect(hidePasswordIcon).toBeVisible();

    // Verify icon Hiện mật khẩu không hiển thị
    await expect(showPasswordIcon).toBeHidden();
  });

  test("TC_Register_02: Verify name textbox display", async ({
    registerPage,
  }) => {
    const nameTextbox = registerPage.getFullnameInput();

    // Verify textbox hiển thị
    await expect(nameTextbox).toBeVisible();

    // Verify textbox được enable
    await expect(nameTextbox).toBeEnabled();

    // Verify giá trị mặc định rỗng
    await expect(nameTextbox).toHaveValue("");

    // Verify placeholder
    await expect(nameTextbox).toHaveAttribute(
      "placeholder",
      "Điền tên vào đây...",
    );

    // Hover vào textbox
    await nameTextbox.hover();
  });

  test("TC_Register_03: Verify email textbox display", async ({
    registerPage,
  }) => {
    const emailTextbox = registerPage.getEmailInput();

    // Verify textbox hiển thị
    await expect(emailTextbox).toBeVisible();

    // Verify textbox được enable
    await expect(emailTextbox).toBeEnabled();

    // Verify giá trị mặc định rỗng
    await expect(emailTextbox).toHaveValue("");

    // Hover
    await emailTextbox.hover();

    // Verify placeholder
    await expect(emailTextbox).toHaveAttribute(
      "placeholder",
      "Điền email vào đây...",
    );
  });

  test("TC_Register_04: Verify password textbox display", async ({
    registerPage,
  }) => {
    const passwordTextbox = registerPage.getPasswordInput();

    // Verify textbox hiển thị
    await expect(passwordTextbox).toBeVisible();

    // Verify textbox được enable
    await expect(passwordTextbox).toBeEnabled();

    // Verify giá trị mặc định rỗng
    await expect(passwordTextbox).toHaveValue("");

    // Verify placeholder
    await expect(passwordTextbox).toHaveAttribute(
      "placeholder",
      "Điền mật khẩu....",
    );

    // Hover
    await passwordTextbox.hover();
  });

  test("TC_Register_05: Verify phone number textbox display", async ({
    registerPage,
  }) => {
    const phoneTextbox = registerPage.getPhonenumberInput();

    // Verify textbox hiển thị
    await expect(phoneTextbox).toBeVisible();

    // Verify textbox được enable
    await expect(phoneTextbox).toBeEnabled();

    // Verify giá trị mặc định
    await expect(phoneTextbox).toHaveValue("");

    // Verify placeholder
    await expect(phoneTextbox).toHaveAttribute(
      "placeholder",
      "Điền số điện thoại....",
    );

    // Hover
    await phoneTextbox.hover();
  });

  test("TC_Register_06: Verify birthday textbox display", async ({
    registerPage,
  }) => {
    const birthdayTextbox = registerPage.getBirthdayInput();

    // Verify textbox hiển thị
    await expect(birthdayTextbox).toBeVisible();

    // Verify textbox được enable
    await expect(birthdayTextbox).toBeEnabled();

    // Verify giá trị mặc định
    await expect(birthdayTextbox).toHaveValue("");

    // Verify placeholder
    await expect(birthdayTextbox).toHaveAttribute(
      "placeholder",
      "Chọn ngày sinh",
    );

    // Hover
    await birthdayTextbox.hover();
  });

  test("TC_Register_07: Verify calendar icon display", async ({
    registerPage,
  }) => {
    const calendarIcon = registerPage.getCalendarIcon();

    // Verify icon hiển thị
    await expect(calendarIcon).toBeVisible();

    // Verify icon cho phép click
    await expect(calendarIcon).toBeEnabled();
  });

  test("TC_Register_08: Verify gender combobox display", async ({
    registerPage,
    page,
  }) => {
    const genderDropdown = registerPage.getGenderDropdown();
    const genderSelect = page.locator(
      "//div[@name='gender']//div[contains(@class,'ant-select-selector')]",
    );
    // Verify combobox hiển thị
    await expect(genderDropdown).toBeVisible();

    // Verify combobox cho phép click
    await expect(genderDropdown).toBeEnabled();

    // Verify giá trị mặc định
    await expect(genderDropdown).toHaveValue("");

    // Verify placeholder
    await expect(genderSelect).toContainText("Chọn giới tính");

    // Verify danh sách giá trị
    await genderDropdown.click();

    await expect(registerPage.getMaleOption()).toBeVisible();
    await expect(registerPage.getFemaleOption()).toBeVisible();

    // Hover
    await genderDropdown.hover();
  });

  test("TC_Register_09: Verify register button display", async ({
    registerPage,
  }) => {
    const registerButton = registerPage.getRegisterButton();

    // Verify button hiển thị
    await expect(registerButton).toBeVisible();

    // Verify button cho phép click
    await expect(registerButton).toBeEnabled();

    // Verify text
    await expect(registerButton).toHaveText("Đăng ký");

    // Hover
    await registerButton.hover();
  });

  test("TC_Register_10: Verify password icon display", async ({
    registerPage,
  }) => {
    const hidePasswordIcon = registerPage.gethidePasswordIcon();

    // Verify icon Ẩn mật khẩu hiển thị
    await expect(hidePasswordIcon).toBeVisible();

    // Verify icon mặc định là Ẩn mật khẩu
    await expect(hidePasswordIcon).toHaveAttribute(
      "aria-label",
      "eye-invisible",
    );

    // Verify icon cho phép click
    await expect(hidePasswordIcon).toBeEnabled();

    // Hover vào icon
    await hidePasswordIcon.hover();
  });

  test("TC_Register_11: Verify name textbox is required", async ({
    registerPage,
    page,
  }) => {
    // Nhập các trường còn lại
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "0123456789";
    const year = "2005";
    const month = "Aug";
    const day = "15";
    const gender = "Nữ";
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click Đăng ký
    await registerPage.clickRegisterButton();

    // Verify thông báo lỗi
    await expect(page.getByText("Vui lòng không bỏ trống")).toBeVisible();
  });

  test("TC_Register_12: Verify email textbox is required", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const password = "testing15_playwright";
    const phonenumber = "0909787878";
    const year = "2004";
    const month = "May";
    const day = "10";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    await registerPage.clickRegisterButton();

    await expect(page.getByText("Vui lòng không bỏ trống")).toBeVisible();
  });

  test("TC_Register_13: Verify password textbox is required", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const phonenumber = "0909787878";
    const day = "10";
    const month = "May";
    const year = "2003";
    const gender = "Nữ";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    await registerPage.clickRegisterButton();

    await expect(page.getByText("Vui lòng không bỏ trống")).toBeVisible();
  });

  test("TC_Register_14: Verify phone number textbox is required", async ({
    registerPage,
    page,
  }) => {
    const fullname = "An";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "123";
    const day = "17";
    const month = "May";
    const year = "2002";
    const gender = "Nữ";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    await registerPage.clickRegisterButton();

    await expect(page.getByText("Vui lòng không bỏ trống")).toBeVisible();
  });

  test("TC_Register_15: Verify birthday textbox is required", async ({
    registerPage,
    page,
  }) => {
    const fullname = "An";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "123";
    const phonenumber = "0909787878";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectGender(gender);

    // Không chọn Birthday

    await registerPage.clickRegisterButton();

    await expect(page.getByText("Vui lòng chọn ngày sinh")).toBeVisible();
  });

  test("TC_Register_16: Verify register successfully without gender", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "0909787878";
    const day = "10";
    const month = "May";
    const year = "2003";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);

    // Không chọn Gender

    await registerPage.clickRegisterButton();
    await expect(page.getByText("Đăng ký thành công")).toBeVisible();
    const loginPopup = page.getByRole("heading", { name: "Đăng nhập" });
    await expect(loginPopup).toBeVisible();
  });

  test("TC_Register_17: Verify registration with existing name", async ({
    registerPage,
    page,
  }) => {
    await registerPage.register(registerData);
    await expect(page.getByText("Đăng ký thành công")).toBeVisible();
    const loginPopup = page.getByRole("heading", { name: "Đăng nhập" });
    await expect(loginPopup).toBeVisible();
  });

  test("TC_Register_18: Verify invalid email format", async ({
    registerPage,
    page,
  }) => {
    await registerPage.enterFullnameInput("Trâm");

    // Nhập email sai định dạng
    await registerPage.enterEmailInput("tram121");

    // Blur khỏi Email
    await registerPage.getPasswordInput().click();

    // Verify thông báo lỗi
    await expect(
      page.getByText("Vui lòng nhập đúng định dạng email"),
    ).toBeVisible();
  });

  test("TC_Register_19: Verify email contains only numbers", async ({
    registerPage,
    page,
  }) => {
    await registerPage.enterFullnameInput("Trâm");

    // Chỉ nhập số
    await registerPage.enterEmailInput("121345");

    // Blur khỏi Email
    await registerPage.getPasswordInput().click();

    // Verify thông báo lỗi
    await expect(
      page.getByText("Vui lòng nhập đúng định dạng email"),
    ).toBeVisible();
  });

  test("TC_Register_20: Verify existing email when click register button", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `tam2@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "0909787878";
    const day = "10";
    const month = "May";
    const year = "2003";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click Đăng ký
    await registerPage.clickRegisterButton();

    // Verify thông báo email đã tồn tại
    await expect(page.getByText("Email đã tồn tại !")).toBeVisible();
  });

  test("TC_Register_21: Verify existing email on blur", async ({
    registerPage,
    page,
  }) => {
    // Nhập email đã tồn tại
    await registerPage.enterEmailInput("tam2@gmail.com");

    // Click ra ngoài textbox Email
    await registerPage.getPasswordInput().click();

    // Kiểm tra thông báo lỗi
    await expect(
      page.getByText("Email đã tồn tại !", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_22: Verify password minimum length validation", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "t";
    const phonenumber = "0909787878";
    const day = "20";
    const month = "Jun";
    const year = "2004";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click nút Đăng ký
    await registerPage.clickRegisterButton();

    // Verify thông báo lỗi Password
    await expect(
      page.getByText("Mật khẩu phải có ít nhất 6 kí tự!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_23: Verify password minimum length validation on blur", async ({
    registerPage,
    page,
  }) => {
    // Nhập Password chỉ có 1 ký tự
    await registerPage.enterPasswordInput("t");

    // Click ra ngoài để trigger validation (blur)
    await registerPage.getPhonenumberInput().click();

    // Verify thông báo lỗi
    await expect(
      page.getByText("Mật khẩu phải có ít nhất 6 kí tự!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_24: Verify password validation when entering special characters only", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "&*&*##";
    const phonenumber = "0909787878";
    const day = "20";
    const month = "Jun";
    const year = "2004";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click nút Đăng ký
    await registerPage.clickRegisterButton();

    // Verify thông báo lỗi
    await expect(
      page.getByText("Mật khẩu phải bao gồm chữ cái, số và kí tự đặc biệt!", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("TC_Register_25: Verify password validation when entering letters only", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "thanhngoc";
    const phonenumber = "0909787878";
    const day = "20";
    const month = "Jun";
    const year = "2004";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click nút Đăng ký
    await registerPage.clickRegisterButton();

    // Verify thông báo lỗi
    await expect(
      page.getByText("Mật khẩu phải bao gồm chữ cái, số và kí tự đặc biệt!", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("TC_Register_26: Verify password validation when entering numbers only", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "101010";
    const phonenumber = "0909787878";
    const day = "15";
    const month = "Jun";
    const year = "2001";
    const gender = "Nữ";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click nút Đăng ký
    await registerPage.clickRegisterButton();

    // Verify thông báo lỗi
    await expect(
      page.getByText("Mật khẩu phải bao gồm chữ cái, số và kí tự đặc biệt!", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("TC_Register_27: Verify registration with valid password", async ({
    registerPage,
    page,
  }) => {
    await registerPage.register(registerData);
    await expect(page.getByText("Đăng ký thành công")).toBeVisible();
    const loginPopup = page.getByRole("heading", { name: "Đăng nhập" });
    await expect(loginPopup).toBeVisible();
  });

  test("TC_Register_28: Verify registration age under 18 validation", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "0909787878";
    const day = "20";
    const month = "Jun";
    const year = "2015";
    const gender = "Nữ";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click nút Đăng ký
    await registerPage.clickRegisterButton();
    await expect(
      page.getByText("Bạn chưa đủ 18 tuổi để đăng ký tài khoản!", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("TC_Register_29: Verify birthday age is 18 or older", async ({
    registerPage,
    page,
  }) => {
    await registerPage.register(registerData);
    await expect(page.getByText("Đăng ký thành công")).toBeVisible();
    const loginPopup = page.getByRole("heading", { name: "Đăng nhập" });
    await expect(loginPopup).toBeVisible();
  });

  test("TC_Register_30: Verify birthday does not allow invalid manual input", async ({
    registerPage,
  }) => {
    const birthdayInput = registerPage.getBirthdayInput();
    await expect(birthdayInput).toHaveAttribute("readonly");
  });

  test("TC_Register_31: Verify changing birthday", async ({ registerPage }) => {
    // Chọn ngày sinh lần 1: 10/10/2004
    await registerPage.selectBirthdayInput("10", "Oct", "2004");

    // Verify giá trị ngày sinh lần 1
    await expect(registerPage.getBirthdayInput()).toHaveValue("10/10/2004");

    await registerPage.selectBirthdayInput("1", "Aug", "1999");

    await expect(registerPage.getBirthdayInput()).toHaveValue("01/08/1999");
  });

  test("TC_Register_32: Verify birthday date picker is displayed", async ({
    registerPage,
  }) => {
    await registerPage.getBirthdayInput().click();
    await expect(registerPage.getdatePickerDropdown()).toBeVisible();
  });

  test("TC_Register_33: Verify birthday date selection", async ({
    registerPage,
  }) => {
    const day = "2";
    const month = "Mar";
    const year = "1996";

    await registerPage.selectBirthdayInput(day, month, year);

    await expect(registerPage.getBirthdayInput()).toHaveValue("02/03/1996");

    await expect(registerPage.getdatePickerDropdown()).toBeHidden();
  });

  test("TC_Register_34: Verify gender selection", async ({ registerPage }) => {
    const gender = "Nữ";
    await registerPage.selectGender(gender);
  });

  test("TC_Register_35: Verify register successfully with valid data", async ({
    registerPage,
    page,
  }) => {
    await registerPage.register(registerData);
    await expect(page.getByText("Đăng ký thành công")).toBeVisible();
    const loginPopup = page.getByRole("heading", { name: "Đăng nhập" });
    await expect(loginPopup).toBeVisible();
  });

  test("TC_Register_36: Verify password is masked", async ({
    registerPage,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "Testing15_playwright";
    const phonenumber = "0909787878";
    const day = "23";
    const month = "Jun";
    const year = "1990";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify password được hiển thị dưới dạng ký tự ẩn
    await expect(registerPage.getPasswordInput()).toHaveAttribute(
      "type",
      "password",
    );
  });

  test("TC_Register_37: Verify password visibility when clicking the show password icon", async ({
    registerPage,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "Testing15_playwright";
    const phonenumber = "0909787878";
    const day = "17";
    const month = "Sep";
    const year = "1996";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify password được hiển thị dưới dạng ký tự ẩn
    await expect(registerPage.getPasswordInput()).toHaveAttribute(
      "type",
      "password",
    );

    // Nhấn icon Ẩn mật khẩu
    await registerPage.gethidePasswordIcon().click();

    // Verify password được hiển thị dưới dạng text
    await expect(registerPage.getPasswordInput()).toHaveAttribute(
      "type",
      "text",
    );

    // Verify giá trị password vẫn giữ nguyên
    await expect(registerPage.getPasswordInput()).toHaveValue(password);

    // Verify icon chuyển sang trạng thái Hiện mật khẩu
    await expect(registerPage.getshowPasswordIcon()).toBeVisible();
  });

  test("TC_Register_38: Verify password visibility when clicking the hide password icon", async ({
    registerPage,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "Testing15_playwright";
    const phonenumber = "0909787878";
    const day = "22";
    const month = "Sep";
    const year = "2003";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    await registerPage.gethidePasswordIcon().click();

    // Verify password được hiển thị dạng text
    await expect(registerPage.getPasswordInput()).toHaveAttribute(
      "type",
      "text",
    );

    // Click icon Hiện mật khẩu để ẩn password
    await registerPage.getshowPasswordIcon().click();

    // Verify password được hiển thị dưới dạng ký tự ẩn
    await expect(registerPage.getPasswordInput()).toHaveAttribute(
      "type",
      "password",
    );

    // Verify giá trị password vẫn giữ nguyên
    await expect(registerPage.getPasswordInput()).toHaveValue(password);
  });

  test("TC_Register_39: Verify textbox values are cleared after page reload", async ({
    registerPage,
    page,
    homePage,
  }) => {
    await registerPage.register(registerData);
    // Reload trang
    await page.reload();

    await homePage.getTopBarComponent().navigateToRegisterPage();

    // Verify các textbox bị xóa dữ liệu
    await expect(registerPage.getFullnameInput()).toHaveValue("");
    await expect(registerPage.getEmailInput()).toHaveValue("");
    await expect(registerPage.getPasswordInput()).toHaveValue("");
    await expect(registerPage.getPhonenumberInput()).toHaveValue("");

    // Verify Birthday bị reset
    await expect(registerPage.getBirthdayInput()).toHaveValue("");

    // Verify Gender bị reset
    await expect(registerPage.getGenderDropdown()).toHaveValue("");
  });

  test("TC_Register_40: Verify error message when entering less than 10 digits in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "09097";
    const day = "27";
    const month = "Jun";
    const year = "2000";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Click nút Đăng ký
    await registerPage.clickRegisterButton();
    await expect(
      page.getByText("Số điện thoại không hợp lệ", {
        exact: true,
      }),
    ).toBeVisible();
  });

  test("TC_Register_41: Verify valid phone number with 10 digits", async ({
    registerPage,
    page,
  }) => {
    await registerPage.register(registerData);
    await expect(page.getByText("Đăng ký thành công")).toBeVisible();
    const loginPopup = page.getByRole("heading", { name: "Đăng nhập" });
    await expect(loginPopup).toBeVisible();
  });

  test("TC_Register_42: Verify error message when entering more than 10 digits in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "090945678989";
    const day = "27";
    const month = "Jun";
    const year = "2001";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify thông báo lỗi
    await expect(
      page.getByText("Số điện thoại không hợp lệ", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_43: Verify error message when entering letters in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "01234567ab";
    const day = "26";
    const month = "Jun";
    const year = "2000";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify thông báo lỗi
    await expect(
      page.getByText("Vui lòng chỉ nhập số!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_44: Verify error message when entering special characters in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "01234567@9";
    const day = "26";
    const month = "Jun";
    const year = "2000";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify thông báo lỗi
    await expect(
      page.getByText("Vui lòng chỉ nhập số!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_45: Verify error message when entering 10 letters in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "abcdeghtyu";
    const day = "26";
    const month = "Jun";
    const year = "2000";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify thông báo lỗi
    await expect(
      page.getByText("Vui lòng chỉ nhập số!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_46: Verify error message when entering 10 special characters in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "**&&**&&@@**";
    const day = "12";
    const month = "Mar";
    const year = "2000";
    const gender = "Nữ";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify thông báo lỗi
    await expect(
      page.getByText("Vui lòng chỉ nhập số!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_47: Verify error message when entering an already registered phone number", async ({
    registerPage,
    page,
  }) => {
    await registerPage.register(registerData);
    // Verify thông báo lỗi
    await expect(
      page.getByText("Số điện thoại này đã được đăng ký!", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_48: Verify error message when entering a country code in the phone number field", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "+84909887766";
    const day = "10";
    const month = "May";
    const year = "1999";
    const gender = "Nam";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender(gender);

    // Verify thông báo lỗi
    await expect(
      page.getByText("Số điện thoại không hợp lệ", { exact: true }),
    ).toBeVisible();
  });

  test("TC_Register_49: Verify changing the gender selection", async ({
    registerPage,
    page,
  }) => {
    const fullname = "Testing Playwright";
    const email = `${crypto.randomUUID()}@gmail.com`;
    const password = "testing15_playwright";
    const phonenumber = "0909887766";
    const day = "10";
    const month = "Jan";
    const year = "1989";

    await registerPage.enterFullnameInput(fullname);
    await registerPage.enterEmailInput(email);
    await registerPage.enterPasswordInput(password);
    await registerPage.enterPhonenumberInput(phonenumber);
    await registerPage.selectBirthdayInput(day, month, year);
    await registerPage.selectGender("Nữ");
    await registerPage.selectGender("Nam");
  });

  test("TC_Register_50: Verify Registration With All Fields Empty", async ({
    registerPage,
    page,
  }) => {
    await registerPage.clickRegisterButton();

    const errorMessages = page.getByText("Vui lòng không bỏ trống", {
      exact: true,
    });
    const errorMessageBirthday = page.getByText("Vui lòng chọn ngày sinh", {
      exact: true,
    });
    // Có 4 thông báo lỗi cho Name, Email, Password, Phone Number
    await expect(errorMessages).toHaveCount(4);
    await expect(errorMessageBirthday).toBeVisible();
  });
});
