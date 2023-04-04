/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);







const Edit = _ref => {
  let {
    attributes,
    setAttributes
  } = _ref;
  const {
    listingId,
    url,
    hideReviews,
    hidePrice,
    width,
    height,
    autoInit
  } = attributes;
  const [pasteData, setPasteData] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
  const [embedCode, setEmbedCode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)('');
  const handlePaste = event => {
    const {
      clipboardData
    } = event;
    const pastedText = clipboardData.getData('text');
    const regex = /^https:\/\/www\.airbnb\.com\/rooms\/([0-9]+)\??.*$/;
    const match = pastedText.match(regex);
    if (match) {
      setPasteData(match[0]);
      event.preventDefault();
    }
  };
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    // Convert Airbnb URL to embed code
    const regex = /^https:\/\/www\.airbnb\.com\/rooms\/([0-9]+)\??.*$/;
    const match = url.match(regex);
    if (match) {
      const id = match[1];
      const dataAttrs = {};
      if (hideReviews) dataAttrs['data-hide-reviews'] = 'true';
      if (hidePrice) dataAttrs['data-hide-price'] = 'true';
      if (autoInit) dataAttrs['data-auto-init'] = 'true';
      const embed = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        className: "airbnb-embed-frame",
        "data-id": id,
        "data-view": "home",
        style: {
          width,
          height,
          margin: 'auto'
        }
      }, dataAttrs), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
        href: `https://www.airbnb.com/rooms/${id}`,
        target: "_blank",
        rel: "nofollow noopener"
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", {
        async: true,
        src: "https://www.airbnb.com/embeddable/airbnb_jssdk"
      }));
      setEmbedCode(embed);
      setAttributes({
        listingId: id
      });
    } else {
      setEmbedCode('');
    }
  }, [url, hideReviews, hidePrice, width, height, autoInit]);
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {
    if (embedCode) {
      window.AirbnbAPI && window.AirbnbAPI.bootstrap();
    }
  }, [embedCode]);
  const onChange = field => newValue => {
    setAttributes({
      [field]: newValue
    });
    setEmbedCode('');
  };
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    onPaste: handlePaste
  });
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Airbnb URL'),
    value: url,
    onChange: onChange('url')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Airbnb Embed Settings')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide Reviews'),
    checked: hideReviews,
    onChange: onChange('hideReviews')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.ToggleControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Hide Price'),
    checked: hidePrice,
    onChange: onChange('hidePrice')
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", blockProps, embedCode));
};
/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);


const {
  __
} = wp.i18n;
const Save = _ref => {
  let {
    attributes
  } = _ref;
  const {
    listingId,
    url,
    hideReviews,
    hidePrice,
    width,
    height,
    autoInit
  } = attributes;
  const dataAttrs = {};
  if (hideReviews) {
    dataAttrs['data-hide-reviews'] = 'true';
  }
  if (hidePrice) {
    dataAttrs['data-hide-price'] = 'true';
  }
  if (autoInit) {
    dataAttrs['data-auto-init'] = 'true';
  }
  const embedCode = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: "airbnb-embed-frame",
    "data-id": listingId,
    "data-view": "home",
    style: {
      width,
      height,
      margin: 'auto'
    }
  }, dataAttrs), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
    href: `https://www.airbnb.com/rooms/${listingId}`,
    target: "_blank",
    rel: "nofollow noopener"
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("script", {
    async: true,
    src: "https://www.airbnb.com/embeddable/airbnb_jssdk"
  }));
  return embedCode;
};
/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ _extends; }
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

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
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "URL_REGEX": function() { return /* binding */ URL_REGEX; }
/* harmony export */ });
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__);


const {
  __
} = wp.i18n;
const {
  registerBlockType
} = wp.blocks;

const URL_REGEX = /^https:\/\/www\.airbnb\.com\/rooms\/([0-9]+)\??.*$/;
registerBlockType('emrikol/airbnb-embed', {
  title: __('Airbnb Embed'),
  icon: 'universal-access-alt',
  category: 'embed',
  attributes: {
    listingId: {
      type: 'string',
      default: ''
    },
    url: {
      type: 'string',
      default: ''
    },
    hideCta: {
      type: 'boolean',
      default: false
    },
    hidePrice: {
      type: 'boolean',
      default: false
    },
    hideDescription: {
      type: 'boolean',
      default: false
    },
    hideTitle: {
      type: 'boolean',
      default: false
    },
    hideHost: {
      type: 'boolean',
      default: false
    },
    width: {
      type: 'string',
      default: '100%'
    },
    height: {
      type: 'string',
      default: '600px'
    },
    autoInit: {
      type: 'boolean',
      default: false
    }
  },
  transforms: {
    from: [{
      type: 'raw',
      isMatch: node => node.nodeName === 'P' && URL_REGEX.test(node.textContent),
      transform: node => {
        return (0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_2__.createBlock)('emrikol/airbnb-embed', {
          url: node.textContent.trim()
        });
      }
    }]
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_1__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map