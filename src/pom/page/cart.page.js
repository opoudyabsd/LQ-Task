class CartPage{
    get cartUrl() {
        return "https://www.saucedemo.com/cart.html"
    }
    get title() {
        return $("span.title")
    }
    async validatePage() {
        await expect(browser).toHaveUrl(this.cartUrl)
        await expect(this.title).toHaveText("Your Cart")
    }
    
}

export default new CartPage