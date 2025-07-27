import { test, expect } from "@playwright/test";
import { writeFileSync } from "fs";

test("navigate to Codeforces", async ({ page }) => {
  await page.goto("https://codeforces.com/", { waitUntil: "networkidle" });
  await expect(page).toHaveURL("https://codeforces.com/");
  // Click the Register link in the header using getByRole
  const registerLink = page.getByRole("link", {
    name: "Register",
    exact: true,
  });
  await registerLink.click();
  await expect(page).toHaveURL("https://codeforces.com/register");
});

test("save DOM", async ({ page }) => {
  await page.goto("https://codeforces.com/");
  await expect(page).toHaveURL("https://codeforces.com/");
  const html = await page.content();
  writeFileSync("codeforces_dom.html", html);
});

// add a test case here
test("validating practise link", async ({ page }) => {
  // increase test time timeout to 60 seconds
  test.setTimeout(60 * 1000);

  await page.goto("https://practicesoftwaretesting.com/", {
    waitUntil: "networkidle",
  });
  await expect(page).toHaveURL("https://practicesoftwaretesting.com/");

  // Click the Login link in the header using getByRole
  // Home locator locator('[data-test="nav-home"]')
  // click on above locator
  const homeLink = page.locator('[data-test="nav-home"]');
  await homeLink.click();

  console.log("Home link clicked");

  // Categories locator('[data-test="nav-categories"]')
  const categoriesLink = page.locator('[data-test="nav-categories"]');
  await categoriesLink.click();
  //add console.log to check if the link is clicked
  console.log("Categories link clicked");

  const handToolsLink = page.locator('[data-test="nav-hand-tools"]');
  await expect(handToolsLink).toBeVisible();

  //add console.log to check if the link is clicked
  console.log("Hand tools link is visible");

  const powerToolsLink = page.locator('[data-test="nav-power-tools"]');
  await expect(powerToolsLink).toBeVisible();

  //add console.log to check if the link is clicked
  console.log("Power tools link is visible");

  const otherLink = page.locator('[data-test="nav-other"]');
  await expect(otherLink).toBeVisible();

  //add console.log to check if the link is clicked
  console.log("Other link is visible");

  const specialToolsLink = page.locator('[data-test="nav-special-tools"]');
  await expect(specialToolsLink).toBeVisible();

  //add console.log to check if the link is clicked
  console.log("Special tools link is visible");

  const rentalsLink = page.locator('[data-test="nav-rentals"]');
  await expect(rentalsLink).toBeVisible();

  //add console.log to check if the link is clicked
  console.log("Rentals link is visible");
});
