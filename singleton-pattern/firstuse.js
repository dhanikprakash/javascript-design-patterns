
let logger = require("./logger");

 function logFirstImplementation() {
  logger.logger.printLogCount();
  logger.logger.log("First File");
  logger.logger.printLogCount();
}

module.exports.logFirstImplementation = logFirstImplementation;
