import { browser, expect } from "@wdio/globals";
import { faker } from "@faker-js/faker";
const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
const postalCode = faker.location.zipCode();
class Checkout{
    get firstName() {
        return $('#first-name')
    }
    get lastName() {
        return $('#last-name')
    }
    get postalCode() {
        return $('#postal-code')
    }
    get continueButton() {
        return $('#continue')
    }
    get totalValue() {
        return $('.summary_total_label')
    }
    get finishButton() {
        return $("#finish")
    }
    get message() {
        return $("h2.complete-header")
    }
    get backHomeButton() {
        return $('#back-to-products')
    }

    async clickContinueButton() {
        await this.continueButton.click()
    }
    async clickFinishButton() {
        await this.finishButton.click()
    }
    async clickBackHomeButton() {
        await this.backHomeButton.click()
    }


    async comparePrice(price, tax) {
        const text = await this.totalValue.getText()
        const value = text.replace(/[^0-9.]/g, '')
        const numericValue = parseFloat(value)
        const expectedValue = price + tax;
        await expect(numericValue).toBe(expectedValue)
    }

    async fillFirstName() {
        await this.firstName.setValue(firstName)
        await expect(this.firstName).toHaveValue(firstName)
    }
    async fillLastName() {
        await this.lastName.setValue(lastName)
        await expect(this.lastName).toHaveValue(lastName)
    }
    async fillPostalCode() {
        await this.postalCode.setValue(postalCode)
        await expect(this.postalCode).toHaveValue(postalCode)
    }

    async verificationComplete() {
        await expect(this.message).toHaveText("Thank you for your order!")
    }
}

export default new Checkout