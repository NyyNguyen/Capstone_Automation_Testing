import { Locator, Page } from "@playwright/test";
import { BasePage } from "../BasePage";
import { TimeOutConstants } from "../../constants/TimeOutConstants";

export class TopBarComponent extends BasePage {
    private lnkRegister: Locator;
    private lnkLogin : Locator;

    constructor(page:Page){
        super(page);
        this.lnkRegister = page.getByRole("link", { name: "Đăng Ký" });
        this.lnkLogin = page.getByRole("link", { name: "Đăng Nhập" });
    }

    async navigateToRegisterPage(
        timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
    ){
        await this.click(this.lnkRegister, timeOut);
    }

    async navigateToLoginPage(
        timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
    ){
        await this.click(this.lnkLogin, timeOut);
    }
}