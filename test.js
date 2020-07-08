var http = require("http");
var fs = require("fs");

var myReadStream = fs.createReadStream(__dirname + "/readMe.txt");

myReadStream.on("error", function (err) {
  console.log(err);
  myReadStream.on("data", function (chunk) {
    console.log("new chunk received:");
    console.log("chunk");
  });
});
