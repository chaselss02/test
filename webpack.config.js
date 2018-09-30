const pkg = require('./package.json');
var exec = require('child_process').exec;
module.exports = async function (webpackConfig) {
    console.log(process.env,pkg);
    if(process.env.DN_CMD=='build'){
        webpackConfig.output.publicPath = `//chaselss.com/${pkg.name}/${pkg.version}`
    }
}