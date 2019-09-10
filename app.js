var express = require("express");
var app = express();
 
app.get("/", (req, res, next) => {
    res.json(["Master","TP","DevOps","1","2"]);
});
 
app.get("/version", (req, res, next) => {
    var pjson = require('./package.json');
    res.send({ version: pjson.version });
});
 
app.listen(3000, () => {
 console.log("Server running on port 3000");
});
 
module.exports = app;
