import {Given, When, Then} from "@cucumber/cucumber";
import homePage from '../pageobjects/demoblaze/demoblaze-home-page';

Then(/^user should see homePage$/,()=>{
    homePage.assertLogoutLinkText();
})