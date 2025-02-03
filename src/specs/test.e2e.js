import { $, browser } from "@wdio/globals"
import LoginPage from "../pom/page/login.page"
import MainPage from "../pom/page/main.page"
import ProductsItem from "../pom/component/products.comp"
import CartPage from "../pom/page/cart.page"
import Basket from "../pom/component/cart.comp"
import CheckoutPage from "../pom/page/checkout.page"
import Checkout from "../pom/component/checkout.comp"
import loginData from "../testData/logindata"
import productData from "../testData/testdata"

describe("Checkout", () => {
    before("Login to the page", async () => {
        await browser.maximizeWindow()
        await LoginPage.open()
        await LoginPage.login(loginData[0].userName, loginData[0].password)
        await MainPage.validatePage()
    })


    it("Click on the 'Add to cart' button near any product", async () => { 
        await ProductsItem.addingProduct()
    })
    it("Click on the 'Cart' button at the top right corner", async () => {
        await ProductsItem.cartButtonClick()
        await CartPage.validatePage()
        await Basket.comparing(productData[0].productName)
     })
    it("Click on the 'Checkout' button", async () => {
        await Basket.clickCheckoutButton()
        await CheckoutPage.validationStepOne()
     })
    it("Fill the 'First name' field with valid data", async () => {
        await Checkout.fillFirstName()
     })
    it("Fill the 'Second name' field with valid data", async () => {
        await Checkout.fillLastName()
     })
    it("Fill the 'Postal code' field with valid data", async () => { 
        await Checkout.fillPostalCode()
    })
    it("Click on 'Continue' button", async () => {
        await Checkout.clickContinueButton()
        await CheckoutPage.validationStepTwo()
        await Checkout.comparePrice(productData[0].price, productData[0].tax)
    })
    it("Click on 'Finish' button", async () => {
        await Checkout.clickFinishButton()
        await CheckoutPage.validationPageComplete()
        await Checkout.verificationComplete()
     })
    it("Click on 'Back home' button", async () => {
        await Checkout.clickBackHomeButton()
        await MainPage.validatePage()
        await ProductsItem.inventoryPageCheck()                
     })

})