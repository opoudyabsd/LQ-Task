import MainPage from "../page/main.page"
class DashbordComp extends MainPage {
    
    get title() {
        return $('//span[@class="title"]')
    }

    async validatePage() {
        await expect(browser).toHaveUrl(this.url)
        await expect(this.title).toHaveText("Products")
    }
}
export default DashbordComp