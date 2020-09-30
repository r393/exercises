const puppeteer = require('puppeteer')

const dataModule = require('./mongooseDataModule')


test('should connect to Data base', () => {
    return dataModule.connect().then(() => {
        expect(1).toBe(1)
    }).catch(error => {
        expect(1).toBe(2)
    })
   
}, 20000);

test('should not register user with empty email and password', () => {
    return dataModule.registerUser('', '').then(() => {
        expect(1).toBe(2)
    }).catch(error => {
        expect(1).toBe(1)
    })
});

test('should not register user with empty email ', () => {
    return dataModule.registerUser('', '1234567').then(() => {
        expect(1).toBe(2)
    }).catch(error => {
        expect(1).toBe(1)
    })
});

test('should not register user with empty password ', () => {
    return dataModule.registerUser('asfdddfsff@kk.dd', '').then(() => {
        expect(1).toBe(2)
    }).catch(error => {
        console.log('register empty password', error);
        expect(1).toBe(1)
    })
});
test('should  register user with right password and right email', () => {
    return dataModule.registerUser('asfdddfs@kk.dd', '1212').then(() => {
        
        expect(1).toBe(1)
    }).catch(error => {
        expect(1).toBe(2)
    })
});

test('should open the website', async() => {
    const browser = await puppeteer.launch({
        headless:false,
        slowMo:200,
        args:['--window-size=1680,1050']
    })
    const page = await browser.newPage()
    await page.goto('http://localhost:5000/login')
    await page.click('input[placeholder^="Enter User Name"]')
    await page.type('input[placeholder^="Enter User Name"]', 'reb@eze.com')
    await page.click('input[placeholder^="Password"]')
    await page.type('input[placeholder^="Password"]', '1234')
    await page.click('button.black')
    await page.waitForTimeout(2000)
    const textResult = await page.url()
    console.log(textResult);
    expect(textResult).toBe('http://localhost:5000/admin')
    
}, 50000)