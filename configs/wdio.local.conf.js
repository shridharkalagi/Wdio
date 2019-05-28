const defaultConfig = require('./wdio.conf.js');
const baseURL = 'https://www.google.com';
const utils = require('./utils');
import SetContext from '../test/StrategySample';
const overriddenConfig = {
  baseUrl: baseURL,
  host: 'localhost',
  port: 4444,
  maxInstances: 1,
  // capabilities: [chrome],//capabilities: [{}] Default is firefox
  capabilities: [
    {
      browserName: 'chrome',
      chromeOptions: {
        args: ['window-size=2880,1800']
      },
      platform: 'desktop',
    },
    {
      browserName: 'chrome',
      platform: 'mobile',
    },
  ],
  services: ['selenium-standalone'],
  seleniumArgs: {
    version: '3.13.0'
  },
  mochaOpts: {
    ui: 'tdd',
    compilers: ['js:@babel/register'],
    applicationCategory: 'Sample',
    timeout: 10 * 60 * 1000
  },
  seleniumInstallArgs: {
    baseURL: 'https://selenium-release.storage.googleapis.com',
    version: '3.13.0',
    chrome: {
      // check for more recent versions of chrome driver here:
      // https://chromedriver.storage.googleapis.com/index.html
      version: '2.45',
      arch: process.arch,
      baseURL: 'https://chromedriver.storage.googleapis.com'
    }
  },

  onPrepare: function () {
    utils.createDirectory(this.reporterOptions);
    // do nothing after screenshot setup, override Browserstack config in default conf
  },
  onComplete: () => {
    // do nothing, override Browserstack config in default conf
  },
  before: function () {
    // assert = require('chai').assert;
    // browserDetails();
    console.log('contextasdasfdae');
    const context = new SetContext(browser.desiredCapabilities.platform);
    global.currentContext = context;
    console.log('context', global.currentContext);
  },
};

exports.config = Object.assign({}, defaultConfig.config, overriddenConfig);
