/*Preconditions:  - Use page fixture  - Load the URL (https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm)  
 
Assignment Requirements:  - Click Try it.  - Get the message, type and accept the alert.  - Retrieve the text “You pressed OK!” and verify it. */

import { test } from '@playwright/test';

test("Handling Multiple alert",async({page})=>{
         page.once('dialog',alertType=>{
        //what type of alert
        const type= alertType.type()
        console.log("The alert type is :"+type)        
        console.log(alertType.message())
        alertType.accept()
        })
    
    
    await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm', { waitUntil: 'load' ,  timeout: 60000});
    //await page.waitForLoadState('domcontentloaded')    
    //switching to frame
     await page.waitForTimeout(3000)
    const frame= page.frameLocator("#iframeResult")
    await frame.getByText('Try it').last().click()
    //await page.getByRole('button', { name: 'Try it' }).click();
    //await frame.locator("text=Try it").click()

    await page.waitForTimeout(3000)
    const text= await frame.locator("#demo").textContent()
    console.log(text)
});