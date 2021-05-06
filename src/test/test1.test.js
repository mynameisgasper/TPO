const zahteva = require("../app_api/node_modules/supertest");
const { request } = require("../app_api/app.js");
const streznik = require("../app_api/app.js");

describe("GET", () => {
  it('Welcome', async function() {

    let opened = await browser.findElements(By.xpath("//div[contains(@class, 'modal-backdrop fade show')]"));
    expect(opened).to.not.be.empty;
  });
});