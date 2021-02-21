
let logger = require("./logger");

function logSecondImplementation() {
  logger.logger.printLogCount();
  logger.logger.log("Second File");
  logger.logger.printLogCount();
}
module.exports.logSecondImplementation = logSecondImplementation;
