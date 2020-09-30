const puppeteer = require ('puppeteer')

const helper = require ('./helper')

test('should return false because input is empty', () =>  {
    const result = helper.validator('', true, true)
    expect(result).toBe(false)
})
test('should return true', () =>  {
    const result = helper.validator('rebec', false, true)
    expect(result).toBe(true)
})
test('should return false because input is not a number', () =>  {
    const result = helper.validator('rebec', true, true)
    expect(result).toBe(false)
})
test('should return [user name should be rebec, and the age 30]', () =>  {
    const result = helper.joiner('rebec', '30')
    expect(result).toBe('user name is rebec ,and the age is 30')
})

test('show element after adding right data and click the btton', async() => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200,
        args: ['--window-size=1920,1080']
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:5500/index.html')
    await page.click('input#userNameInp')
    await page.type('input#userNameInp', 'Rebec')
    await page.click('input#ageInp')
    await page.type('input#ageInp', '36')
    await page.click('button#addBtn')
    const textResult = await page.$eval('#userList', el => el.textContent)
    expect(textResult).toBe('user name is Rebec ,and the age is 36')
    
}, 20000)
