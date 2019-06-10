require("@babel/register");
// import SetContext from './test/StrategySample';
exports.config = {
    runner: 'local',
    exclude: [
        // 'path/to/excluded/files'
    ],
    
    capabilities: [{
        maxInstances: 1,
        browserName: 'firefox',

    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'trace',

    // bail (default is 0 - don't bail, run all tests).
    bail: 0,
    baseUrl: 'http://www.kroger.com',
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if Selenium Grid doesn't send response
    connectionRetryTimeout: 90000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    services: ['selenium-standalone'],
    framework: 'mocha',
    reporters: ['spec'],
    baseUrl: 'https://www.kroger.com',
    screenshotOnReject: false,
    // reporters: [
    //     'dot', 'spec', 'mochawesome'
    // ],

    reporterOptions: {
        outputDir: './Results',
        embedScreenshots: true,
        screenshotExtension: '.png'
    },

    logLevel: 'silent',
    coloredLogs: true,
    timeout: 80000,
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,


    // specs: [
    //     './test/**.js'
    // ],

    // suites: {
    //     smoke: [
    //         './test/Smoke.spec.js'
    //     ]
    // },

    mochaOpts: {
        ui: 'tdd',
        compilers: ['js:@babel/register'],
        applicationCategory: 'Sample',
        timeout: 10 * 60 * 1000
    },

    maxInstances: 1,
    // =====
    // Hooks
    // =====

    // Set spec name as session name in browserstack dashboard
    beforeSession: function (config, capabilities, specs) {
        // capabilities.name = specs && specs[0].split('/').pop() || undefined;
    },

    // Gets executed once before all workers get launched.
    onPrepare: function () {
        utils.createDirectory(this.reporterOptions);
        // console.log('Connecting to Browserstack');
        // const args = {
        //     'user': '',
        //     'key': '',
        //     'localIdentifier': process.env.BUILD_NO,
        //     'force': 'true'
        // }
        // return new Promise(function (resolve, reject) {
        //     exports.bs_local = new browserstack.Local();
        //     exports.bs_local.start(args, function (error) {
        //         if (error) {
        //             return reject(error)
        //         }
        //         console.log('Connected. Now testing...');
        //         resolve()

        //     })
        // })
    },

    // Gets executed before Tests execution begins. At this point you can access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function () {
        // const context = new SetContext(browser.desiredCapabilities.platform);
        // global.currentContext = context;
        // console.log('context', global.currentContext);
    },

    // Runs after a WebdriverIO command gets executed
    afterTest: function (test) {
        if (!(test.err === undefined)) {
            // capture screenprint for assertion errors.
            if (test.passed === false && test.err.message.indexOf('Verify') === -1) {
                var screenshotName = this.reporterOptions.outputDir + '/screenshots/' + test.title + '_' + browser.desiredCapabilities.browserName + '.png';
                browser.saveScreenshot(screenshotName);
            }
        }
    },

    onComplete: function () {
        exports.bs_local.stop(function () { })
    }
}
