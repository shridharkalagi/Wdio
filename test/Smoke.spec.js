import assert from 'assert';
// const assert = require('assert');
suite('Sample', () => {

    test('@local Smaple Test -', () => {
      browser.url("/cl");
      console.log( browser.desiredCapabilities.platform);
      console.log('Test passed');
      // assert.fail();
    });

  test('@Manual Scenario - Sample Failure', () => {
    // assert.fail();
  });

  test('@Manual Scenario - Sample Pass', () => {
    // assert.fail();
  });

});
