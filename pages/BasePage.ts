import { Locator, Page } from "@playwright/test";
import { TimeOutConstants } from "../constants/TimeOutConstants";


export class BasePage {
  //thuộc tính
  protected page: Page;

  //constructor
  constructor(page: Page) {
    this.page = page;
  }

  //phương thức
  async inputText(
    locator: Locator,
    text: string,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.fill(text);
  }

  async click(
    locator: Locator,
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT,
  ) {
    await locator.click();
  }
}
