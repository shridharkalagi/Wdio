const browsers = require('./browserstack.caps');
const browserstack = require('browserstack-local');
import SetContext from '../test/StrategySample';
const utils = require('./utils');
exports.config = {
    baseUrl: 'https://www-test.com',
    // ======================
    // Grid Node Capabilities
    // ======================
    capabilities: browsers,

    // ===========================
    // Browser stack Configuration
    // ===========================
    host: 'hub-use.browserstack.com',
    port: 80,
    user: '',
    key: '',

    screenshotOnReject: false,
    reporters: [
        'dot', 'spec', 'mochawesome'
    ],

    reporterOptions: {
        outputDir: './Results',
        embedScreenshots: true,
        screenshotExtension: '.png'
    },

    logLevel: 'silent',
    coloredLogs: true,

    // ======================
    // Timeout Configurations
    // ======================
    // Default timeout for all waitForXXX commands.
    timeout: 80000,
    waitforTimeout: 5000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,

    // =============================
    // Test Framework Configurations
    // =============================
    framework: 'mocha',

    // specs: [
    //     './test/**.js'
    // ],

    suites: {
        smoke: [
            './test/Smoke.spec.js'
        ]
    },

    // Options to be passed to Mocha.
    mochaOpts: {
        ui: 'tdd',
        compilers: ['js:@babel/register'],
        applicationCategory: 'Sample',
        timeout: 10 * 60 * 1000
    },

    maxInstances: 10,
    // =====
    // Hooks
    // =====

    // Set spec name as session name in browserstack dashboard
    beforeSession: function (config, capabilities, specs) {
        capabilities.name = specs && specs[0].split('/').pop() || undefined;
    },

    // Gets executed once before all workers get launched.
    onPrepare: function () {
        utils.createDirectory(this.reporterOptions);
        console.log('Connecting to Browserstack');
        const args = {
            'user': '',
            'key': '',
            'localIdentifier': process.env.BUILD_NO,
            'force': 'true'
        }
        return new Promise(function (resolve, reject) {
            exports.bs_local = new browserstack.Local();
            exports.bs_local.start(args, function (error) {
                if (error) {
                    return reject(error)
                }
                console.log('Connected. Now testing...');
                resolve()

            })
        })
    },

    // Gets executed before Tests execution begins. At this point you can access to all global
    // variables like `browser`. It is the perfect place to define custom commands.
    before: function () {
        const context = new SetContext(browser.desiredCapabilities.platform);
        global.currentContext = context;
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
};