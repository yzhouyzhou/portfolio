var projects = require("../models/index.js");
var path = require("path");

module.exports = function (app) {

    app.get("/Resume", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/images/ying-zhou-resume.pdf"));
    });

    app.get("*", function (req, res) {
        res.render("index", { projects });
    });
};