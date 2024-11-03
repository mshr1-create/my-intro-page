/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/

;// external "express"
const external_express_namespaceObject = require("express");
;// external "path"
const external_path_namespaceObject = require("path");
;// external "url"
const external_url_namespaceObject = require("url");
;// external "react"
const external_react_namespaceObject = require("react");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_namespaceObject);
;// external "react-dom/server"
const server_namespaceObject = require("react-dom/server");
;// ./src/components/App.tsx
// src/components/App.tsx


var App = function App() {
  return /*#__PURE__*/external_react_default().createElement("h1", null, "Hello from React SSR!");
};
/* harmony default export */ const components_App = (App);
;// ./src/server/index.js
// server/index.js






var server_filename = (0,external_url_namespaceObject.fileURLToPath)("file:///C:/Users/manne/my-intro-page/src/server/index.js");
var server_dirname = external_path_namespaceObject.dirname(server_filename);
var app = external_express_namespaceObject();
var port = 9000;

// 静的ファイルの提供
app.use(external_express_namespaceObject["static"](external_path_namespaceObject.resolve(server_dirname, '../build/public')));
app.get('/', function (req, res) {
  // サーバー側で React コンポーネントをレンダリング
  var appString = (0,server_namespaceObject.renderToString)(/*#__PURE__*/external_react_namespaceObject.createElement(components_App, null));

  // HTML テンプレートにレンダリング結果を埋め込む
  var html = "\n    <!DOCTYPE html>\n    <html lang=\"ja\">\n      <head>\n        <meta charset=\"UTF-8\">\n        <title>My SSR React App</title>\n      </head>\n      <body>\n        <div id=\"root\">".concat(appString, "</div>\n        <script src=\"/bundle.js\" type=\"module\"></script>\n      </body>\n    </html>\n  ");
  res.send(html);
});
app.listen(port, function () {
  console.log("Server running at http://localhost:".concat(port, "/"));
});
/******/ })()
;