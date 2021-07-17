import {Given, When, Then} from "@cucumber/cucumber";
import loginPage from '../pageobjects/demoblaze/demoblaze-login-page';

Given(/^user is on the demoblaze login page$/,()=>{
    loginPage.open();
})

When(/^user is succes login into demoblaze$/,()=>{
    loginPage.clickLinkTextLogin();
    loginPage.inputUsername("fadhil");
    loginPage.inputPassword('1234');
    loginPage.clickBtnLogin();
})
