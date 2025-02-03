import { $, browser, expect } from "@wdio/globals";

class Basket{
    get itemName() {
        return $(".inventory_item_name")
    }
    get checkoutButton() {
        return $("#checkout")
    }
    async clickCheckoutButton() {
        await this.checkoutButton.click()
    }
    async comparing(productName) {
        await expect(this.itemName).toHaveText(productName);
    }

}

export default new Basket
