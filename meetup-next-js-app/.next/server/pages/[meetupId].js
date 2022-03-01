module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/[meetupId]/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/meetups/Meetup.js":
/*!**************************************!*\
  !*** ./components/meetups/Meetup.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Meetup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Meetup.module.css */ \"./components/meetups/Meetup.module.css\");\n/* harmony import */ var _Meetup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Meetup_module_css__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _jsxFileName = \"/Users/christopher/Documents/web/courses/04-react-the-complete-guide/learning-react-v2/meetup-next-js-app/components/meetups/Meetup.js\";\n\n\nfunction Meetup({\n  meetup\n}) {\n  const {\n    title,\n    image,\n    address,\n    description\n  } = meetup;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n    className: _Meetup_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.detail,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n      src: image,\n      alt: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: title\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: description\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"address\", {\n      children: address\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 6,\n    columnNumber: 5\n  }, this);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Meetup);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwLmpzPzY4NWYiXSwibmFtZXMiOlsiTWVldHVwIiwibWVldHVwIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsImNsYXNzZXMiLCJkZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFFQSxTQUFTQSxNQUFULENBQWdCO0FBQUVDO0FBQUYsQ0FBaEIsRUFBNEI7QUFDMUIsUUFBTTtBQUFFQyxTQUFGO0FBQVNDLFNBQVQ7QUFBZ0JDLFdBQWhCO0FBQXlCQztBQUF6QixNQUF5Q0osTUFBL0M7QUFDQSxzQkFDRTtBQUFTLGFBQVMsRUFBR0sseURBQU8sQ0FBQ0MsTUFBN0I7QUFBQSw0QkFDRTtBQUFLLFNBQUcsRUFBR0osS0FBWDtBQUFtQixTQUFHLEVBQUdEO0FBQXpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsZ0JBQU1BO0FBQU47QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0U7QUFBQSxnQkFBS0c7QUFBTDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRTtBQUFBLGdCQUFXRDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQVFEOztBQUVjSixxRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NlcyBmcm9tICcuL01lZXR1cC5tb2R1bGUuY3NzJztcblxuZnVuY3Rpb24gTWVldHVwKHsgbWVldHVwIH0pIHtcbiAgY29uc3QgeyB0aXRsZSwgaW1hZ2UsIGFkZHJlc3MsIGRlc2NyaXB0aW9uIH0gPSBtZWV0dXA7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXsgY2xhc3Nlcy5kZXRhaWwgfT5cbiAgICAgIDxpbWcgc3JjPXsgaW1hZ2UgfSBhbHQ9eyB0aXRsZSB9IC8+XG4gICAgICA8aDI+eyB0aXRsZSB9PC9oMj5cbiAgICAgIDxwPnsgZGVzY3JpcHRpb24gfTwvcD5cbiAgICAgIDxhZGRyZXNzPnsgYWRkcmVzcyB9PC9hZGRyZXNzPlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWVldHVwOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/meetups/Meetup.js\n");

/***/ }),

