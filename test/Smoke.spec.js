import assert from 'assert';
suite('Sample', () => {
    test('@local Smaple Test -', () => {
      // let context = new SetContext(browser.desiredCapabilities.platform);
      browser.url("/cl");
      console.log( browser.desiredCapabilities.platform);
      console.log('Test passed');
      global.currentContext.waitForPageToLoad();
      // assert.fail();
    });

  test('@Manual Scenario - Sample Failure', () => {
    // assert.fail();
  });

  test('@Manual Scenario - Sample Pass', () => {
    // assert.fail();
  });

});
