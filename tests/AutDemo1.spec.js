const {test,expect}=require('@playwright/test')
test("Testing waits",async({page})=>{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login")
await page.locator("#userEmail").fill("Papitesting@gmail.com")
await page.locator("#userPassword").fill("Test@12345")
await page.locator("[value='Login']").click()

//console.log(await page.locator(".card-body h5").first().textContent())
 await page.waitForLoadState('networkidle');
 await page.locator(".card-body h5").first().waitFor();
const titles = await page.locator(".card-body h5").allTextContents();
 console.log(titles)

}
);

test.only("test UI controllers", async({page})=>{
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());
await page.locator('#username').fill("Prasanna");
await page.locator('#password').fill("Test");
//await page.locator('##signInBtn').click();
const dropdown = page.locator("select.form-control")
await dropdown.selectOption("Consultant")
await page.locator("#usertype").last().click()
await page.locator("#okayBtn").click()
console.log(await page.locator("#usertype").last().isChecked())
await expect(page.locator("#usertype").last()).toBeChecked()
await page.locator("#terms").click()
console.log(await page.locator("#terms").isChecked())
await expect(page.locator("#terms")).toBeChecked()
await page.locator("#terms").uncheck()
expect(await page.locator("#terms").isChecked()).toBeFalsy()
//await page.pause()
const documentLink= page.locator("[href*='documents-request']")
await expect(documentLink).toHaveAttribute("class","blinkingText")
}
)