/***/ "./components/meetups/Meetup.module.css":
/*!**********************************************!*\
  !*** ./components/meetups/Meetup.module.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// Exports\nmodule.exports = {\n\t\"detail\": \"Meetup_detail__nSacT\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL21lZXR1cHMvTWVldHVwLm1vZHVsZS5jc3M/MzRmMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXAubW9kdWxlLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImRldGFpbFwiOiBcIk1lZXR1cF9kZXRhaWxfX25TYWNUXCJcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/meetups/Meetup.module.css\n");

/***/ }),

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/*! exports provided: getStaticPaths, getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_meetups_Meetup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/meetups/Meetup */ \"./components/meetups/Meetup.js\");\n\nvar _jsxFileName = \"/Users/christopher/Documents/web/courses/04-react-the-complete-guide/learning-react-v2/meetup-next-js-app/pages/[meetupId]/index.js\";\n// import { Fragment } from 'react';\n// import { useRouter } from 'next/router';\n\nconst MOCK_MEETUPS = [{\n  id: 'm1',\n  title: 'The First Meetup',\n  image: 'https://image.shutterstock.com/image-photo/view-malaga-bullring-harbor-spain-600w-281599199.jpg',\n  address: '5th Avenue, Malaga',\n  description: 'This is the first meetup description'\n}, {\n  id: 'm2',\n  title: 'The Second Meetup',\n  image: 'https://image.shutterstock.com/image-photo/dusk-view-barcelona-spain-plaza-600w-520067140.jpg',\n  address: '10th Street, Barcelona',\n  description: 'This is the second meetup description'\n}, {\n  id: 'm3',\n  title: 'The Third Meetup',\n  image: 'https://image.shutterstock.com/image-photo/old-town-prince-palace-on-600w-427693039.jpg',\n  address: '20th Avenue, Monaco',\n  description: 'This is the third meetup description'\n}];\n\nfunction MeetupDetail({\n  meetup\n}) {\n  // const router = useRouter();\n  // const { meetupId } = router.query;\n  // const meetup = MOCK_MEETUPS.find(meetup => meetup.id === meetupId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_Meetup__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    meetup: meetup\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 10\n  }, this);\n}\n/*\n  When a page has dynamic routes and uses `getStaticProps()`,\n  it needs to define a list of paths to be statically generated.\n  It returns an object with a `path` property whihc is an array\n  of `params` of each value that we can have for the dynamic\n  route. The returned object also has a `fallback` property which\n  is a boolean. If the `fallback` property is set to false then\n  this indicates Next.js that the list of path params is complete\n  and if a param that does not exist is provided the show a 404\n  page. If it is set to true, then this indicates Next.js to try\n  generate dynamically on the server if a params that does not\n  exist is passed as routing parameter\n*/\n\n\nasync function getStaticPaths() {\n  return {\n    paths: [{\n      params: {\n        meetupId: 'm1'\n      }\n    }, {\n      params: {\n        meetupId: 'm2'\n      }\n    }, {\n      params: {\n        meetupId: 'm3'\n      }\n    }],\n    fallback: true\n  };\n}\nasync function getStaticProps(context) {\n  /*\n    The `context` argument has access to routing\n    parameters\n  */\n  const {\n    meetupId\n  } = context.params;\n  console.log('getStaticProps - meetupId: ', meetupId);\n  const meetup = MOCK_MEETUPS.find(meetup => meetup.id === meetupId);\n  return {\n    props: {\n      meetup\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiTU9DS19NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldHVwRGV0YWlsIiwibWVldHVwIiwiZ2V0U3RhdGljUGF0aHMiLCJwYXRocyIsInBhcmFtcyIsIm1lZXR1cElkIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwiZmluZCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLFlBQVksR0FBRyxDQUNuQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUFFLGlHQUhUO0FBSUVDLFNBQU8sRUFBRSxvQkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQURtQixFQVFuQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsbUJBRlQ7QUFHRUMsT0FBSyxFQUFFLCtGQUhUO0FBSUVDLFNBQU8sRUFBRSx3QkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQVJtQixFQWVuQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUFFLHlGQUhUO0FBSUVDLFNBQU8sRUFBRSxxQkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQWZtQixDQUFyQjs7QUF3QkEsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQWtDO0FBQ2hDO0FBQ0E7QUFFQTtBQUVBLHNCQUFPLHFFQUFDLGtFQUFEO0FBQVEsVUFBTSxFQUFHQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDLFNBQU87QUFDTEMsU0FBSyxFQUFFLENBQ0w7QUFDRUMsWUFBTSxFQUFFO0FBQ05DLGdCQUFRLEVBQUU7QUFESjtBQURWLEtBREssRUFNTDtBQUNFRCxZQUFNLEVBQUU7QUFDTkMsZ0JBQVEsRUFBRTtBQURKO0FBRFYsS0FOSyxFQVdMO0FBQ0VELFlBQU0sRUFBRTtBQUNOQyxnQkFBUSxFQUFFO0FBREo7QUFEVixLQVhLLENBREY7QUFrQkxDLFlBQVEsRUFBRTtBQWxCTCxHQUFQO0FBb0JEO0FBRU0sZUFBZUMsY0FBZixDQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUM7QUFDRjtBQUNBO0FBQ0E7QUFDRSxRQUFNO0FBQUVIO0FBQUYsTUFBZUcsT0FBTyxDQUFDSixNQUE3QjtBQUVBSyxTQUFPLENBQUNDLEdBQVIsQ0FBWSw2QkFBWixFQUEyQ0wsUUFBM0M7QUFFQSxRQUFNSixNQUFNLEdBQUdQLFlBQVksQ0FBQ2lCLElBQWIsQ0FBa0JWLE1BQU0sSUFBSUEsTUFBTSxDQUFDTixFQUFQLEtBQWNVLFFBQTFDLENBQWY7QUFFQSxTQUFPO0FBQ0xPLFNBQUssRUFBRTtBQUNMWDtBQURLO0FBREYsR0FBUDtBQUtEO0FBRWNELDJFQUFmIiwiZmlsZSI6Ii4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuLy8gaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInO1xuXG5pbXBvcnQgTWVldHVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXAnO1xuXG5jb25zdCBNT0NLX01FRVRVUFMgPSBbXG4gIHtcbiAgICBpZDogJ20xJyxcbiAgICB0aXRsZTogJ1RoZSBGaXJzdCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZS5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvL3ZpZXctbWFsYWdhLWJ1bGxyaW5nLWhhcmJvci1zcGFpbi02MDB3LTI4MTU5OTE5OS5qcGcnLFxuICAgIGFkZHJlc3M6ICc1dGggQXZlbnVlLCBNYWxhZ2EnLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgZmlyc3QgbWVldHVwIGRlc2NyaXB0aW9uJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdtMicsXG4gICAgdGl0bGU6ICdUaGUgU2Vjb25kIE1lZXR1cCcsXG4gICAgaW1hZ2U6ICdodHRwczovL2ltYWdlLnNodXR0ZXJzdG9jay5jb20vaW1hZ2UtcGhvdG8vZHVzay12aWV3LWJhcmNlbG9uYS1zcGFpbi1wbGF6YS02MDB3LTUyMDA2NzE0MC5qcGcnLFxuICAgIGFkZHJlc3M6ICcxMHRoIFN0cmVldCwgQmFyY2Vsb25hJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIHNlY29uZCBtZWV0dXAgZGVzY3JpcHRpb24nXG4gIH0sXG4gIHtcbiAgICBpZDogJ20zJyxcbiAgICB0aXRsZTogJ1RoZSBUaGlyZCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZS5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvL29sZC10b3duLXByaW5jZS1wYWxhY2Utb24tNjAwdy00Mjc2OTMwMzkuanBnJyxcbiAgICBhZGRyZXNzOiAnMjB0aCBBdmVudWUsIE1vbmFjbycsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSB0aGlyZCBtZWV0dXAgZGVzY3JpcHRpb24nXG4gIH1cbl07XG5cbmZ1bmN0aW9uIE1lZXR1cERldGFpbCh7IG1lZXR1cCB9KSB7XG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICAvLyBjb25zdCB7IG1lZXR1cElkIH0gPSByb3V0ZXIucXVlcnk7XG5cbiAgLy8gY29uc3QgbWVldHVwID0gTU9DS19NRUVUVVBTLmZpbmQobWVldHVwID0+IG1lZXR1cC5pZCA9PT0gbWVldHVwSWQpO1xuXG4gIHJldHVybiA8TWVldHVwIG1lZXR1cD17IG1lZXR1cCB9IC8+O1xufVxuXG4vKlxuICBXaGVuIGEgcGFnZSBoYXMgZHluYW1pYyByb3V0ZXMgYW5kIHVzZXMgYGdldFN0YXRpY1Byb3BzKClgLFxuICBpdCBuZWVkcyB0byBkZWZpbmUgYSBsaXN0IG9mIHBhdGhzIHRvIGJlIHN0YXRpY2FsbHkgZ2VuZXJhdGVkLlxuICBJdCByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGEgYHBhdGhgIHByb3BlcnR5IHdoaWhjIGlzIGFuIGFycmF5XG4gIG9mIGBwYXJhbXNgIG9mIGVhY2ggdmFsdWUgdGhhdCB3ZSBjYW4gaGF2ZSBmb3IgdGhlIGR5bmFtaWNcbiAgcm91dGUuIFRoZSByZXR1cm5lZCBvYmplY3QgYWxzbyBoYXMgYSBgZmFsbGJhY2tgIHByb3BlcnR5IHdoaWNoXG4gIGlzIGEgYm9vbGVhbi4gSWYgdGhlIGBmYWxsYmFja2AgcHJvcGVydHkgaXMgc2V0IHRvIGZhbHNlIHRoZW5cbiAgdGhpcyBpbmRpY2F0ZXMgTmV4dC5qcyB0aGF0IHRoZSBsaXN0IG9mIHBhdGggcGFyYW1zIGlzIGNvbXBsZXRlXG4gIGFuZCBpZiBhIHBhcmFtIHRoYXQgZG9lcyBub3QgZXhpc3QgaXMgcHJvdmlkZWQgdGhlIHNob3cgYSA0MDRcbiAgcGFnZS4gSWYgaXQgaXMgc2V0IHRvIHRydWUsIHRoZW4gdGhpcyBpbmRpY2F0ZXMgTmV4dC5qcyB0byB0cnlcbiAgZ2VuZXJhdGUgZHluYW1pY2FsbHkgb24gdGhlIHNlcnZlciBpZiBhIHBhcmFtcyB0aGF0IGRvZXMgbm90XG4gIGV4aXN0IGlzIHBhc3NlZCBhcyByb3V0aW5nIHBhcmFtZXRlclxuKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoczogW1xuICAgICAge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZWV0dXBJZDogJ20xJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZWV0dXBJZDogJ20yJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBtZWV0dXBJZDogJ20zJ1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIF0sXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLypcbiAgICBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGhhcyBhY2Nlc3MgdG8gcm91dGluZ1xuICAgIHBhcmFtZXRlcnNcbiAgKi9cbiAgY29uc3QgeyBtZWV0dXBJZCB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgY29uc29sZS5sb2coJ2dldFN0YXRpY1Byb3BzIC0gbWVldHVwSWQ6ICcsIG1lZXR1cElkKTtcblxuICBjb25zdCBtZWV0dXAgPSBNT0NLX01FRVRVUFMuZmluZChtZWV0dXAgPT4gbWVldHVwLmlkID09PSBtZWV0dXBJZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbWVldHVwXG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBNZWV0dXBEZXRhaWw7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react/jsx-dev-runtime\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIj9jZDkwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlYWN0L2pzeC1kZXYtcnVudGltZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react/jsx-dev-runtime\n");

/***/ })

/******/ });