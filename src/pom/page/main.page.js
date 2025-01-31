class MainPage {
    get url() {
        return 'https://www.saucedemo.com/inventory.html'
    }

    async open () {
        return browser.url(this.url);
    }

    async validatePage() {
        await expect(browser).toHaveUrl(this.url)
    }
}
export default MainPage