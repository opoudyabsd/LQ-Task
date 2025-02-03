class ProductsItem{
    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    get removeButton() {
        return $('#remove-sauce-labs-bolt-t-shirt')
    }
    get itemsNumber() {
        return $('span.shopping_cart_badge')
    }
    get cartButton() {
        return $(".shopping_cart_link")
    }

    get itemsList() {
        return $('.inventory_list')
    }

    async addToCart() {
        await this.addToCartButton.click()
        await expect(this.removeButton).toHaveText("Remove")
    }
    async cartButtonClick() {
        await this.cartButton.click()
    }
    async addingProduct() {
        let currentCount = 0;
        if (await this.itemsNumber.isExisting()) {
            currentCount = parseInt(await this.itemsNumber.getText(), 10);
        }
        await this.addToCart();    
        const updatedCount = parseInt(await this.itemsNumber.getText(), 10);
        await expect(updatedCount).toBe(currentCount + 1);
    }

    async inventoryPageCheck() {
        await expect(this.itemsList).toBeDisplayed()
        await expect(this.itemsNumber).not.toBeDisplayed();
    }
}

export default new ProductsItem