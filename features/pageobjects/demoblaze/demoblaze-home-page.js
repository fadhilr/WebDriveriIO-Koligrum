import Page from '../page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class homePage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnLogout() {return $('[onclick="logOut()"]')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    assertLogoutLinkText(){
        return expect(this.btnLogout).toBeDisplayed(2000);
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

export default new homePage();
