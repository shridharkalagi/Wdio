var fs = require('fs');

const utils = {
  createDirectory: function (reporterOptions) {
// Create Report Directory
  if (!fs.existsSync(reporterOptions.outputDir)) {
    fs.mkdirSync(reporterOptions.outputDir);
  }

  // Create Screenshot Directory
  if (!fs.existsSync(reporterOptions.outputDir + '/screenshots/')) {
    fs.mkdirSync(reporterOptions.outputDir + '/screenshots/');
  }
}
}
module.exports = utils;