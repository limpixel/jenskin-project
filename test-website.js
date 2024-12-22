const puppeteer = require('puppeteer');

(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:8080'); // Ganti URL sesuai kebutuhan
        const title = await page.title();
        console.log(`Page title is: ${title}`);
        console.log('Website is accessible and test passed!');
        await browser.close();
    } catch (error) {
        console.error('Test failed:', error);
        process.exit(1); // Berikan kode error agar Jenkins mendeteksi kegagalan
    }
})();
