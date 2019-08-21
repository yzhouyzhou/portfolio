var express = require("express");
var request = require("request");
var exphbs = require("express-handlebars");

var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

require("./routes/htmlRoutes")(app);

app.listen(PORT, function () {
    console.log("Ying Zhou Resume listening on http://localhost:" + PORT);
});