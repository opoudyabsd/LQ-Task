class MainPage {
    get url() {
        return 'https://www.saucedemo.com/inventory.html'
    }

    get title() {
        return $('.title')
    }

    async validatePage() {
        await expect(browser).toHaveUrl(this.url)
        await expect(this.title).toHaveText("Products")
    }


}
export default new MainPage