'use strict';
import WebFlow from './Flows/WebFlow';
import MobileFlow from './Flows/MobileFlow';
class SetContext {
    constructor(type) {
        switch (type) {
            case "desktop":
                return new WebFlow();
                
            case "mobile":
                return new MobileFlow();
                
            default:
                return new WebFlow();
        }
    }
}
export default SetContext;