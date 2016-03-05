var express = require("express");
var url = require("url")
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use("/", express.static(__dirname + "/public"));
app.use("/third_party_scripts", express.static(__dirname + "/bower_components"));

var controller = require("./controller")(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

