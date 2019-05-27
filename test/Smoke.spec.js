import assert from 'assert';
import waitForPageToLoad from './StrategySample';
// const assert = require('assert');
suite('Sample', () => {

    test('@local Smaple Test -', () => {
      browser.url("/cl");
      console.log( browser.desiredCapabilities.platform);
      console.log('Test passed');
      waitForPageToLoad();
      // assert.fail();
    });

  test('@Manual Scenario - Sample Failure', () => {
    // assert.fail();
  });

  test('@Manual Scenario - Sample Pass', () => {
    // assert.fail();
  });

});
