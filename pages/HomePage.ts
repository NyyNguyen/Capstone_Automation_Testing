import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class HomePage extends CommonPage {
  readonly locationList: Locator;
  readonly searchInput: Locator;

  constructor(page: Page) {
    super(page);
    this.locationList = page.locator("text=/Hồ Chí Minh/i");
    this.searchInput = page.getByPlaceholder(/bạn muốn đến đâu/i);
  }

  async gotoHomePage(timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    await this.page.goto("/", { timeout: timeOut, waitUntil: "domcontentloaded" });
  }

  async selectLocation(locationName: string = "Hồ Chí Minh", timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    const locationLocator = this.page.locator(`text="${locationName}"`).first();
    await locationLocator.scrollIntoViewIfNeeded();
    await this.click(locationLocator, timeOut);
  }

  async selectRoomByTitle(roomTitle: string = "NewApt D1 - Cozy studio", timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT) {
    const roomLocator = this.page.locator(`text="${roomTitle}"`).first();
    await roomLocator.scrollIntoViewIfNeeded();
    await this.click(roomLocator, timeOut);
  }
}