import { $, browser, expect } from "@wdio/globals";
import CartPage from "../page/cart.page";
import ProductsItem from "./products.comp";

const productItem = new ProductsItem()

class Basket extends CartPage{
    get title() {
        return $("//span[@class='title']")
    }
    get itemName() {
        return $(".inventory_item_name")
    }
    get checkoutButton() {
        return $("//*[@id='checkout']")
    }
    async comparing() {
        await this.itemName.isEqual(productItem.productName)
    }
    async validateCartTitle() {
        await expect(this.title).toHaveText("Your Cart")
    }
}

export default Basket
