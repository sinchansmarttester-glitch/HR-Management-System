import { test as base, expect } from '@playwright/test'
import dotenv from 'dotenv'
import Login from '../POM/login.page.js'
// import AddEmployee from '../POM/addEmployee.page.js'

dotenv.config({ path: 'test data/.env.login' });

export const test = base.extend({
  loginFixture: async ({ page }, use) => {

    await page.goto(process.env.BASEURL);

    const login = new Login(page);

    await login.login(process.env.EMAIL, process.env.PWD);
    await expect(page.locator('//a[@href="addemp.php"]')).toBeVisible({ timeout: 60000 });

    await use(login);

  }
})
export {expect};