/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n\n\nvar _express = _interopRequireDefault(require(\"express\"));\nvar _path = _interopRequireDefault(require(\"path\"));\nvar _url = require(\"url\");\nvar _react = _interopRequireDefault(require(\"react\"));\nvar _server = require(\"react-dom/server\");\nvar _App = _interopRequireDefault(require(\"../components/App.tsx\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\n// src/server/index.js\n\nvar _filename = (0, _url.fileURLToPath)(\"file:///C:/Users/manne/my-intro-page/src/server/index.js\");\nvar _dirname = _path[\"default\"].dirname(_filename);\nvar app = (0, _express[\"default\"])();\nvar port = 9000;\n\n// 静的ファイルの提供\napp.use(_express[\"default\"][\"static\"](_path[\"default\"].resolve(_dirname, '../build/public')));\napp.get('*', function (req, res) {\n  // サーバー側で React コンポーネントをレンダリング\n  var appString = (0, _server.renderToString)(/*#__PURE__*/_react[\"default\"].createElement(_App[\"default\"], null));\n\n  // HTML テンプレートにレンダリング結果を埋め込む\n  var html = \"\\n    <!DOCTYPE html>\\n    <html lang=\\\"ja\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <title>My SSR React App</title>\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\">\".concat(appString, \"</div>\\n        <script src=\\\"/bundle.js\\\" type=\\\"module\\\"></script>\\n      </body>\\n    </html>\\n  \");\n  res.send(html);\n});\napp.listen(port, function () {\n  console.log(\"Server running at http://localhost:\".concat(port, \"/\"));\n});\n\n//# sourceURL=webpack://my-intro-page/./src/server/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/server/index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;