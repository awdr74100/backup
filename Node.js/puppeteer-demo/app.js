const path = require('path');
const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    defaultViewport: {
      width: 1920,
      height: 1080,
    },
  });
  const page = await browser.newPage();
  await page.goto('https://awdr74100.github.io/');
  //   const element = await page.$$('.post-meta-item time[itemprop^="dateCreated"]');
  //  for(let i =0;i<element.length;i+=1){
  //      console.log(await element[i].evaluate(el => el.textContent));
  //  }
  //   element.forEach((item) =>  item.evaluate((el) => console.log(el.textContent)));
  //   const text = await element.evaluate(el => el.textContent);
  //   console.log(text);
  await browser.close();
})();
