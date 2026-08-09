import { test, expect } from '@playwright/test';

test.describe('character export', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('/');
        await page.waitForFunction('document.getElementById("preloader") === null', { timeout: 0 });
    });

    test('opens the export-all confirmation', async ({ page }) => {
        await page.locator('#rightNavDrawerIcon').click();
        await page.locator('#rm_button_characters').click();

        const exportButton = page.locator('#bulkExportAllButton');
        await expect(exportButton).toBeVisible();
        await exportButton.click();

        await expect(page.getByText('A ZIP archive containing group definitions plus character JSON and, where available, PNG card files will be downloaded.')).toBeVisible();
    });
});
