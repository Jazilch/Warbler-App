const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect("mongodb://jazilch:Rootbeer6@ds123124.mlab.com:23124/warbler-app", {
  keepAlive: true
});

module.exports.User = require("./user");
module.exports.Message = require("./message");
