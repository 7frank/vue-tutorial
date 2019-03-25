
var express = require('express');
var app = express();

app.use("/assets",express.static('assets'));
app.use("/public",express.static('public'));

/**
 * load csv file from filesystem and create a json file in the same place
 */
app.get('/csv2json', function (req, res) {
  var csv2json = require('csv2json');
var fs = require('fs');
 
fs.createReadStream("./assets/test2.csv")
  .pipe(csv2json({
    // Defaults to comma.
    separator: ';'
  }))
  .pipe(fs.createWriteStream("./assets/test2.json"));


});



app.listen(3123, function () {
  console.log('Example app listening on port 3000!');
});