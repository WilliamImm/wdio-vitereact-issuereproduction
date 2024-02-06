import { expect, browser, $ } from "@wdio/globals";
import { setupBrowser } from "@testing-library/webdriverio";
import { BrowserBase } from "@testing-library/webdriverio/dist/wdio-types";

// describe("My Login application", () => {
//   it("should login with valid credentials", async () => {
//     await browser.url(`https://the-internet.herokuapp.com/login`);

//     await $("#username").setValue("tomsmith");
//     await $("#password").setValue("SuperSecretPassword!");
//     await $('button[type="submit"]').click();

//     await expect($("#flash")).toBeExisting();
//     await expect($("#flash")).toHaveTextContaining(
//       "You logged into a secure area!"
//     );
//   });
// });

describe("Test App", () => {
  it("should show React logo", async () => {
    await browser.url("/");
    const { findByAltText } = setupBrowser(browser as unknown as BrowserBase);

    const reactLogo = await findByAltText("React logo");
    expect(reactLogo).toBeDisplayed();
  });

  it("should increment count", async () => {
    await browser.url("/");
    const { findByText } = setupBrowser(browser as unknown as BrowserBase);

    const countButton = await findByText(/count is ?/);
    expect(countButton).toHaveText("count is 0");
    countButton.click();
    expect(countButton).toHaveText("count is 1");
  });
});
