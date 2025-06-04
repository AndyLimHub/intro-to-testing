import { test, expect } from '@playwright /test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:5174');
});

test('it has a counter', async ({ page }) => {
  await page.getByTestId('counter-count');
});
