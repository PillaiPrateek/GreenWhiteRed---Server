var express = require("express");
var url = require("url")
var app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use("/styles", express.static(__dirname + "/styles"));

var controller = require("./controller")(app);

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

