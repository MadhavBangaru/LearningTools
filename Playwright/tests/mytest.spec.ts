import { test, expect } from "@playwright/test";
import { HomePage } from "./homePage";
import { DashboardPage } from "./dashboardPage";

test("open dashboard in new tab and interact", async ({ page, context }) => {
  const home = new HomePage(page);
  await home.goto();

  // Click and wait for new page (tab/window) to open
  const [dashboardPage] = await Promise.all([
    context.waitForEvent("page"), // Wait for new page event
    home.clickDashboardLink(), // This should trigger the new tab/window
  ]);

  const dashboard = new DashboardPage(dashboardPage);
  expect(await dashboard.isWelcomeVisible()).toBeTruthy();
});
