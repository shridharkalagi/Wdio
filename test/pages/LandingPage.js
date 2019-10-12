import BasePage from "./BasePage";
import * as LandingPageObjects from '../pageObjects/LandingPage.objects';
import ContactUsPage from '../pages/ContactUsPage'
class LandingPage extends BasePage{
    constructor(){
        super();
        BasePage.openURL('/index.php');
        this.waitForPageToLoad();
    }

    waitForPageToLoad(){
        $(LandingPageObjects.searchBox).waitForDisplayed( 10000, false, 'Search bar not displayed');
        currentContext.waitForPageToLoad();//Set globally and has different implementation for Web and Mobile
    }
    clickContactUs(){
        $(LandingPageObjects.contactUs).click();
        return new ContactUsPage();
    }
}

export default LandingPage;