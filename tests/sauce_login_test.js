const sauceLoginPage = require("/Users/shiva/Desktop/Interview_Assessment/pages/sauce_login_page.js");
const productsPage = require("/Users/shiva/Desktop/Interview_Assessment/pages/products_page.js");
const cartPage = require("/Users/shiva/Desktop/Interview_Assessment/pages/cart_page.js");
const checkInfoPage = require("/Users/shiva/Desktop/Interview_Assessment/pages/checkout_info_page.js");
const checkoutOverviewPage = require("/Users/shiva/Desktop/Interview_Assessment/pages/checkout_overview_page.js");
const orderCompletePage = require("/Users/shiva/Desktop/Interview_Assessment/pages/checkout_complete_page.js");
const assert = require("assert");

describe("Verify Login Test", async()=> {
   it("verify succesful login", async() => {

     browser.url("/");
     browser.maximizeWindow();
    await sauceLoginPage.login("standard_user","secret_sauce");
    // Sauce Labs Backpack
    // Test.allTheThings() T-Shirt (Red)
    await productsPage.addItemsToCart("Sauce Labs Backpack", "Test.allTheThings() T-Shirt (Red)");
    await productsPage.openCart();
    await cartPage.getListofProducts();
    await cartPage.checkout();
    await checkInfoPage.fillInformationAndSubmit("WebDriverIo", "Automation", "500090");
    await checkoutOverviewPage.getListofItemsInTheCartOverview();
    await checkoutOverviewPage.clickOnFinish();
    let finalMessage = await orderCompletePage.getThanksForOrderText();
    assert.strictEqual(finalMessage, "Thank you for your order!")
    await browser.pause(3000)
   })
})