import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('http://localhost:3001');
  await expect(page).toHaveTitle('LIMS UI Components Demo');
});