var projects = require("../models/index.js");
var path = require("path");

module.exports = function (app) {

    app.get("/Resume", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/assets/images/ying-zhou-resume.pdf"));
    });
    app.get("/Games", function (req, res) {
        res.render("games", { projects });
    });
    app.get("/Portfolio", function (req, res) {
        res.render("portfolio");
    });
    app.get("*", function (req, res) {
        res.render("index");
    });
   
};