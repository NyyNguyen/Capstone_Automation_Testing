import { Locator, Page } from "@playwright/test";
import { CommonPage } from "./CommonPage";
import { TimeOutConstants } from "../constants/TimeOutConstants";

export class RoomDetailPage extends CommonPage {
  readonly RoomTitleLabel: Locator;
  readonly RoomCoverImage: Locator;
  readonly HostInfoSection: Locator;
  readonly RoomDescription: Locator;
  readonly AmenitiesList: Locator;
  
  readonly BookingWidgetContainer: Locator;
  readonly NightlyPriceLabel: Locator;
  readonly RatingLink: Locator;
  
  readonly CheckInButton: Locator;
  readonly CheckOutButton: Locator;
  readonly DatePickerContainer: Locator;
  readonly DatePickerCloseButton: Locator;
  
  readonly GuestDecreaseButton: Locator;
  readonly GuestIncreaseButton: Locator;
  readonly GuestCountDisplay: Locator;
  
  readonly RoomSubtotalLabel: Locator;
  readonly CleaningFeeLabel: Locator;
  readonly TotalPriceLabel: Locator;
  readonly BookRoomButton: Locator;

  readonly ReviewSectionHeader: Locator;
  readonly OverallRatingScore: Locator;
  readonly TotalReviewsCount: Locator;
  readonly CommentItemsList: Locator;
  
  readonly CommentInputTextArea: Locator;
  readonly RatingStarsContainer: Locator;
  readonly RatingStarNth: (starIndex: number) => Locator;
  readonly SubmitCommentButton: Locator;
  
  readonly EditCommentButton: Locator;
  readonly DeleteCommentButton: Locator;

  readonly TranslateToEnglishButton: Locator;
  readonly SwalPopup: Locator;

  constructor(page: Page) {
    super(page);
    
    this.RoomTitleLabel = page.getByText(/NewApt D1 - Cozy studio/i).first();
    this.RoomCoverImage = page.locator("img[src*='phong'], img[alt*='apt'], img[alt*='Cozy']").first();
    this.HostInfoSection = page.getByText(/Chủ nhà|Host|bởi/i).first();
    this.RoomDescription = page.locator("p, div").filter({ hasText: /Mô tả/i }).first();
    this.AmenitiesList = page.getByText(/Tiện nghi|Wifi|Bếp|Điều hòa/i).first();
    
    this.BookingWidgetContainer = page.locator("button:has-text('Đặt phòng'), button:has-text('Đặt Ngay')").first();
    this.NightlyPriceLabel = page.getByText(/[$₫]28|\/ night|\/ đêm/i).first();
    this.RatingLink = page.getByText(/đánh giá|reviews/i).first();
    
    this.CheckInButton = page.getByRole("button", { name: /Nhận phòng|Check-in/i }).or(page.locator("input[placeholder*='nhận']")).first();
    this.CheckOutButton = page.getByRole("button", { name: /Trả phòng|Check-out/i }).or(page.locator("input[placeholder*='trả']")).first();
    this.DatePickerContainer = page.locator(".rdrCalendarWrapper, .react-datepicker, [class*='datepicker'], [class*='calendar']").first();
    this.DatePickerCloseButton = page.getByRole("button", { name: /Close|Đóng/i }).first();
    
    this.GuestDecreaseButton = page.getByRole("button", { name: "-" }).or(page.locator("button:has-text('-')")).first();
    this.GuestIncreaseButton = page.getByRole("button", { name: "+" }).or(page.locator("button:has-text('+')")).first();
    this.GuestCountDisplay = page.getByText(/khách/i).first();
    
    this.RoomSubtotalLabel = page.locator("[class*='subtotal'], text=/$/").first();
    this.CleaningFeeLabel = page.getByText(/vệ sinh|cleaning|Phí/i).first();
    this.TotalPriceLabel = page.getByText(/Tổng|Thành tiền|Total/i).first();
    this.BookRoomButton = page.getByRole("button", { name: /Đặt phòng|Đặt Ngay/i }).first();

    this.ReviewSectionHeader = page.locator("h2, h3, h4, div").filter({ hasText: /Bình luận|Đánh giá|Reviews/i }).first();
    this.OverallRatingScore = page.locator("[class*='rating'], [class*='score']").first();
    this.TotalReviewsCount = page.getByText(/bình luận|đánh giá/i).first();
    this.CommentItemsList = page.locator("[class*='comment-item'], [class*='review-item'], div.border-b, div.my-4");
    
    this.CommentInputTextArea = page.locator("textarea, input[placeholder*='bình luận'], input[placeholder*='đánh giá'], input[placeholder*='Viết']").first();
    this.RatingStarsContainer = page.locator("[class*='star-rating'], [class*='rating-input']").first();
    this.RatingStarNth = (starIndex: number) => page.locator("[class*='star'], svg").nth(starIndex - 1);
    this.SubmitCommentButton = page.getByRole("button", { name: /Gửi|Đăng|Bình luận|Submit/i }).first();
    
    this.EditCommentButton = page.getByRole("button", { name: /Sửa|Edit/i }).first();
    this.DeleteCommentButton = page.getByRole("button", { name: /Xóa|Delete/i }).first();

    this.TranslateToEnglishButton = page.getByRole("button", { name: /Dịch sang Tiếng Anh|Translate to English/i }).first();
    this.SwalPopup = page.locator(".swal2-popup, .swal2-title, .toast, [role='alert']");
  }

  async navigateToRoomDetail(
    locationName: string = "Hồ Chí Minh",
    roomTitle: string = "NewApt D1 - Cozy studio",
    timeOut: number = TimeOutConstants.TIME_OUT_DEFAULT
  ) {
    await this.page.goto("/", { waitUntil: "domcontentloaded", timeout: timeOut });
    
    const locationLocator = this.page.getByText(locationName, { exact: false }).first();
    if (await locationLocator.isVisible({ timeout: 5000 }).catch(() => false)) {
      await locationLocator.click({ force: true });
      await this.page.waitForTimeout(1000);
    }

    const roomLocator = this.page.getByText(roomTitle, { exact: false }).first();
    if (await roomLocator.isVisible({ timeout: 5000 }).catch(() => false)) {
      await roomLocator.click({ timeout: timeOut, force: true });
    } else {
      await this.page.goto("/room-detail/1", { waitUntil: "domcontentloaded" }).catch(() => {});
    }
    await this.page.waitForLoadState("domcontentloaded");
  }

  async submitComment(content: string, ratingStars?: number) {
    if (ratingStars && ratingStars >= 1 && ratingStars <= 5) {
      const star = this.RatingStarNth(ratingStars);
      if (await star.isVisible().catch(() => false)) {
        await star.click();
      }
    }
    if (await this.CommentInputTextArea.isVisible().catch(() => false)) {
      await this.CommentInputTextArea.fill(content);
    }
    if (await this.SubmitCommentButton.isVisible().catch(() => false)) {
      await this.SubmitCommentButton.click();
    }
  }
}
