/*
Assignment: 3 Create a new Account 
1. Navigate to the url https://login.salesforce.com/ 
2. Enter username using getByLabel 
3. Enter password using getByLabel 
4. Click Login 
5. Verify the title and url of the page using appropriate assertions 
6. Click App Launcher using the class locator 
7. Click View All using getByText 
8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
9. Click Service using index based XPath 
10. Click Accounts using attribute based CSS selector 
11. Click New using getByRole 
12. Enter Account name using attribute based CSS selector 
13. Click Save button using XPath 
14. Verify the toast message displayed */

import {test,expect} from'@playwright/test'

test("Login Page",async({page})=>{
  
    await page.goto("https://login.salesforce.com/?locale=in");
    await page.getByLabel('Username').fill("dilipkumar.rajendran@testleaf.com");
    await page.getByLabel('Password').fill("TestLeaf@2025");
    //await page.getByRole('textbox', { name: 'Password'}).fill("TestLeaf@2025");
    await page.getByRole('button', { name: 'Log In' }).click(); // click the Log In button    
    await page.waitForTimeout(12000);
    await expect(page).toHaveTitle('Home | Salesforce');
    await expect(page).toHaveURL('https://testleaf.lightning.force.com/lightning/page/home');
    //await page.locator('div[class="slds-icon-waffle"]').click();//6. Click App Launcher using the class locator 
    await page.locator(".slds-icon-waffle").click();//6. Click App Launcher using the class locator - dot
    await page.getByText('View All').nth(2).click(); //7. Click View All using getByText 
    await page.getByPlaceholder('Search apps or items...').fill("Service");//8. Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.locator("(//p[@class='al-app-tile-description'])[1]").click();//Click Service using index based XPath 
    await page.click('[title="Accounts"]')//10. Click Accounts using attribute based CSS selector 
    await page.getByRole('button', { name: 'New' }).click(); //11. Click New using getByRole 
    //await page.fill('[name="Name"]', 'Arrchana');//12. Enter Account name using attribute based CSS selector 
    await page.locator('[name="Name"]').fill('Arrchana')
    await page.click('//button[@name="SaveEdit"]');//13. Click Save button using XPath 
    await page.locator('//span[@class="toastMessage slds-text-heading--small forceActionsText"]').isVisible();//14. Verify the toast message displayed 
    
    }); 