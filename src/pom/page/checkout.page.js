import { browser, expect } from "@wdio/globals";
import CartPage from "./cart.page";
class CheckoutPage extends CartPage {
    get urlStepOne() {
        return 'https://www.saucedemo.com/checkout-step-one.html'
    }
    get urlStepTwo() {
        return 'https://www.saucedemo.com/checkout-step-two.html'
    }
    get urlComplete() {
        return "https://www.saucedemo.com/checkout-complete.html"
    }



    async openStepOne () {
        return browser.url(this.urlStepOne);
    }
    async openStepTwo() {
        return browser.url(this.urlStepTwo)
    }
    async openCompleteStep() {
        return browser.url(this.urlComplete)
    }

    async validationStepOneUrl() {
        await expect(browser).toHaveUrl(this.urlStepOne)
    }
    async validationStepTwoUrl() {
        await expect(browser).toHaveUrl(this.urlStepTwo)
    }
    async validationPageCompleteUrl() {
        await expect(browser).toHaveUrl(this.urlComplete)
    }


}
export default CheckoutPage