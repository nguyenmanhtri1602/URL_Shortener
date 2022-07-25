var mongoose = require("mongoose");
mongoose.Promise = require('bluebird');

var pad = function (num, size) {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

mongoose.set('debug', false); // turn on debug
mongoose.connect( NODE_CONFIG.DB.MONGODB,)
.then(function(){ console.log('Connection succeeded with database: ' + NODE_CONFIG.DB.MONGODB ) })
.catch(function(err){ console.error(err) });

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function callback() {
    console.log("Connection with database succeeded.");
});

exports.db = db;

/**
 * setup mongoose-auto-increment
 */
var autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(db);
exports.autoIncrementPlugin = autoIncrement.plugin;
