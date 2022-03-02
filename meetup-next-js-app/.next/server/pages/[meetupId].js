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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticPaths\", function() { return getStaticPaths; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getStaticProps\", function() { return getStaticProps; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_Meetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/meetups/Meetup */ \"./components/meetups/Meetup.js\");\n\nvar _jsxFileName = \"/Users/christopher/Documents/web/courses/04-react-the-complete-guide/learning-react-v2/meetup-next-js-app/pages/[meetupId]/index.js\";\n// import { Fragment } from 'react';\n// import { useRouter } from 'next/router';\n\n\nconst URL = 'mongodb://127.0.0.1:27017/react-meetups';\nconst MOCK_MEETUPS = [{\n  id: 'm1',\n  title: 'The First Meetup',\n  image: 'https://image.shutterstock.com/image-photo/view-malaga-bullring-harbor-spain-600w-281599199.jpg',\n  address: '5th Avenue, Malaga',\n  description: 'This is the first meetup description'\n}, {\n  id: 'm2',\n  title: 'The Second Meetup',\n  image: 'https://image.shutterstock.com/image-photo/dusk-view-barcelona-spain-plaza-600w-520067140.jpg',\n  address: '10th Street, Barcelona',\n  description: 'This is the second meetup description'\n}, {\n  id: 'm3',\n  title: 'The Third Meetup',\n  image: 'https://image.shutterstock.com/image-photo/old-town-prince-palace-on-600w-427693039.jpg',\n  address: '20th Avenue, Monaco',\n  description: 'This is the third meetup description'\n}];\n\nfunction MeetupDetail({\n  meetup\n}) {\n  // const router = useRouter();\n  // const { meetupId } = router.query;\n  // const meetup = MOCK_MEETUPS.find(meetup => meetup.id === meetupId);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_meetups_Meetup__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    meetup: meetup\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 39,\n    columnNumber: 10\n  }, this);\n}\n/*\n  When a page has dynamic routes and uses `getStaticProps()`,\n  it needs to define a list of paths to be statically generated.\n  It returns an object with a `path` property whihc is an array\n  of `params` of each value that we can have for the dynamic\n  route. The returned object also has a `fallback` property which\n  is a boolean. If the `fallback` property is set to false then\n  this indicates Next.js that the list of path params is complete\n  and if a param that does not exist is provided the show a 404\n  page. If it is set to true, then this indicates Next.js to try\n  generate dynamically on the server if a params that does not\n  exist is passed as routing parameter\n*/\n\n\nasync function getStaticPaths() {\n  // Fetching data from an API\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(URL);\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const meetups = await meetupsCollection.find({}, {\n    _id: 1\n  }).toArray();\n  const paths = meetups.map(meetup => ({\n    params: {\n      meetupId: meetup._id.toString()\n    }\n  }));\n  client.close();\n  return {\n    paths,\n    fallback: true\n  };\n}\nasync function getStaticProps(context) {\n  /*\n    The `context` argument has access to routing\n    parameters\n  */\n  const {\n    meetupId\n  } = context.params;\n  console.log('getStaticProps - meetupId: ', meetupId); // const meetup = MOCK_MEETUPS.find(meetup => meetup.id === meetupId);\n\n  const client = await mongodb__WEBPACK_IMPORTED_MODULE_1__[\"MongoClient\"].connect(URL);\n  const db = client.db();\n  const meetupsCollection = db.collection('meetups');\n  const result = await meetupsCollection.findOne({\n    _id: Object(mongodb__WEBPACK_IMPORTED_MODULE_1__[\"ObjectId\"])(meetupId)\n  });\n  const meetup = result.map(meetup => ({\n    id: meetup._id.toString(),\n    title: meetup.title,\n    image: meetup.image,\n    address: meetup.address,\n    description: meetup.description\n  }));\n  client.close();\n  return {\n    props: {\n      meetup\n    }\n  };\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetail);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzkyYTYiXSwibmFtZXMiOlsiVVJMIiwiTU9DS19NRUVUVVBTIiwiaWQiLCJ0aXRsZSIsImltYWdlIiwiYWRkcmVzcyIsImRlc2NyaXB0aW9uIiwiTWVldHVwRGV0YWlsIiwibWVldHVwIiwiZ2V0U3RhdGljUGF0aHMiLCJjbGllbnQiLCJNb25nb0NsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsIm1lZXR1cHMiLCJmaW5kIiwiX2lkIiwidG9BcnJheSIsInBhdGhzIiwibWFwIiwicGFyYW1zIiwibWVldHVwSWQiLCJ0b1N0cmluZyIsImNsb3NlIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsImNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwicmVzdWx0IiwiZmluZE9uZSIsIk9iamVjdElkIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLE1BQU1BLEdBQUcsR0FBRyx5Q0FBWjtBQUVBLE1BQU1DLFlBQVksR0FBRyxDQUNuQjtBQUNFQyxJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUFFLGlHQUhUO0FBSUVDLFNBQU8sRUFBRSxvQkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQURtQixFQVFuQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsbUJBRlQ7QUFHRUMsT0FBSyxFQUFFLCtGQUhUO0FBSUVDLFNBQU8sRUFBRSx3QkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQVJtQixFQWVuQjtBQUNFSixJQUFFLEVBQUUsSUFETjtBQUVFQyxPQUFLLEVBQUUsa0JBRlQ7QUFHRUMsT0FBSyxFQUFFLHlGQUhUO0FBSUVDLFNBQU8sRUFBRSxxQkFKWDtBQUtFQyxhQUFXLEVBQUU7QUFMZixDQWZtQixDQUFyQjs7QUF3QkEsU0FBU0MsWUFBVCxDQUFzQjtBQUFFQztBQUFGLENBQXRCLEVBQWtDO0FBQ2hDO0FBQ0E7QUFFQTtBQUVBLHNCQUFPLHFFQUFDLGtFQUFEO0FBQVEsVUFBTSxFQUFHQTtBQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQVA7QUFDRDtBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDTyxlQUFlQyxjQUFmLEdBQWdDO0FBQ3JDO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLE1BQU1DLG1EQUFXLENBQUNDLE9BQVosQ0FBb0JaLEdBQXBCLENBQXJCO0FBQ0EsUUFBTWEsRUFBRSxHQUFHSCxNQUFNLENBQUNHLEVBQVAsRUFBWDtBQUNBLFFBQU1DLGlCQUFpQixHQUFHRCxFQUFFLENBQUNFLFVBQUgsQ0FBYyxTQUFkLENBQTFCO0FBRUEsUUFBTUMsT0FBTyxHQUFHLE1BQU1GLGlCQUFpQixDQUFDRyxJQUFsQixDQUF1QixFQUF2QixFQUEyQjtBQUFFQyxPQUFHLEVBQUU7QUFBUCxHQUEzQixFQUF1Q0MsT0FBdkMsRUFBdEI7QUFDQSxRQUFNQyxLQUFLLEdBQUdKLE9BQU8sQ0FBQ0ssR0FBUixDQUFZYixNQUFNLEtBQUs7QUFDbkNjLFVBQU0sRUFBRTtBQUNOQyxjQUFRLEVBQUVmLE1BQU0sQ0FBQ1UsR0FBUCxDQUFXTSxRQUFYO0FBREo7QUFEMkIsR0FBTCxDQUFsQixDQUFkO0FBTUFkLFFBQU0sQ0FBQ2UsS0FBUDtBQUVBLFNBQU87QUFDTEwsU0FESztBQUVMTSxZQUFRLEVBQUU7QUFGTCxHQUFQO0FBSUQ7QUFFTSxlQUFlQyxjQUFmLENBQThCQyxPQUE5QixFQUF1QztBQUM1QztBQUNGO0FBQ0E7QUFDQTtBQUNFLFFBQU07QUFBRUw7QUFBRixNQUFlSyxPQUFPLENBQUNOLE1BQTdCO0FBRUFPLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBQTJDUCxRQUEzQyxFQVA0QyxDQVM1Qzs7QUFFQSxRQUFNYixNQUFNLEdBQUcsTUFBTUMsbURBQVcsQ0FBQ0MsT0FBWixDQUFvQlosR0FBcEIsQ0FBckI7QUFDQSxRQUFNYSxFQUFFLEdBQUdILE1BQU0sQ0FBQ0csRUFBUCxFQUFYO0FBQ0EsUUFBTUMsaUJBQWlCLEdBQUdELEVBQUUsQ0FBQ0UsVUFBSCxDQUFjLFNBQWQsQ0FBMUI7QUFFQSxRQUFNZ0IsTUFBTSxHQUFHLE1BQU1qQixpQkFBaUIsQ0FBQ2tCLE9BQWxCLENBQTBCO0FBQUVkLE9BQUcsRUFBRWUsd0RBQVEsQ0FBQ1YsUUFBRDtBQUFmLEdBQTFCLENBQXJCO0FBQ0EsUUFBTWYsTUFBTSxHQUFHdUIsTUFBTSxDQUFDVixHQUFQLENBQVdiLE1BQU0sS0FBSTtBQUNsQ04sTUFBRSxFQUFFTSxNQUFNLENBQUNVLEdBQVAsQ0FBV00sUUFBWCxFQUQ4QjtBQUVsQ3JCLFNBQUssRUFBRUssTUFBTSxDQUFDTCxLQUZvQjtBQUdsQ0MsU0FBSyxFQUFFSSxNQUFNLENBQUNKLEtBSG9CO0FBSWxDQyxXQUFPLEVBQUVHLE1BQU0sQ0FBQ0gsT0FKa0I7QUFLbENDLGVBQVcsRUFBRUUsTUFBTSxDQUFDRjtBQUxjLEdBQUosQ0FBakIsQ0FBZjtBQVFBSSxRQUFNLENBQUNlLEtBQVA7QUFFQSxTQUFPO0FBQ0xTLFNBQUssRUFBRTtBQUNMMUI7QUFESztBQURGLEdBQVA7QUFLRDtBQUVjRCwyRUFBZiIsImZpbGUiOiIuL3BhZ2VzL1ttZWV0dXBJZF0vaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0Jztcbi8vIGltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcbmltcG9ydCB7IE1vbmdvQ2xpZW50LCBPYmplY3RJZCB9IGZyb20gJ21vbmdvZGInO1xuXG5pbXBvcnQgTWVldHVwIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXAnO1xuXG5jb25zdCBVUkwgPSAnbW9uZ29kYjovLzEyNy4wLjAuMToyNzAxNy9yZWFjdC1tZWV0dXBzJztcblxuY29uc3QgTU9DS19NRUVUVVBTID0gW1xuICB7XG4gICAgaWQ6ICdtMScsXG4gICAgdGl0bGU6ICdUaGUgRmlyc3QgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by92aWV3LW1hbGFnYS1idWxscmluZy1oYXJib3Itc3BhaW4tNjAwdy0yODE1OTkxOTkuanBnJyxcbiAgICBhZGRyZXNzOiAnNXRoIEF2ZW51ZSwgTWFsYWdhJyxcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgdGhlIGZpcnN0IG1lZXR1cCBkZXNjcmlwdGlvbidcbiAgfSxcbiAge1xuICAgIGlkOiAnbTInLFxuICAgIHRpdGxlOiAnVGhlIFNlY29uZCBNZWV0dXAnLFxuICAgIGltYWdlOiAnaHR0cHM6Ly9pbWFnZS5zaHV0dGVyc3RvY2suY29tL2ltYWdlLXBob3RvL2R1c2stdmlldy1iYXJjZWxvbmEtc3BhaW4tcGxhemEtNjAwdy01MjAwNjcxNDAuanBnJyxcbiAgICBhZGRyZXNzOiAnMTB0aCBTdHJlZXQsIEJhcmNlbG9uYScsXG4gICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIHRoZSBzZWNvbmQgbWVldHVwIGRlc2NyaXB0aW9uJ1xuICB9LFxuICB7XG4gICAgaWQ6ICdtMycsXG4gICAgdGl0bGU6ICdUaGUgVGhpcmQgTWVldHVwJyxcbiAgICBpbWFnZTogJ2h0dHBzOi8vaW1hZ2Uuc2h1dHRlcnN0b2NrLmNvbS9pbWFnZS1waG90by9vbGQtdG93bi1wcmluY2UtcGFsYWNlLW9uLTYwMHctNDI3NjkzMDM5LmpwZycsXG4gICAgYWRkcmVzczogJzIwdGggQXZlbnVlLCBNb25hY28nLFxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyB0aGUgdGhpcmQgbWVldHVwIGRlc2NyaXB0aW9uJ1xuICB9XG5dO1xuXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWwoeyBtZWV0dXAgfSkge1xuICAvLyBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgLy8gY29uc3QgeyBtZWV0dXBJZCB9ID0gcm91dGVyLnF1ZXJ5O1xuXG4gIC8vIGNvbnN0IG1lZXR1cCA9IE1PQ0tfTUVFVFVQUy5maW5kKG1lZXR1cCA9PiBtZWV0dXAuaWQgPT09IG1lZXR1cElkKTtcblxuICByZXR1cm4gPE1lZXR1cCBtZWV0dXA9eyBtZWV0dXAgfSAvPjtcbn1cblxuLypcbiAgV2hlbiBhIHBhZ2UgaGFzIGR5bmFtaWMgcm91dGVzIGFuZCB1c2VzIGBnZXRTdGF0aWNQcm9wcygpYCxcbiAgaXQgbmVlZHMgdG8gZGVmaW5lIGEgbGlzdCBvZiBwYXRocyB0byBiZSBzdGF0aWNhbGx5IGdlbmVyYXRlZC5cbiAgSXQgcmV0dXJucyBhbiBvYmplY3Qgd2l0aCBhIGBwYXRoYCBwcm9wZXJ0eSB3aGloYyBpcyBhbiBhcnJheVxuICBvZiBgcGFyYW1zYCBvZiBlYWNoIHZhbHVlIHRoYXQgd2UgY2FuIGhhdmUgZm9yIHRoZSBkeW5hbWljXG4gIHJvdXRlLiBUaGUgcmV0dXJuZWQgb2JqZWN0IGFsc28gaGFzIGEgYGZhbGxiYWNrYCBwcm9wZXJ0eSB3aGljaFxuICBpcyBhIGJvb2xlYW4uIElmIHRoZSBgZmFsbGJhY2tgIHByb3BlcnR5IGlzIHNldCB0byBmYWxzZSB0aGVuXG4gIHRoaXMgaW5kaWNhdGVzIE5leHQuanMgdGhhdCB0aGUgbGlzdCBvZiBwYXRoIHBhcmFtcyBpcyBjb21wbGV0ZVxuICBhbmQgaWYgYSBwYXJhbSB0aGF0IGRvZXMgbm90IGV4aXN0IGlzIHByb3ZpZGVkIHRoZSBzaG93IGEgNDA0XG4gIHBhZ2UuIElmIGl0IGlzIHNldCB0byB0cnVlLCB0aGVuIHRoaXMgaW5kaWNhdGVzIE5leHQuanMgdG8gdHJ5XG4gIGdlbmVyYXRlIGR5bmFtaWNhbGx5IG9uIHRoZSBzZXJ2ZXIgaWYgYSBwYXJhbXMgdGhhdCBkb2VzIG5vdFxuICBleGlzdCBpcyBwYXNzZWQgYXMgcm91dGluZyBwYXJhbWV0ZXJcbiovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIC8vIEZldGNoaW5nIGRhdGEgZnJvbSBhbiBBUElcbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChVUkwpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwgeyBfaWQ6IDEgfSkudG9BcnJheSgpO1xuICBjb25zdCBwYXRocyA9IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoe1xuICAgIHBhcmFtczoge1xuICAgICAgbWVldHVwSWQ6IG1lZXR1cC5faWQudG9TdHJpbmcoKVxuICAgIH1cbiAgfSkpO1xuXG4gIGNsaWVudC5jbG9zZSgpO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aHMsXG4gICAgZmFsbGJhY2s6IHRydWVcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcbiAgLypcbiAgICBUaGUgYGNvbnRleHRgIGFyZ3VtZW50IGhhcyBhY2Nlc3MgdG8gcm91dGluZ1xuICAgIHBhcmFtZXRlcnNcbiAgKi9cbiAgY29uc3QgeyBtZWV0dXBJZCB9ID0gY29udGV4dC5wYXJhbXM7XG5cbiAgY29uc29sZS5sb2coJ2dldFN0YXRpY1Byb3BzIC0gbWVldHVwSWQ6ICcsIG1lZXR1cElkKTtcblxuICAvLyBjb25zdCBtZWV0dXAgPSBNT0NLX01FRVRVUFMuZmluZChtZWV0dXAgPT4gbWVldHVwLmlkID09PSBtZWV0dXBJZCk7XG5cbiAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChVUkwpO1xuICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xuICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcblxuICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHsgX2lkOiBPYmplY3RJZChtZWV0dXBJZCkgfSk7XG4gIGNvbnN0IG1lZXR1cCA9IHJlc3VsdC5tYXAobWVldHVwID0+KHtcbiAgICBpZDogbWVldHVwLl9pZC50b1N0cmluZygpLFxuICAgIHRpdGxlOiBtZWV0dXAudGl0bGUsXG4gICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcbiAgICBhZGRyZXNzOiBtZWV0dXAuYWRkcmVzcyxcbiAgICBkZXNjcmlwdGlvbjogbWVldHVwLmRlc2NyaXB0aW9uXG4gIH0pKTtcblxuICBjbGllbnQuY2xvc2UoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBtZWV0dXBcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtb25nb2RiXCI/ZGVmZiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJtb25nb2RiLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibW9uZ29kYlwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///mongodb\n");

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