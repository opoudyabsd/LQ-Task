import MainPage from "./main.page"

class CartPage extends MainPage{
    get cartUrl() {
        return "https://www.saucedemo.com/cart.html"
    }
    async open(){
        await browser.url(this.cartUrl)
    }    
    async validateUrl() {
        await expect(browser).toHaveUrl(this.cartUrl)
    }
}

export default CartPage