import BasePage from "./BasePage";
import * as ContactUsPageObjects from '../pageObjects/ContactusPage.objects'
class ContactUsPage extends BasePage{
    constructor(){
        super();
        this.waitForPageToLoad();
    }

    waitForPageToLoad(){
        $(ContactUsPageObjects.sendButton).waitForDisplayed( 10000, false, 'Send button not displayed');
    }
    getHeading(){
        return $(ContactUsPageObjects.heading).getText();
    }
}

export default ContactUsPage;