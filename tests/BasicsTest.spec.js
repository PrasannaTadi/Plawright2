const {test,expect}=require('@playwright/test')

test('first playwright test', async({page})=>{
await page.goto("https://casting-dev.directsubmit.com/login")
const title =await page.title()
console.log(title)
await expect(page).toHaveTitle(title)
await page.locator("[name='username']").fill("prasanna12345")
await page.locator("[name='password']").fill("Test@1234")
await page.locator("[type='submit']").click()
console.log(await page.locator(".css-1ocbqcg").textContent())
//assertion
await expect(page.locator(".css-1ocbqcg")).toContainText('Invalid')
await page.locator("[name='username']").fill("")
await page.locator("[name='username']").fill("prasanna1234")
await page.locator("[type='submit']").click()

//.css-127h8j3
console.log(await page.locator(".css-127h8j3").nth(1).textContent())
await expect(page.locator(".css-127h8j3").nth(1)).toContainText("Complete Your Resume")
//.css-193aoo3
console.log(await page.locator(".css-193aoo3").textContent())
//assertion
await expect(page.locator(".css-193aoo3")).toContainText('Los Angeles')
console.log(await page.locator(".css-yqjyoy").first().textContent())
console.log(await page.locator(".css-yqjyoy").last().textContent())
console.log(await page.locator(".css-yqjyoy").nth(1).textContent())

}
)
//Papitesting@gmail.com/Test@12345
//https://rahulshettyacademy.com/client/#/auth/login