const zahteva = require("../app_api/node_modules/supertest");
const streznik = require("../app_api/app.js");


(async function Namigi() {
  // Knjižnice
  const { exec } = require("child_process");
  const { describe, it, after, before } = require("mocha");
  const { Builder, By, until } = require("selenium-webdriver");
  const chrome = require("selenium-webdriver/chrome");
  const expect = require("chai").expect;
  
  // URL naslov aplikacije, ki jo želimo testirati
  let aplikacijaUrl = "http://localhost:4200";
  
  // URL naslov Selenium strežnika. V primeru, da uporabljamo Docker v OS Windows 10 je potrebno URL posodobiti iz localhost na dodeljen IP.
  let seleniumStreznikUrl = "http://localhost:4445/wd/hub";
  let browser, jwtZeton;

  const axios = require('axios').create({
    baseURL: aplikacijaUrl + "api/v1/",
    timeout: 5000
  });
  
  // Obvladovanje napak
  process.on("unhandledRejection", (napaka) => {
    console.log(napaka);
  });

  console.log("HAHAHA")
  // Počakaj določeno število sekund na zahtevani element na strani
  let waitPageLoaded = async (browser, casVS, xpath) => {
    await browser.wait(() => {
      return browser.findElements(By.xpath(xpath)).then(elementi => {
        return elementi[0];
      });
    }, casVS * 1000, `Stran se ni naložila v ${casVS} s.`);
  };

  try {

    before(() => {
      browser = new Builder()
      .forBrowser("chrome")
      .setChromeOptions(new chrome.Options()
        .addArguments("start-maximized")
        .addArguments("disable-infobars")
        .addArguments("allow-insecure-localhost")
        .addArguments("allow-running-insecure-content")
      )
      .usingServer(seleniumStreznikUrl)
      .build();
    });

    // Primer testa funkcionalnosti
    describe("Login", function() {
      this.timeout(30 * 1000);
      // Pred začetkom testa funkcionalnosti shranimo URL naslov aplikacije
      before(() => { browser.get(aplikacijaUrl); });

      // Primer prijave
      it("Login", async () => {
        await waitPageLoaded(browser, 10, "//h2");
        console.log("HAHAHA")
        let emailField = await browser.findElements(By.xpath("//input[contains(@id, 'loginEmail')]"));
        expect(emailField).to.be.empty;
      });
    });

    after(async () => {
      browser.quit();
    });

  } catch (napaka) {
    console.log("Med testom je prišlo do napake!");
  }
})();