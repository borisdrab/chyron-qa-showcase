import { test, expect } from "@playwright/test";

test("scoreboard visual regression", async ({ page }) => {

    await page.goto(`file://${process.cwd()}/app/index.html`);

    await expect(page.locator('[data-testid="scoreboard"]'))

        .toHaveScreenshot("scoreboard.png");

});