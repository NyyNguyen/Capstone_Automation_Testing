import { expect, test } from "../fixtures/page-fixture";
import { getBookingDate } from "../constants/Date";

test("TC_01: Xác minh hiển thị label [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.locationLabel).toBeVisible();
});

test("TC_02: Xác minh hiển thị label [Bạn sắp đi đâu?]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.destinationLabel).toBeVisible();
});

test("TC_03: Xác minh nhấn vào field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await expect(page.getByText("Tìm kiếm địa điểm")).toBeVisible();

  await expect(homePage.locationPopup).toBeVisible();

  await expect(homePage.searchLocationTitle).toBeVisible();

  await expect(homePage.NoneCard).toBeVisible();
  await expect(homePage.HoChiMinhCard).toBeVisible();
  await expect(homePage.CanThoCard).toBeVisible();
  await expect(homePage.NhaTrangCard).toBeVisible();
  await expect(homePage.HaNoiCard).toBeVisible();
  await expect(homePage.PhuQuocCard).toBeVisible();
  await expect(homePage.DaNangCard).toBeVisible();
  await expect(homePage.DaLatCard).toBeVisible();
  await expect(homePage.PhanThietCard).toBeVisible();
});

test("TC_04: Xác minh nhấn một lần nữa vào field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await expect(homePage.locationPopup).toBeHidden();
});

test("TC_05:Xác minh khi nhấn ra ngoài sau khi nhấn vào field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickBody();

  await expect(homePage.locationPopup).toBeHidden();
});

test("TC_06: Xác minh nhấn vào Card [Hồ Chí Minh] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickHoChiMinhCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.HoChiMinhLabel).toBeVisible();
});

test("TC_07: Xác minh nhấn vào Card [Cần Thơ] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickCanThoCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.CanThoLabel).toBeVisible();
});

test("TC_08: Xác minh nhấn vào Card [Nha Trang] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickNhaTrangCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.NhaTrangLabel).toBeVisible();
});

test("TC_09: Xác minh nhấn vào Card [hà Nội] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickHaNoiCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.HaNoiLabel).toBeVisible();
});

test("TC_10: Xác minh nhấn vào Card [Phú Quốc] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickPhuQuocCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.PhuQuocLabel).toBeVisible();
});

test("TC_11: Xác minh nhấn vào Card [Đà Nẵng] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickDaNangCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.DaNangLabel).toBeVisible();
});

test("TC_12: Xác minh nhấn vào Card [Đà Lạt] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickDaLatCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.DaLatLabel).toBeVisible();
});

test("TC_13: Xác minh nhấn vào Card [Phan Thiết] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickPhanThietCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.PhanThietLabel).toBeVisible();
});

test("TC_14: Xác minh nhấn vào Card [None] trong popup của field [Địa điểm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickLocationField();

  await homePage.clickNoneCard();

  await expect(homePage.locationPopup).toBeHidden();

  await expect(homePage.destinationLabel).toBeVisible();
});

test("TC_15: Xác minh hiển thị label [Thêm Khách]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.addPersonLabel).toBeVisible();
});

test("TC_16: Xác minh khi nhấn vào field [Thêm khách]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickAddPersonField();

  await expect(homePage.addPersonPopup).toBeVisible();

  await expect(homePage.khachLabel).toBeVisible();

  await expect(homePage.minusButton).toBeVisible();

  await expect(homePage.plusButton).toBeVisible();

  await expect(homePage.numberOfGuests).toBeVisible();
});

test("TC_17: Xác minh nhấn một lần nữa vào field [Thêm khách]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickAddPersonField();

  await expect(homePage.addPersonPopup).toBeHidden();
});

test("TC_18: Xác minh khi nhấn ra ngoài sau khi nhấn vào field [Thêm khách]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickAddPersonField();

  await homePage.clickBody();

  await expect(homePage.addPersonPopup).toBeHidden();
});

test("TC_19: Xác minh khi nhấn vào Iconbutton tăng trong popup thêm khách", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickAddPersonField();

  const beforeClickPlusButton = Number(
    await homePage.numberOfGuests.textContent(),
  );

  await homePage.clickPlusButton();

  await expect(homePage.minusButton).toBeEnabled();

  await expect(homePage.numberOfGuests).toHaveText(
    String(beforeClickPlusButton + 1),
  );
});

test("TC_20: Xác minh khi nhấn vào Iconbutton giảm trong popup thêm khách", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickAddPersonField();

  await homePage.clickPlusButton();

  const beforeClickMinusButton = Number(
    await homePage.numberOfGuests.textContent(),
  );

  await homePage.clickMinusButton();

  await expect(homePage.numberOfGuests).toHaveText(
    String(beforeClickMinusButton - 1),
  );
});

test("TC_21: Xác minh khi nhấn vào Iconbutton giảm trong popup thêm khách khi số lượng khách là 1", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickAddPersonField();

  await expect(homePage.numberOfGuests).toHaveText("1");

  await expect(homePage.minusButton).toBeDisabled();
});

test("TC_22: Xác minh hiển thị Iconbutton [Tìm kiếm]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.iconSearch).toBeVisible();
});

test("TC_23: Xác minh hiển thị Button [Loại nơi ở]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.buttonLoaiNoiO).toBeVisible();
});

test("TC_24: Xác minh hiển thị Button [Giá]", async ({ page, homePage }) => {
  await page.goto("/");

  await expect(homePage.buttonGia).toBeVisible();
});

test("TC_25: Xác minh hiển thị Button [Đặt ngay]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.buttonDatNgay).toBeVisible();
});

