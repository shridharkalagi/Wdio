const defaultConfig = require('./wdio.local.conf');
const overriddenConfig = {
    debug: false,
    execArgv: ['--inspect=127.0.0.1:5861'],
}
exports.config = Object.assign({}, defaultConfig.config, overriddenConfig);
