
class SauceLoginPage {

    get userNameInputBox(){
        return $("#user-name");
    }

    get passwordInpoutBox(){
        return $("#password");
    }

    get loginButton(){
        return $("#login-button");
    }

    async login(username, password){
        await this.userNameInputBox.setValue(username);
        await this.passwordInpoutBox.setValue(password);
        await this.loginButton.click();
    }

}

module.exports = new SauceLoginPage();