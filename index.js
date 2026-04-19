const log = require("./logger.js")
const addSchedulerTask = require("./scheduler.js")

addSchedulerTask("runnigTask", 10000, () => log("runnig"))