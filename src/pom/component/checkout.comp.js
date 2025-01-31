import { browser, expect } from "@wdio/globals";
import CheckoutPage from "../page/checkout.page";
import ProductsItem from "./products.comp";
const productItem = new ProductsItem()
class Checkout extends CheckoutPage{
    get firstName() {
        return $('//*[@id="first-name"]')
    }
    get lastName() {
        return $('//*[@id="last-name"]')
    }
    get postalCode() {
        return $('//*[@id="postal-code"]')
    }
    get continueButton() {
        return $('//*[@id="continue"]')
    }
    get totalValue() {
        return $('//div[@class="summary_total_label"]')
    }
    get finishButton() {
        return $("#finish")
    }
    get message() {
        return $("//h2[@class='complete-header']")
    }
    get backHomeButton() {
        return $('//button[@id="back-to-products"]')
    }
    get title() {
        return $("//span[@class='title']")
    }

    async validateStepOneTitle() {
        await expect(this.title).toHaveText("Checkout: Your Information")
    }
    async validateStepTwoTitle() {
        await expect(this.title).toHaveText("Checkout: Overview")
    }
    async validationPageCompleteTitle() {
        await expect(this.title).toHaveText("Checkout: Complete!")
    }

    async comparePrice() {
        const text = await this.totalValue.getText()
        const value = text.replace(/[^0-9.]/g, '')
        const numericValue = parseFloat(value)
        const expectedValue = productItem.productPrice + productItem.productTax;
        await expect(numericValue).toBe(expectedValue)
    }

    async fillFirstName() {
        await this.firstName.setValue("Jason")
        await expect(this.firstName).toHaveValue("Jason")
    }
    async fillLastName() {
        await this.lastName.setValue("Statham")
        await expect(this.lastName).toHaveValue("Statham")
    }
    async fillPostalCode() {
        await this.postalCode.setValue("NG19")
        await expect(this.postalCode).toHaveValue("NG19")
    }

    async verificationComplete() {
        await expect(this.message).toHaveText("Thank you for your order!")
    }
}

export default Checkout