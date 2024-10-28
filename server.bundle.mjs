/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import { createRequire as __WEBPACK_EXTERNAL_createRequire } from 'module';
/******/ var __webpack_modules__ = {
  /***/ './src/components/App.tsx':
    /*!********************************!*\
  !*** ./src/components/App.tsx ***!
  \********************************/
    /***/ (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n// src/components/App.tsx\n\nvar App = function App() {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1", null, "Hello from React SSR!");\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);\n\n//# sourceURL=webpack://my-intro-page/./src/components/App.tsx?'
      );

      /***/
    },

  /***/ express:
    /*!**************************!*\
  !*** external "express" ***!
  \**************************/
    /***/ (module) => {
      module.exports = require('express');

      /***/
    },

  /***/ react:
    /*!************************!*\
  !*** external "react" ***!
  \************************/
    /***/ (module) => {
      module.exports = require('react');

      /***/
    },

  /***/ 'react-dom/server':
    /*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
    /***/ (module) => {
      module.exports = require('react-dom/server');

      /***/
    },

  /***/ path:
    /*!***********************!*\
  !*** external "path" ***!
  \***********************/
    /***/ (module) => {
      module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)(
        'path'
      );

      /***/
    },

  /***/ url:
    /*!**********************!*\
  !*** external "url" ***!
  \**********************/
    /***/ (module) => {
      module.exports = __WEBPACK_EXTERNAL_createRequire(import.meta.url)('url');

      /***/
    },

  /***/ './src/server/index.js':
    /*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
    /***/ (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      eval(
        '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ "express");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");\n/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! url */ "url");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");\n/* harmony import */ var _components_App_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/App.tsx */ "./src/components/App.tsx");\n// src/server/index.js\n\n\n\n\n\n\nvar __filename = (0,url__WEBPACK_IMPORTED_MODULE_2__.fileURLToPath)("file:///C:/Users/manne/my-intro-page/src/server/index.js");\nvar __dirname = path__WEBPACK_IMPORTED_MODULE_1__.dirname(__filename);\nvar app = express__WEBPACK_IMPORTED_MODULE_0__();\nvar port = 9000;\n\n// 静的ファイルの提供\napp.use(express__WEBPACK_IMPORTED_MODULE_0__["static"](path__WEBPACK_IMPORTED_MODULE_1__.resolve(__dirname, \'../build/public\')));\napp.get(\'*\', function (req, res) {\n  // サーバー側で React コンポーネントをレンダリング\n  var appString = (0,react_dom_server__WEBPACK_IMPORTED_MODULE_4__.renderToString)(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__.createElement(_components_App_tsx__WEBPACK_IMPORTED_MODULE_5__["default"], null));\n\n  // HTML テンプレートにレンダリング結果を埋め込む\n  var html = "\\n    <!DOCTYPE html>\\n    <html lang=\\"ja\\">\\n      <head>\\n        <meta charset=\\"UTF-8\\">\\n        <title>My SSR React App</title>\\n      </head>\\n      <body>\\n        <div id=\\"root\\">".concat(appString, "</div>\\n        <script src=\\"/bundle.js\\" type=\\"module\\"></script>\\n      </body>\\n    </html>\\n  ");\n  res.send(html);\n});\napp.listen(port, function () {\n  console.log("Server running at http://localhost:".concat(port, "/"));\n});\n\n//# sourceURL=webpack://my-intro-page/./src/server/index.js?'
      );

      /***/
    },

  /******/
};
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
  /******/ // Check if module is in cache
  /******/ var cachedModule = __webpack_module_cache__[moduleId];
  /******/ if (cachedModule !== undefined) {
    /******/ return cachedModule.exports;
    /******/
  }
  /******/ // Create a new module (and put it into the cache)
  /******/ var module = (__webpack_module_cache__[moduleId] = {
    /******/ // no module.id needed
    /******/ // no module.loaded needed
    /******/ exports: {},
    /******/
  });
  /******/
  /******/ // Execute the module function
  /******/ __webpack_modules__[moduleId](
    module,
    module.exports,
    __webpack_require__
  );
  /******/
  /******/ // Return the exports of the module
  /******/ return module.exports;
  /******/
}
/******/
/************************************************************************/
/******/ /* webpack/runtime/compat get default export */
/******/ (() => {
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/ __webpack_require__.n = (module) => {
    /******/ var getter =
      module && module.__esModule
        ? /******/ () => module['default']
        : /******/ () => module;
    /******/ __webpack_require__.d(getter, { a: getter });
    /******/ return getter;
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
  /******/ // define getter functions for harmony exports
  /******/ __webpack_require__.d = (exports, definition) => {
    /******/ for (var key in definition) {
      /******/ if (
        __webpack_require__.o(definition, key) &&
        !__webpack_require__.o(exports, key)
      ) {
        /******/ Object.defineProperty(exports, key, {
          enumerable: true,
          get: definition[key],
        });
        /******/
      }
      /******/
    }
    /******/
  };
  /******/
})();
/******/
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
  /******/ __webpack_require__.o = (obj, prop) =>
    Object.prototype.hasOwnProperty.call(obj, prop);
  /******/
})();
/******/
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
  /******/ // define __esModule on exports
  /******/ __webpack_require__.r = (exports) => {
    /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/ Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module',
      });
      /******/
    }
    /******/ Object.defineProperty(exports, '__esModule', { value: true });
    /******/
  };
  /******/
})();
/******/
/************************************************************************/
/******/
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ var __webpack_exports__ = __webpack_require__('./src/server/index.js');
/******/
