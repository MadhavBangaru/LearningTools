import { test, expect } from "@playwright/test";

test("validate reddit landing page", async ({ page }) => {
  await page.goto("https://www.reddit.com");

  // Assert the title
  await expect(page).toHaveTitle(/Reddit/);

  // Assert the presence of the search bar
  await expect(page.locator("#search")).toBeVisible();

  // Assert the presence of the login button
  await expect(page.locator("text=Log In")).toBeVisible();

  // Take a screenshot
  await page.screenshot({ path: "reddit.png" });
});
