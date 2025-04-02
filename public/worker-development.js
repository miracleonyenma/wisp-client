/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./worker/index.js":
/*!*************************!*\
  !*** ./worker/index.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval(__webpack_require__.ts("self.addEventListener(\"push\", function(event) {\n    if (event.data) {\n        const data = event.data.json();\n        event.waitUntil(self.registration.showNotification(data.title, {\n            body: data.body,\n            icon: \"/android-chrome-192x192.png\",\n            badge: \"/apple-touch-icon.png\",\n            data: {\n                url: self.location.origin\n            }\n        }));\n    }\n});\nself.addEventListener(\"notificationclick\", function(event) {\n    event.notification.close();\n    event.waitUntil(clients.matchAll({\n        type: \"window\",\n        includeUncontrolled: true\n    }).then(function(clientList) {\n        if (clientList.length > 0) {\n            let client = clientList[0];\n            for(let i = 0; i < clientList.length; i++){\n                if (clientList[i].focused) {\n                    client = clientList[i];\n                }\n            }\n            return client.focus();\n        }\n        return clients.openWindow(event.notification.data.url);\n    }));\n});\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                /* unsupported import.meta.webpackHot */ undefined.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi93b3JrZXIvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUFBLEtBQUtDLGdCQUFnQixDQUFDLFFBQVEsU0FBVUMsS0FBSztJQUMzQyxJQUFJQSxNQUFNQyxJQUFJLEVBQUU7UUFDZCxNQUFNQSxPQUFPRCxNQUFNQyxJQUFJLENBQUNDLElBQUk7UUFFNUJGLE1BQU1HLFNBQVMsQ0FDYkwsS0FBS00sWUFBWSxDQUFDQyxnQkFBZ0IsQ0FBQ0osS0FBS0ssS0FBSyxFQUFFO1lBQzdDQyxNQUFNTixLQUFLTSxJQUFJO1lBQ2ZDLE1BQU07WUFDTkMsT0FBTztZQUNQUixNQUFNO2dCQUNKUyxLQUFLWixLQUFLYSxRQUFRLENBQUNDLE1BQU07WUFDM0I7UUFDRjtJQUVKO0FBQ0Y7QUFFQWQsS0FBS0MsZ0JBQWdCLENBQUMscUJBQXFCLFNBQVVDLEtBQUs7SUFDeERBLE1BQU1hLFlBQVksQ0FBQ0MsS0FBSztJQUV4QmQsTUFBTUcsU0FBUyxDQUNiWSxRQUNHQyxRQUFRLENBQUM7UUFBRUMsTUFBTTtRQUFVQyxxQkFBcUI7SUFBSyxHQUNyREMsSUFBSSxDQUFDLFNBQVVDLFVBQVU7UUFDeEIsSUFBSUEsV0FBV0MsTUFBTSxHQUFHLEdBQUc7WUFDekIsSUFBSUMsU0FBU0YsVUFBVSxDQUFDLEVBQUU7WUFDMUIsSUFBSyxJQUFJRyxJQUFJLEdBQUdBLElBQUlILFdBQVdDLE1BQU0sRUFBRUUsSUFBSztnQkFDMUMsSUFBSUgsVUFBVSxDQUFDRyxFQUFFLENBQUNDLE9BQU8sRUFBRTtvQkFDekJGLFNBQVNGLFVBQVUsQ0FBQ0csRUFBRTtnQkFDeEI7WUFDRjtZQUNBLE9BQU9ELE9BQU9HLEtBQUs7UUFDckI7UUFDQSxPQUFPVixRQUFRVyxVQUFVLENBQUMxQixNQUFNYSxZQUFZLENBQUNaLElBQUksQ0FBQ1MsR0FBRztJQUN2RDtBQUVOIiwic291cmNlcyI6WyIvVXNlcnMvbWlyYWNsZWlvL0RvY3VtZW50cy9kZXZwcm9qZWN0cy9leHBlcmltZW50cy93aXNwL3dpc3AtY2xpZW50L3dvcmtlci9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJzZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJwdXNoXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBpZiAoZXZlbnQuZGF0YSkge1xuICAgIGNvbnN0IGRhdGEgPSBldmVudC5kYXRhLmpzb24oKTtcblxuICAgIGV2ZW50LndhaXRVbnRpbChcbiAgICAgIHNlbGYucmVnaXN0cmF0aW9uLnNob3dOb3RpZmljYXRpb24oZGF0YS50aXRsZSwge1xuICAgICAgICBib2R5OiBkYXRhLmJvZHksXG4gICAgICAgIGljb246IFwiL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nXCIsXG4gICAgICAgIGJhZGdlOiBcIi9hcHBsZS10b3VjaC1pY29uLnBuZ1wiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXJsOiBzZWxmLmxvY2F0aW9uLm9yaWdpbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgKTtcbiAgfVxufSk7XG5cbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcIm5vdGlmaWNhdGlvbmNsaWNrXCIsIGZ1bmN0aW9uIChldmVudCkge1xuICBldmVudC5ub3RpZmljYXRpb24uY2xvc2UoKTtcblxuICBldmVudC53YWl0VW50aWwoXG4gICAgY2xpZW50c1xuICAgICAgLm1hdGNoQWxsKHsgdHlwZTogXCJ3aW5kb3dcIiwgaW5jbHVkZVVuY29udHJvbGxlZDogdHJ1ZSB9KVxuICAgICAgLnRoZW4oZnVuY3Rpb24gKGNsaWVudExpc3QpIHtcbiAgICAgICAgaWYgKGNsaWVudExpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGxldCBjbGllbnQgPSBjbGllbnRMaXN0WzBdO1xuICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2xpZW50TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNsaWVudExpc3RbaV0uZm9jdXNlZCkge1xuICAgICAgICAgICAgICBjbGllbnQgPSBjbGllbnRMaXN0W2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gY2xpZW50LmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNsaWVudHMub3BlbldpbmRvdyhldmVudC5ub3RpZmljYXRpb24uZGF0YS51cmwpO1xuICAgICAgfSlcbiAgKTtcbn0pO1xuIl0sIm5hbWVzIjpbInNlbGYiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJkYXRhIiwianNvbiIsIndhaXRVbnRpbCIsInJlZ2lzdHJhdGlvbiIsInNob3dOb3RpZmljYXRpb24iLCJ0aXRsZSIsImJvZHkiLCJpY29uIiwiYmFkZ2UiLCJ1cmwiLCJsb2NhdGlvbiIsIm9yaWdpbiIsIm5vdGlmaWNhdGlvbiIsImNsb3NlIiwiY2xpZW50cyIsIm1hdGNoQWxsIiwidHlwZSIsImluY2x1ZGVVbmNvbnRyb2xsZWQiLCJ0aGVuIiwiY2xpZW50TGlzdCIsImxlbmd0aCIsImNsaWVudCIsImkiLCJmb2N1c2VkIiwiZm9jdXMiLCJvcGVuV2luZG93Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./worker/index.js\n"));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete __webpack_module_cache__[moduleId];
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/trusted types policy */
/******/ 	(() => {
/******/ 		var policy;
/******/ 		__webpack_require__.tt = () => {
/******/ 			// Create Trusted Type policy if Trusted Types are available and the policy doesn't exist yet.
/******/ 			if (policy === undefined) {
/******/ 				policy = {
/******/ 					createScript: (script) => (script)
/******/ 				};
/******/ 				if (typeof trustedTypes !== "undefined" && trustedTypes.createPolicy) {
/******/ 					policy = trustedTypes.createPolicy("nextjs#bundler", policy);
/******/ 				}
/******/ 			}
/******/ 			return policy;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/trusted types script */
/******/ 	(() => {
/******/ 		__webpack_require__.ts = (script) => (__webpack_require__.tt().createScript(script));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/react refresh */
/******/ 	(() => {
/******/ 		if (__webpack_require__.i) {
/******/ 		__webpack_require__.i.push((options) => {
/******/ 			const originalFactory = options.factory;
/******/ 			options.factory = (moduleObject, moduleExports, webpackRequire) => {
/******/ 				const hasRefresh = typeof self !== "undefined" && !!self.$RefreshInterceptModuleExecution$;
/******/ 				const cleanup = hasRefresh ? self.$RefreshInterceptModuleExecution$(moduleObject.id) : () => {};
/******/ 				try {
/******/ 					originalFactory.call(this, moduleObject, moduleExports, webpackRequire);
/******/ 				} finally {
/******/ 					cleanup();
/******/ 				}
/******/ 			}
/******/ 		})
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat */
/******/ 	
/******/ 	
/******/ 	// noop fns to prevent runtime errors during initialization
/******/ 	if (typeof self !== "undefined") {
/******/ 		self.$RefreshReg$ = function () {};
/******/ 		self.$RefreshSig$ = function () {
/******/ 			return function (type) {
/******/ 				return type;
/******/ 			};
/******/ 		};
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./worker/index.js");
/******/ 	
/******/ })()
;