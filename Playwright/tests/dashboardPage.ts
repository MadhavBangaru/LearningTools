import { Page } from '@playwright/test';

export class DashboardPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isWelcomeVisible() {
    // Adjust the selector as needed for your dashboard's welcome element
    return this.page.getByText('Welcome').isVisible();
  }

  // Add more dashboard-specific methods here
}
