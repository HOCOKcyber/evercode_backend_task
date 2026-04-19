const config = require("./config.js")

function log(message){
    console.log(`${config.appName}: ${message}`)
}

module.exports = log