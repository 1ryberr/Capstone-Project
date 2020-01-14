
const puppeteer = require('puppeteer');
const path = require('path');
jest.setTimeout(9000);
test('should test ui for small screens', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {width: 768, height: 454},
		args: ["--start-maximized"],
		devtools: false
    })
    const page = await browser.newPage();
    
    await page.goto('file:///' + path.resolve(__dirname, './dist/index.html'));

     await page.click('#in1');
     await page.type('#in1', 'Paris, France');

    await page.click('#in');
    await page.type('#in', '2020.05.16')

    await page.click('#gen');

});

test('should test ui for desktop', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: {width: 1366, height: 768},
		args: ["--start-maximized"],
		devtools: false
    })
    const page = await browser.newPage();
    
    await page.goto('file:///' + path.resolve(__dirname, './dist/index.html'));

     await page.click('#in1');
     await page.type('#in1', 'Galapagos');

    await page.click('#in');
    await page.type('#in', '2020.05.16')

    await page.click('#gen');

});
