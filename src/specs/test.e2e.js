import { $, browser } from "@wdio/globals"
import LoginPage from "../pom/page/login.page"
import MainPage from "../pom/page/main.page"
import DashbordComp from "../pom/component/dashbord.comp"
import LoginForm from "../pom/component/loginForm.comp"
import ProductsItem from "../pom/component/products.comp"
import CartPage from "../pom/page/cart.page"
import Basket from "../pom/component/cart.comp"
import CheckoutPage from "../pom/page/checkout.page"
import Checkout from "../pom/component/checkout.comp"

const loginPage = new LoginPage()
const mainPage = new MainPage()
const dashbord = new DashbordComp()
const loginForm = new LoginForm()
const productItem = new ProductsItem()
const cartPage = new CartPage()
const basket = new Basket()
const checkoutPage = new CheckoutPage()
const checkout = new Checkout()
describe("Visit site", () => {
    before("Login to the page", async () => {
        browser.maximizeWindow()
        await loginPage.open()
        await loginForm.login()
        await dashbord.validatePage()
    })



    it("Click on the 'Add to cart' button near any product", async () => { 
        await productItem.validateItemsNumber()
    })
    it("Click on the 'Cart' button at the top right corner", async () => {
        await productItem.cartButton.click()
        await basket.validateCartTitle()
        await cartPage.validateUrl()
        await basket.comparing()
     })
    it("Click on the 'Checkout' button", async () => {
        await basket.checkoutButton.click()
        await checkoutPage.validationStepOneUrl()
        await checkout.validateStepOneTitle()
     })
    it("Fill the 'First name' field with valid data", async () => {
        await checkout.fillFirstName()
     })
    it("Fill the 'Second name' field with valid data", async () => {
        await checkout.fillLastName()
     })
    it("Fill the 'Postal code' field with valid data", async () => { 
        await checkout.fillPostalCode()
    })
    it("Click on 'Continue' button", async () => {
        await checkout.continueButton.click()
        await checkout.validationStepTwoUrl()
        await checkout.validateStepTwoTitle()
        await checkout.comparePrice()
    })
    it("Click on 'Finish' button", async () => {
        await checkout.finishButton.click()
        await checkoutPage.validationPageCompleteUrl()
        await checkout.validationPageCompleteTitle()
        await checkout.verificationComplete()
     })
    it("Click on 'Back home' button", async () => {
        await checkout.backHomeButton.click()
        await mainPage.validatePage()
        await productItem.emptyCart()
        await productItem.visibleItemList()                
     })

})