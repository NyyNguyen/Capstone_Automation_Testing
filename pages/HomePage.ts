import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class HomePage extends CommonPage {
  readonly locationList: Locator;
  readonly searchInput: Locator;

  readonly locationLabel: Locator;
  readonly destinationLabel: Locator;
  readonly locationField: Locator;
  readonly locationPopup: Locator;
  readonly searchLocationTitle: Locator;

  readonly NoneCard: Locator;
  readonly HoChiMinhCard: Locator;
  readonly CanThoCard: Locator;
  readonly NhaTrangCard: Locator;
  readonly HaNoiCard: Locator;
  readonly PhuQuocCard: Locator;
  readonly DaNangCard: Locator;
  readonly DaLatCard: Locator;
  readonly PhanThietCard: Locator;

  readonly HoChiMinhLabel: Locator;
  readonly CanThoLabel: Locator;
  readonly NhaTrangLabel: Locator;
  readonly HaNoiLabel: Locator;
  readonly PhuQuocLabel: Locator;
  readonly DaNangLabel: Locator;
  readonly DaLatLabel: Locator;
  readonly PhanThietLabel: Locator;

  readonly body: Locator;
  readonly addPersonLabel: Locator;
  readonly addPersonField: Locator;
  readonly addPersonPopup: Locator;
  readonly khachLabel: Locator;
  readonly minusButton: Locator;
  readonly plusButton: Locator;
  readonly numberOfGuests: Locator;

  readonly iconSearch: Locator;
  readonly buttonLoaiNoiO: Locator;
  readonly buttonGia: Locator;
  readonly buttonDatNgay: Locator;
  readonly buttonPhongVaPhongNgu: Locator;
  readonly buttonBoLocKhac: Locator;

  readonly HoChiMinh: Locator;
  readonly CanTho: Locator;
  readonly NhaTrang: Locator;
  readonly HaNoi: Locator;
  readonly PhuQuoc: Locator;
  readonly DaNang: Locator;
  readonly DaLat: Locator;
  readonly PhanThiet: Locator;

  readonly fieldDate: Locator;
  readonly fieldDateText: Locator;
  readonly fieldDatePopup: Locator;
  readonly iconLeft: Locator;
  readonly iconRight: Locator;

  constructor(page: Page) {
    super(page);

    this.locationList = page.locator("text=/Hồ Chí Minh/i");
    this.searchInput = page.getByPlaceholder(/bạn muốn đến đâu/i);

    this.locationLabel = page.getByText("Địa điểm");
    this.destinationLabel = page.getByText("Bạn sắp đi đâu?");
    this.locationField = page.getByText("Địa điểm");
    this.locationPopup = page.getByText("Tìm kiếm địa điểmNoneHồ Chí");
    this.searchLocationTitle = page.getByRole("heading", {
      name: "Tìm kiếm địa điểm",
    });

    this.NoneCard = page.locator(".text-center > div");
    this.HoChiMinhCard = page
      .locator("div")
      .filter({ hasText: /^Hồ Chí Minh$/ });
    this.CanThoCard = page.locator("div").filter({ hasText: /^Cần Thơ$/ });
    this.NhaTrangCard = page.locator("div").filter({ hasText: /^Nha Trang$/ });
    this.HaNoiCard = page.locator("div").filter({ hasText: /^Hà Nội$/ });
    this.PhuQuocCard = page.locator("div").filter({ hasText: /^Phú Quốc$/ });
    this.DaNangCard = page.locator("div").filter({ hasText: /^Đà Nẵng$/ });
    this.DaLatCard = page.locator("div").filter({ hasText: /^Đà Lạt$/ });
    this.PhanThietCard = page
      .locator("div")
      .filter({ hasText: /^Phan Thiết$/ });

    this.body = page.locator("html");

    this.HoChiMinhLabel = page
      .getByRole("paragraph")
      .filter({ hasText: "Hồ Chí Minh" });
    this.CanThoLabel = page
      .getByRole("paragraph")
      .filter({ hasText: "Cần Thơ" });
    this.NhaTrangLabel = page
      .getByRole("paragraph")
      .filter({ hasText: "Nha Trang" });
    this.HaNoiLabel = page.getByRole("paragraph").filter({ hasText: "Hà Nội" });
    this.PhuQuocLabel = page
      .getByRole("paragraph")
      .filter({ hasText: "Phú Quốc" });
    this.DaNangLabel = page
      .getByRole("paragraph")
      .filter({ hasText: "Đà Nẵng" });
    this.DaLatLabel = page.getByRole("paragraph").filter({ hasText: "Đà Lạt" });
    this.PhanThietLabel = page
      .getByRole("paragraph")
      .filter({ hasText: "Phan Thiết" });

    this.addPersonLabel = page.getByText("Thêm khách");
    this.addPersonField = page
      .locator("div")
      .filter({ hasText: /^Thêm khách$/ });
    this.addPersonPopup = page.getByText("Khách-1+");
    this.khachLabel = page.getByText("Khách", { exact: true });
    this.minusButton = page.getByRole("button", { name: "-" });
    this.plusButton = page.getByRole("button", { name: "+" });
    this.numberOfGuests = page.locator(
      '//div[contains(@class,"flex")]/button[1]/following-sibling::div[1]'
    );

    this.iconSearch = page.locator(".bg-main.ml-5");
    this.buttonLoaiNoiO = page.getByRole("button", { name: "Loại nơi ở" });
    this.buttonGia = page.getByRole("button", { name: "Giá" });
    this.buttonDatNgay = page.getByRole("button", { name: "Đặt ngay" });
    this.buttonPhongVaPhongNgu = page.getByRole("button", {
      name: "Phòng và phòng ngủ",
    });
    this.buttonBoLocKhac = page.getByRole("button", { name: "Bộ lọc khác" });

    this.HoChiMinh = page.getByRole("link", {
      name: "Hồ Chí Minh 15 phút lái xe",
    });
    this.CanTho = page.getByRole("link", { name: "Cần Thơ 3 giờ lái xe" });
    this.NhaTrang = page.getByRole("link", { name: "Nha Trang 6.5 giờ lái xe" });
    this.HaNoi = page.getByRole("link", { name: "Hà Nội 15 phút lái xe" });
    this.PhuQuoc = page.getByRole("link", { name: "Phú Quốc 7.5 giờ lái xe" });
    this.DaNang = page.getByRole("link", { name: "Đà Nẵng 45 phút lái xe" });
    this.DaLat = page.getByRole("link", { name: "Đà Lạt 30 phút lái xe" });
    this.PhanThiet = page.getByRole("link", {
      name: "Phan Thiết 5 giờ lái xe",
    });

    this.fieldDate = page.locator(
      '(//div[contains(@class,"cursor-pointer")])[2]'
    );
    this.fieldDateText = page.locator(
      "//div[contains(@class,'col-span-4') and contains(@class,'cursor-pointer')]//p"
    );
    this.fieldDatePopup = page
      .locator("div")
      .filter({ hasText: "TodayYesterdayThis WeekLast" })
      .nth(5);
    this.iconLeft = page.getByRole("button").filter({ hasText: /^$/ }).nth(1);
    this.iconRight = page.getByRole("button").filter({ hasText: /^$/ }).nth(2);
  }

  async gotoHomePage(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.page.goto("/", {
      timeout: timeOut,
      waitUntil: "domcontentloaded",
    });
  }

  async selectLocation(
    locationName: string = "Hồ Chí Minh",
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    const locationLocator = this.page.locator(`text="${locationName}"`).first();
    await locationLocator.scrollIntoViewIfNeeded();
    await this.click(locationLocator, timeOut);
  }

  async selectRoomByTitle(
    roomTitle: string = "NewApt D1 - Cozy studio",
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    const roomLocator = this.page.locator(`text="${roomTitle}"`).first();
    await roomLocator.scrollIntoViewIfNeeded();
    await this.click(roomLocator, timeOut);
  }

  async clickLocationField() {
    await this.locationField.click();
  }

  async clickBody() {
    await this.body.click();
  }

  async clickNoneCard() {
    await this.NoneCard.click();
  }

  async clickHoChiMinhCard() {
    await this.HoChiMinhCard.click();
  }

  async clickCanThoCard() {
    await this.CanThoCard.click();
  }

  async clickNhaTrangCard() {
    await this.NhaTrangCard.click();
  }

  async clickHaNoiCard() {
    await this.HaNoiCard.click();
  }

  async clickPhuQuocCard() {
    await this.PhuQuocCard.click();
  }

  async clickDaNangCard() {
    await this.DaNangCard.click();
  }

  async clickDaLatCard() {
    await this.DaLatCard.click();
  }

  async clickPhanThietCard() {
    await this.PhanThietCard.click();
  }

  async clickAddPersonField() {
    await this.addPersonField.click();
  }

  async clickPlusButton() {
    await this.plusButton.click();
  }

  async clickMinusButton() {
    await this.minusButton.click();
  }

  async clickHoChiMinh() {
    await this.HoChiMinh.click();
  }

  async clickCanTho() {
    await this.CanTho.click();
  }

  async clickNhaTrang() {
    await this.NhaTrang.click();
  }

  async clickHaNoi() {
    await this.HaNoi.click();
  }

  async clickPhuQuoc() {
    await this.PhuQuoc.click();
  }

  async clickDaNang() {
    await this.DaNang.click();
  }

  async clickDaLat() {
    await this.DaLat.click();
  }

  async clickPhanThiet() {
    await this.PhanThiet.click();
  }

  async clickFieldDate() {
    await this.fieldDate.click();
  }

  async clickIconLeft() {
    await this.iconLeft.click();
  }

  async clickIconRight() {
    await this.iconRight.click();
  }

  async selectDay(day: string) {
    await this.page
      .locator(`(//div[@class='rdrMonth'])[1]//span[text()='${day}']`)
      .click();
  }
}
