import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogin() {return $('[onclick="logIn()"]')}
    get txtFieldUsername () {return $('#loginusername')}
    get txtFieldPassword () {return $('#loginpassword')}
    get linkTextLogin () {return $('[data-target="#logInModal"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    inputUsername(username){
        this.txtFieldUsername.waitForDisplayed(2000);
        (this.txtFieldUsername).setValue(username);
    }

    inputPassword(password){
        this.txtFieldPassword.waitForDisplayed(2000);
        (this.txtFieldPassword).setValue(password);
    }

    clickLinkTextLogin(){
        this.linkTextLogin.waitForDisplayed(2000);
        (this.linkTextLogin).click();
    }

    isBtnLoginDisplayed(){
        this.btnLogin.waitForDisplayed(2000);
        return this.btnLogin.isDisplayed();
    }

    clickBtnLogin(){
        this.btnLogin.waitForDisplayed(2000);
        (this.btnLogin).click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new LoginPage();
