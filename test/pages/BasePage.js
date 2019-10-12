import SetContext from '../StrategySample'
class BasePage {
    constructor(){
        if(!global.currentContext){
        //Chrome capabilities are changed to Mobile view port 
        browser.config.capabilities.browserName == 'chrome' ? 
        global.currentContext = new SetContext('mobile'):global.currentContext = new SetContext('desktop');
        }
    }

    static openURL(url){
        browser.url(url);
    }
}

export default BasePage