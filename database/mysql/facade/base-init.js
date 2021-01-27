const Base = require("../mysql-base");
const config = require("../../../configs/database.cfg");

module.exports = new Base(console, config);