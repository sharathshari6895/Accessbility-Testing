const { test, expect } = require('@playwright/test');
const { default: AxeBuilder } = require('@axe-core/playwright');
import { createHtmlReport } from 'axe-html-reporter';
const fs = require('fs');
const { exec } = require('child_process'); 
test.describe('homepage', () => {
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
 
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
 
   
    const reportHTML = createHtmlReport({
      results: accessibilityScanResults,
      options: {
        projectKey: "homepage"
      },
    });
    // if (!fs.existsSync("build/reports/accessibility-report.html")) {
    //   fs.mkdirSync("build/reports", {
    //     recursive: true,
    //   });
    // }
    // fs.writeFileSync("build/reports/accessibility-report.html", reportHTML);
    // exec('start build/reports/accessibility-report.html');
  })
});
