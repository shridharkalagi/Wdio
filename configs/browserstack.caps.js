const {
    chrome
} = {key: "value"};

const browserCaps = { chrome };
const browserArr = Object.keys(browserCaps);
const capabilities = browserArr.filter(browser => (browserCaps[browser])).map(browser => browserCaps[browser]);

// console.log(capabilities);
module.exports = capabilities;
