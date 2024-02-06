import { expect, browser } from "@wdio/globals";
import { setupBrowser } from "@testing-library/webdriverio";
import { BrowserBase } from "@testing-library/webdriverio/dist/wdio-types";

describe("Test App", () => {
  it("should show React logo", async () => {
    await browser.url("/");
    // https://github.com/testing-library/webdriverio-testing-library/issues/51
    const { findByAltText } = setupBrowser(browser as unknown as BrowserBase);

    // In-browser debugging uncovered root cause. Uncomment to do so here.
    // eslint-disable-next-line wdio/no-debug
    // browser.debug();
    const reactLogo = await findByAltText("React logo");
    await expect(reactLogo).toBeDisplayed();
  });

  it("should increment count", async () => {
    await browser.url("/");
    // https://github.com/testing-library/webdriverio-testing-library/issues/51
    const { findByText } = setupBrowser(browser as unknown as BrowserBase);

    const countButton = await findByText(/count is ?/);
    await expect(countButton).toHaveText("count is 0");
    countButton.click();
    await expect(countButton).toHaveText("count is 1");
  });
});
