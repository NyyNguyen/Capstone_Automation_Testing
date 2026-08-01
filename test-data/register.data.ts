import { IRegisterData } from "../type/register.type";

export const registerData: IRegisterData = {
  fullname: "Testing Playwright",
  email: `${crypto.randomUUID()}@gmail.com`,
  password: "Testing15_playwright",
  phonenumber: "0909787878",
  day: "17",
  month: "Sep",
  year: "2002",
  gender: "Nữ",
};