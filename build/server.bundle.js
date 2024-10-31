/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

;// external "express"
const external_express_namespaceObject = require("express");
;// ./src/server/index.js
// server/index.js

var app = external_express_namespaceObject();
var port = 9000;
app.get('/', function (req, res) {
  res.send('Hello world');
});
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port, "/"));
});
/******/ })()
;