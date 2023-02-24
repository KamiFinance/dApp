exports.id = 945;
exports.ids = [945];
exports.modules = {

/***/ 2572:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Container_container__WAGEk",
	"xs": "Container_xs__lmLxX",
	"sm": "Container_sm__NxnH_",
	"md": "Container_md__R9xsg",
	"lg": "Container_lg__ri4gN",
	"xl": "Container_xl__2fgyR"
};


/***/ }),

/***/ 6797:
/***/ ((module) => {

// Exports
module.exports = {
	"skeleton": "Skeleton_skeleton__2C_Ou",
	"pulse": "Skeleton_pulse__kM_6B"
};


/***/ }),

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Container)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2572);
/* harmony import */ var _Container_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Container_module_css__WEBPACK_IMPORTED_MODULE_2__);



/**
 * A container component that sets the max-width of its children, and centers them on the page.
 * @param maxWidth: The max-width of the container. Can be "sm", "md", "lg", "xl", or "2xl".
 */ function Container({ maxWidth , children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default().container)} ${(_Container_module_css__WEBPACK_IMPORTED_MODULE_2___default())[maxWidth]}`,
        children: children
    });
}


/***/ }),

/***/ 6725:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Skeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6797);
/* harmony import */ var _Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Skeleton({ height , width  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            width,
            height,
            borderRadius: "inherit"
        },
        className: (_Skeleton_module_css__WEBPACK_IMPORTED_MODULE_2___default().skeleton)
    });
}


/***/ }),

/***/ 3470:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ randomColor)
/* harmony export */ });
function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for(let i = 0; i < 6; i++){
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


/***/ })

};
;