test("TC_26: Xác minh hiển thị Button [Phòng và phòng ngủ]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.buttonPhongVaPhongNgu).toBeVisible();
});

test("TC_27: Xác minh hiển thị Button [Bộ lọc khác]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.buttonBoLocKhac).toBeVisible();
});

test("TC_28: Xác minh hiển thị Card [Hồ Chí minh]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.HoChiMinh).toBeVisible();
});

test("TC_29: Xác minh khi nhấn vào Card [Hồ Chí Minh]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickHoChiMinh();

  await expect(page).toHaveURL(
    "https://demo5.cybersoft.edu.vn/rooms/ho-chi-minh",
  );
});

test("TC_30: Xác minh hiển thị Card [Cần Thơ}", async ({ page, homePage }) => {
  await page.goto("/");

  await expect(homePage.CanTho).toBeVisible();
});

test("TC_31: Xác minh hiển thị Card [Hồ Chí minh]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickCanTho();

  await expect(page).toHaveURL("https://demo5.cybersoft.edu.vn/rooms/can-tho");
});

test("TC_32: Xác minh hiển thị Card [Nha Trang]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.NhaTrang).toBeVisible();
});

test("TC_33: Xác minh khi nhấn vào Card [Nha Trang]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickNhaTrang();

  await expect(page).toHaveURL(
    "https://demo5.cybersoft.edu.vn/rooms/nha-trang",
  );
});

test("TC_34: Xác minh hiển thị Card [Hà Nội]", async ({ page, homePage }) => {
  await page.goto("/");

  await expect(homePage.HaNoi).toBeVisible();
});

test("TC_35: Xác minh khi nhấn vào Card [Hà Nội]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickHaNoi();

  await expect(page).toHaveURL("https://demo5.cybersoft.edu.vn/rooms/ha-noi");
});

test("TC_36: Xác minh hiển thị Card [Phú Quốc]", async ({ page, homePage }) => {
  await page.goto("/");

  await expect(homePage.PhuQuoc).toBeVisible();
});

test("TC_37: Xác minh khi nhấn vào Card [Phú Quốc]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickPhuQuoc();

  await expect(page).toHaveURL("https://demo5.cybersoft.edu.vn/rooms/phu-quoc");
});

test("TC_38: Xác minh hiển thị Card [Đà Nẵng]", async ({ page, homePage }) => {
  await page.goto("/");

  await expect(homePage.DaNang).toBeVisible();
});

test("TC_39: Xác minh khi nhấn vào Card [Đà Nẵng]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickDaNang();

  await expect(page).toHaveURL("https://demo5.cybersoft.edu.vn/rooms/da-nang");
});

test("TC_40: Xác minh hiển thị Card [Đà Lạt]", async ({ page, homePage }) => {
  await page.goto("/");

  await expect(homePage.DaLat).toBeVisible();
});

test("TC_41: Xác minh khi nhấn vào Card [Đà Lạt]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickDaLat();

  await expect(page).toHaveURL("https://demo5.cybersoft.edu.vn/rooms/da-lat");
});

test("TC_42: Xác minh hiển thị Card [Phan Thiết]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.PhanThiet).toBeVisible();
});

test("TC_43: Xác minh khi nhấn vào Card [Phan Thiết]", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickPhanThiet();

  await expect(page).toHaveURL(
    "https://demo5.cybersoft.edu.vn/rooms/phan-thiet",
  );
});

test("TC_44: Xác minh hiển thị field ngày đặt phòng", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await expect(homePage.fieldDate).toBeVisible();
});

test("TC_45: Xác minh khi nhấn vào field ngày đặt phòng", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickFieldDate();

  await expect(homePage.fieldDatePopup).toBeVisible();
});

test("TC_46: Xác minh nhấn một lần nữa vào field ngày đặt phòng", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickFieldDate();

  await expect(homePage.fieldDatePopup).toBeHidden();
});

test("TC_47: Xác minh khi nhấn ra ngoài sau khi nhấn vào field ngày đặt phòng", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickFieldDate();

  await homePage.clickBody();

  await expect(homePage.fieldDatePopup).toBeHidden();
});

test("TC_48: Xác minh khi nhấn vào Iconbutton mũi tên sang trái trong popup", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickFieldDate();

  const beforeClickIconLeft = await homePage.fieldDatePopup.textContent();

  await homePage.clickIconLeft();

  await expect(homePage.fieldDatePopup).toHaveText(beforeClickIconLeft!);
});

test("TC_49: Xác minh khi nhấn vào Iconbutton mũi tên sang phải trong popup", async ({
  page,
  homePage,
}) => {
  await page.goto("/");

  await homePage.clickFieldDate();

  const leftMonth = page.locator("(//div[contains(@class,'rdrMonthName')])[1]");

  const beforeClickIconRight = await leftMonth.textContent();

  await homePage.clickIconRight();

  await expect(leftMonth).not.toHaveText(beforeClickIconRight!);
});

test("TC_50: Xác minh khi chọn ngày check-out trùng ngày check-in", async ({
  page,
  homePage,
}) => {
  const bookingDate = getBookingDate(0);

  await page.goto("/");

  await homePage.clickFieldDate();

  await homePage.selectDay(bookingDate.checkIn);
  await homePage.selectDay(bookingDate.checkOut);

  const fieldDate = await homePage.fieldDateText.textContent();

  const [displayCheckIn, displayCheckOut] = fieldDate!
    .split("–")
    .map((item) => item.trim());

  expect(displayCheckIn).toBe(displayCheckOut);
});
