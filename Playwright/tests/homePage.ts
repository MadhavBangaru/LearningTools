import { Page } from "@playwright/test";

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    // Update the URL to your actual homepage if different
    await this.page.goto("https://playwright.dev/");
  }

  async clickDashboardLink() {
    // Adjust the selector to match the dashboard link on your homepage
    await this.page.getByRole("link", { name: "Dashboard" }).click();
  }

  // Add more homepage-specific methods here
}
