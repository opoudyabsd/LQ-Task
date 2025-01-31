import MainPage from "../page/main.page"
import productData from "../../testData/testdata"
class ProductsItem extends MainPage{
    get productItem() {
        return $('//*[@id="add-to-cart-sauce-labs-bolt-t-shirt"]')
    }
    get verifyAddToCart() {
        return $('//*[@class="btn btn_secondary btn_small btn_inventory "]')
    }
    get itemsNumber() {
        return $('//span[@class="shopping_cart_badge"]')
    }
    get cartButton() {
        return $(".shopping_cart_link")
    }
    get productName() {
        return $(`//div[text() = "${productData[0].productName}"]`)
    }
    get productPrice() {
        return productData[0].price
    }
    get productTax() {
        return productData[0].tax
    }
    get itemsList() {
        return $('//div[@class="inventory_list"]')
    }

    async addToCart() {
        await this.productItem.click()
        await expect(this.verifyAddToCart).toHaveText("Remove")
    }

    async validateItemsNumber() {
        let currentCount = 0;
        if (await this.itemsNumber.isExisting()) {
            currentCount = parseInt(await this.itemsNumber.getText(), 10);
        }
        await this.addToCart();    
        const updatedCount = parseInt(await this.itemsNumber.getText(), 10);
        await expect(updatedCount).toBe(currentCount + 1);
    }
    async emptyCart() {
        await expect(this.itemsNumber).not.toExist()
    }
    async visibleItemList() {
        await expect(this.itemsList).toBeDisplayed()
    }
}

export default ProductsItem