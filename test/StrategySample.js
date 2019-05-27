'use strict';

class SetContext {
    constructor(type) {
        switch (type) {
            case "desktop":
                this.strategy = new WebFlow();
                break
            case "mobile":
                this.strategy = new MobileFlow();
                break
            default:
                this.strategy = new WebFlow();
        }
    }

    waitForGenericPage() {
        this.strategy.waitForPageToLoad()
    }
}

class Strategy {
    constructor() {
    }
}

class MobileFlow extends Strategy {
    constructor() {
        super()
        console.log('Mobile Flow created')
    }

    waitForPageToLoad() {
        console.log('Wait fir Mobile Page')
    }
}

class WebFlow extends Strategy {
    constructor() {
        super()
        console.log('WebFlow created')
    }

    waitForPageToLoad() {
        console.log('Wait fir Web Page')
    }
}

function init_Strategy() {
    let context = new SetContext(browser.desiredCapabilities.platform)
    context.waitForGenericPage()
}
export default init_Strategy;