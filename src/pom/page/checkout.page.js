import { browser, expect } from "@wdio/globals";
class CheckoutPage {
    get urlStepOne() {
        return 'https://www.saucedemo.com/checkout-step-one.html'
    }
    get urlStepTwo() {
        return 'https://www.saucedemo.com/checkout-step-two.html'
    }
    get urlComplete() {
        return "https://www.saucedemo.com/checkout-complete.html"
    }
    get title() {
        return $("span.title")
    }

    async validationStepOne() {
        await expect(browser).toHaveUrl(this.urlStepOne)
        await expect(this.title).toHaveText("Checkout: Your Information")

    }
    async validationStepTwo() {
        await expect(browser).toHaveUrl(this.urlStepTwo)
        await expect(this.title).toHaveText("Checkout: Overview")
    }
    async validationPageComplete() {
        await expect(browser).toHaveUrl(this.urlComplete)
        await expect(this.title).toHaveText("Checkout: Complete!")
    }
}
export default new CheckoutPage