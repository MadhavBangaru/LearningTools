import { test, expect } from "@playwright/test";
import axios from "axios";

test("has title", async ({ page }) => {
  // Call FastAPI endpoint
  const response = await axios.get(
    "http://localhost:8000/wcf/get_data?param1=test"
  );
  console.log(response.data);

  await page.goto("https://playwright.dev/");

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test("get started link", async ({ page }) => {
  await page.goto("https://playwright.dev/");

  // Click the get started link.
  await page.getByRole("link", { name: "Get started" }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole("heading", { name: "Installation" })
  ).toBeVisible();
});
