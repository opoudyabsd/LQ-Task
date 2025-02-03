class LoginPage{
    get userName(){
        return $('#user-name')
    }
    get password(){
        return $('#password')
    }
    get loginButton(){
        return $('#login-button')
    }
    

    async login(username, password) {
        await this.userName.setValue(username)
        await this.password.setValue(password)
        await this.loginButton.click()
    }
    async open(){
        await browser.url(`https://www.saucedemo.com`)
    }  
}

export default new LoginPage