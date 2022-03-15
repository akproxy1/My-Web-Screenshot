const puppeteer = require("puppeteer");

async function start() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(
    //"https://en.wikipedia.org/wiki/List_of_universities_in_England"
    "file:///C:/Users/akeem/Downloads/reactRoadMap.htm"
  );
  await page.screenshot({ path: "react.png" });
  await browser.close();
}
start();
