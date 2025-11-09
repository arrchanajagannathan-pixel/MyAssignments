// Assignment: 2 Edit a Lead
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
// 2. Enter the username as ‘Demosalesmanager’
// 3. Enter the password as ‘crmsfa’
// 4. Click the Login button
// 5. Click CRM/SFA
// 6. Click Leads
// 7. Click Find Leads
// 8. Enter the first name
// 9. Click Find Leads button
// 10. Click the first resulting Lead ID
// 11. Click Edit
// 12. Edit Company name
// 13. Edit Annual Revenue
// 14. Edit Department
// 15. Enter Description
// 16. Click Update
// 17. Verify the edited fields using appropriate assertions


import { test, expect } from '@playwright/test';
test("Login Page",async({page})=>{
  
    await page.goto("http://leaftaps.com/opentaps/control/main");// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
    await page.locator('#username').fill("Demosalesmanager");// 2. Enter the username as ‘Demosalesmanager’
    await page.locator('#password').fill("crmsfa");// 3. Enter the password as ‘crmsfa’
    await page.locator('input[value="Login"]').click();  // 4. Click the Login button
    await page.locator('#label').click();// 5. Click CRM/SFA

    await page.getByRole('link', { name: 'Leads' }).click();// 6. Click Leads
    await page.locator('a[href="/crmsfa/control/findLeads"]').click(); // 7. Click Find Leads
    await page.waitForTimeout(5000);

    //await page.locator('(//input[@name="firstName"])[3]').fill("Arrchana");
    //why this is not working -- ("(//p[@class='al-app-tile-description'])[1]")
    await page.locator('(//input[@name="firstName"])[3]').fill("Arrchana");

    await page.getByRole('button', { name: 'Find Leads' }).click();//9. Click Find Leads button
    //why this is not working -- await page.getByText('Find Leads').nth(4).click(); //9. Click Find Leads button
    //why this is not working -- await page.getByText('10712').nth(4).click(); // 10. Click the first resulting Lead ID
     await page.waitForTimeout(5000);
    await page.locator('a[href="/crmsfa/control/viewLead?partyId=10712"]').nth(1).click();
    //await page.getByRole('link', { name: '10712' }).click();
    await page.locator('a[href="updateLeadForm?partyId=10712"]').click(); // 11. Click Edit
    await page.locator('#updateLeadForm_companyName').fill("CTS");// 12. Edit Company name
    await page.locator('#updateLeadForm_annualRevenue').fill("600000");// 13. Edit Annual Revenue
    await page.locator('#updateLeadForm_departmentName').fill("QEA");// 14. Edit Department
    await page.locator('textarea[name="description"]').first().fill("Learning Playwright");// 15. Enter Description
    await page.locator('input[value="Update"]').click();// 16. Click Update
    // 17. Verify the edited fields using appropriate assertions
    // 17. Verify the edited fields using appropriate assertions
    await expect(page.locator('#viewLead_companyName_sp')).toHaveText("CTS (10712)");
    await expect(page.locator('#viewLead_annualRevenue_sp')).toHaveText("600000");
    await expect(page.locator('#viewLead_departmentName_sp')).toHaveText("QEA");
    await expect(page.locator('#viewLead_description_sp')).toHaveText("Learning Playwright");

});