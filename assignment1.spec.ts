// Assignment: 1 Create a Lead
// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
// 2. Enter the username as ‘Demosalesmanager’
// 3. Enter the password as ‘crmsfa’
// 4. Click the Login button
// 5. Click CRM/SFA
// 6. Click Leads
// 7. Click Create Lead
// 8. Fill the Company Name
// 9. Fill the First Name
// 10. Fill the Last Name
// 11. Fill the Salutation
// 12. Fill the Title
// 13. Fill the Annual Revenue
// 14. Fill the Department
// 15. Fill the Phone number
// 16. Click Create Lead button
// 17. Verify the company name, first name, last name and the status using auto retrying and nonretrying assertions

//In package.json changed type from commonjs to module
//import test from'@playwright/test'


import { test, expect } from '@playwright/test';
test("Login Page",async({page})=>{
  
    await page.goto("http://leaftaps.com/opentaps/control/main");// 1. Navigate to the url http://leaftaps.com/opentaps/control/main
    await page.locator('#username').fill("Demosalesmanager");// 2. Enter the username as ‘Demosalesmanager’
    await page.locator('#password').fill("crmsfa");// 3. Enter the password as ‘crmsfa’
    await page.locator('input[value="Login"]').click();  // 4. Click the Login button
    await page.locator('#label').click();// 5. Click CRM/SFA

    await page.getByRole('link', { name: 'Leads' }).click();// 6. Click Leads
    await page.getByRole('link', { name: 'Create Lead' }).click();// 7. Click Create Lead
    await page.locator('input[name="companyName"]').fill("Cognizant");// 8. Fill the Company Name
    await page.locator('input[name="firstName"]').first().fill("Arrchana");// 9. Fill the First Name
    await page.locator('input[id="createLeadForm_lastName"]').first().fill("Jagan");// 10. Fill the Last Name
    await page.locator('input[name="personalTitle"]').fill("Ms");// 11. Fill the Salutation
    await page.locator('input[name="generalProfTitle"]').fill("QA");// 12. Fill the Title
    await page.locator('input[name="annualRevenue"]').fill("60000000000000000");// 13. Fill the Annual Revenue //though maxlength 15
    await page.locator('input[name="departmentName"]').fill("MLEU");// 14. Fill the Department
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("8476235253");// 15. Fill the Phone number
    await page.locator('.smallSubmit').click();// 16. Click Create Lead button

    // 17. Verify the company name, first name, last name and the status
    //non auto retry
    await expect.soft(page.locator('#viewLead_companyName_sp')).toContainText('Cognizant',{timeout:5000});
    //Auto retry
    await expect(page.locator('#viewLead_firstName_sp')).toHaveText('Arrchana');
    await expect(page.locator('#viewLead_lastName_sp')).toHaveText('Jagan');
    console.log("Testing continue even if one fails")
   

    });