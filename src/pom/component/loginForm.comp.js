import LoginPage from "../page/login.page"
import loginData from "../../testData/logindata"
class LoginForm extends LoginPage{
    get userName(){
        return $('//*[@id="user-name"]')
    }
    get password(){
        return $('//*[@id="password"]')
    }
    get loginButton(){
        return $('//*[@id="login-button"]')
    }

    async login() {
        await this.userName.setValue(loginData[0].userName)
        await this.password.setValue(loginData[0].password)
        await this.loginButton.click()
    }
}

export default LoginForm