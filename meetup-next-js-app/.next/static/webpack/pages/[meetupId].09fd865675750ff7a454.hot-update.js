webpackHotUpdate_N_E("pages/[meetupId]",{

/***/ "./components/layout/Layout.js":
false,

/***/ "./components/layout/Layout.module.css":
false,

/***/ "./components/layout/MainNavigation.js":
false,

/***/ "./components/layout/MainNavigation.module.css":
false,

/***/ "./components/meetups/MeetupItem.js":
false,

/***/ "./components/meetups/MeetupItem.module.css":
false,

/***/ "./components/ui/Card.js":
false,

/***/ "./components/ui/Card.module.css":
false,

/***/ "./node_modules/next/dist/build/webpack/loaders/next-style-loader/runtime/injectStylesIntoStyleTag.js":
false,

/***/ "./node_modules/next/dist/client/link.js":
false,

/***/ "./node_modules/next/dist/client/use-intersection.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/api.js":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/Layout.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/layout/MainNavigation.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/meetups/MeetupItem.module.css":
false,

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./components/ui/Card.module.css":
false,

/***/ "./node_modules/next/link.js":
false,

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/christopher/Documents/web/courses/04-react-the-complete-guide/learning-react-v2/meetup-next-js-app/pages/[meetupId]/index.js\",\n    _s = $RefreshSig$();\n\n\n\nvar MOCK_MEETUPS = [{\n  id: 'm1',\n  title: 'The First Meetup',\n  image: 'https://image.shutterstock.com/image-photo/view-malaga-bullring-harbor-spain-600w-281599199.jpg',\n  address: '5th Avenue, Malaga',\n  description: 'This is the first meetup description'\n}, {\n  id: 'm2',\n  title: 'The Second Meetup',\n  image: 'https://image.shutterstock.com/image-photo/dusk-view-barcelona-spain-plaza-600w-520067140.jpg',\n  address: '10th Street, Barcelona',\n  description: 'This is the second meetup description'\n}, {\n  id: 'm3',\n  title: 'The Third Meetup',\n  image: 'https://image.shutterstock.com/image-photo/old-town-prince-palace-on-600w-427693039.jpg',\n  address: '20th Avenue, Monaco',\n  description: 'This is the third meetup description'\n}];\n\nfunction MeetupDetail(props) {\n  _s();\n\n  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"])();\n  var meetupId = router.query.meetupId;\n  var meetup = MOCK_MEETUPS.find(function (meetup) {\n    return meetup.id === meetupId;\n  });\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: meetup.image,\n      alt: meetup.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: meetup.title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: meetup.description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: meetup.address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 35,\n    columnNumber: 5\n  }, this);\n}\n\n_s(MeetupDetail, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_2__[\"useRouter\"]];\n});\n\n_c = MeetupDetail;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);\n\nvar _c;\n\n$RefreshReg$(_c, \"MeetupDetail\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz85MmE2Il0sIm5hbWVzIjpbIk1PQ0tfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbCIsInByb3BzIiwicm91dGVyIiwidXNlUm91dGVyIiwibWVldHVwSWQiLCJxdWVyeSIsIm1lZXR1cCIsImZpbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxZQUFZLEdBQUcsQ0FDbkI7QUFDRUMsSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGtCQUZUO0FBR0VDLE9BQUssRUFBRSxpR0FIVDtBQUlFQyxTQUFPLEVBQUUsb0JBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FEbUIsRUFRbkI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLG1CQUZUO0FBR0VDLE9BQUssRUFBRSwrRkFIVDtBQUlFQyxTQUFPLEVBQUUsd0JBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FSbUIsRUFlbkI7QUFDRUosSUFBRSxFQUFFLElBRE47QUFFRUMsT0FBSyxFQUFFLGtCQUZUO0FBR0VDLE9BQUssRUFBRSx5RkFIVDtBQUlFQyxTQUFPLEVBQUUscUJBSlg7QUFLRUMsYUFBVyxFQUFFO0FBTGYsQ0FmbUIsQ0FBckI7O0FBd0JBLFNBQVNDLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQUE7O0FBQzNCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFEMkIsTUFFbkJDLFFBRm1CLEdBRU5GLE1BQU0sQ0FBQ0csS0FGRCxDQUVuQkQsUUFGbUI7QUFJM0IsTUFBTUUsTUFBTSxHQUFHWixZQUFZLENBQUNhLElBQWIsQ0FBa0IsVUFBQUQsTUFBTTtBQUFBLFdBQUlBLE1BQU0sQ0FBQ1gsRUFBUCxLQUFjUyxRQUFsQjtBQUFBLEdBQXhCLENBQWY7QUFFQSxzQkFDRSxxRUFBQyw4Q0FBRDtBQUFBLDRCQUNFO0FBQUssU0FBRyxFQUFHRSxNQUFNLENBQUNULEtBQWxCO0FBQTBCLFNBQUcsRUFBR1MsTUFBTSxDQUFDVjtBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRTtBQUFBLGdCQUFNVSxNQUFNLENBQUNWO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxnQkFBS1UsTUFBTSxDQUFDUDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUEsZ0JBQVdPLE1BQU0sQ0FBQ1I7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBUUQ7O0dBZFFFLFk7VUFDUUcscUQ7OztLQURSSCxZO0FBZ0JNQSwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcblxuY29uc3QgTU9DS19NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6ICdtMScsXG4gICAgdGl0bGU6ICdUaGUgRmlyc3QgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by92aWV3LW1hbGFnYS1idWxscmluZy1oYXJib3Itc3BhaW4tNjAwdy0yODE1OTkxOTkuanBnJyxcbiAgICBhZGRyZXNzOiAnNXRoIEF2ZW51ZSwgTWFsYWdhJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGZpcnN0IG1lZXR1cCBkZXNjcmlwdGlvbidcbiAgfSxcbiAge1xuICAgIGlkOiAnbTInLFxuICAgIHRpdGxlOiAnVGhlIFNlY29uZCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZS5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvL2R1c2stdmlldy1iYXJjZWxvbmEtc3BhaW4tcGxhemEtNjAwdy01MjAwNjcxNDAuanBnJyxcbiAgICBhZGRyZXNzOiAnMTB0aCBTdHJlZXQsIEJhcmNlbG9uYScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBzZWNvbmQgbWVldHVwIGRlc2NyaXB0aW9uJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdtMycsXG4gICAgdGl0bGU6ICdUaGUgVGhpcmQgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by9vbGQtdG93bi1wcmluY2UtcGFsYWNlLW9uLTYwMHctNDI3NjkzMDM5LmpwZycsXG4gICAgYWRkcmVzczogJzIwdGggQXZlbnVlLCBNb25hY28nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgdGhpcmQgbWVldHVwIGRlc2NyaXB0aW9uJ1xuICB9XG5dO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWwocHJvcHMpIHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IHsgbWVldHVwSWQgfSA9IHJvdXRlci5xdWVyeTtcblxuICBjb25zdCBtZWV0dXAgPSBNT0NLX01FRVRVUFMuZmluZChtZWV0dXAgPT4gbWVldHVwLmlkID09PSBtZWV0dXBJZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8aW1nIHNyYz17IG1lZXR1cC5pbWFnZSB9IGFsdD17IG1lZXR1cC50aXRsZSB9IC8+XG4gICAgICA8aDI+eyBtZWV0dXAudGl0bGUgfTwvaDI+XG4gICAgICA8cD57IG1lZXR1cC5kZXNjcmlwdGlvbiB9PC9wPlxuICAgICAgPGFkZHJlc3M+eyBtZWV0dXAuYWRkcmVzcyB9PC9hZGRyZXNzPlxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ })

})