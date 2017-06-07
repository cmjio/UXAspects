(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"), require("rxjs/add/operator/filter"), require("@angular/platform-browser"), require("rxjs/BehaviorSubject"), require("rxjs/add/observable/fromEvent"), require("rxjs/add/operator/map"), require("rxjs/add/operator/takeUntil"), require("@angular/router"), require("rxjs/add/observable/from"), require("rxjs/add/observable/of"), require("rxjs/add/operator/mergeMap"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/toArray"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common", "@angular/forms", "rxjs/Observable", "rxjs/Subject", "rxjs/add/operator/debounceTime", "rxjs/add/operator/filter", "@angular/platform-browser", "rxjs/BehaviorSubject", "rxjs/add/observable/fromEvent", "rxjs/add/operator/map", "rxjs/add/operator/takeUntil", "@angular/router", "rxjs/add/observable/from", "rxjs/add/observable/of", "rxjs/add/operator/mergeMap", "rxjs/add/operator/switchMap", "rxjs/add/operator/toArray"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("@angular/core"), require("@angular/common"), require("@angular/forms"), require("rxjs/Observable"), require("rxjs/Subject"), require("rxjs/add/operator/debounceTime"), require("rxjs/add/operator/filter"), require("@angular/platform-browser"), require("rxjs/BehaviorSubject"), require("rxjs/add/observable/fromEvent"), require("rxjs/add/operator/map"), require("rxjs/add/operator/takeUntil"), require("@angular/router"), require("rxjs/add/observable/from"), require("rxjs/add/observable/of"), require("rxjs/add/operator/mergeMap"), require("rxjs/add/operator/switchMap"), require("rxjs/add/operator/toArray")) : factory(root["@angular/core"], root["@angular/common"], root["@angular/forms"], root["rxjs/Observable"], root["rxjs/Subject"], root["rxjs/add/operator/debounceTime"], root["rxjs/add/operator/filter"], root["@angular/platform-browser"], root["rxjs/BehaviorSubject"], root["rxjs/add/observable/fromEvent"], root["rxjs/add/operator/map"], root["rxjs/add/operator/takeUntil"], root["@angular/router"], root["rxjs/add/observable/from"], root["rxjs/add/observable/of"], root["rxjs/add/operator/mergeMap"], root["rxjs/add/operator/switchMap"], root["rxjs/add/operator/toArray"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_29__, __WEBPACK_EXTERNAL_MODULE_30__, __WEBPACK_EXTERNAL_MODULE_74__, __WEBPACK_EXTERNAL_MODULE_75__, __WEBPACK_EXTERNAL_MODULE_76__, __WEBPACK_EXTERNAL_MODULE_77__, __WEBPACK_EXTERNAL_MODULE_78__, __WEBPACK_EXTERNAL_MODULE_151__, __WEBPACK_EXTERNAL_MODULE_152__, __WEBPACK_EXTERNAL_MODULE_153__, __WEBPACK_EXTERNAL_MODULE_154__, __WEBPACK_EXTERNAL_MODULE_155__, __WEBPACK_EXTERNAL_MODULE_156__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 113);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__color_module__ = __webpack_require__(115);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__color_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_service__ = __webpack_require__(61);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__color_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__color_service__["b"]; });




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__component_loader_class__ = __webpack_require__(62);
/* unused harmony reexport ComponentLoader */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__ = __webpack_require__(116);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__component_loader_factory__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__content_ref_class__ = __webpack_require__(63);
/* unused harmony reexport ContentRef */



//# sourceMappingURL=index.js.map

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownState; });

var BsDropdownState = (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isDisabledChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.toggleClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    BsDropdownState.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownState.ctorParameters = function () { return []; };
    return BsDropdownState;
}());
//# sourceMappingURL=bs-dropdown.state.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ActionDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Rounding; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DashboardService = (function () {
    function DashboardService() {
        this._widgets = [];
        this._options$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._placeholder = { visible: false, x: 0, y: 0, width: 0, height: 0 };
        this._dimensions = {};
        this._columnWidth = 0;
        this._rowHeight = 0;
        this._stacked = false;
        this._defaultOptions = {
            columns: 5,
            padding: 5,
            minWidth: 100,
            minHeight: 100,
            emptyRow: true
        };
        this.height = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](0);
        this.layout = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    /**
     * Return all the options currently being used as a subject
     */
    DashboardService.prototype.options = function () {
        return this._options$;
    };
    /**
     * Return all the options currently being used
     */
    DashboardService.prototype.getOptions = function () {
        return this._options;
    };
    /**
     * Get all the default dashboard options
     */
    DashboardService.prototype.getDefaultOptions = function () {
        return this._defaultOptions;
    };
    /**
     * Set the options - automatically set default values where not specified
     * @param options The DashboardOptions that will configure the dashboard
     */
    DashboardService.prototype.setOptions = function (options) {
        this._options = Object.assign({}, this._defaultOptions, options);
        // update the observable
        this._options$.next(this._options);
    };
    /**
     * Allow uniform spacing around each widget
     * @param padding The number of pixels around each widget
     */
    DashboardService.prototype.setPadding = function (padding) {
        this._options.padding = padding;
        this.options().next(this._options);
    };
    /**
     * Set the dashboard container element
     * @param dashboard The HTMLElement that is the dashboard container
     */
    DashboardService.prototype.setDashboard = function (dashboard) {
        this._dashboard = dashboard;
    };
    /**
     * Add a widget to the dashboard
     * @param widget The widget component to add to the dashboard
     */
    DashboardService.prototype.addWidget = function (widget) {
        this._widgets.push(widget);
    };
    /**
     * Remove a widget from the dashboard
     * @param widget The widget to remove
     */
    DashboardService.prototype.removeWidget = function (widget) {
        this._widgets.findIndex(function (wgt) { return wgt === widget; });
    };
    /**
     * Indicate that the dashboard element has been resized
     * @param width The width of the dashboard element in px
     * @param height The height of the dashboard element in px
     */
    DashboardService.prototype.setDimensions = function (width, height) {
        this._dimensions.width = width;
        this._dimensions.height = height;
        // trigger re-render
        this.renderDashboard();
    };
    /**
     * Produce an object containing all the required layout data.
     * This can be useful for exporting/saving a layout
     */
    DashboardService.prototype.getLayoutData = function () {
        return this._widgets.map(function (widget) {
            return { id: widget.getId(), col: widget.getColumn(), row: widget.getRow(), colSpan: widget.getColumnSpan(), rowSpan: widget.getRowSpan() };
        });
    };
    /**
     * Position widgets programatically
     */
    DashboardService.prototype.setLayoutData = function (layout) {
        var _this = this;
        // iterate through each widget data and find a match
        layout.forEach(function (widget) {
            // find the matching widget
            var target = _this._widgets.find(function (wgt) { return wgt.getId() === widget.id; });
            if (target) {
                target.setColumn(widget.col);
                target.setRow(widget.row);
                target.setColumnSpan(widget.colSpan);
                target.setRowSpan(widget.rowSpan);
            }
        });
    };
    /**
     * Update the positions and sizes of the widgets
     */
    DashboardService.prototype.renderDashboard = function () {
        var _this = this;
        // get the dimensions of the dashboard
        this._columnWidth = this._dimensions.width / this._options.columns;
        this._rowHeight = this._options.rowHeight || this._columnWidth;
        // ensure the column width is not below the min widths
        if (this._columnWidth < this._options.minWidth) {
            this.setStacked(true);
        }
        else {
            this.setStacked(false);
        }
        // ensure the row height is not below the min widths
        if (this._rowHeight < this._options.minWidth) {
            this._rowHeight = this._options.minWidth;
        }
        this.setDashboardLayout();
        // iterate through each widget and set the size - except the one being resized
        this._widgets.filter(function (widget) { return !_this._actionWidget || widget !== _this._actionWidget.widget; })
            .forEach(function (widget) { return widget.render(); });
    };
    /**
     * Determine where widgets should be positioned based on their positions, width and the size of the container
     */
    DashboardService.prototype.setDashboardLayout = function () {
        var _this = this;
        // find any widgets that do not currently have a position set
        this._widgets.filter(function (widget) { return widget.getColumn() === undefined || widget.getRow() === undefined; })
            .forEach(function (widget) { return _this.setWidgetPosition(widget); });
        this.setDashboardHeight();
    };
    DashboardService.prototype.setStacked = function (stacked) {
        var _this = this;
        // only do the following if the stacked state has changed
        if (stacked === this._stacked) {
            return;
        }
        // store the stacked state
        this._stacked = stacked;
        // update the stacked state for all widgets
        this._widgets.forEach(function (widget) { return widget.setStacked(_this._stacked); });
        // if stacked is true we need to do some reordering etc..
        if (stacked === true) {
            // iterate through each widget set it's stacked state and
            this.getWidgetsByOrder().forEach(function (widget, idx) {
                widget.setStacked(true);
                widget.setColumn(0);
                widget.setRow(idx);
            });
        }
    };
    DashboardService.prototype.getWidgetsByOrder = function () {
        return this._widgets.sort(function (w1, w2) {
            var w1Position = w1.getColumn() * w1.getRow();
            var w2Position = w2.getColumn() * w2.getRow();
            if (w1Position < w2Position) {
                return -1;
            }
            if (w1Position > w2Position) {
                return 1;
            }
            return 0;
        });
    };
    /**
     * Find a position that a widget can fit in the dashboard
     * @param widget The widget to try and position
     */
    DashboardService.prototype.setWidgetPosition = function (widget) {
        // find a position for the widget
        var position = 0;
        var success = false;
        // repeat until a space is found
        while (!success) {
            // get a position to try
            var column = position % this._options.columns;
            var row = Math.floor(position / this._options.columns);
            // check the current position
            if (this.getPositionAvailable(column, row, widget.getColumnSpan(), widget.getRowSpan())) {
                success = true;
                widget.setColumn(column);
                widget.setRow(row);
                return;
            }
            position++;
        }
    };
    /**
     * Check if a position in the dashboard is vacant or not
     */
    DashboardService.prototype.getPositionAvailable = function (column, row, columnSpan, rowSpan, ignoreWidget) {
        // get a list of grid spaces that are populated
        var spaces = this.getOccupiedSpaces();
        // check if the block would still be in bounds
        if (column + columnSpan > this._options.columns) {
            return false;
        }
        var _loop_1 = function (x) {
            var _loop_2 = function (y) {
                if (spaces.find(function (block) { return block.column === x && block.row === y && block.widget !== ignoreWidget; })) {
                    return { value: false };
                }
            };
            for (var y = row; y < row + rowSpan; y++) {
                var state_1 = _loop_2(y);
                if (typeof state_1 === "object")
                    return state_1;
            }
        };
        // check each required position
        for (var x = column; x < column + columnSpan; x++) {
            var state_2 = _loop_1(x);
            if (typeof state_2 === "object")
                return state_2.value;
        }
        return true;
    };
    DashboardService.prototype.getOccupiedSpaces = function () {
        var _this = this;
        // find all spaces that are currently occupied
        return this._widgets.filter(function (widget) { return widget.getColumn() !== undefined && widget.getRow() !== undefined; })
            .reduce(function (value, widget) {
            _this.forEachBlock(widget, function (column, row) { return value.push({ widget: widget, column: column, row: row }); });
            return value;
        }, []);
    };
    /**
     * Begin resizing a widget
     * @param action The the widget to resize
     */
    DashboardService.prototype.onResizeStart = function (action) {
        // store the mouse event
        this._mouseEvent = action.event;
        this._actionWidget = action;
        // bring the widget to the font
        this.bringToFront(action.widget);
    };
    DashboardService.prototype.onResizeDrag = function (action) {
        // if there was no movement then do nothing
        if (action.event.x === this._mouseEvent.x && action.event.y === this._mouseEvent.y) {
            return;
        }
        // update the stored mouse event
        this._mouseEvent = action.event;
        // get handle for direction
        var handle = action.widget.getHandles().find(function (hnd) { return hnd.direction === action.direction; });
        // get the bounds of the handle
        var bounds = handle.element.getBoundingClientRect();
        // get the center of the handle
        var centerX = bounds.left + (bounds.width / 2);
        var centerY = bounds.top + (bounds.height / 2);
        // get the current mouse position
        var mouseX = action.event.x - centerX;
        var mouseY = action.event.y - centerY;
        // store the new proposed dimensions for the widget
        var dimensions = {
            x: action.widget.actualX,
            y: action.widget.actualY,
            width: action.widget.actualWidth,
            height: action.widget.actualHeight
        };
        // update widget based on the handle being dragged
        switch (action.direction) {
            case ActionDirection.Right:
                dimensions.width += mouseX;
                break;
            case ActionDirection.Left:
                dimensions.x += mouseX;
                dimensions.width -= mouseX;
                if (dimensions.width < this._options.minWidth) {
                    var difference = this._options.minWidth - dimensions.width;
                    dimensions.x -= difference;
                    dimensions.width += difference;
                }
                break;
            case ActionDirection.Bottom:
                dimensions.height += mouseY;
                break;
            case ActionDirection.Top:
                dimensions.y += mouseY;
                dimensions.height -= mouseY;
                if (dimensions.height < this._options.minHeight) {
                    var difference = this._options.minHeight - dimensions.height;
                    dimensions.y -= difference;
                    dimensions.height += difference;
                }
                break;
            // Support resizing on multiple axis simultaneously
            case ActionDirection.TopLeft:
                dimensions.x += mouseX;
                dimensions.width -= mouseX;
                if (dimensions.width < this._options.minWidth) {
                    var difference = this._options.minWidth - dimensions.width;
                    dimensions.x -= difference;
                    dimensions.width += difference;
                }
                dimensions.y += mouseY;
                dimensions.height -= mouseY;
                if (dimensions.height < this._options.minHeight) {
                    var difference = this._options.minHeight - dimensions.height;
                    dimensions.y -= difference;
                    dimensions.height += difference;
                }
                break;
            case ActionDirection.TopRight:
                dimensions.width += mouseX;
                dimensions.y += mouseY;
                dimensions.height -= mouseY;
                if (dimensions.height < this._options.minHeight) {
                    var difference = this._options.minHeight - dimensions.height;
                    dimensions.y -= difference;
                    dimensions.height += difference;
                }
                break;
            case ActionDirection.BottomLeft:
                dimensions.height += mouseY;
                dimensions.x += mouseX;
                dimensions.width -= mouseX;
                if (dimensions.width < this._options.minWidth) {
                    var difference = this._options.minWidth - dimensions.width;
                    dimensions.x -= difference;
                    dimensions.width += difference;
                }
                break;
            case ActionDirection.BottomRight:
                dimensions.height += mouseY;
                dimensions.width += mouseX;
                break;
        }
        var currentWidth = action.widget.actualX + action.widget.actualWidth;
        var currentHeight = action.widget.actualY + action.widget.actualHeight;
        // ensure values are within the dashboard bounds
        if (dimensions.x < 0) {
            dimensions.x = 0;
            dimensions.width = currentWidth;
        }
        if (dimensions.y < 0) {
            dimensions.y = 0;
            dimensions.height = currentHeight;
        }
        if ((dimensions.x + dimensions.width) > this._dimensions.width) {
            dimensions.width = this._dimensions.width - dimensions.x;
        }
        if ((dimensions.y + dimensions.height) > this._dimensions.height) {
            dimensions.height = currentHeight;
        }
        // if the proposed width is smaller than allowed then reset width to minimum and ignore x changes
        if (dimensions.width < this._options.minWidth) {
            dimensions.x = action.widget.actualX;
            dimensions.width = this._options.minWidth;
        }
        // if the proposed height is smaller than allowed then reset height to minimum and ignore y changes
        if (dimensions.height < this._options.minHeight) {
            dimensions.y = action.widget.actualY;
            dimensions.height = this._options.minHeight;
        }
        // update the widget actual values
        action.widget.setBounds(dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // update placeholder position and value
        this.setPlaceholderBounds(true, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // show the widget positions if the current positions and sizes were to persist
        this.updateWidgetPositions(action.widget);
    };
    DashboardService.prototype.onResizeEnd = function () {
        // commit resize changes
        this.commitWidgetChanges();
        // hide placeholder
        this.getPlaceholder().visible = false;
        this._actionWidget = null;
        this._mouseEvent = null;
        // ensure any vacant upper spaces are filled where required
        this.shiftWidgetsUp();
        // update dashboard height
        this.setDashboardHeight();
        // emit information about the layout
        this.layout.next(this.getLayoutData());
    };
    DashboardService.prototype.onDragStart = function (action) {
        this.onResizeStart(action);
        // store the starting placeholder position
        this.setWidgetOrigin();
        this.cacheWidgets();
    };
    DashboardService.prototype.onDragEnd = function () {
        this.onResizeEnd();
        this._widgetOrigin = {};
    };
    DashboardService.prototype.onDrag = function (action) {
        // if there was no movement then do nothing
        if (action.event.x === this._mouseEvent.x && action.event.y === this._mouseEvent.y) {
            return;
        }
        // get the current mouse position
        var mouseX = action.event.x - this._mouseEvent.x;
        var mouseY = action.event.y - this._mouseEvent.y;
        // store the latest event
        this._mouseEvent = action.event;
        var dimensions = {
            x: action.widget.actualX + mouseX,
            y: action.widget.actualY + mouseY,
            width: action.widget.actualWidth,
            height: action.widget.actualHeight
        };
        this.restoreWidgets(true);
        // update widget position
        action.widget.setBounds(dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // update placeholder position and value
        this.setPlaceholderBounds(true, dimensions.x, dimensions.y, dimensions.width, dimensions.height);
        // show the widget positions if the current positions and sizes were to persist
        this.shiftWidgets();
        this.setDashboardHeight();
    };
    DashboardService.prototype.cacheWidgets = function () {
        this._cache = this._widgets.map(function (widget) {
            return {
                id: widget.getId(),
                column: widget.getColumn(),
                row: widget.getRow()
            };
        });
    };
    DashboardService.prototype.restoreWidgets = function (ignoreActionWidget) {
        var _this = this;
        if (ignoreActionWidget === void 0) { ignoreActionWidget = false; }
        this._cache.filter(function (widget) { return !ignoreActionWidget || widget.id !== _this._actionWidget.widget.getId(); }).forEach(function (widget) {
            var match = _this._widgets.find(function (wgt) { return wgt.getId() === widget.id; });
            if (match) {
                match.setColumn(widget.column);
                match.setRow(widget.row);
            }
        });
    };
    /**
     * When dragging any widgets that need to be moved should be moved to an appropriate position
     */
    DashboardService.prototype.shiftWidgets = function () {
        var _this = this;
        var widgetsToMove = [];
        var _loop_3 = function (row) {
            var _loop_4 = function (column) {
                // store reference to any widgets that need moved
                this_1.getOccupiedSpaces()
                    .filter(function (space) { return space.column === column && space.row === row && space.widget !== _this._actionWidget.widget; })
                    .forEach(function (space) { return widgetsToMove.push(space.widget); });
            };
            for (var column = this_1.getPlaceholder().column; column < this_1.getPlaceholder().column + this_1.getPlaceholder().columnSpan; column++) {
                _loop_4(column);
            }
        };
        var this_1 = this;
        // check if there are any widgets under the placeholder
        for (var row = this.getPlaceholder().row; row < this.getPlaceholder().row + this.getPlaceholder().rowSpan; row++) {
            _loop_3(row);
        }
        // remove any duplicates
        widgetsToMove = widgetsToMove.filter(function (widget, idx, array) { return array.indexOf(widget) === idx; });
        // if no widgets need moved then we can stop here
        if (widgetsToMove.length === 0) {
            return;
        }
        // create a duplicate we can use to keep track of which have been moved
        var unmovedWidgets = widgetsToMove.slice();
        // attempt to move any widgets to the previous widget position
        widgetsToMove.forEach(function (widget) {
            // get a grid off all occupied spaces - taking into account the placeholder and ignoring widgets that need moved
            var grid = _this.getOccupiedSpaces().filter(function (space) { return !unmovedWidgets.find(function (wgt) { return wgt === space.widget; }); });
            // iterate each free block
            for (var row = _this._widgetOrigin.row; row < _this._widgetOrigin.row + _this._widgetOrigin.rowSpan; row++) {
                for (var column = _this._widgetOrigin.column; column < _this._widgetOrigin.column + _this._widgetOrigin.columnSpan; column++) {
                    // determine if the block can fit in this space
                    var requiredSpaces = _this.getRequiredSpacesFromPoint(widget, column, row);
                    // check if widget would fit in space
                    var available = requiredSpaces.every(function (space) {
                        return !grid.find(function (gridSpace) { return gridSpace.column === space.column && gridSpace.row === space.row; }) && space.column < _this.getColumnCount();
                    });
                    if (available) {
                        widget.setColumn(column);
                        widget.setRow(row);
                        unmovedWidgets.splice(unmovedWidgets.findIndex(function (wgt) { return wgt === widget; }), 1);
                        return;
                    }
                }
            }
            // if we get to here then we can't simply swap the positions - next try moving right
            if (_this.canWidgetMoveRight(widget, true)) {
                // after the shift check if placeholder position is still valid
                _this.validatePlaceholderPosition(ActionDirection.Right);
                return;
            }
            // next try moving left
            if (_this.canWidgetMoveLeft(widget, true)) {
                // after the shift check if placeholder position is still valid
                _this.validatePlaceholderPosition(ActionDirection.Left);
                return;
            }
            // determine the distance that the widget needs to be moved down
            var distance = (_this._actionWidget.widget.getRow() - widget.getRow()) + _this._actionWidget.widget.getRowSpan();
            // as a last resort move the widget downwards
            _this.moveWidgetDown(widget, distance);
        });
    };
    /**
     * After shifts have taken place we should verify the place holder position is still valid
     * @param shiftDirection - the position widgets were shifted
     */
    DashboardService.prototype.validatePlaceholderPosition = function (shiftDirection) {
        // check if the placeholder is over a widget
        if (this.getWidgetsAtPosition(this.getPlaceholder().column, this.getPlaceholder().row, true).length > 0) {
            // move the placeholder the opposite direction
            switch (shiftDirection) {
                case ActionDirection.Left:
                    this.setPlaceholderBounds(this.getPlaceholder().visible, this.getPlaceholder().x + this.getColumnWidth(), this.getPlaceholder().y, this.getPlaceholder().width, this.getPlaceholder().height);
                    break;
                case ActionDirection.Right:
                    this.setPlaceholderBounds(this.getPlaceholder().visible, this.getPlaceholder().x - this.getColumnWidth(), this.getPlaceholder().y, this.getPlaceholder().width, this.getPlaceholder().height);
                    break;
            }
            // validate this new position again
            this.validatePlaceholderPosition(shiftDirection);
        }
    };
    /**
     * Determine if a widget can be moved left - or if it can move the widgets to the right to make space for the widget
     */
    DashboardService.prototype.canWidgetMoveLeft = function (widget, performMove) {
        var _this = this;
        if (performMove === void 0) { performMove = false; }
        // check if the widget is the action widget or occupies the first column
        if (widget === this._actionWidget.widget || widget.getColumn() === 0) {
            return false;
        }
        // find the positions required
        var targetSpaces = this.getOccupiedSpaces().filter(function (space) { return space.widget === widget; }).map(function (space) {
            return { column: space.column - widget.getColumnSpan(), row: space.row, widget: space.widget };
        });
        // check if there are widget in the required positions and if so, can they move right?
        var moveable = targetSpaces.every(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).every(function (wgt) { return _this.canWidgetMoveLeft(wgt); }); });
        if (performMove && moveable) {
            // move all widgets to the right
            targetSpaces.forEach(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).forEach(function (wgt) { return _this.canWidgetMoveLeft(wgt, true); }); });
            // move current widget to the right
            widget.setColumn(widget.getColumn() - 1);
        }
        return moveable;
    };
    /**
     * Determine if a widget can be moved right - or if it can move the widgets to the right to make space for the widget
     */
    DashboardService.prototype.canWidgetMoveRight = function (widget, performMove) {
        var _this = this;
        if (performMove === void 0) { performMove = false; }
        // check if the widget is the dragging widget or the widget occupies the final column
        if (widget === this._actionWidget.widget || widget.getColumn() + widget.getColumnSpan() === this._options.columns) {
            return false;
        }
        // find the positions required
        var targetSpaces = this.getOccupiedSpaces().filter(function (space) { return space.widget === widget; }).map(function (space) {
            return { column: space.column + widget.getColumnSpan(), row: space.row, widget: space.widget };
        });
        // check if there are widget in the required positions and if so, can they move right?
        var moveable = targetSpaces.every(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).every(function (wgt) { return _this.canWidgetMoveRight(wgt); }); });
        if (performMove && moveable) {
            // move all widgets to the right
            targetSpaces.forEach(function (space) { return _this.getWidgetsAtPosition(space.column, space.row).filter(function (wgt) { return wgt !== space.widget; }).forEach(function (wgt) { return _this.canWidgetMoveRight(wgt, true); }); });
            // move current widget to the right
            widget.setColumn(widget.getColumn() + 1);
        }
        return moveable;
    };
    /**
     * Store the initial position of the widget being dragged
     */
    DashboardService.prototype.setWidgetOrigin = function () {
        this._widgetOrigin = {
            column: this._actionWidget.widget.getColumn(),
            row: this._actionWidget.widget.getRow(),
            columnSpan: this._actionWidget.widget.getColumnSpan(),
            rowSpan: this._actionWidget.widget.getRowSpan()
        };
    };
    /**
     * Calculate all the required positions is a widget was to be positioned at a particular point
     */
    DashboardService.prototype.getRequiredSpacesFromPoint = function (widget, column, row) {
        var spaces = [];
        for (var y = row; y < row + widget.getRowSpan(); y++) {
            for (var x = column; x < column + widget.getColumnSpan(); x++) {
                spaces.push({ column: x, row: y, widget: widget });
            }
        }
        return spaces;
    };
    /**
     * Position widgets based on the position of the placeholder - this is temporary until confirmed
     */
    DashboardService.prototype.updateWidgetPositions = function (widget) {
        var _this = this;
        // check all spaces the placeholder will occupy and move any widget currently in them down
        for (var column = this._placeholder.column; column < this._placeholder.column + this._placeholder.columnSpan; column++) {
            for (var row = this._placeholder.row; row < this._placeholder.row + this._placeholder.rowSpan; row++) {
                this.getWidgetsAtPosition(column, row, true)
                    .filter(function (wgt) { return wgt !== widget; })
                    .forEach(function (wgt) { return _this.moveWidgetDown(wgt); });
            }
        }
        // update the height of the dashboard
        this.setDashboardHeight();
        // if we arent dragging the top handle then fill spaces
        if (this._actionWidget.direction !== ActionDirection.Top &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.TopRight) {
            this.shiftWidgetsUp();
        }
    };
    /**
     * Determine if a widget is occupying a specific row and column
     * @param column The columns to check if occupied
     * @param row The row to check if occupied
     * @param ignoreResizing Whether or not to ignore the widget currently being resized
     */
    DashboardService.prototype.getWidgetsAtPosition = function (column, row, ignoreResizing) {
        var _this = this;
        if (ignoreResizing === void 0) { ignoreResizing = false; }
        return this.getOccupiedSpaces()
            .filter(function (space) { return space.column === column && space.row === row; })
            .filter(function (space) { return space.widget !== _this._actionWidget.widget || !ignoreResizing; })
            .map(function (space) { return space.widget; });
    };
    /**
     * Update the placeholder visibility, position and size
     */
    DashboardService.prototype.setPlaceholderBounds = function (visible, x, y, width, height) {
        var _this = this;
        var rounding = this._actionWidget.direction === ActionDirection.Left ||
            this._actionWidget.direction === ActionDirection.Top ? Rounding.RoundDownBelowHalf : Rounding.RoundUpOverHalf;
        this._placeholder.visible = visible;
        this._placeholder.column = this.getPlaceholderColumn(x, width);
        this._placeholder.row = this.getPlaceholderRow(y, height);
        this._placeholder.columnSpan = this.getPlaceholderColumnSpan(width);
        this._placeholder.rowSpan = this.getPlaceholderRowSpan(height);
        // calculate the maximum number of rows
        var rowCount = this._widgets.filter(function (widget) { return widget !== _this._actionWidget.widget; })
            .reduce(function (previous, widget) { return Math.max(widget.getRow() + widget.getRowSpan(), previous); }, 0);
        // constrain maximum placeholder row
        this._placeholder.row = Math.min(this._placeholder.row, rowCount);
        this._placeholder.x = (this._placeholder.column * this.getColumnWidth()) + this._options.padding;
        this._placeholder.y = (this._placeholder.row * this.getRowHeight()) + this._options.padding;
        this._placeholder.width = (this._placeholder.columnSpan * this.getColumnWidth()) - (this._options.padding * 2);
        this._placeholder.height = (this._placeholder.rowSpan * this.getRowHeight()) - (this._options.padding * 2);
        // set the values of the widget to match the values of the placeholder - however do not render the changes
        this._actionWidget.widget.setColumn(this._placeholder.column, false);
        this._actionWidget.widget.setRow(this._placeholder.row, false);
        this._actionWidget.widget.setColumnSpan(this._placeholder.columnSpan, false);
        this._actionWidget.widget.setRowSpan(this._placeholder.rowSpan, false);
    };
    /**
     * Get the placeholder column position
     */
    DashboardService.prototype.getPlaceholderColumn = function (x, width) {
        var column = this.getColumnFromPx(x, this._actionWidget.direction === ActionDirection.Move ? Rounding.RoundUpOverHalf : Rounding.RoundDown);
        var columnSpan = Math.floor(width / this.getColumnWidth());
        var upperLimit = this.getColumnCount() - columnSpan;
        // if we arent dragging left then just return the column
        if (this._actionWidget.direction !== ActionDirection.Left &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.BottomLeft) {
            return Math.max(Math.min(column, upperLimit), 0);
        }
        // get any overflow
        var overflow = width % this.getColumnWidth();
        return (x <= 0 || overflow === 0 || columnSpan === 0 || overflow > (this.getColumnWidth() / 2)) ?
            Math.max(Math.min(column, upperLimit), 0) :
            Math.max(Math.min(column + 1, upperLimit), 0);
    };
    /**
     * Get the column span of the placeholder
     */
    DashboardService.prototype.getPlaceholderColumnSpan = function (width) {
        var columnSpan = this.getColumnFromPx(width);
        // if we arent dragging right or left then just return the column span
        if (this._actionWidget.direction !== ActionDirection.Right &&
            this._actionWidget.direction !== ActionDirection.TopRight &&
            this._actionWidget.direction !== ActionDirection.BottomRight &&
            this._actionWidget.direction !== ActionDirection.Left &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.BottomLeft) {
            return Math.max(columnSpan, 1);
        }
        // get the current column span and any overflow
        var overflow = width % this.getColumnWidth();
        return (columnSpan > 0 && overflow > (this.getColumnWidth() / 2)) ? Math.max(columnSpan + 1, 1) : Math.max(columnSpan, 1);
    };
    /**
     * Get the row position of the placeholder
     */
    DashboardService.prototype.getPlaceholderRow = function (y, height) {
        var row = this.getRowFromPx(y, this._actionWidget.direction === ActionDirection.Move ? Rounding.RoundUpOverHalf : Rounding.RoundDown);
        var rowSpan = Math.ceil(height / this.getRowHeight());
        // if we arent dragging up then just return the row
        if (this._actionWidget.direction !== ActionDirection.Top &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.TopRight) {
            return Math.max(row, 0);
        }
        // get any overflow
        var overflow = height < this.getRowHeight() ? 0 : height % this.getRowHeight();
        return (y <= 0 || rowSpan === 0 || overflow === 0 || overflow > (this.getRowHeight() / 2)) ? Math.max(row, 0) : Math.max(row + 1, 0);
    };
    /**
     * Get the row span of the placeholder
     */
    DashboardService.prototype.getPlaceholderRowSpan = function (height) {
        var rowSpan = this.getRowFromPx(height);
        // if we arent dragging up or down then just return the column span
        if (this._actionWidget.direction !== ActionDirection.Top &&
            this._actionWidget.direction !== ActionDirection.TopLeft &&
            this._actionWidget.direction !== ActionDirection.TopRight &&
            this._actionWidget.direction !== ActionDirection.Bottom &&
            this._actionWidget.direction !== ActionDirection.BottomLeft &&
            this._actionWidget.direction !== ActionDirection.BottomRight) {
            return Math.max(rowSpan, 1);
        }
        // get the current column span and any overflow
        var overflow = height % this.getRowHeight();
        return (overflow > (this.getRowHeight() / 2)) ? Math.max(rowSpan + 1, 1) : Math.max(rowSpan, 1);
    };
    DashboardService.prototype.getColumnFromPx = function (x, rounding) {
        if (rounding === void 0) { rounding = Rounding.RoundDown; }
        var column = Math.floor(x / Math.floor(this.getColumnWidth()));
        var overflow = (x % Math.floor(this.getColumnWidth()));
        var half = this.getColumnWidth() / 2;
        switch (rounding) {
            case Rounding.RoundDown:
                return column;
            case Rounding.RoundDownBelowHalf:
                return overflow < half ? column : column + 1;
            case Rounding.RoundUpOverHalf:
                return overflow > half ? column + 1 : column;
            case Rounding.RoundUp:
                return overflow > 0 ? column + 1 : column;
        }
    };
    DashboardService.prototype.getRowFromPx = function (y, rounding) {
        if (rounding === void 0) { rounding = Rounding.RoundDown; }
        var row = Math.floor(y / Math.floor(this.getRowHeight()));
        var overflow = (y % Math.floor(this.getRowHeight()));
        var half = this.getRowHeight() / 2;
        switch (rounding) {
            case Rounding.RoundDown:
                return row;
            case Rounding.RoundDownBelowHalf:
                return overflow < half ? row : row + 1;
            case Rounding.RoundUpOverHalf:
                return overflow > half ? row + 1 : row;
            case Rounding.RoundUp:
                return overflow > 0 ? row + 1 : row;
        }
    };
    DashboardService.prototype.commitWidgetChanges = function () {
        // check that we have all the values we need
        if (this._placeholder.column === undefined || this._placeholder.row === undefined ||
            this._placeholder.columnSpan === undefined || this._placeholder.rowSpan === undefined) {
            return;
        }
        if (this._actionWidget) {
            this._actionWidget.widget.setColumn(this._placeholder.column);
            this._actionWidget.widget.setRow(this._placeholder.row);
            this._actionWidget.widget.setColumnSpan(this._placeholder.columnSpan);
            this._actionWidget.widget.setRowSpan(this._placeholder.rowSpan);
        }
        // reset all placeholder values
        this._placeholder.column = undefined;
        this._placeholder.row = undefined;
        this._placeholder.columnSpan = undefined;
        this._placeholder.rowSpan = undefined;
    };
    DashboardService.prototype.getPlaceholder = function () {
        return this._placeholder;
    };
    /**
     * Get the current column width
     */
    DashboardService.prototype.getColumnWidth = function () {
        return Math.floor(this._columnWidth);
    };
    /**
     * Get the current column height
     */
    DashboardService.prototype.getRowHeight = function () {
        return this._rowHeight;
    };
    /**
     * Calculate the number of rows populated with widgets
     */
    DashboardService.prototype.getRowCount = function () {
        return this._widgets.reduce(function (previous, widget) { return Math.max(widget.getRow() + widget.getRowSpan(), previous); }, 0);
    };
    /**
     * Set the height of the dashboard container element
     */
    DashboardService.prototype.setDashboardHeight = function () {
        // size the dashboard container to ensure all rows fit
        var rowCount = this.getRowCount();
        // if we should show an empty row increment the row count by 1
        if (this._options.emptyRow) {
            rowCount++;
        }
        this._dimensions.height = rowCount * this.getRowHeight();
        this.height.next(this._dimensions.height);
    };
    /**
     * Orders the z-index of all widgets to move the active one to the front
     * @param widget The widget that should be brought to the front
     */
    DashboardService.prototype.bringToFront = function (widget) {
        this._widgets.forEach(function (wgt) { return wgt.sendToBack(); });
        widget.bringToFront();
    };
    /**
     * Move a widget down - if widgets are in the position below, then move them down further
     * @param widget The widget to move downwards
     */
    DashboardService.prototype.moveWidgetDown = function (widget, distance) {
        var _this = this;
        if (distance === void 0) { distance = 1; }
        // move the widget down one position
        widget.setRow(widget.getRow() + distance);
        // check every space the widget occupies for collisions
        this.forEachBlock(widget, function (column, row) {
            return _this.getWidgetsAtPosition(column, row, true)
                .filter(function (wgt) { return wgt !== widget; })
                .forEach(function (wgt) { return _this.moveWidgetDown(wgt, distance); });
        });
    };
    /**
     * Widgets should not be allowed to have a vacant space above them - if there is one they should move upwards to fill it
     */
    DashboardService.prototype.shiftWidgetsUp = function () {
        var _this = this;
        // check whether or not changes have been made - if so we need to repeat until stable
        var stable = true;
        // iterate each widget and 
        this._widgets.forEach(function (widget) {
            // if widget is already on the top row then do nothing
            if (widget.getRow() === 0) {
                return;
            }
            // if we are currently dragging and this is the dragging widget then skip
            if (_this._actionWidget && _this._actionWidget.widget === widget) {
                return;
            }
            if (_this.getPositionAvailable(widget.getColumn(), widget.getRow() - 1, widget.getColumnSpan(), 1)) {
                widget.setRow(widget.getRow() - 1);
                stable = false;
            }
        });
        // if changes occurred then we should repeat the process
        if (!stable) {
            this.shiftWidgetsUp();
        }
    };
    /**
     * Iterate over each space a widget occupied
     * @param widget The widget to determine spaces
     * @param callback The function to be called for each space, should expect a column and row argument witht he context being the widget
     */
    DashboardService.prototype.forEachBlock = function (widget, callback) {
        for (var row = widget.getRow(); row < widget.getRow() + widget.getRowSpan(); row++) {
            for (var column = widget.getColumn(); column < widget.getColumn() + widget.getColumnSpan(); column++) {
                callback.call(widget, column, row);
            }
        }
    };
    /**
     * Returns the number of columns available
     */
    DashboardService.prototype.getColumnCount = function () {
        return this._stacked ? 1 : this._options.columns;
    };
    return DashboardService;
}());
DashboardService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], DashboardService);

var ActionDirection;
(function (ActionDirection) {
    ActionDirection[ActionDirection["Top"] = 0] = "Top";
    ActionDirection[ActionDirection["TopRight"] = 1] = "TopRight";
    ActionDirection[ActionDirection["Right"] = 2] = "Right";
    ActionDirection[ActionDirection["BottomRight"] = 3] = "BottomRight";
    ActionDirection[ActionDirection["Bottom"] = 4] = "Bottom";
    ActionDirection[ActionDirection["BottomLeft"] = 5] = "BottomLeft";
    ActionDirection[ActionDirection["Left"] = 6] = "Left";
    ActionDirection[ActionDirection["TopLeft"] = 7] = "TopLeft";
    ActionDirection[ActionDirection["Move"] = 8] = "Move";
})(ActionDirection || (ActionDirection = {}));
var Rounding;
(function (Rounding) {
    Rounding[Rounding["RoundDown"] = 0] = "RoundDown";
    Rounding[Rounding["RoundDownBelowHalf"] = 1] = "RoundDownBelowHalf";
    Rounding[Rounding["RoundUp"] = 2] = "RoundUp";
    Rounding[Rounding["RoundUpOverHalf"] = 3] = "RoundUpOverHalf";
})(Rounding || (Rounding = {}));


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__breadcrumbs_component__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__breadcrumbs_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumbs_module__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__breadcrumbs_module__["a"]; });




/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facet_container_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facet_events__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_filter__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetBaseComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var FacetBaseComponent = (function () {
    function FacetBaseComponent(facetContainer) {
        var _this = this;
        this.facetContainer = facetContainer;
        this.selected = [];
        this.selectedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.events = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        if (facetContainer) {
            // subscribe to any deselect events from the facet container
            facetContainer.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__facet_events__["b" /* FacetDeselect */]; })
                .filter(function (event) { return !!_this.selected.find(function (facet) { return facet === event.facet; }); })
                .subscribe(function (event) { return _this.deselectFacet(event.facet); });
            // subscribe to any deselect all events from facet container
            facetContainer.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__facet_events__["c" /* FacetDeselectAll */]; }).subscribe(function (_) { return _this.deselectAll(); });
        }
    }
    FacetBaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        // check if there should be any facets initially selected
        if (this.facetContainer) {
            this.selected.forEach(function (facet) { return _this.facetContainer.selectFacet(facet); });
        }
    };
    FacetBaseComponent.prototype.selectFacet = function (facet) {
        // if the facet is disabled it should not be selected
        if (facet.disabled) {
            return;
        }
        // add the facet to the list of selected facets
        this.selected.push(facet);
        // send the new value to the event emitter
        this.selectedChange.emit(this.selected);
        // fire the event to the observable
        this.triggerEvent(new __WEBPACK_IMPORTED_MODULE_2__facet_events__["a" /* FacetSelect */](facet));
        // tell the facet container about the selected facet
        if (this.facetContainer) {
            this.facetContainer.selectFacet(facet);
        }
    };
    FacetBaseComponent.prototype.deselectFacet = function (facet) {
        // find facet to remove
        var index = this.selected.findIndex(function (selectedFacet) { return selectedFacet === facet; });
        // only continue if facet is found
        if (index !== -1) {
            // remove the facet from the selected list
            this.selected.splice(index, 1);
            // emit the changes to selected event emitter
            this.selectedChange.emit(this.selected);
            // fire the event to the observable
            this.triggerEvent(new __WEBPACK_IMPORTED_MODULE_2__facet_events__["b" /* FacetDeselect */](facet));
            // deselect the facet in the facet container
            if (this.facetContainer) {
                this.facetContainer.deselectFacet(facet);
            }
        }
    };
    FacetBaseComponent.prototype.deselectAll = function () {
        // remove all selected facets
        this.selected = [];
        // fire the event to the observable
        this.triggerEvent(new __WEBPACK_IMPORTED_MODULE_2__facet_events__["c" /* FacetDeselectAll */]());
        // emit the changes to the selected event emitter
        this.selectedChange.emit(this.selected);
    };
    FacetBaseComponent.prototype.toggleFacetSelection = function (facet) {
        // if the facet is selected then deselect - otherwise select it
        if (this.isFacetSelected(facet)) {
            this.deselectFacet(facet);
        }
        else {
            this.selectFacet(facet);
        }
    };
    FacetBaseComponent.prototype.isFacetSelected = function (facet) {
        // determine if a facet is currently selected
        return !!this.selected.find(function (selectedFacet) { return selectedFacet === facet; });
    };
    FacetBaseComponent.prototype.triggerEvent = function (event) {
        this.events.next(event);
    };
    return FacetBaseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FacetBaseComponent.prototype, "selected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FacetBaseComponent.prototype, "selectedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"])
], FacetBaseComponent.prototype, "events", void 0);
FacetBaseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-facet-base',
        template: '',
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__facet_container_component__["a" /* FacetContainerComponent */]])
], FacetBaseComponent);



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ng_positioning__ = __webpack_require__(68);
/* unused harmony reexport positionElements */
/* unused harmony reexport Positioning */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__positioning_service__ = __webpack_require__(118);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__positioning_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipConfig; });

/** Default values provider for tooltip */
var TooltipConfig = (function () {
    function TooltipConfig() {
        /** tooltip placement, supported positions: 'top', 'bottom', 'left', 'right' */
        this.placement = 'top';
        /** array of event names which triggers tooltip opening */
        this.triggers = 'hover focus';
    }
    TooltipConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    TooltipConfig.ctorParameters = function () { return []; };
    return TooltipConfig;
}());
//# sourceMappingURL=tooltip.config.js.map

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeahead_component__ = __webpack_require__(56);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__typeahead_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_module__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__typeahead_module__["a"]; });




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facets_module__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__facets_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facet_container_component__ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__facet_container_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__facet_events__ = __webpack_require__(20);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__facet_events__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__facet_events__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__facet_events__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__base_facet_header_facet_header_component__ = __webpack_require__(40);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__base_facet_header_facet_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__base_facet_base_facet_base_component__ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__base_facet_base_facet_base_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__facet_check_list_facet_check_list_component__ = __webpack_require__(41);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__facet_check_list_facet_check_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__facet_typeahead_list_facet_typeahead_list_component__ = __webpack_require__(42);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_6__facet_typeahead_list_facet_typeahead_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_facet__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_7__models_facet__["a"]; });










/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__page_header_module__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__page_header_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_header_component__ = __webpack_require__(48);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__page_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__ = __webpack_require__(47);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__navigation_navigation_component__["a"]; });





/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__slider_module__ = __webpack_require__(104);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__slider_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__slider_component__ = __webpack_require__(51);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_1__slider_component__["i"]; });




/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnSortingComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ColumnSortingState; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ColumnSortingComponent = (function () {
    function ColumnSortingComponent() {
        this.stateChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.columnSortingState = ColumnSortingState;
    }
    ColumnSortingComponent.prototype.initParent = function (parent) {
        var _this = this;
        this.parent = parent;
        // watch for any events
        this.parent.events.subscribe(function (event) {
            var idx = event.findIndex(function (column) { return column.key === _this.key; });
            if (idx == -1) {
                _this.state = ColumnSortingState.NoSort;
            }
            // only store the number if we have 2 or more columns being sorted
            if (event.length > 1) {
                _this.orderNumber = idx === -1 ? null : idx + 1;
            }
            else {
                _this.orderNumber = null;
            }
            _this.stateChange.emit(_this.state);
        });
    };
    ColumnSortingComponent.prototype.changeState = function () {
        if (this.state === ColumnSortingState.Ascending) {
            this.state = ColumnSortingState.Descending;
        }
        else if (this.state === ColumnSortingState.Descending) {
            this.state = ColumnSortingState.NoSort;
        }
        else {
            this.state = ColumnSortingState.Ascending;
        }
        // inform parent
        return this.parent.toggleColumn(this.key, this.state);
    };
    return ColumnSortingComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ColumnSortingComponent.prototype, "state", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ColumnSortingComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ColumnSortingComponent.prototype, "orderNumber", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ColumnSortingComponent.prototype, "stateChange", void 0);
ColumnSortingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-column-sorting',
        template: __webpack_require__(129),
        exportAs: 'ux-column-sorting'
    })
], ColumnSortingComponent);

var ColumnSortingState;
(function (ColumnSortingState) {
    ColumnSortingState[ColumnSortingState["Ascending"] = 0] = "Ascending";
    ColumnSortingState[ColumnSortingState["Descending"] = 1] = "Descending";
    ColumnSortingState[ColumnSortingState["NoSort"] = 2] = "NoSort";
})(ColumnSortingState || (ColumnSortingState = {}));


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardWidgetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardWidgetComponent = (function () {
    function DashboardWidgetComponent(_dashboardService, _elementRef) {
        var _this = this;
        this._dashboardService = _dashboardService;
        this._elementRef = _elementRef;
        this.colSpan = 1;
        this.rowSpan = 1;
        this.resizable = false;
        this.actualX = 0;
        this.actualY = 0;
        this.actualWidth = 100;
        this.actualHeight = 100;
        this.padding = 0;
        this.zIndex = 0;
        this.stacked = false;
        this._column = { regular: undefined, stacked: undefined };
        this._row = { regular: undefined, stacked: undefined };
        this._columnSpan = { regular: 1, stacked: 1 };
        this._rowSpan = { regular: 1, stacked: 1 };
        this._dragMove = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(document, 'mousemove');
        this._dragEnd = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(document, 'mouseup');
        this._nativeElement = _elementRef.nativeElement;
        // add the widget to the dashboard
        _dashboardService.addWidget(this);
        // watch for changes to the options
        _dashboardService.options().subscribe(function (options) {
            _this.padding = options.padding;
            _this._columnSpan.stacked = options.columns;
        });
    }
    DashboardWidgetComponent.prototype.ngOnInit = function () {
        // check to ensure values are numbers and not strings
        if (typeof this.col === 'string') {
            this.col = parseFloat(this.col);
        }
        if (typeof this.row === 'string') {
            this.row = parseFloat(this.row);
        }
        if (typeof this.colSpan === 'string') {
            this.colSpan = parseFloat(this.colSpan);
        }
        if (typeof this.rowSpan === 'string') {
            this.rowSpan = parseFloat(this.rowSpan);
        }
        this._columnSpan.regular = this.colSpan;
        this._rowSpan.regular = this.rowSpan;
        if (!this.id) {
            console.warn('Dashboard Widget is missing an ID.');
            // set random id - keeps things working but prevents exporting of positions
            this.id = Math.floor(Math.random() * 100000).toString();
        }
    };
    /**
     * Once component is initialised link the resize handle elements with their direction
     */
    DashboardWidgetComponent.prototype.ngAfterViewInit = function () {
        this.initialiseHandles();
    };
    /**
     * If component is removed, then unregister it from the service
     */
    DashboardWidgetComponent.prototype.ngOnDestroy = function () {
        this._dashboardService.removeWidget(this);
    };
    /**
     * Return the ID of the widget
     */
    DashboardWidgetComponent.prototype.getId = function () {
        return this.id;
    };
    /**
     * Set the actual position and size values
     */
    DashboardWidgetComponent.prototype.render = function () {
        this.actualX = this.getColumn() * this._dashboardService.getColumnWidth();
        this.actualY = this.getRow() * this._dashboardService.getRowHeight();
        this.actualWidth = this.getColumnSpan() * this._dashboardService.getColumnWidth();
        this.actualHeight = this.getRowSpan() * this._dashboardService.getRowHeight();
    };
    /**
     * Returns all the resize handles and their associated directions
     */
    DashboardWidgetComponent.prototype.getHandles = function () {
        return this._handles;
    };
    /**
     * Indicates whether or not the widget should be displayed in stacked mode
     * @param stacked indicates the stacked mode
     */
    DashboardWidgetComponent.prototype.setStacked = function (stacked) {
        this.stacked = stacked;
    };
    DashboardWidgetComponent.prototype.getColumn = function () {
        return this.getStackableValue(this._column);
    };
    DashboardWidgetComponent.prototype.getRow = function () {
        return this.getStackableValue(this._row);
    };
    DashboardWidgetComponent.prototype.setColumn = function (column, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._column, column);
        if (render) {
            this.render();
        }
    };
    DashboardWidgetComponent.prototype.setRow = function (row, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._row, row);
        if (render) {
            this.render();
        }
    };
    DashboardWidgetComponent.prototype.getColumnSpan = function () {
        return this.getStackableValue(this._columnSpan);
    };
    DashboardWidgetComponent.prototype.getRowSpan = function () {
        return this.getStackableValue(this._rowSpan);
    };
    DashboardWidgetComponent.prototype.setColumnSpan = function (columnSpan, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._columnSpan, columnSpan);
        if (render) {
            this.render();
        }
    };
    DashboardWidgetComponent.prototype.setRowSpan = function (rowSpan, render) {
        if (render === void 0) { render = true; }
        this.setStackableValue(this._rowSpan, rowSpan);
        if (render) {
            this.render();
        }
    };
    DashboardWidgetComponent.prototype.bringToFront = function () {
        this.zIndex = 1;
    };
    DashboardWidgetComponent.prototype.sendToBack = function () {
        this.zIndex = 0;
    };
    DashboardWidgetComponent.prototype.setBounds = function (x, y, width, height) {
        this.actualX = x;
        this.actualY = y;
        this.actualWidth = width;
        this.actualHeight = height;
    };
    /**
     * Allows automatic setting of stackable value
     * @param property The current StackableValue object
     * @param value The value to set in the appropriate field
     */
    DashboardWidgetComponent.prototype.setStackableValue = function (property, value) {
        if (this.stacked) {
            property.stacked = value;
        }
        else {
            property.regular = value;
        }
    };
    /**
     * Return the appropriate value from a stackable value
     * @param property The Stackable value object
     */
    DashboardWidgetComponent.prototype.getStackableValue = function (property) {
        return this.stacked ? property.stacked : property.regular;
    };
    /**
     * Create data representations of the resize handle elements and the direction they will resize in
     */
    DashboardWidgetComponent.prototype.initialiseHandles = function () {
        var _this = this;
        this._handles = [
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-top'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].Top
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-top-right'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].TopRight
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-right'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].Right
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-bottom-right'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].BottomRight
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-bottom'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].Bottom
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-bottom-left'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].BottomLeft
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-left'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].Left
            },
            {
                element: this._nativeElement.querySelector('.resizer-handle.handle-top-left'),
                direction: __WEBPACK_IMPORTED_MODULE_1__dashboard_service__["b" /* ActionDirection */].TopLeft
            }
        ];
        // bind resize events to each handle
        this._handles.forEach(function (handle) { return _this.bindResize(handle); });
    };
    /**
     * This will apply event listeners to each resize handle
     * @param handle The element and direction to subscribe to
     */
    DashboardWidgetComponent.prototype.bindResize = function (handle) {
        var _this = this;
        // bind to resize events
        handle.listener = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(handle.element, 'mousedown').subscribe(function (downEvent) {
            downEvent.preventDefault();
            // inform service that we are beginning to drag
            _this._dashboardService.onResizeStart({ widget: _this, direction: handle.direction, event: downEvent });
            var move$ = _this._dragMove.takeUntil(_this._dragEnd).subscribe(function (moveEvent) {
                moveEvent.preventDefault();
                _this._dashboardService.onResizeDrag({ widget: _this, direction: handle.direction, event: moveEvent });
            }, null, function () {
                move$.unsubscribe();
                _this._dashboardService.onResizeEnd();
            });
        });
    };
    return DashboardWidgetComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], DashboardWidgetComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DashboardWidgetComponent.prototype, "col", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DashboardWidgetComponent.prototype, "row", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DashboardWidgetComponent.prototype, "colSpan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DashboardWidgetComponent.prototype, "rowSpan", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], DashboardWidgetComponent.prototype, "resizable", void 0);
DashboardWidgetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-dashboard-widget',
        template: __webpack_require__(131),
        host: {
            '[style.left.px]': 'actualX',
            '[style.top.px]': 'actualY',
            '[style.width.px]': 'actualWidth',
            '[style.height.px]': 'actualHeight',
            '[style.padding.px]': 'padding',
            '[style.zIndex]': 'zIndex'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], DashboardWidgetComponent);



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__facet_events__ = __webpack_require__(20);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetContainerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacetContainerComponent = (function () {
    function FacetContainerComponent() {
        this.header = 'Selected:';
        this.clearTooltip = 'Clear All';
        this.emptyText = 'No Items';
        this.facets = [];
        this.facetsChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.events = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FacetContainerComponent.prototype.selectFacet = function (facet) {
        // push the facet on to the list
        this.facets.push(facet);
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new __WEBPACK_IMPORTED_MODULE_1__facet_events__["a" /* FacetSelect */](facet));
    };
    FacetContainerComponent.prototype.deselectFacet = function (facet) {
        // find the index of the item in the selected array
        var idx = this.facets.findIndex(function (selectedFacet) { return facet === selectedFacet; });
        // if match there was no match then finish
        if (idx === -1) {
            return;
        }
        // remove the last item
        this.facets.splice(idx, 1);
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new __WEBPACK_IMPORTED_MODULE_1__facet_events__["b" /* FacetDeselect */](facet));
    };
    FacetContainerComponent.prototype.deselectAllFacets = function () {
        // empty the selected array
        this.facets = [];
        // update the two way binding
        this.facetsChange.emit(this.facets);
        // trigger event
        this.triggerEvent(new __WEBPACK_IMPORTED_MODULE_1__facet_events__["c" /* FacetDeselectAll */]());
    };
    FacetContainerComponent.prototype.triggerEvent = function (event) {
        this.events.next(event);
    };
    return FacetContainerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FacetContainerComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FacetContainerComponent.prototype, "clearTooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FacetContainerComponent.prototype, "emptyText", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FacetContainerComponent.prototype, "facets", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FacetContainerComponent.prototype, "facetsChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FacetContainerComponent.prototype, "events", void 0);
FacetContainerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-facet-container',
        template: __webpack_require__(135)
    })
], FacetContainerComponent);



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetSelect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FacetDeselect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FacetDeselectAll; });
var FacetSelect = (function () {
    function FacetSelect(facet) {
        this.facet = facet;
    }
    return FacetSelect;
}());

var FacetDeselect = (function () {
    function FacetDeselect(facet) {
        this.facet = facet;
    }
    return FacetDeselect;
}());

var FacetDeselectAll = (function () {
    function FacetDeselectAll() {
    }
    return FacetDeselectAll;
}());



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ResizeService = (function () {
    function ResizeService() {
    }
    ResizeService.prototype.addResizeListener = function (nativeElement, renderer) {
        // create subject
        var subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // determine the style of the element
        var displayMode = window.getComputedStyle(nativeElement).getPropertyValue('display');
        // create the iframe element
        var iframe = renderer.createElement('iframe');
        // style the iframe to be invisible but fill containing element
        renderer.setStyle(iframe, 'position', 'absolute');
        renderer.setStyle(iframe, 'width', '100%');
        renderer.setStyle(iframe, 'height', '100%');
        renderer.setStyle(iframe, 'top', '0');
        renderer.setStyle(iframe, 'right', '0');
        renderer.setStyle(iframe, 'bottom', '0');
        renderer.setStyle(iframe, 'left', '0');
        renderer.setStyle(iframe, 'z-index', '-1');
        renderer.setStyle(iframe, 'opacity', '0');
        renderer.setStyle(iframe, 'border', 'none');
        renderer.setStyle(iframe, 'margin', '0');
        renderer.setStyle(iframe, 'pointer-events', 'none');
        renderer.setStyle(iframe, 'overflow', 'hidden');
        // ensure the iframe ignores any tabbing
        renderer.setAttribute(iframe, 'tabindex', '-1');
        // statically positioned elements need changed to relative for this method to work
        if (displayMode !== 'relative' && displayMode !== 'absolute' && displayMode !== 'fixed') {
            renderer.setStyle(nativeElement, 'position', 'relative');
        }
        // add the iframe to the container element
        renderer.appendChild(nativeElement, iframe);
        var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
        var attachListener = function () {
            __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(iframe.contentWindow, 'resize').subscribe(function (event) {
                subject.next(event);
            });
        };
        if (iframeDoc.readyState === 'complete') {
            attachListener();
        }
        else {
            // wait for iframe to load
            iframe.addEventListener('load', function () {
                attachListener();
            });
        }
        return subject;
    };
    return ResizeService;
}());
ResizeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ResizeService);



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollIntoViewService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ScrollIntoViewService = (function () {
    function ScrollIntoViewService() {
    }
    ScrollIntoViewService.prototype.scrollIntoView = function (elem, scrollParent) {
        if (elem.offsetTop < scrollParent.scrollTop) {
            scrollParent.scrollTop = elem.offsetTop;
        }
        else {
            var offsetBottom = elem.offsetTop + elem.offsetHeight;
            if (offsetBottom > (scrollParent.scrollTop + scrollParent.clientHeight)) {
                scrollParent.scrollTop = offsetBottom - scrollParent.clientHeight;
            }
        }
    };
    return ScrollIntoViewService;
}());
ScrollIntoViewService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], ScrollIntoViewService);



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownContainerComponent; });


var BsDropdownContainerComponent = (function () {
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    BsDropdownContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-dropdown-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    host: {
                        style: 'display:block;position: absolute;'
                    },
                    template: "\n    <div [class.dropup]=\"direction === 'up'\"\n         [class.dropdown]=\"direction === 'down'\"\n         [class.show]=\"isOpen\"\n         [class.open]=\"isOpen\"><ng-content></ng-content></div>\n  "
                },] },
    ];
    /** @nocollapse */
    BsDropdownContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
    ]; };
    return BsDropdownContainerComponent;
}());
//# sourceMappingURL=bs-dropdown-container.component.js.map

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownConfig; });

/** Default dropdown configuration */
var BsDropdownConfig = (function () {
    function BsDropdownConfig() {
        /** default dropdown auto closing behavior */
        this.autoClose = true;
    }
    BsDropdownConfig.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    BsDropdownConfig.ctorParameters = function () { return []; };
    return BsDropdownConfig;
}());
//# sourceMappingURL=bs-dropdown.config.js.map

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipContainerComponent; });



var TooltipContainerComponent = (function () {
    function TooltipContainerComponent(config) {
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        get: function () {
            return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    };
    TooltipContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'bs-tooltip-container',
                    changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
                    // tslint:disable-next-line
                    host: {
                        '[class]': '"tooltip in tooltip-" + placement + " " + placement',
                        '[class.show]': '!isBs3',
                        role: 'tooltip'
                    },
                    template: "\n    <div class=\"tooltip-arrow\"></div>\n    <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n    "
                },] },
    ];
    /** @nocollapse */
    TooltipContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    return TooltipContainerComponent;
}());
//# sourceMappingURL=tooltip-container.component.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_utils__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadContainerComponent; });



var TypeaheadContainerComponent = (function () {
    function TypeaheadContainerComponent(element) {
        this.isFocused = false;
        this._matches = [];
        this.element = element;
    }
    Object.defineProperty(TypeaheadContainerComponent.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "active", {
        get: function () {
            return this._active;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        set: function (value) {
            this._matches = value;
            if (this._matches.length > 0) {
                this._active = this._matches[0];
                if (this._active.isHeader()) {
                    this.nextActiveMatch();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "optionsListTemplate", {
        get: function () {
            return this.parent ? this.parent.optionsListTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadContainerComponent.prototype, "itemTemplate", {
        get: function () {
            return this.parent ? this.parent.typeaheadItemTemplate : undefined;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadContainerComponent.prototype.selectActiveMatch = function () {
        this.selectMatch(this._active);
    };
    TypeaheadContainerComponent.prototype.prevActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index - 1 < 0
            ? this.matches.length - 1
            : index - 1];
        if (this._active.isHeader()) {
            this.prevActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.nextActiveMatch = function () {
        var index = this.matches.indexOf(this._active);
        this._active = this.matches[index + 1 > this.matches.length - 1
            ? 0
            : index + 1];
        if (this._active.isHeader()) {
            this.nextActiveMatch();
        }
    };
    TypeaheadContainerComponent.prototype.selectActive = function (value) {
        this.isFocused = true;
        this._active = value;
    };
    TypeaheadContainerComponent.prototype.hightlight = function (match, query) {
        var itemStr = match.value;
        var itemStrHelper = (this.parent && this.parent.typeaheadLatinize
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__typeahead_utils__["a" /* latinize */])(itemStr)
            : itemStr).toLowerCase();
        var startIdx;
        var tokenLen;
        // Replaces the capture string with the same string inside of a "strong" tag
        if (typeof query === 'object') {
            var queryLen = query.length;
            for (var i = 0; i < queryLen; i += 1) {
                // query[i] is already latinized and lower case
                startIdx = itemStrHelper.indexOf(query[i]);
                tokenLen = query[i].length;
                if (startIdx >= 0 && tokenLen > 0) {
                    itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
                    itemStrHelper = itemStrHelper.substring(0, startIdx) + '        ' + ' '.repeat(tokenLen) + '         ' + itemStrHelper.substring(startIdx + tokenLen);
                }
            }
        }
        else if (query) {
            // query is already latinized and lower case
            startIdx = itemStrHelper.indexOf(query);
            tokenLen = query.length;
            if (startIdx >= 0 && tokenLen > 0) {
                itemStr = itemStr.substring(0, startIdx) + '<strong>' + itemStr.substring(startIdx, startIdx + tokenLen) + '</strong>' + itemStr.substring(startIdx + tokenLen);
            }
        }
        return itemStr;
    };
    TypeaheadContainerComponent.prototype.focusLost = function () {
        this.isFocused = false;
    };
    TypeaheadContainerComponent.prototype.isActive = function (value) {
        return this._active === value;
    };
    TypeaheadContainerComponent.prototype.selectMatch = function (value, e) {
        var _this = this;
        if (e === void 0) { e = void 0; }
        if (e) {
            e.stopPropagation();
            e.preventDefault();
        }
        this.parent.changeModel(value);
        setTimeout(function () {
            return _this.parent.typeaheadOnSelect.emit(value);
        }, 0);
        return false;
    };
    TypeaheadContainerComponent.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'typeahead-container',
                    // tslint:disable-next-line
                    template: "\n<!-- inject options list template -->\n<template [ngTemplateOutlet]=\"optionsListTemplate || (isBs4 ? bs4Template : bs3Template)\"\n  [ngOutletContext]=\"{matches:matches, itemTemplate:itemTemplate, query:query}\"></template>\n\n<!-- default options item template -->\n<template #bsItemTemplate let-match=\"match\" let-query=\"query\"><span [innerHtml]=\"hightlight(match, query)\"></span></template>\n\n<!-- Bootstrap 3 options list template -->\n<template #bs3Template>\n<ul class=\"dropdown-menu\">\n  <template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n    <li *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</li>\n    <li *ngIf=\"!match.isHeader()\" [class.active]=\"isActive(match)\" (mouseenter)=\"selectActive(match)\">\n      <a href=\"#\" (click)=\"selectMatch(match, $event)\" tabindex=\"-1\">\n        <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n          [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </a>\n    </li>\n  </template>\n</ul>\n</template>\n\n<!-- Bootstrap 4 options list template -->\n<template #bs4Template >\n<template ngFor let-match let-i=\"index\" [ngForOf]=\"matches\">\n   <h6 *ngIf=\"match.isHeader()\" class=\"dropdown-header\">{{match}}</h6>\n   <template [ngIf]=\"!match.isHeader()\">\n      <button\n        class=\"dropdown-item\"\n        (click)=\"selectMatch(match, $event)\"\n        (mouseenter)=\"selectActive(match)\"\n        [class.active]=\"isActive(match)\">\n          <template [ngTemplateOutlet]=\"itemTemplate || bsItemTemplate\" \n            [ngOutletContext]=\"{item:match.item, index:i, match:match, query:query}\"></template>\n      </button>\n  </template>\n</template>\n</template>\n",
                    // tslint:disable
                    host: {
                        'class': 'dropdown open',
                        '[class.dropdown-menu]': 'isBs4',
                        style: 'position: absolute;display: block;'
                    },
                    // tslint: enable
                    encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
                },] },
    ];
    /** @nocollapse */
    TypeaheadContainerComponent.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    TypeaheadContainerComponent.propDecorators = {
        'focusLost': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['mouseleave',] }, { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
    };
    return TypeaheadContainerComponent;
}());
//# sourceMappingURL=typeahead-container.component.js.map

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__(71);
/* harmony export (immutable) */ __webpack_exports__["a"] = latinize;
/* unused harmony export escapeRegexp */
/* harmony export (immutable) */ __webpack_exports__["b"] = tokenize;
/* harmony export (immutable) */ __webpack_exports__["c"] = getValueFromObject;

function latinize(str) {
    if (!str) {
        return '';
    }
    return str.replace(/[^A-Za-z0-9\[\] ]/g, function (a) {
        return __WEBPACK_IMPORTED_MODULE_0__latin_map__["a" /* latinMap */][a] || a;
    });
}
function escapeRegexp(queryToEscape) {
    // Regex: capture the whole query string and replace it with the string
    // that will be used to match the results, for example if the capture is
    // 'a' the result will be \a
    return queryToEscape.replace(/([.?*+^$[\]\\(){}|-])/g, '\\$1');
}
/* tslint:disable */
function tokenize(str, wordRegexDelimiters, phraseRegexDelimiters) {
    if (wordRegexDelimiters === void 0) { wordRegexDelimiters = ' '; }
    if (phraseRegexDelimiters === void 0) { phraseRegexDelimiters = ''; }
    /* tslint:enable */
    var regexStr = '(?:[' + phraseRegexDelimiters + '])([^' + phraseRegexDelimiters + ']+)(?:[' + phraseRegexDelimiters + '])|([^' + wordRegexDelimiters + ']+)';
    var preTokenized = str.split(new RegExp(regexStr, 'g'));
    var result = [];
    var preTokenizedLength = preTokenized.length;
    var token;
    var replacePhraseDelimiters = new RegExp('[' + phraseRegexDelimiters + ']+', 'g');
    for (var i = 0; i < preTokenizedLength; i += 1) {
        token = preTokenized[i];
        if (token && token.length && token !== wordRegexDelimiters) {
            result.push(token.replace(replacePhraseDelimiters, ''));
        }
    }
    return result;
}
function getValueFromObject(object, option) {
    if (!option || typeof object !== 'object') {
        return object.toString();
    }
    if (option.endsWith('()')) {
        var functionName = option.slice(0, option.length - 2);
        return object[functionName]().toString();
    }
    var properties = option.replace(/\[(\w+)\]/g, '.$1')
        .replace(/^\./, '');
    var propertiesArray = properties.split('.');
    for (var _i = 0, propertiesArray_1 = propertiesArray; _i < propertiesArray_1.length; _i++) {
        var property = propertiesArray_1[_i];
        if (property in object) {
            object = object[property];
        }
    }
    return object.toString();
}
//# sourceMappingURL=typeahead-utils.js.map

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__facade_browser__ = __webpack_require__(124);
/* harmony export (immutable) */ __webpack_exports__["a"] = isBs3;

function isBs3() {
    return __WEBPACK_IMPORTED_MODULE_0__facade_browser__["a" /* window */].__theme !== 'bs4';
}
//# sourceMappingURL=ng2-bootstrap-config.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_29__;

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_30__;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__focus_if_directive__ = __webpack_require__(57);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__focus_if_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focus_if_module__ = __webpack_require__(110);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__focus_if_module__["a"]; });




/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__resize_service__ = __webpack_require__(21);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__resize_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize_directive__ = __webpack_require__(58);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__resize_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_module__ = __webpack_require__(111);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__resize_module__["a"]; });





/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_into_view_if_directive__ = __webpack_require__(59);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__scroll_into_view_if_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_into_view_service__ = __webpack_require__(22);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__scroll_into_view_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_into_view_if_module__ = __webpack_require__(112);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__scroll_into_view_if_module__["a"]; });





/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BreadcrumbsComponent = (function () {
    function BreadcrumbsComponent() {
    }
    BreadcrumbsComponent.prototype.clickCrumb = function (event, crumb) {
        if (crumb.onClick) {
            crumb.onClick.call(null, event);
        }
    };
    return BreadcrumbsComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], BreadcrumbsComponent.prototype, "crumbs", void 0);
BreadcrumbsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-breadcrumbs',
        template: __webpack_require__(127)
    })
], BreadcrumbsComponent);



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CHECKBOX_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CheckboxComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CHECKBOX_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return CheckboxComponent; }),
    multi: true
};
var CheckboxComponent = (function () {
    function CheckboxComponent() {
        this.name = '';
        this.clickable = true;
        this.disabled = false;
        this.simplified = false;
        this.indeterminateValue = -1;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(CheckboxComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            // invoke change event
            this.valueChange.emit(this._value);
            // call callback
            this.onChangeCallback(this._value);
        },
        enumerable: true,
        configurable: true
    });
    CheckboxComponent.prototype.toggleChecked = function () {
        if (this.disabled === true || this.clickable === false) {
            return;
        }
        if (this.value === this.indeterminateValue) {
            this.value = true;
            return;
        }
        // toggle the checked state
        this.value = !this.value;
    };
    CheckboxComponent.prototype.keyDown = function (event) {
        // then toggle the checkbox
        this.toggleChecked();
        // prevent default browser behavior
        event.stopPropagation();
        event.preventDefault();
    };
    // Functions required to update ngModel
    CheckboxComponent.prototype.writeValue = function (value) {
        if (value !== this._value) {
            this._value = value;
        }
    };
    CheckboxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    CheckboxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return CheckboxComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], CheckboxComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CheckboxComponent.prototype, "clickable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CheckboxComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], CheckboxComponent.prototype, "simplified", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], CheckboxComponent.prototype, "indeterminateValue", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], CheckboxComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], CheckboxComponent.prototype, "value", null);
CheckboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-checkbox',
        template: __webpack_require__(128),
        providers: [CHECKBOX_VALUE_ACCESSOR],
        host: {
            '(click)': 'toggleChecked()'
        }
    }),
    __metadata("design:paramtypes", [])
], CheckboxComponent);



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_sorting_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnSortingDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColumnSortingDirective = (function () {
    function ColumnSortingDirective() {
        this.events = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.order = [];
    }
    ColumnSortingDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.components.forEach(function (component) { return component.initParent(_this); });
    };
    ColumnSortingDirective.prototype.toggleColumn = function (key, state) {
        if (this.singleSort) {
            if (state === __WEBPACK_IMPORTED_MODULE_0__column_sorting_component__["b" /* ColumnSortingState */].NoSort) {
                this.order = [];
            }
            else {
                this.order = [{ key: key, state: state }];
            }
        }
        else {
            // reorder columns here
            var idx = this.order.findIndex(function (column) { return column.key === key; });
            // if wasnt previously selected add to list
            if (idx === -1) {
                this.order.push({ key: key, state: state });
            }
            else if (state === __WEBPACK_IMPORTED_MODULE_0__column_sorting_component__["b" /* ColumnSortingState */].Ascending || state === __WEBPACK_IMPORTED_MODULE_0__column_sorting_component__["b" /* ColumnSortingState */].Descending) {
                this.order.splice(idx, 1);
                this.order.push({ key: key, state: state });
            }
            else {
                this.order.splice(idx, 1);
            }
        }
        this.events.next(this.order);
        // return the order
        return this.order;
    };
    return ColumnSortingDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ColumnSortingDirective.prototype, "singleSort", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_0__column_sorting_component__["a" /* ColumnSortingComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["QueryList"])
], ColumnSortingDirective.prototype, "components", void 0);
ColumnSortingDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
        selector: '[uxColumnSorting]'
    })
], ColumnSortingDirective);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(_dashboardService, _elementRef, _ngZone) {
        var _this = this;
        this._dashboardService = _dashboardService;
        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        this.options = {};
        this.layoutChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.height = 0;
        this.placeholder = this._dashboardService.getPlaceholder();
        this._nativeElement = _elementRef.nativeElement;
        this._dashboardService.setDashboard(this._nativeElement);
        // watch for changes to component height
        this._dashboardService.height.subscribe(function (height) { return _this.height = height; });
        // subscribe to layout changes
        this._dashboardService.layout.subscribe(function (layout) {
            _this.layout = layout;
            _this.layoutChange.emit(layout);
        });
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.setOptions(this.options);
    };
    DashboardComponent.prototype.ngDoCheck = function () {
        // get the current set of options
        var options = Object.assign({}, this._dashboardService.getDefaultOptions(), this.options);
        // if anything has changed then update them
        if (JSON.stringify(this._dashboardService.getOptions()) !== JSON.stringify(options)) {
            this.setOptions(options);
        }
        // check if the layout has changed
        if (JSON.stringify(this.layout) !== JSON.stringify(this._layout)) {
            this._layout = this.layout.slice();
            this._dashboardService.setLayoutData(this.layout);
        }
    };
    DashboardComponent.prototype.ngAfterViewInit = function () {
        // initially set dimensions
        this._dashboardService.setDimensions(this._nativeElement.offsetWidth, this._nativeElement.offsetHeight);
    };
    DashboardComponent.prototype.setOptions = function (options) {
        this._dashboardService.setOptions(options);
    };
    DashboardComponent.prototype.onResize = function (event) {
        var _this = this;
        // ensure this gets run inside Angular
        this._ngZone.run(function () {
            var target = event.target;
            _this._dashboardService.setDimensions(target.innerWidth, target.innerHeight);
        });
    };
    return DashboardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DashboardComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DashboardComponent.prototype, "layout", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], DashboardComponent.prototype, "layoutChange", void 0);
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-dashboard',
        template: __webpack_require__(130),
        providers: [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */]],
        host: {
            '[style.height.px]': 'height'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__dashboard_service__["a" /* DashboardService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
], DashboardComponent);



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__widget_dashboard_widget_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_service__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDragHandleDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var DashboardDragHandleDirective = (function () {
    function DashboardDragHandleDirective(widget, elementRef, dashboardService) {
        var _this = this;
        this._dragMove = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(document, 'mousemove');
        this._dragEnd = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(document, 'mouseup');
        __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].fromEvent(elementRef.nativeElement, 'mousedown').subscribe(function (downEvent) {
            downEvent.preventDefault();
            // inform service that we are beginning to drag
            dashboardService.onDragStart({ widget: widget, direction: __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["b" /* ActionDirection */].Move, event: downEvent });
            var move$ = _this._dragMove.takeUntil(_this._dragEnd).subscribe(function (moveEvent) {
                moveEvent.preventDefault();
                dashboardService.onDrag({ widget: widget, direction: __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["b" /* ActionDirection */].Move, event: moveEvent });
            }, null, function () {
                move$.unsubscribe();
                dashboardService.onDragEnd();
            });
        });
    }
    return DashboardDragHandleDirective;
}());
DashboardDragHandleDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[ux-dashboard-widget-drag-handle]'
    }),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Host"])()),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__widget_dashboard_widget_component__["a" /* DashboardWidgetComponent */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_3__dashboard_service__["a" /* DashboardService */]])
], DashboardDragHandleDirective);



/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EboxComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EboxHeaderDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return EboxContentDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EboxComponent = (function () {
    function EboxComponent() {
    }
    return EboxComponent;
}());
EboxComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-ebox',
        template: __webpack_require__(132)
    })
], EboxComponent);

var EboxHeaderDirective = (function () {
    function EboxHeaderDirective() {
    }
    return EboxHeaderDirective;
}());
EboxHeaderDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ux-ebox-header'
    })
], EboxHeaderDirective);

var EboxContentDirective = (function () {
    function EboxContentDirective() {
    }
    return EboxContentDirective;
}());
EboxContentDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ux-ebox-content'
    })
], EboxContentDirective);



/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FacetHeaderComponent = (function () {
    function FacetHeaderComponent() {
        this.canExpand = true;
        this.expanded = true;
        this.expandedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FacetHeaderComponent.prototype.toggleExpand = function () {
        // if not expandable then do nothing
        if (this.canExpand) {
            this.expanded = !this.expanded;
            this.expandedChange.emit(this.expanded);
        }
    };
    return FacetHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FacetHeaderComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FacetHeaderComponent.prototype, "canExpand", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FacetHeaderComponent.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FacetHeaderComponent.prototype, "expandedChange", void 0);
FacetHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-facet-header',
        template: __webpack_require__(133),
        host: {
            'tabindex': '0',
            '(click)': 'toggleExpand()',
            '(keyup.enter)': 'toggleExpand()'
        }
    })
], FacetHeaderComponent);



/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_facet_base_facet_base_component__ = __webpack_require__(10);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetCheckListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FacetCheckListComponent = (function (_super) {
    __extends(FacetCheckListComponent, _super);
    function FacetCheckListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.facets = [];
        _this.scrollbar = true;
        _this.expanded = true;
        return _this;
    }
    return FacetCheckListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_facet_base_facet_base_component__["a" /* FacetBaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FacetCheckListComponent.prototype, "facets", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FacetCheckListComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FacetCheckListComponent.prototype, "scrollbar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FacetCheckListComponent.prototype, "expanded", void 0);
FacetCheckListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-facet-check-list',
        template: __webpack_require__(134)
    })
], FacetCheckListComponent);



/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base_facet_base_facet_base_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetTypeaheadListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FacetTypeaheadListComponent = (function (_super) {
    __extends(FacetTypeaheadListComponent, _super);
    function FacetTypeaheadListComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.expanded = true;
        _this.typeaheadConfig = {};
        _this.defaultTypeaheadConfig = {
            placeholder: '',
            maxResults: 5,
            minCharacters: 1
        };
        return _this;
    }
    FacetTypeaheadListComponent.prototype.ngOnInit = function () {
        var _this = this;
        // wrap the observable and filter out any already selected items or any disabled items
        if (this.facets instanceof __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"]) {
            // handle an observable of data
            this.typeaheadOptions = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].from(this.facets).map(function (facets) {
                // remove disabled facets, selected facets and facets that dont match search term
                return facets.filter(function (facet) { return !facet.disabled; })
                    .filter(function (facet) { return !_this.selected.find(function (selectedFacet) { return selectedFacet === facet; }); })
                    .filter(function (facet) { return facet.title.toUpperCase().includes(_this.searchQuery.toUpperCase()); });
            });
        }
        else {
            // handle an array of data
            this.typeaheadOptions = __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.facets).map(function (facets) {
                // remove disabled facets, selected facets and facets that dont match search term
                return facets.filter(function (facet) { return !facet.disabled; })
                    .filter(function (facet) { return !_this.selected.find(function (selectedFacet) { return selectedFacet === facet; }); })
                    .filter(function (facet) { return facet.title.toUpperCase().includes(_this.searchQuery.toUpperCase()); });
            });
        }
        // provide default values for typeahead config
        for (var prop in this.defaultTypeaheadConfig) {
            // check if prop has been defined in the users typeahead config - if not set default value
            if (this.typeaheadConfig.hasOwnProperty(prop) === false) {
                this.typeaheadConfig[prop] = this.defaultTypeaheadConfig[prop];
            }
        }
    };
    FacetTypeaheadListComponent.prototype.selectOption = function (typeaheadOption) {
        // check to make sure that the item is not currently selected
        if (this.selected.find(function (facet) { return facet === typeaheadOption.item; })) {
            return;
        }
        // select the facet
        this.selectFacet(typeaheadOption.item);
        // clear the typeahead
        this.searchQuery = '';
    };
    return FacetTypeaheadListComponent;
}(__WEBPACK_IMPORTED_MODULE_1__base_facet_base_facet_base_component__["a" /* FacetBaseComponent */]));
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FacetTypeaheadListComponent.prototype, "facets", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FacetTypeaheadListComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FacetTypeaheadListComponent.prototype, "expanded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], FacetTypeaheadListComponent.prototype, "typeaheadConfig", void 0);
FacetTypeaheadListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-facet-typeahead-list',
        template: __webpack_require__(136)
    })
], FacetTypeaheadListComponent);



/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlippableCardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FlippableCardFrontDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FlippableCardBackDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FlippableCardComponent = (function () {
    function FlippableCardComponent() {
        this.direction = 'horizontal';
        this.trigger = 'hover';
        this.width = 280;
        this.height = 200;
        this.flipped = false;
        this.flippedChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    FlippableCardComponent.prototype.setFlipped = function (state) {
        this.flipped = state;
        this.flippedChange.emit(this.flipped);
    };
    FlippableCardComponent.prototype.toggleFlipped = function () {
        this.setFlipped(!this.flipped);
    };
    FlippableCardComponent.prototype.clickTrigger = function () {
        // add or remove the class depending on whether or not the card has been flipped
        if (this.trigger === 'click') {
            this.toggleFlipped();
        }
    };
    FlippableCardComponent.prototype.hoverEnter = function () {
        // if the trigger is hover then begin to flip
        if (this.trigger === 'hover') {
            this.setFlipped(true);
        }
    };
    FlippableCardComponent.prototype.hoverExit = function () {
        if (this.trigger === 'hover') {
            this.setFlipped(false);
        }
    };
    return FlippableCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlippableCardComponent.prototype, "direction", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], FlippableCardComponent.prototype, "trigger", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FlippableCardComponent.prototype, "width", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], FlippableCardComponent.prototype, "height", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FlippableCardComponent.prototype, "flipped", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], FlippableCardComponent.prototype, "flippedChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlippableCardComponent.prototype, "clickTrigger", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseenter'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlippableCardComponent.prototype, "hoverEnter", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('mouseleave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FlippableCardComponent.prototype, "hoverExit", null);
FlippableCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-flippable-card',
        template: __webpack_require__(137),
        host: {
            '[class.horizontal]': 'direction === "horizontal"',
            '[class.vertical]': 'direction === "vertical"'
        },
        exportAs: 'ux-flippable-card'
    })
], FlippableCardComponent);

var FlippableCardFrontDirective = (function () {
    function FlippableCardFrontDirective() {
    }
    return FlippableCardFrontDirective;
}());
FlippableCardFrontDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ux-flippable-card-front'
    })
], FlippableCardFrontDirective);

var FlippableCardBackDirective = (function () {
    function FlippableCardBackDirective() {
    }
    return FlippableCardBackDirective;
}());
FlippableCardBackDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: 'ux-flippable-card-back'
    })
], FlippableCardBackDirective);



/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDisplayPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ItemDisplayPanelContentDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ItemDisplayPanelFooterDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemDisplayPanelComponent = (function () {
    function ItemDisplayPanelComponent() {
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._visible = false;
        // private onTouchedCallback: () => void = () => { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(ItemDisplayPanelComponent.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (visible) {
            this._visible = visible;
            // invoke change event
            this.visibleChange.emit(this._visible);
            // call callback
            this.onChangeCallback(this._visible);
        },
        enumerable: true,
        configurable: true
    });
    ItemDisplayPanelComponent.prototype.ngOnChanges = function (changes) {
        this.height = 'calc(100% - ' + this.top + 'px)';
    };
    ItemDisplayPanelComponent.prototype.clickOff = function (event) {
        // dont do anything if the panel is hidden
        if (this._visible) {
            var target = event.target;
            // if the target node is the HTML tag, then this was triggered by scrolling and we should not close the panel
            if (target.nodeName === 'HTML') {
                return;
            }
            var hidePanel = true;
            while (target && target.nodeName !== 'BODY') {
                if (target.classList.contains('ux-item-display-panel')) {
                    hidePanel = false;
                    break;
                }
                else {
                    target = target.parentElement;
                }
            }
            if (hidePanel) {
                this._visible = false;
                this.visibleChange.emit(this._visible);
            }
        }
    };
    return ItemDisplayPanelComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ItemDisplayPanelComponent.prototype, "top", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ItemDisplayPanelComponent.prototype, "shadow", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ItemDisplayPanelComponent.prototype, "title", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ItemDisplayPanelComponent.prototype, "animate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ItemDisplayPanelComponent.prototype, "visibleChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], ItemDisplayPanelComponent.prototype, "visible", null);
ItemDisplayPanelComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-item-display-panel',
        template: __webpack_require__(138),
        host: {
            '(document:click)': 'clickOff($event)',
            '(document:keyup.escape)': 'visible = false'
        }
    })
], ItemDisplayPanelComponent);

var ItemDisplayPanelContentDirective = (function () {
    function ItemDisplayPanelContentDirective() {
    }
    return ItemDisplayPanelContentDirective;
}());
ItemDisplayPanelContentDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[uxItemDisplayPanelContent]'
    })
], ItemDisplayPanelContentDirective);

var ItemDisplayPanelFooterDirective = (function () {
    function ItemDisplayPanelFooterDirective() {
    }
    return ItemDisplayPanelFooterDirective;
}());
ItemDisplayPanelFooterDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[uxItemDisplayPanelFooter]'
    })
], ItemDisplayPanelFooterDirective);



/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderNavigationDropdownItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHeaderNavigationDropdownItemComponent = (function () {
    function PageHeaderNavigationDropdownItemComponent() {
        var _this = this;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.dropdownOpen = false;
        // create a new subject observable
        this.dropdownEvents = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        // subscribe to stream with a debounce (a small debounce is all that is required)
        this.dropdownEvents.debounceTime(1).subscribe(function (visible) { return _this.dropdownOpen = visible; });
    }
    PageHeaderNavigationDropdownItemComponent.prototype.selectItem = function (item, parentItem) {
        // clicking on an item with children then return
        if (item.children) {
            return;
        }
        // emit the selected item in an event
        this.onSelect.emit(item);
        // select the current item
        item.selected = true;
        // now also select the parent menu
        if (parentItem) {
            parentItem.selected = true;
        }
    };
    PageHeaderNavigationDropdownItemComponent.prototype.hoverStart = function () {
        this.dropdownEvents.next(true);
    };
    PageHeaderNavigationDropdownItemComponent.prototype.hoverLeave = function () {
        this.dropdownEvents.next(false);
    };
    PageHeaderNavigationDropdownItemComponent.prototype.close = function () {
        this.dropdownOpen = false;
    };
    return PageHeaderNavigationDropdownItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PageHeaderNavigationDropdownItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PageHeaderNavigationDropdownItemComponent.prototype, "onSelect", void 0);
PageHeaderNavigationDropdownItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-page-header-horizontal-navigation-dropdown-item',
        template: __webpack_require__(140)
    }),
    __metadata("design:paramtypes", [])
], PageHeaderNavigationDropdownItemComponent);



/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__navigation_dropdown_item_navigation_dropdown_item_component__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderNavigationItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PageHeaderNavigationItemComponent = (function () {
    function PageHeaderNavigationItemComponent() {
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PageHeaderNavigationItemComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menu.onHidden.subscribe(function () { return _this.dropdownComponents.forEach(function (dropdown) { return dropdown.close(); }); });
    };
    PageHeaderNavigationItemComponent.prototype.selectItem = function () {
        // if the item has children then do nothing at this stage 
        if (this.item.children) {
            return;
        }
        // otherwise select the current item
        this.onItemSelect(this.item);
    };
    PageHeaderNavigationItemComponent.prototype.onItemSelect = function (item) {
        this.onSelect.emit(item);
        // select the current item
        this.item.selected = true;
    };
    return PageHeaderNavigationItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('menu'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_dropdown__["a" /* BsDropdownDirective */])
], PageHeaderNavigationItemComponent.prototype, "menu", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_2__navigation_dropdown_item_navigation_dropdown_item_component__["a" /* PageHeaderNavigationDropdownItemComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], PageHeaderNavigationItemComponent.prototype, "dropdownComponents", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PageHeaderNavigationItemComponent.prototype, "item", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], PageHeaderNavigationItemComponent.prototype, "onSelect", void 0);
PageHeaderNavigationItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-page-header-horizontal-navigation-item',
        template: __webpack_require__(141)
    })
], PageHeaderNavigationItemComponent);



/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navigation_item_navigation_item_component__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderNavigationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PageHeaderNavigationComponent = (function () {
    function PageHeaderNavigationComponent() {
    }
    PageHeaderNavigationComponent.prototype.onSelect = function (item) {
        if (item.select) {
            item.select.call(item, item);
        }
        // deselect all items in all menus
        this.deselectAll();
    };
    PageHeaderNavigationComponent.prototype.deselectAll = function () {
        var _this = this;
        this.items.forEach(function (item) { return _this.deselect(item); });
    };
    PageHeaderNavigationComponent.prototype.deselect = function (navItem) {
        var _this = this;
        // deselect the current item
        navItem.selected = false;
        // iterate any children and deselect them
        if (navItem.children) {
            navItem.children.forEach(function (item) { return _this.deselect(item); });
        }
    };
    return PageHeaderNavigationComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChildren"])(__WEBPACK_IMPORTED_MODULE_1__navigation_item_navigation_item_component__["a" /* PageHeaderNavigationItemComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"])
], PageHeaderNavigationComponent.prototype, "menuItems", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PageHeaderNavigationComponent.prototype, "items", void 0);
PageHeaderNavigationComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-page-header-horizontal-navigation',
        template: __webpack_require__(142)
    })
], PageHeaderNavigationComponent);



/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderComponent = (function () {
    function PageHeaderComponent() {
        this.alignment = 'center';
        this.condensed = false;
        this.backVisible = true;
        this.backClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    PageHeaderComponent.prototype.goBack = function () {
        this.backClick.emit();
    };
    PageHeaderComponent.prototype.getCondensedBreadcrumbs = function () {
        if (this.crumbs) {
            var crumbs = this.crumbs.slice();
            crumbs.push({ title: this.header });
            return crumbs;
        }
        return [{ title: this.header }];
    };
    return PageHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "logo", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PageHeaderComponent.prototype, "items", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PageHeaderComponent.prototype, "crumbs", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "header", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], PageHeaderComponent.prototype, "alignment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "condensed", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PageHeaderComponent.prototype, "iconMenus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], PageHeaderComponent.prototype, "backVisible", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], PageHeaderComponent.prototype, "backClick", void 0);
PageHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-page-header',
        exportAs: 'ux-page-header',
        template: __webpack_require__(143),
        host: {
            '[class.page-header-condensed]': 'condensed'
        }
    })
], PageHeaderComponent);



/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_color_index__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressBarComponent = (function () {
    function ProgressBarComponent(colorService) {
        this.colorService = colorService;
        this.value = 0;
        this.max = 100;
        this.trackColor = this.colorService.getColor('grey7').toHex();
        this.barColor = this.colorService.getColor('accent').toHex();
        this.percentage = 0;
    }
    ProgressBarComponent.prototype.ngOnChanges = function (changes) {
        this.percentage = (this.value / this.max) * 100;
    };
    return ProgressBarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ProgressBarComponent.prototype, "max", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "trackColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ProgressBarComponent.prototype, "barColor", void 0);
ProgressBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-progress-bar',
        template: __webpack_require__(144)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_color_index__["b" /* ColorService */]])
], ProgressBarComponent);



/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RADIOBUTTON_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RadioButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RADIOBUTTON_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return RadioButtonComponent; }),
    multi: true
};
var RadioButtonComponent = (function () {
    function RadioButtonComponent() {
        this.simplified = false;
        this.disabled = false;
        this.name = '';
        this.clickable = true;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(RadioButtonComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            // invoke change event
            this.valueChange.emit(this._value);
            // call callback
            this.onChangeCallback(this._value);
        },
        enumerable: true,
        configurable: true
    });
    RadioButtonComponent.prototype.checkItem = function () {
        if (this.disabled === true || this.clickable === false) {
            return;
        }
        // toggle the checked state
        this.value = this.option;
        // call callback
        this.onChangeCallback(this.value);
    };
    RadioButtonComponent.prototype.keyDown = function (event) {
        // then toggle the checkbox
        this.checkItem();
        // prevent default browser behavior
        event.stopPropagation();
        event.preventDefault();
    };
    // Functions required to update ng-model
    RadioButtonComponent.prototype.writeValue = function (value) {
        if (value !== this._value) {
            this._value = value;
        }
    };
    RadioButtonComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    RadioButtonComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return RadioButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RadioButtonComponent.prototype, "id", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RadioButtonComponent.prototype, "simplified", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RadioButtonComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], RadioButtonComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], RadioButtonComponent.prototype, "clickable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RadioButtonComponent.prototype, "option", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], RadioButtonComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], RadioButtonComponent.prototype, "value", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], RadioButtonComponent.prototype, "checkItem", null);
RadioButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-radio-button',
        template: __webpack_require__(145),
        providers: [RADIOBUTTON_VALUE_ACCESSOR]
    })
], RadioButtonComponent);



/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_color_index__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SliderType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SliderStyle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SliderSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SliderCalloutTrigger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SliderSnap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SliderTickType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SliderThumbEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return SliderThumb; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SliderComponent = (function () {
    function SliderComponent(colorService) {
        this.value = 0;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        // expose enums to Angular view
        this.sliderType = SliderType;
        this.sliderStyle = SliderStyle;
        this.sliderSize = SliderSize;
        this.sliderThumb = SliderThumb;
        this.sliderTickType = SliderTickType;
        this.sliderThumbEvent = SliderThumbEvent;
        this.tracks = {
            lower: {
                size: 0,
                color: ''
            },
            middle: {
                size: 0,
                color: ''
            },
            upper: {
                size: 0,
                color: ''
            }
        };
        this.tooltips = {
            lower: {
                visible: false,
                position: 0,
                label: ''
            },
            upper: {
                visible: false,
                position: 0,
                label: ''
            }
        };
        this.thumbs = {
            lower: {
                hover: false,
                drag: false,
                position: 0,
                order: 100,
                value: null
            },
            upper: {
                hover: false,
                drag: false,
                position: 0,
                order: 101,
                value: null
            }
        };
        // store all the ticks to display
        this.ticks = [];
        this.mouseMove = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(document, 'mousemove');
        this.mouseUp = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(document, 'mouseup');
        // setup default options
        this.defaultOptions = {
            type: SliderType.Value,
            handles: {
                style: SliderStyle.Button,
                callout: {
                    trigger: SliderCalloutTrigger.None,
                    background: colorService.getColor('grey2').toHex(),
                    color: '#fff',
                    formatter: function (value) { return value; }
                }
            },
            track: {
                height: SliderSize.Wide,
                min: 0,
                max: 100,
                ticks: {
                    snap: SliderSnap.None,
                    major: {
                        show: true,
                        steps: 10,
                        labels: true,
                        formatter: function (value) { return value; }
                    },
                    minor: {
                        show: true,
                        steps: 5,
                        labels: false,
                        formatter: function (value) { return value; }
                    }
                },
                colors: {
                    lower: colorService.getColor('grey6').toHex(),
                    range: colorService.getColor('accent').setAlpha(0.75).toRgba(),
                    higher: colorService.getColor('grey6').toHex()
                }
            }
        };
    }
    SliderComponent.prototype.ngOnInit = function () {
        // set up event observables
        this.initObservables();
        this.updateOptions();
        this.updateValues();
        this.setThumbState(SliderThumb.Lower, false, false);
        this.setThumbState(SliderThumb.Upper, false, false);
    };
    SliderComponent.prototype.ngDoCheck = function () {
        // check if value has changed
        if (!this.deepCompare(this.value, this._value)) {
            this.updateValues();
            this._value = this.clone(this.value);
        }
    };
    SliderComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // persistent tooltips will need positioned correctly at this stage
        setTimeout(function () {
            _this.updateTooltipPosition(SliderThumb.Lower);
            _this.updateTooltipPosition(SliderThumb.Upper);
        });
    };
    SliderComponent.prototype.ngOnDestroy = function () {
        this.lowerDrag.unsubscribe();
        this.upperDrag.unsubscribe();
    };
    SliderComponent.prototype.getFormattedValue = function (thumb) {
        return this.options.handles.callout.formatter(this.getThumbState(thumb).value);
    };
    SliderComponent.prototype.initObservables = function () {
        var _this = this;
        // when a user begins to drag lower thumb - subscribe to mouse move events until the mouse is lifted
        this.lowerThumbDown = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.lowerThumb.nativeElement, 'mousedown');
        this.lowerDrag = this.lowerThumbDown.switchMap(function () { return _this.mouseMove.takeUntil(_this.mouseUp); }).subscribe(function (event) {
            _this.updateThumbPosition(event, SliderThumb.Lower);
        });
        // when a user begins to drag upper thumb - subscribe to mouse move events until the mouse is lifted
        this.upperThumbDown = __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].fromEvent(this.upperThumb.nativeElement, 'mousedown');
        this.upperDrag = this.upperThumbDown.switchMap(function () { return _this.mouseMove.takeUntil(_this.mouseUp); }).subscribe(function (event) {
            _this.updateThumbPosition(event, SliderThumb.Upper);
        });
    };
    SliderComponent.prototype.getThumbState = function (thumb) {
        return thumb === SliderThumb.Lower ? this.thumbs.lower : this.thumbs.upper;
    };
    SliderComponent.prototype.setThumbState = function (thumb, hover, drag) {
        if (thumb === SliderThumb.Lower) {
            this.thumbs.lower.hover = hover;
            this.thumbs.lower.drag = drag;
        }
        else {
            this.thumbs.upper.hover = hover;
            this.thumbs.upper.drag = drag;
        }
        // update the visibility of the tooltips
        this.updateTooltips(thumb);
    };
    SliderComponent.prototype.onDragEnd = function () {
        // update thumb state here as we are not dragging any more
        this.thumbEvent(SliderThumb.Lower, SliderThumbEvent.DragEnd);
        this.thumbEvent(SliderThumb.Upper, SliderThumbEvent.DragEnd);
    };
    SliderComponent.prototype.thumbEvent = function (thumb, event) {
        // get the current thumb state
        var state = this.getThumbState(thumb);
        // update based upon event
        switch (event) {
            case SliderThumbEvent.DragStart:
                state.drag = true;
                break;
            case SliderThumbEvent.DragEnd:
                state.drag = false;
                break;
            case SliderThumbEvent.MouseOver:
                state.hover = true;
                break;
            case SliderThumbEvent.MouseLeave:
                state.hover = false;
                break;
            case SliderThumbEvent.None:
                state.drag = false;
                state.hover = false;
                break;
        }
        // update the thumb state
        this.setThumbState(thumb, state.hover, state.drag);
    };
    SliderComponent.prototype.updateTooltips = function (thumb) {
        var visible = false;
        var state = this.getThumbState(thumb);
        switch (this.options.handles.callout.trigger) {
            case SliderCalloutTrigger.Persistent:
                visible = true;
                break;
            case SliderCalloutTrigger.Drag:
                visible = state.drag;
                break;
            case SliderCalloutTrigger.Hover:
                visible = state.hover || state.drag;
                break;
        }
        // update the state for the corresponding thumb
        this.getTooltip(thumb).visible = visible;
        // update the tooltip text
        this.updateTooltipText(thumb);
        // update the tooltip positions
        this.updateTooltipPosition(thumb);
    };
    SliderComponent.prototype.updateTooltipText = function (thumb) {
        // get the thumb value
        var state = this.getThumbState(thumb);
        var tooltip = this.getTooltip(thumb);
        // store the formatted label
        tooltip.label = this.getFormattedValue(thumb).toString();
    };
    SliderComponent.prototype.getThumbElement = function (thumb) {
        return thumb === SliderThumb.Lower ? this.lowerThumb : this.upperThumb;
    };
    SliderComponent.prototype.getTooltipElement = function (thumb) {
        return thumb === SliderThumb.Lower ? this.lowerTooltip : this.upperTooltip;
    };
    SliderComponent.prototype.getTooltip = function (thumb) {
        return thumb === SliderThumb.Lower ? this.tooltips.lower : this.tooltips.upper;
    };
    SliderComponent.prototype.updateTooltipPosition = function (thumb) {
        var tooltip = this.getTooltip(thumb);
        // if tooltip is not visible then stop here
        if (tooltip.visible === false) {
            return;
        }
        var tooltipElement = this.getTooltipElement(thumb);
        // get the element widths
        var thumbWidth;
        if (this.options.handles.style === SliderStyle.Button) {
            thumbWidth = this.options.track.height === SliderSize.Narrow ? 16 : 24;
        }
        else {
            thumbWidth = 2;
        }
        var tooltipWidth = tooltipElement.nativeElement.offsetWidth;
        // calculate the tooltips new position
        var tooltipPosition = Math.ceil((tooltipWidth - thumbWidth) / 2);
        // update tooltip position
        tooltip.position = -tooltipPosition;
    };
    SliderComponent.prototype.clamp = function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    };
    SliderComponent.prototype.updateThumbPosition = function (event, thumb) {
        // get event position - either mouse or touch
        var eventPosition = event instanceof MouseEvent ? event.clientX : event.touches && event.touches.length > 0 ? event.touches[0].clientX : null;
        // if event position is null do nothing
        if (eventPosition === null) {
            return;
        }
        // get mouse position
        var mouseX = window.pageXOffset + eventPosition;
        // get track size and position
        var trackBounds = this.track.nativeElement.getBoundingClientRect();
        // restrict the value within the range size
        var position = this.clamp(mouseX - trackBounds.left, 0, trackBounds.width);
        // get fraction representation of location within the track
        var fraction = (position / trackBounds.width);
        // convert to value within the range
        var value = ((this.options.track.max - this.options.track.min) * fraction) + this.options.track.min;
        // ensure value is valid
        value = this.validateValue(thumb, value);
        // snap to a tick if required
        value = this.snapToTick(value, thumb);
        // update the value accordingly
        this.setThumbValue(thumb, value);
        this.updateOrder(thumb);
        this.updateValues();
        // update tooltip text & position
        this.updateTooltipText(thumb);
        this.updateTooltipPosition(thumb);
    };
    SliderComponent.prototype.updateOrder = function (thumb) {
        var lower = thumb === SliderThumb.Lower ? 101 : 100;
        var upper = thumb === SliderThumb.Lower ? 100 : 101;
        // The most recently used thumb should be above
        this.thumbs.lower.order = lower;
        this.thumbs.upper.order = upper;
    };
    SliderComponent.prototype.snapToTick = function (value, thumb) {
        // get the snap target
        var snapTarget = this.options.track.ticks.snap;
        // if snap target is none then return original value
        if (snapTarget === SliderSnap.None) {
            return value;
        }
        // get filtered ticks
        var ticks;
        switch (snapTarget) {
            case SliderSnap.Minor:
                ticks = this.ticks.filter(function (tick) { return tick.type === SliderTickType.Minor; });
                break;
            case SliderSnap.Major:
                ticks = this.ticks.filter(function (tick) { return tick.type === SliderTickType.Major; });
                break;
            default:
                ticks = this.ticks.slice(0);
        }
        // get the track limit
        var lowerLimit = this.options.track.min;
        var upperLimit = this.options.track.max;
        if (this.options.type === SliderType.Range && thumb === SliderThumb.Lower) {
            upperLimit = this.thumbs.upper.value;
        }
        if (this.options.type === SliderType.Range && thumb === SliderThumb.Upper) {
            lowerLimit = this.thumbs.lower.value;
        }
        // Find the closest tick to the current position
        var closest = ticks.filter(function (tick) { return tick.value >= lowerLimit && tick.value <= upperLimit; })
            .reduceRight(function (previous, current) {
            var previousDistance = Math.max(previous.value, value) - Math.min(previous.value, value);
            var currentDistance = Math.max(current.value, value) - Math.min(current.value, value);
            return previousDistance < currentDistance ? previous : current;
        });
        return closest.value;
    };
    SliderComponent.prototype.validateValue = function (thumb, value) {
        // if slider is not a range value is always valid
        if (this.options.type === SliderType.Value) {
            return value;
        }
        // check if value is with chart ranges
        if (value > this.options.track.max) {
            return this.options.track.max;
        }
        if (value < this.options.track.min) {
            return this.options.track.min;
        }
        // otherwise we need to check to make sure lower thumb cannot go above higher and vice versa
        if (thumb === SliderThumb.Lower) {
            if (this.thumbs.upper.value === null) {
                return value;
            }
            return value <= this.thumbs.upper.value ? value : this.thumbs.upper.value;
        }
        if (thumb === SliderThumb.Upper) {
            if (this.thumbs.lower.value === null) {
                return value;
            }
            return value >= this.thumbs.lower.value ? value : this.thumbs.lower.value;
        }
    };
    SliderComponent.prototype.updateOptions = function () {
        // add in the default options that user hasn't specified
        this.options = this.deepMerge(this.options || {}, this.defaultOptions);
        this.updateTrackColors();
        this.updateTicks();
        this.updateValues();
    };
    SliderComponent.prototype.updateValues = function () {
        if (this.value === undefined || this.value === null) {
            this.value = 0;
        }
        var lowerValue = typeof this.value === 'number' ? this.value : this.value.low;
        var upperValue = typeof this.value === 'number' ? this.value : this.value.high;
        // validate values
        lowerValue = this.validateValue(SliderThumb.Lower, lowerValue);
        upperValue = this.validateValue(SliderThumb.Upper, upperValue);
        // calculate the positions as percentages
        var lowerPosition = (((lowerValue - this.options.track.min) / (this.options.track.max - this.options.track.min)) * 100);
        var upperPosition = (((upperValue - this.options.track.min) / (this.options.track.max - this.options.track.min)) * 100);
        // update thumb positions
        this.thumbs.lower.position = lowerPosition;
        this.thumbs.upper.position = upperPosition;
        // calculate the track sizes
        this.tracks.lower.size = lowerPosition;
        this.tracks.middle.size = upperPosition - lowerPosition;
        this.tracks.upper.size = this.options.type === SliderType.Value ? 100 - lowerPosition : 100 - upperPosition;
        // update the value input
        this.setValue(lowerValue, upperValue);
    };
    SliderComponent.prototype.setValue = function (low, high) {
        this.thumbs.lower.value = low;
        this.thumbs.upper.value = high;
        var previousValue = this.value;
        this.value = this.options.type === SliderType.Value ? low : { low: low, high: high };
        // call the event emitter if changes occured
        if (this.value !== previousValue) {
            this.valueChange.emit(this.value);
            this.updateTooltipText(SliderThumb.Lower);
            this.updateTooltipText(SliderThumb.Upper);
        }
    };
    SliderComponent.prototype.setThumbValue = function (thumb, value) {
        // update the thumb value
        this.getThumbState(thumb).value = value;
        // forward these changes to the value
        this.setValue(this.thumbs.lower.value, this.thumbs.upper.value);
    };
    SliderComponent.prototype.updateTicks = function () {
        // get tick options
        var majorOptions = this.options.track.ticks.major;
        var minorOptions = this.options.track.ticks.minor;
        // check if we should show ticks
        if (majorOptions.show === false && minorOptions.show === false) {
            this.ticks = [];
        }
        // create ticks for both major and minor
        var majorTicks = this.getTicks(majorOptions, SliderTickType.Major);
        var minorTicks = this.getTicks(minorOptions, SliderTickType.Minor);
        // remove any minor ticks that are on a major interval
        this.ticks = this.unionTicks(majorTicks, minorTicks);
    };
    SliderComponent.prototype.updateTrackColors = function () {
        // get colors for each part of the track
        var lower = this.options.track.colors.lower;
        var range = this.options.track.colors.range;
        var higher = this.options.track.colors.higher;
        // update the controller value
        this.tracks.lower.color = typeof lower === 'string' ? lower : "linear-gradient(to right, " + lower.join(', ') + ")";
        this.tracks.middle.color = typeof range === 'string' ? range : "linear-gradient(to right, " + range.join(', ') + ")";
        this.tracks.upper.color = typeof higher === 'string' ? higher : "linear-gradient(to right, " + higher.join(', ') + ")";
    };
    SliderComponent.prototype.getSteps = function (steps) {
        // if they are already an array just return it
        if (steps instanceof Array) {
            return steps;
        }
        var output = [];
        // otherwise calculate the steps
        for (var idx = this.options.track.min; idx <= this.options.track.max; idx += steps) {
            output.push(idx);
        }
        return output;
    };
    SliderComponent.prototype.getTicks = function (options, type) {
        // create an array to store the ticks and step points
        var steps = this.getSteps(options.steps);
        // get some chart options
        var min = this.options.track.min;
        var max = this.options.track.max;
        // convert each step to a slider tick and remove invalid ticks
        return steps.map(function (step) {
            return {
                showTicks: options.show,
                showLabels: options.labels,
                type: type,
                position: ((step - min) / (max - min)) * 100,
                value: step,
                label: options.formatter(step)
            };
        }).filter(function (tick) { return tick.position >= 0 && tick.position <= 100; });
    };
    SliderComponent.prototype.unionTicks = function (majorTicks, minorTicks) {
        // get all ticks combined removing any minor ticks with the same value as major ticks
        return majorTicks.concat(minorTicks)
            .filter(function (tick, index, array) { return tick.type === SliderTickType.Major || !array.find(function (tk) { return tk.type === SliderTickType.Major && tk.position === tick.position; }); })
            .sort(function (t1, t2) { return t1.value - t2.value; });
    };
    SliderComponent.prototype.deepMerge = function (destination, source) {
        // loop though all of the properties in the source object
        for (var prop in source) {
            // check if the destination object has the property
            if (!destination.hasOwnProperty(prop)) {
                // copy the property across
                destination[prop] = source[prop];
                continue;
            }
            // if the property exists and is not an object then skip
            if (typeof destination[prop] !== 'object') {
                continue;
            }
            // check if property is an array
            if (destination[prop] instanceof Array) {
                continue;
            }
            // if it is an object then perform a recursive check
            destination[prop] = this.deepMerge(destination[prop], source[prop]);
        }
        return destination;
    };
    SliderComponent.prototype.deepCompare = function (value1, value2) {
        if (typeof value1 === 'number' && typeof value2 === 'number') {
            return value1 === value2;
        }
        return JSON.stringify(value1) === JSON.stringify(value2);
    };
    SliderComponent.prototype.clone = function (value) {
        if (typeof value !== 'object') {
            return value;
        }
        return Object.assign({}, value);
    };
    return SliderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], SliderComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], SliderComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lowerThumb'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SliderComponent.prototype, "lowerThumb", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('lowerTooltip'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SliderComponent.prototype, "lowerTooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('upperThumb'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SliderComponent.prototype, "upperThumb", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('upperTooltip'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SliderComponent.prototype, "upperTooltip", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('track'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
], SliderComponent.prototype, "track", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('document:mouseup', []),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SliderComponent.prototype, "onDragEnd", null);
SliderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-slider',
        template: __webpack_require__(146)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_color_index__["b" /* ColorService */]])
], SliderComponent);

var SliderType;
(function (SliderType) {
    SliderType[SliderType["Value"] = 0] = "Value";
    SliderType[SliderType["Range"] = 1] = "Range";
})(SliderType || (SliderType = {}));
var SliderStyle;
(function (SliderStyle) {
    SliderStyle[SliderStyle["Button"] = 0] = "Button";
    SliderStyle[SliderStyle["Line"] = 1] = "Line";
})(SliderStyle || (SliderStyle = {}));
var SliderSize;
(function (SliderSize) {
    SliderSize[SliderSize["Narrow"] = 0] = "Narrow";
    SliderSize[SliderSize["Wide"] = 1] = "Wide";
})(SliderSize || (SliderSize = {}));
var SliderCalloutTrigger;
(function (SliderCalloutTrigger) {
    SliderCalloutTrigger[SliderCalloutTrigger["None"] = 0] = "None";
    SliderCalloutTrigger[SliderCalloutTrigger["Hover"] = 1] = "Hover";
    SliderCalloutTrigger[SliderCalloutTrigger["Drag"] = 2] = "Drag";
    SliderCalloutTrigger[SliderCalloutTrigger["Persistent"] = 3] = "Persistent";
})(SliderCalloutTrigger || (SliderCalloutTrigger = {}));
var SliderSnap;
(function (SliderSnap) {
    SliderSnap[SliderSnap["None"] = 0] = "None";
    SliderSnap[SliderSnap["Minor"] = 1] = "Minor";
    SliderSnap[SliderSnap["Major"] = 2] = "Major";
    SliderSnap[SliderSnap["All"] = 3] = "All";
})(SliderSnap || (SliderSnap = {}));
var SliderTickType;
(function (SliderTickType) {
    SliderTickType[SliderTickType["Minor"] = 0] = "Minor";
    SliderTickType[SliderTickType["Major"] = 1] = "Major";
})(SliderTickType || (SliderTickType = {}));
var SliderThumbEvent;
(function (SliderThumbEvent) {
    SliderThumbEvent[SliderThumbEvent["None"] = 0] = "None";
    SliderThumbEvent[SliderThumbEvent["MouseOver"] = 1] = "MouseOver";
    SliderThumbEvent[SliderThumbEvent["MouseLeave"] = 2] = "MouseLeave";
    SliderThumbEvent[SliderThumbEvent["DragStart"] = 3] = "DragStart";
    SliderThumbEvent[SliderThumbEvent["DragEnd"] = 4] = "DragEnd";
})(SliderThumbEvent || (SliderThumbEvent = {}));
var SliderThumb;
(function (SliderThumb) {
    SliderThumb[SliderThumb["Lower"] = 0] = "Lower";
    SliderThumb[SliderThumb["Upper"] = 1] = "Upper";
})(SliderThumb || (SliderThumb = {}));


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_color_index__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparkComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SparkComponent = (function () {
    function SparkComponent(colorService) {
        this.colorService = colorService;
        this.trackColor = this.colorService.getColor('primary').setAlpha(0.2).toRgba();
        this.barColor = this.colorService.getColor('primary').toHex();
        this.value = 0;
        this.barHeight = 10;
    }
    return SparkComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "trackColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "barColor", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SparkComponent.prototype, "value", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], SparkComponent.prototype, "barHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "inlineLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "topLeftLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "topRightLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "bottomLeftLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "bottomRightLabel", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], SparkComponent.prototype, "tooltip", void 0);
SparkComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-spark',
        template: __webpack_require__(147)
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_color_index__["b" /* ColorService */]])
], SparkComponent);



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputEvent; });
var TagInputEvent = (function () {
    function TagInputEvent(tag) {
        this.tag = tag;
        this._defaultPrevented = false;
    }
    TagInputEvent.prototype.preventDefault = function () {
        this._defaultPrevented = true;
    };
    TagInputEvent.prototype.defaultPrevented = function () {
        return this._defaultPrevented;
    };
    return TagInputEvent;
}());



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeahead_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_input_event__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var TAGINPUT_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var TAGINPUT_VALIDATOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["NG_VALIDATORS"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["forwardRef"])(function () { return TagInputComponent; }),
    multi: true
};
var TagInputComponent = (function () {
    function TagInputComponent(element, document) {
        this.element = element;
        this.document = document;
        this._tags = [];
        this.tagsChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this._input = '';
        this.inputChange = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.addOnPaste = true;
        this.disabled = false;
        this.displayProperty = null;
        this.enforceTagLimits = false;
        this.freeInput = true;
        this.maxTags = Number.MAX_VALUE;
        this.minTags = 0;
        this.placeholder = '';
        this.showTypeaheadOnClick = false;
        this.tagDelimiters = '';
        this.validationErrors = {};
        this.tagAdding = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.tagAdded = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.tagInvalidated = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.tagRemoving = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.tagRemoved = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.tagClick = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["EventEmitter"]();
        this.selectedIndex = -1;
        this.tagApi = {
            getTagDisplay: this.getTagDisplay.bind(this),
            removeTagAt: this.removeTagAt.bind(this),
            canRemoveTagAt: this.canRemoveTagAt.bind(this)
        };
        this.valid = true;
        this.inputValid = true;
        this.onChangeHandler = function () { };
        this.onTouchedHandler = function () { };
    }
    Object.defineProperty(TagInputComponent.prototype, "tags", {
        get: function () {
            return this._tags;
        },
        set: function (value) {
            this._tags = value;
            this.onChangeHandler(value);
            this.tagsChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TagInputComponent.prototype, "input", {
        get: function () {
            return this._input;
        },
        set: function (value) {
            this._input = value;
            this.inputChange.emit(value);
        },
        enumerable: true,
        configurable: true
    });
    TagInputComponent.prototype.ngOnInit = function () {
        if (!this.tagTemplate) {
            this.tagTemplate = this._defaultTagTemplate;
        }
    };
    TagInputComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        // Watch for optional child typeahead control
        this.typeaheadQuery.changes.subscribe(function (query) {
            _this.typeahead = query.first;
            if (_this.typeahead) {
                // Set up event handler for selected options
                _this.typeahead.optionSelected.subscribe(_this.typeaheadOptionSelectedHandler.bind(_this));
            }
        });
    };
    TagInputComponent.prototype.ngOnChanges = function (changes) {
        if (changes.disabled) {
            if (changes.disabled.currentValue) {
                // Clear selection and close dropdown
                this.selectedIndex = -1;
                if (this.typeahead) {
                    this.typeahead.open = false;
                }
            }
        }
        // Update validation status
        this.validate();
    };
    TagInputComponent.prototype.writeValue = function (value) {
        if (value) {
            this.tags = value;
        }
    };
    TagInputComponent.prototype.registerOnChange = function (fn) {
        this.onChangeHandler = fn;
    };
    TagInputComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedHandler = fn;
    };
    /**
     * Validate the value of the control (tags property).
     */
    TagInputComponent.prototype.validate = function () {
        this.valid = true;
        var tagRangeError = null;
        if (this.tags.length < this.minTags || this.tags.length > this.maxTags) {
            tagRangeError = {
                given: this.tags.length,
                min: this.minTags,
                max: this.maxTags
            };
            this.valid = false;
        }
        this.validationErrors['tagRangeError'] = tagRangeError;
    };
    TagInputComponent.prototype.keyHandler = function (event) {
        if (this.disabled) {
            return;
        }
        // Get the input field cursor location
        var inputCursorPos = this.tagInput.nativeElement.selectionStart;
        // Determine if the input field has any text selected
        var hasSelection = this.tagInput.nativeElement.selectionStart !== this.tagInput.nativeElement.selectionEnd;
        // Determine if a tag has focus
        var tagSelected = this.isValidTagIndex(this.selectedIndex);
        var inputLength = this.input ? this.input.length : 0;
        // Check whether the arrow keys can move the selection. Otherwise the input field takes the event.
        var canNavigateLeft = tagSelected || (inputCursorPos <= 0 && !hasSelection);
        var canNavigateRight = tagSelected || (inputCursorPos >= inputLength && !hasSelection);
        switch (event.key) {
            case 'Enter':
                // Check if a typeahead option is highlighted
                var typeaheadValue = this.typeahead ? this.typeahead.highlighted.getValue() : null;
                if (typeaheadValue) {
                    // Add the typeahead option as a tag, clear the input, and close the dropdown
                    this.commitTypeahead(typeaheadValue);
                    this.typeahead.open = false;
                }
                else {
                    // Validate and add the input text as a tag, if possible
                    this.commitInput();
                }
                event.preventDefault();
                break;
            case 'Backspace':
                if (canNavigateLeft) {
                    this.backspace();
                    event.stopPropagation();
                    event.preventDefault();
                }
                break;
            case 'Delete':
            case 'Del':
                if (tagSelected) {
                    this.removeTagAt(this.selectedIndex);
                }
                break;
            case 'ArrowLeft':
            case 'Left':
                if (canNavigateLeft) {
                    this.moveSelection(-1);
                    event.preventDefault();
                }
                break;
            case 'ArrowRight':
            case 'Right':
                if (canNavigateRight) {
                    this.moveSelection(1);
                    event.preventDefault();
                }
                break;
            case 'ArrowUp':
            case 'Up':
                if (this.typeahead) {
                    if (!this.typeahead.open) {
                        this.typeahead.open = true;
                    }
                    else {
                        this.typeahead.moveHighlight(-1);
                    }
                    event.preventDefault();
                }
                break;
            case 'ArrowDown':
            case 'Down':
                if (this.typeahead) {
                    if (!this.typeahead.open) {
                        this.typeahead.open = true;
                    }
                    else {
                        this.typeahead.moveHighlight(1);
                    }
                    event.preventDefault();
                }
                break;
            case 'Escape':
            case 'Esc':
                if (this.typeahead) {
                    this.typeahead.open = false;
                }
                break;
        }
        // Check for keys in the tagDelimiters
        if (this.tagDelimiters && this.tagDelimiters.indexOf(this.getKeyChar(event)) >= 0) {
            // Commit previous text
            this.commitInput();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    TagInputComponent.prototype.focusOutHandler = function (event) {
        var _this = this;
        // Close the dropdown on blur
        setTimeout(function () {
            if (!_this.element.nativeElement.contains(_this.document.activeElement)) {
                _this.selectedIndex = -1;
                if (_this.typeahead) {
                    _this.typeahead.open = false;
                }
            }
        }, 200);
    };
    TagInputComponent.prototype.tagClickHandler = function (event, tag, index) {
        if (this.disabled) {
            return;
        }
        // Send tagClick event
        var tagClickEvent = new __WEBPACK_IMPORTED_MODULE_1__tag_input_event__["a" /* TagInputEvent */](tag);
        this.tagClick.emit(tagClickEvent);
        // Prevent focus if preventDefault() was called
        if (tagClickEvent.defaultPrevented()) {
            event.preventDefault();
            return;
        }
        // Select the tag (for IE that doesn't propagate focus)
        this.selectTagAt(index);
    };
    TagInputComponent.prototype.inputClickHandler = function () {
        if (this.disabled) {
            return;
        }
        if (this.typeahead && this.showTypeaheadOnClick) {
            this.typeahead.open = true;
        }
    };
    TagInputComponent.prototype.inputFocusHandler = function () {
        if (this.disabled) {
            return;
        }
        this.selectInput();
    };
    TagInputComponent.prototype.inputPasteHandler = function (event) {
        if (this.disabled) {
            return;
        }
        if (this.addOnPaste) {
            // Get text from the clipboard
            var input = null;
            if (event.clipboardData) {
                input = event.clipboardData.getData('text/plain');
            }
            else if (window.clipboardData) {
                // Internet Explorer only
                input = window.clipboardData.getData('Text');
            }
            // Commit the clipboard text directly
            if (this.commit(input)) {
                this.selectInput();
                event.stopPropagation();
                event.preventDefault();
            }
        }
    };
    TagInputComponent.prototype.typeaheadOptionSelectedHandler = function (event) {
        if (this.disabled) {
            return;
        }
        // When the typeahead sends the optionSelected event, commit the object directly
        this.commitTypeahead(event.option);
    };
    /**
     * Commit the current input value and clear the input field if successful.
     */
    TagInputComponent.prototype.commitInput = function () {
        if (this.commit(this.input)) {
            this.selectInput();
            this.input = '';
        }
    };
    /**
     * Commit the given tag object and clear the input if successful.
     */
    TagInputComponent.prototype.commitTypeahead = function (tag) {
        if (this.addTag(tag)) {
            this.selectInput();
            this.input = '';
        }
    };
    /**
     * Commit the given string value as one or more tags, if validation passes. Returns true if the tag(s) were created.
     */
    TagInputComponent.prototype.commit = function (input) {
        if (input && this.freeInput) {
            // Split the tags by the tagDelimiters if configured
            var newTags = this.splitTagInput(input);
            // Check tag validation for all of the individual values
            var allValid = true;
            for (var _i = 0, newTags_1 = newTags; _i < newTags_1.length; _i++) {
                var newTag = newTags_1[_i];
                var valid = this.validateTag(newTag);
                if (!valid) {
                    allValid = false;
                }
            }
            // Add the tags if all are valid
            if (allValid) {
                for (var _a = 0, newTags_2 = newTags; _a < newTags_2.length; _a++) {
                    var newTag = newTags_2[_a];
                    this.addTag(this.createTag(newTag));
                }
                return true;
            }
        }
        return false;
    };
    /**
     * If no tag is selected, select the rightmost tag. If a tag is selected, remove it.
     */
    TagInputComponent.prototype.backspace = function () {
        if (this.disabled) {
            return;
        }
        if (!this.isValidTagIndex(this.selectedIndex)) {
            this.selectTagAt(this.tags.length - 1);
        }
        else {
            this.removeTagAt(this.selectedIndex);
        }
    };
    /**
     * Move the highlighted option forwards or backwards in the list. Wraps at the limits.
     * @param d Value to be added to the selected index, i.e. -1 to move backwards, +1 to move forwards.
     */
    TagInputComponent.prototype.moveSelection = function (d) {
        if (this.disabled) {
            return;
        }
        if (this.isValidSelectIndex(this.selectedIndex)) {
            this.selectedIndex += d;
            // Do wrapping of selection when out of bounds
            if (this.selectedIndex < 0) {
                this.selectedIndex = this.tags.length;
            }
            else if (this.selectedIndex > this.tags.length) {
                this.selectedIndex = 0;
            }
        }
    };
    /**
     * Returns a value to display for the given tag. Uses displayProperty if set, otherwise assumes that the tag is a simple string.
     */
    TagInputComponent.prototype.getTagDisplay = function (tag) {
        return this.displayProperty ? tag[this.displayProperty] : tag;
    };
    /**
     * Returns true if the given index is selected (tag index or input field).
     */
    TagInputComponent.prototype.isSelected = function (index) {
        return index === this.selectedIndex;
    };
    /**
     * Select the tag at the given index. Does nothing if disabled is true.
     */
    TagInputComponent.prototype.selectTagAt = function (tagIndex) {
        if (this.disabled) {
            return;
        }
        if (this.isValidTagIndex(tagIndex)) {
            this.selectedIndex = tagIndex;
        }
    };
    /**
     * Select the input field, giving it focus. Does nothing if disabled is true.
     */
    TagInputComponent.prototype.selectInput = function () {
        if (this.disabled) {
            return;
        }
        this.selectedIndex = this.tags.length;
    };
    /**
     * Remove the tag at the given index. Does nothing if disabled is true or the minTags property prevents removal.
     */
    TagInputComponent.prototype.removeTagAt = function (tagIndex) {
        if (this.disabled || !this.canRemoveTagAt(tagIndex)) {
            return;
        }
        // Check that the tagIndex is in range
        if (this.isValidTagIndex(tagIndex)) {
            var tag = this.tags[tagIndex];
            var tagRemovingEvent = new __WEBPACK_IMPORTED_MODULE_1__tag_input_event__["a" /* TagInputEvent */](tag);
            this.tagRemoving.emit(tagRemovingEvent);
            if (!tagRemovingEvent.defaultPrevented()) {
                // Select input first to avoid issues with dropping focus
                this.selectInput();
                // Remove the tag
                this.tags.splice(tagIndex, 1);
                // Set focus again since indices have changed
                this.selectInput();
                this.tagRemoved.emit(new __WEBPACK_IMPORTED_MODULE_1__tag_input_event__["a" /* TagInputEvent */](tag));
                this.validate();
            }
        }
    };
    /**
     * Returns true if the tag at the given index can be removed.
     */
    TagInputComponent.prototype.canRemoveTagAt = function (tagIndex) {
        return this.tags.length > this.minTags || !this.enforceTagLimits;
    };
    /**
     * Returns true if the input field should be available.
     */
    TagInputComponent.prototype.isInputVisible = function () {
        return this.tags.length < this.maxTags || !this.enforceTagLimits;
    };
    /**
     * Returns true if any part of the control has focus.
     */
    TagInputComponent.prototype.hasFocus = function () {
        return this.isValidSelectIndex(this.selectedIndex);
    };
    /**
     * Validate the given tagValue with the tagPattern, if set. Update validationErrors on validation failure.
     */
    TagInputComponent.prototype.validateTag = function (tagValue) {
        var inputPattern = null;
        this.inputValid = true;
        if (this.tagPattern && !this.tagPattern.test(tagValue)) {
            inputPattern = {
                given: tagValue,
                pattern: this.tagPattern
            };
            this.inputValid = false;
        }
        this.validationErrors['inputPattern'] = inputPattern;
        return this.inputValid;
    };
    /**
     * Create a tag object for the given tagValue. If createTagHandler is specified, use it; otherwise if displayProperty is specified, create an object with the tagValue as the single named property; otherwise return the tagValue itself.
     */
    TagInputComponent.prototype.createTag = function (tagValue) {
        var tag = null;
        if (this.createTagHandler && typeof this.createTagHandler === 'function') {
            tag = this.createTagHandler(tagValue);
        }
        else if (this.displayProperty) {
            tag = {};
            tag[this.displayProperty] = tagValue;
        }
        else {
            tag = tagValue;
        }
        return tag;
    };
    /**
     * Add a tag object, calling the tagAdding and tagAdded events. Returns true if the tag was added to the tags array.
     */
    TagInputComponent.prototype.addTag = function (tag) {
        if (tag) {
            // Verify that the new tag can be displayed
            var displayValue = this.getTagDisplay(tag);
            if (displayValue && typeof displayValue === 'string' && displayValue.length > 0) {
                var tagAddingEvent = new __WEBPACK_IMPORTED_MODULE_1__tag_input_event__["a" /* TagInputEvent */](tag);
                this.tagAdding.emit(tagAddingEvent);
                if (!tagAddingEvent.defaultPrevented()) {
                    this.tags.push(tag);
                    this.tagAdded.emit(new __WEBPACK_IMPORTED_MODULE_1__tag_input_event__["a" /* TagInputEvent */](tag));
                    this.validate();
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Returns true if the given tagIndex is a valid tag index.
     */
    TagInputComponent.prototype.isValidTagIndex = function (tagIndex) {
        return tagIndex >= 0 && tagIndex < this.tags.length;
    };
    /**
     * Returns true if the given index is a valid selection index (tags or input field).
     */
    TagInputComponent.prototype.isValidSelectIndex = function (index) {
        return index >= 0 && index <= this.tags.length;
    };
    /**
     * Returns the character corresponding to the given key event, mainly for IE compatibility.
     */
    TagInputComponent.prototype.getKeyChar = function (event) {
        switch (event.key) {
            case 'Spacebar':
                return ' ';
        }
        return event.key;
    };
    /**
     * Returns an array of strings corresponding to the input string split by the tagDelimiters characters.
     */
    TagInputComponent.prototype.splitTagInput = function (input) {
        var tagValues = [input];
        if (this.tagDelimiters && typeof this.tagDelimiters === 'string') {
            var escapedDelimiters = this.tagDelimiters.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
            var delimiterRegex = new RegExp("[" + escapedDelimiters + "]", 'g');
            tagValues = input.split(delimiterRegex).filter(function (s) { return s.length > 0; });
        }
        return tagValues;
    };
    return TagInputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('tags'),
    __metadata("design:type", Array)
], TagInputComponent.prototype, "_tags", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagsChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('input'),
    __metadata("design:type", String)
], TagInputComponent.prototype, "_input", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "inputChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "addOnPaste", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "displayProperty", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "enforceTagLimits", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "freeInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "maxTags", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TagInputComponent.prototype, "minTags", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "placeholder", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TagInputComponent.prototype, "showTypeaheadOnClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", String)
], TagInputComponent.prototype, "tagDelimiters", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", RegExp)
], TagInputComponent.prototype, "tagPattern", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["TemplateRef"])
], TagInputComponent.prototype, "tagTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "validationErrors", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Input"])('createTag'),
    __metadata("design:type", Function)
], TagInputComponent.prototype, "createTagHandler", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagAdding", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagAdded", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagInvalidated", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagRemoving", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagRemoved", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TagInputComponent.prototype, "tagClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_0__typeahead_index__["a" /* TypeaheadComponent */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["QueryList"])
], TagInputComponent.prototype, "typeaheadQuery", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('tagInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"])
], TagInputComponent.prototype, "tagInput", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ViewChild"])('defaultTagTemplate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["TemplateRef"])
], TagInputComponent.prototype, "_defaultTagTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], TagInputComponent.prototype, "keyHandler", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["HostListener"])('focusout', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [FocusEvent]),
    __metadata("design:returntype", void 0)
], TagInputComponent.prototype, "focusOutHandler", null);
TagInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Component"])({
        selector: 'ux-tag-input',
        template: __webpack_require__(148),
        providers: [TAGINPUT_VALUE_ACCESSOR, TAGINPUT_VALIDATOR],
        host: {
            '[class.disabled]': 'disabled',
            '[class.focus]': 'hasFocus()',
            '[class.invalid]': '!valid || !inputValid'
        }
    }),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["ElementRef"], Document])
], TagInputComponent);



/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSwitchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TOGGLESWITCH_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALUE_ACCESSOR"],
    useExisting: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return ToggleSwitchComponent; }),
    multi: true
};
var ToggleSwitchComponent = (function () {
    function ToggleSwitchComponent() {
        this.name = '';
        this.disabled = false;
        this.clickable = true;
        this.valueChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._value = false;
        this.onTouchedCallback = function () { };
        this.onChangeCallback = function () { };
    }
    Object.defineProperty(ToggleSwitchComponent.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (value) {
            this._value = value;
            // Update value output
            this.valueChange.emit(value);
            // Notify ngModel
            this.onChangeCallback(value);
        },
        enumerable: true,
        configurable: true
    });
    ToggleSwitchComponent.prototype.toggleChecked = function () {
        if (!this.disabled && this.clickable) {
            this.value = !this.value;
        }
    };
    ToggleSwitchComponent.prototype.keydown = function (event) {
        // if spacebar is pressed toggle state
        if (event.keyCode === 32) {
            this.toggleChecked();
            event.stopPropagation();
            event.preventDefault();
        }
    };
    ToggleSwitchComponent.prototype.writeValue = function (value) {
        this.value = !!value;
    };
    ToggleSwitchComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    ToggleSwitchComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    return ToggleSwitchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ToggleSwitchComponent.prototype, "name", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ToggleSwitchComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], ToggleSwitchComponent.prototype, "clickable", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ToggleSwitchComponent.prototype, "valueChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], ToggleSwitchComponent.prototype, "value", null);
ToggleSwitchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-toggleswitch',
        template: __webpack_require__(149),
        providers: [TOGGLESWITCH_VALUE_ACCESSOR],
        host: {
            '(click)': 'toggleChecked()'
        }
    })
], ToggleSwitchComponent);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__typeahead_event__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TypeaheadComponent = (function () {
    function TypeaheadComponent(typeaheadElement) {
        this.typeaheadElement = typeaheadElement;
        this._open = false;
        this.openChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.dropDirection = 'down';
        this.maxHeight = '250px';
        this.pageSize = 20;
        this.selectFirst = true;
        this.optionSelected = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["EventEmitter"]();
        this.highlighted = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.visibleOptions = [];
        this.optionApi = {
            getKey: this.getKey.bind(this),
            getDisplay: this.getDisplay.bind(this),
            getDisplayHtml: this.getDisplayHtml.bind(this)
        };
    }
    Object.defineProperty(TypeaheadComponent.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            var originalValue = this._open;
            this._open = value;
            if (value !== originalValue) {
                this.openChange.emit(value);
                if (value) {
                    this.initOptions();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TypeaheadComponent.prototype, "highlightedOption", {
        get: function () {
            return this._highlightedOption;
        },
        set: function (value) {
            this._highlightedOption = value;
            this.highlighted.next(value);
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadComponent.prototype.ngOnInit = function () {
        // Attach default option template
        if (!this.optionTemplate) {
            this.optionTemplate = this._defaultOptionTemplate;
        }
        // Attach default "no results" template
        if (!this.noOptionsTemplate) {
            this.noOptionsTemplate = this._defaultNoOptionsTemplate;
        }
    };
    TypeaheadComponent.prototype.ngOnChanges = function (changes) {
        // Open the dropdown if the filter value updates
        if (changes.filter) {
            if (changes.filter.currentValue && changes.filter.currentValue.length > 0) {
                this.open = true;
            }
        }
        // Re-filter visibleOptions
        this.updateOptions();
    };
    TypeaheadComponent.prototype.optionMousedownHandler = function (event) {
        // Workaround to prevent focus changing when an option is clicked
        event.preventDefault();
    };
    TypeaheadComponent.prototype.optionClickHandler = function (event, option) {
        this.select(option);
    };
    /**
     * Returns the unique key value of the given option.
     */
    TypeaheadComponent.prototype.getKey = function (option) {
        if (typeof this.key === 'function') {
            return this.key(option);
        }
        if (typeof this.key === 'string') {
            return option[this.key];
        }
        return this.getDisplay(option);
    };
    /**
     * Returns the display value of the given option.
     */
    TypeaheadComponent.prototype.getDisplay = function (option) {
        if (typeof this.display === 'function') {
            return this.display(option);
        }
        if (typeof this.display === 'string') {
            return option[this.display];
        }
        return option;
    };
    /**
     * Returns the display value of the given option with HTML markup added to highlight the part which matches the current filter value.
     * @param option
     */
    TypeaheadComponent.prototype.getDisplayHtml = function (option) {
        var displayText = this.getDisplay(option).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        var displayHtml = displayText;
        if (this.filter) {
            var length_1 = this.filter.length;
            var matchIndex = displayText.toLowerCase().indexOf(this.filter.toLowerCase());
            if (matchIndex >= 0) {
                var highlight = "<span class=\"ux-filter-match\">" + displayText.substr(matchIndex, length_1) + "</span>";
                displayHtml = displayText.substr(0, matchIndex) + highlight + displayText.substr(matchIndex + length_1);
            }
        }
        return displayHtml;
    };
    /**
     * Selects the given option, emitting the optionSelected event and closing the dropdown.
     */
    TypeaheadComponent.prototype.select = function (option) {
        if (!this.isDisabled(option)) {
            this.optionSelected.emit(new __WEBPACK_IMPORTED_MODULE_0__typeahead_event__["a" /* TypeaheadOptionEvent */](option));
            this.highlightedOption = null;
            this.open = false;
        }
    };
    /**
     * Returns true if the given option is part of the disabledOptions array.
     */
    TypeaheadComponent.prototype.isDisabled = function (option) {
        var _this = this;
        var optionKey = this.getKey(option);
        var result = this.disabledOptions.find(function (selectedOption) {
            return _this.getKey(selectedOption) === optionKey;
        });
        return result !== undefined;
    };
    /**
     * Set the given option as the current highlighted option, available in the highlightedOption parameter.
     */
    TypeaheadComponent.prototype.highlight = function (option) {
        if (!this.isDisabled(option)) {
            this.highlightedOption = option;
        }
    };
    /**
     * Increment or decrement the highlighted option in the list. Disabled options are skipped.
     * @param d Value to be added to the index of the highlighted option, i.e. -1 to move backwards, +1 to move forwards.
     */
    TypeaheadComponent.prototype.moveHighlight = function (d) {
        var highlightIndex = this.indexOfVisibleOption(this.highlightedOption);
        var newIndex = highlightIndex;
        var disabled = true;
        do {
            newIndex = newIndex + d;
            disabled = this.isDisabled(this.visibleOptions[newIndex]);
        } while (disabled && newIndex >= 0 && newIndex < this.visibleOptions.length);
        if (!disabled && newIndex >= 0 && newIndex < this.visibleOptions.length) {
            this.highlightedOption = this.visibleOptions[newIndex];
        }
        return this.highlightedOption;
    };
    /**
     * Returns true if the given option is the highlighted option.
     */
    TypeaheadComponent.prototype.isHighlighted = function (option) {
        return this.getKey(option) === this.getKey(this.highlightedOption);
    };
    /**
     * Set up the options before the dropdown is displayed.
     */
    TypeaheadComponent.prototype.initOptions = function () {
        // Clear previous highlight
        this.highlightedOption = null;
        if (this.selectFirst) {
            // This will highlight the first non-disabled option.
            this.moveHighlight(1);
        }
    };
    /**
     * Update the visibleOptions array with the current filter.
     */
    TypeaheadComponent.prototype.updateOptions = function () {
        var _this = this;
        if (typeof this.options === 'object') {
            var normalisedInput_1 = (this.filter || '').toLowerCase();
            this.visibleOptions = this.options.filter(function (option) {
                return _this.getDisplay(option).toLowerCase().indexOf(normalisedInput_1) >= 0;
            });
        }
        else if (typeof this.options === 'function') {
            // TODO: paging
            throw 'Not yet implemented';
        }
        this.initOptions();
    };
    /**
     * Return the index of the given option in the visibleOptions array. Returns -1 if the option is not currently visible.
     */
    TypeaheadComponent.prototype.indexOfVisibleOption = function (option) {
        var _this = this;
        if (option) {
            var optionKey_1 = this.getKey(option);
            return this.visibleOptions.findIndex(function (el) {
                return _this.getKey(el) === optionKey_1;
            });
        }
        return -1;
    };
    return TypeaheadComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TypeaheadComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], TypeaheadComponent.prototype, "filter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('open'),
    __metadata("design:type", Boolean)
], TypeaheadComponent.prototype, "_open", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "openChange", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Function)
], TypeaheadComponent.prototype, "display", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Function)
], TypeaheadComponent.prototype, "key", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Array)
], TypeaheadComponent.prototype, "disabledOptions", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], TypeaheadComponent.prototype, "dropDirection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", String)
], TypeaheadComponent.prototype, "maxHeight", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"])
], TypeaheadComponent.prototype, "optionTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"])
], TypeaheadComponent.prototype, "noOptionsTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Number)
], TypeaheadComponent.prototype, "pageSize", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], TypeaheadComponent.prototype, "selectFirst", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "optionSelected", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Output"])(),
    __metadata("design:type", Object)
], TypeaheadComponent.prototype, "highlighted", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('defaultOptionTemplate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"])
], TypeaheadComponent.prototype, "_defaultOptionTemplate", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('defaultNoOptionsTemplate'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["TemplateRef"])
], TypeaheadComponent.prototype, "_defaultNoOptionsTemplate", void 0);
TypeaheadComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'ux-typeahead',
        template: __webpack_require__(150),
        host: {
            '[class.open]': 'open',
            '[class.drop-up]': 'dropDirection === "up"',
            '[style.maxHeight]': 'maxHeight'
        }
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"]])
], TypeaheadComponent);



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusIfDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FocusIfDirective = (function () {
    function FocusIfDirective(elementRef) {
        this.elementRef = elementRef;
        this.focusIf = false;
    }
    FocusIfDirective.prototype.ngOnChanges = function (changes) {
        if (changes.focusIf && changes.focusIf.previousValue === false && changes.focusIf.currentValue === true) {
            this.elementRef.nativeElement.focus();
        }
    };
    return FocusIfDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Boolean)
], FocusIfDirective.prototype, "focusIf", void 0);
FocusIfDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({ selector: '[focusIf]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
], FocusIfDirective);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ResizeDirective = (function () {
    function ResizeDirective(elementRef, resizeService, renderer) {
        this.elementRef = elementRef;
        this.resizeService = resizeService;
        this.renderer = renderer;
        this.throttle = 0;
        this.resize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ResizeDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.resizeService.addResizeListener(this.elementRef.nativeElement, this.renderer).debounceTime(this.throttle).subscribe(function (event) {
            _this.resize.emit(event);
        });
    };
    return ResizeDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], ResizeDirective.prototype, "throttle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])('uxResize'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
], ResizeDirective.prototype, "resize", void 0);
ResizeDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[uxResize]'
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_1__resize_service__["a" /* ResizeService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"]])
], ResizeDirective);



/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__scroll_into_view_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollIntoViewIfDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ScrollIntoViewIfDirective = (function () {
    function ScrollIntoViewIfDirective(element, scrollIntoViewService) {
        this.element = element;
        this.scrollIntoViewService = scrollIntoViewService;
        this.condition = false;
    }
    ScrollIntoViewIfDirective.prototype.ngOnChanges = function (changes) {
        if (this.condition) {
            this.scrollIntoViewService.scrollIntoView(this.element.nativeElement, this.scrollParent.nativeElement);
        }
    };
    return ScrollIntoViewIfDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])('uxScrollIntoViewIf'),
    __metadata("design:type", Object)
], ScrollIntoViewIfDirective.prototype, "condition", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
], ScrollIntoViewIfDirective.prototype, "scrollParent", void 0);
ScrollIntoViewIfDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({ selector: '[uxScrollIntoViewIf]' }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"], __WEBPACK_IMPORTED_MODULE_0__scroll_into_view_service__["a" /* ScrollIntoViewService */]])
], ScrollIntoViewIfDirective);



/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringFilterPipe = (function () {
    function StringFilterPipe() {
    }
    StringFilterPipe.prototype.transform = function (items, value) {
        if (!items) {
            return [];
        }
        return items.filter(function (it) { return it.toLowerCase().indexOf(value.toLowerCase()) >= 0; });
    };
    return StringFilterPipe;
}());
StringFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
        name: 'stringFilter'
    }),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], StringFilterPipe);



/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ThemeColor; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var ColorService = (function () {
    function ColorService(document) {
        this.html = '<div class="primary-color"></div>' +
            '<div class="accent-color"></div>' +
            '<div class="secondary-color"></div>' +
            '<div class="alternate1-color"></div>' +
            '<div class="alternate2-color"></div>' +
            '<div class="alternate3-color"></div>' +
            '<div class="vibrant1-color"></div>' +
            '<div class="vibrant2-color"></div>' +
            '<div class="grey1-color"></div>' +
            '<div class="grey2-color"></div>' +
            '<div class="grey3-color"></div>' +
            '<div class="grey4-color"></div>' +
            '<div class="grey5-color"></div>' +
            '<div class="grey6-color"></div>' +
            '<div class="grey7-color"></div>' +
            '<div class="grey8-color"></div>' +
            '<div class="chart1-color"></div>' +
            '<div class="chart2-color"></div>' +
            '<div class="chart3-color"></div>' +
            '<div class="chart4-color"></div>' +
            '<div class="chart5-color"></div>' +
            '<div class="chart6-color"></div>' +
            '<div class="ok-color"></div>' +
            '<div class="warning-color"></div>' +
            '<div class="critical-color"></div>';
        this.element = document.createElement('div');
        this.element.className = 'color-chart';
        this.element.innerHTML = this.html;
        document.body.appendChild(this.element);
        this.colors = {
            primary: this.getColorValue('primary'),
            accent: this.getColorValue('accent'),
            secondary: this.getColorValue('secondary'),
            alternate1: this.getColorValue('alternate1'),
            alternate2: this.getColorValue('alternate2'),
            alternate3: this.getColorValue('alternate3'),
            vibrant1: this.getColorValue('vibrant1'),
            vibrant2: this.getColorValue('vibrant2'),
            grey1: this.getColorValue('grey1'),
            grey2: this.getColorValue('grey2'),
            grey3: this.getColorValue('grey3'),
            grey4: this.getColorValue('grey4'),
            grey5: this.getColorValue('grey5'),
            grey6: this.getColorValue('grey6'),
            grey7: this.getColorValue('grey7'),
            grey8: this.getColorValue('grey8'),
            chart1: this.getColorValue('chart1'),
            chart2: this.getColorValue('chart2'),
            chart3: this.getColorValue('chart3'),
            chart4: this.getColorValue('chart4'),
            chart5: this.getColorValue('chart5'),
            chart6: this.getColorValue('chart6'),
            ok: this.getColorValue('ok'),
            warning: this.getColorValue('warning'),
            critical: this.getColorValue('critical')
        };
        this.element.parentNode.removeChild(this.element);
    }
    ColorService.prototype.getColorValue = function (color) {
        var target = this.element.querySelector('.' + color + '-color');
        if (!target) {
            throw new Error('Invalid color');
        }
        var colorValue = window.getComputedStyle(target).backgroundColor;
        var rgba = colorValue.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
        return new ThemeColor(rgba[1], rgba[2], rgba[3], rgba[4]);
    };
    ColorService.prototype.getColor = function (color) {
        return this.colors[color];
    };
    return ColorService;
}());
ColorService = __decorate([
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["DOCUMENT"])),
    __metadata("design:paramtypes", [Object])
], ColorService);

var ThemeColor = (function () {
    function ThemeColor(r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a === undefined ? '1' : a;
    }
    ThemeColor.prototype.toHex = function () {
        var red = parseInt(this.r).toString(16);
        var green = parseInt(this.g).toString(16);
        var blue = parseInt(this.b).toString(16);
        if (red.length < 2) {
            red = '0' + red;
        }
        if (green.length < 2) {
            green = '0' + green;
        }
        if (blue.length < 2) {
            blue = '0' + blue;
        }
        return '#' + red + green + blue;
    };
    ThemeColor.prototype.toRgb = function () {
        return 'rgb(' + this.r + ', ' + this.g + ', ' + this.b + ')';
    };
    ThemeColor.prototype.toRgba = function () {
        return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.a + ')';
    };
    ThemeColor.prototype.setRed = function (red) {
        this.r = red;
        return this;
    };
    ThemeColor.prototype.setGreen = function (green) {
        this.g = green;
        return this;
    };
    ThemeColor.prototype.setBlue = function (blue) {
        this.b = blue;
        return this;
    };
    ThemeColor.prototype.setAlpha = function (alpha) {
        this.a = alpha.toString();
        return this;
    };
    return ThemeColor;
}());



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__content_ref_class__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_triggers__ = __webpack_require__(126);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoader; });



var ComponentLoader = (function () {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * @internal
     * @param _viewContainerRef
     * @param _elementRef
     * @param _injector
     * @param _renderer
     * @param _componentFactoryResolver
     * @param _ngZone
     * @param _posService
     */
    // tslint:disable-next-line
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _posService) {
        this.onBeforeShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onShown = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onBeforeHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onHidden = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._providers = [];
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._posService = _posService;
        this._viewContainerRef = _viewContainerRef;
        this._componentFactoryResolver = _componentFactoryResolver;
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    ;
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    // todo: add behaviour: to target element, `body`, custom element
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = opts.target || this._elementRef;
        return this;
    };
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var injector = __WEBPACK_IMPORTED_MODULE_0__angular_core__["ReflectiveInjector"].resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._viewContainerRef
                .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container === 'body' && typeof document !== 'undefined') {
                document.querySelector(this.container)
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            this._componentRef.changeDetectorRef.markForCheck();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    };
    ComponentLoader.prototype.hide = function () {
        if (this._componentRef) {
            this.onBeforeHide.emit(this._componentRef.instance);
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
            this._componentRef = null;
            if (this._contentRef.viewRef) {
                this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
                this._contentRef = null;
            }
            this._componentRef = null;
            this.onHidden.emit();
        }
        return this;
    };
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_triggers__["a" /* listenToTriggers */])(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([]);
        }
        if (content instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"]) {
            var viewRef = this._viewContainerRef
                .createEmbeddedView(content);
            return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([viewRef.rootNodes], viewRef);
        }
        return new __WEBPACK_IMPORTED_MODULE_1__content_ref_class__["a" /* ContentRef */]([[this._renderer.createText(null, "" + content)]]);
    };
    return ComponentLoader;
}());
//# sourceMappingURL=component-loader.class.js.map

/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentRef; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = (function () {
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
//# sourceMappingURL=content-ref.class.js.map

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownMenuDirective; });


var BsDropdownMenuDirective = (function () {
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    BsDropdownMenuDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownMenu],[dropdownMenu]',
                    exportAs: 'bs-dropdown-menu'
                },] },
    ];
    /** @nocollapse */
    BsDropdownMenuDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["TemplateRef"], },
    ]; };
    return BsDropdownMenuDirective;
}());
//# sourceMappingURL=bs-dropdown-menu.directive.js.map

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownToggleDirective; });


var BsDropdownToggleDirective = (function () {
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this.isDisabled = null;
        this._subscriptions = [];
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    BsDropdownToggleDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdownToggle],[dropdownToggle]',
                    exportAs: 'bs-dropdown-toggle',
                    host: {
                        '[attr.aria-haspopup]': 'true'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownToggleDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_state__["a" /* BsDropdownState */], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
    ]; };
    BsDropdownToggleDirective.propDecorators = {
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.disabled',] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"], args: ['attr.aria-expanded',] },],
        'onClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['click',] },],
        'onDocumentClick': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['document:click', ['$event'],] },],
        'onEsc': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup.esc',] },],
    };
    return BsDropdownToggleDirective;
}());
//# sourceMappingURL=bs-dropdown-toggle.directive.js.map

/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__component_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__ = __webpack_require__(28);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownDirective; });







var BsDropdownDirective = (function () {
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        get: function () {
            return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_ng2_bootstrap_config__["a" /* isBs3 */])();
        },
        enumerable: true,
        configurable: true
    });
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .filter(function (value) { return value === true; })
            .subscribe(function (value) { return _this.hide(); }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(__WEBPACK_IMPORTED_MODULE_4__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */])
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.hide = function () {
        if (!this.isOpen) {
            return;
        }
        if (this._showInline) {
            this._isInlineOpen = false;
            this.onHidden.emit(true);
        }
        else {
            this._dropdown.hide();
        }
        this._state.isOpenChange.emit(false);
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    BsDropdownDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[bsDropdown],[dropdown]',
                    exportAs: 'bs-dropdown',
                    providers: [__WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */]],
                    host: {
                        '[class.dropup]': 'dropup',
                        '[class.open]': 'isOpen',
                        '[class.show]': 'isOpen && isBs4'
                    }
                },] },
    ];
    /** @nocollapse */
    BsDropdownDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__component_loader__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_config__["a" /* BsDropdownConfig */], },
        { type: __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_state__["a" /* BsDropdownState */], },
    ]; };
    BsDropdownDirective.propDecorators = {
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'dropup': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'autoClose': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpenChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    return BsDropdownDirective;
}());
//# sourceMappingURL=bs-dropdown.directive.js.map

/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__ = __webpack_require__(66);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bs_dropdown_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bs_dropdown_menu_directive__ = __webpack_require__(64);
/* unused harmony reexport BsDropdownMenuDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bs_dropdown_toggle_directive__ = __webpack_require__(65);
/* unused harmony reexport BsDropdownToggleDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__(23);
/* unused harmony reexport BsDropdownContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_state__ = __webpack_require__(5);
/* unused harmony reexport BsDropdownState */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_config__ = __webpack_require__(24);
/* unused harmony reexport BsDropdownConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__ = __webpack_require__(117);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Positioning */
/* harmony export (immutable) */ __webpack_exports__["a"] = positionElements;
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
// tslint:disable
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split(' ')[0] || 'top';
        var placementSecondary = placement.split(' ')[1] || 'center';
        var targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    Positioning.prototype.getStyle = function (element, prop) { return window.getComputedStyle(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=ng-positioning.js.map

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tooltip_container_component__ = __webpack_require__(25);
/* unused harmony reexport TooltipContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_directive__ = __webpack_require__(70);
/* unused harmony reexport TooltipDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_module__ = __webpack_require__(119);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_2__tooltip_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_config__ = __webpack_require__(12);
/* unused harmony reexport TooltipConfig */




//# sourceMappingURL=index.js.map

/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_decorators__ = __webpack_require__(123);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TooltipDirective = (function () {
    // tslint:disable-next-line
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /** Fired when tooltip content changes */
        this.tooltipChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** @deprecated - removed, will be added to configuration */
        this._animation = true;
        /** @deprecated */
        this._delay = 0;
        /** @deprecated */
        this._fadeDuration = 150;
        /** @deprecated */
        this.tooltipStateChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         */
        get: function () { return this._tooltip.isShown; },
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "htmlContent", {
        /* tslint:disable */
        /** @deprecated - please use `tooltip` instead */
        set: function (value) {
            console.warn('tooltipHtml was deprecated, please use `tooltip` instead');
            this.tooltip = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_placement", {
        /** @deprecated - please use `placement` instead */
        set: function (value) {
            console.warn('tooltipPlacement was deprecated, please use `placement` instead');
            this.placement = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_isOpen", {
        get: function () {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            return this.isOpen;
        },
        /** @deprecated - please use `isOpen` instead*/
        set: function (value) {
            console.warn('tooltipIsOpen was deprecated, please use `isOpen` instead');
            this.isOpen = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_enable", {
        get: function () {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            return this.isDisabled === true;
        },
        /** @deprecated - please use `isDisabled` instead */
        set: function (value) {
            console.warn('tooltipEnable was deprecated, please use `isDisabled` instead');
            this.isDisabled = value === true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_appendToBody", {
        get: function () {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            return this.container === 'body';
        },
        /** @deprecated - please use `container="body"` instead */
        set: function (value) {
            console.warn('tooltipAppendToBody was deprecated, please use `container="body"` instead');
            this.container = value ? 'body' : this.container;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_popupClass", {
        /** @deprecated - will replaced with customClass */
        set: function (value) {
            console.warn('tooltipClass deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipContext", {
        /** @deprecated - removed */
        set: function (value) {
            console.warn('tooltipContext deprecated');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TooltipDirective.prototype, "_tooltipTrigger", {
        /** @deprecated -  please use `triggers` instead */
        get: function () {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            return this.triggers;
        },
        set: function (value) {
            console.warn('tooltipTrigger was deprecated, please use `triggers` instead');
            this.triggers = (value || '').toString();
        },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.tooltip) {
            return;
        }
        var showTooltip = function () { return _this._tooltip
            .attach(__WEBPACK_IMPORTED_MODULE_1__tooltip_container_component__["a" /* TooltipContainerComponent */])
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.tooltip,
            placement: _this.placement
        }); };
        if (this._delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this._delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this._fadeDuration);
    };
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    TooltipDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{
                    selector: '[tooltip], [tooltipHtml]',
                    exportAs: 'bs-tooltip'
                },] },
    ];
    /** @nocollapse */
    TooltipDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_3__component_loader__["a" /* ComponentLoaderFactory */], },
        { type: __WEBPACK_IMPORTED_MODULE_2__tooltip_config__["a" /* TooltipConfig */], },
    ]; };
    TooltipDirective.propDecorators = {
        'tooltip': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'tooltipChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'triggers': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'isDisabled': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onShown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'onHidden': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'htmlContent': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipHtml',] },],
        '_placement': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPlacement',] },],
        '_isOpen': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipIsOpen',] },],
        '_enable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipEnable',] },],
        '_appendToBody': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAppendToBody',] },],
        '_animation': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipAnimation',] },],
        '_popupClass': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipClass',] },],
        '_tooltipContext': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipContext',] },],
        '_delay': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipPopupDelay',] },],
        '_fadeDuration': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipFadeDuration',] },],
        '_tooltipTrigger': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"], args: ['tooltipTrigger',] },],
        'tooltipStateChanged': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_decorators__["a" /* OnChange */])(), 
        __metadata('design:type', Object)
    ], TooltipDirective.prototype, "tooltip", void 0);
    return TooltipDirective;
}());
//# sourceMappingURL=tooltip.directive.js.map

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return latinMap; });
/* tslint:disable:max-file-line-count */
var latinMap = {
    'Á': 'A',
    'Ă': 'A',
    'Ắ': 'A',
    'Ặ': 'A',
    'Ằ': 'A',
    'Ẳ': 'A',
    'Ẵ': 'A',
    'Ǎ': 'A',
    'Â': 'A',
    'Ấ': 'A',
    'Ậ': 'A',
    'Ầ': 'A',
    'Ẩ': 'A',
    'Ẫ': 'A',
    'Ä': 'A',
    'Ǟ': 'A',
    'Ȧ': 'A',
    'Ǡ': 'A',
    'Ạ': 'A',
    'Ȁ': 'A',
    'À': 'A',
    'Ả': 'A',
    'Ȃ': 'A',
    'Ā': 'A',
    'Ą': 'A',
    'Å': 'A',
    'Ǻ': 'A',
    'Ḁ': 'A',
    'Ⱥ': 'A',
    'Ã': 'A',
    'Ꜳ': 'AA',
    'Æ': 'AE',
    'Ǽ': 'AE',
    'Ǣ': 'AE',
    'Ꜵ': 'AO',
    'Ꜷ': 'AU',
    'Ꜹ': 'AV',
    'Ꜻ': 'AV',
    'Ꜽ': 'AY',
    'Ḃ': 'B',
    'Ḅ': 'B',
    'Ɓ': 'B',
    'Ḇ': 'B',
    'Ƀ': 'B',
    'Ƃ': 'B',
    'Ć': 'C',
    'Č': 'C',
    'Ç': 'C',
    'Ḉ': 'C',
    'Ĉ': 'C',
    'Ċ': 'C',
    'Ƈ': 'C',
    'Ȼ': 'C',
    'Ď': 'D',
    'Ḑ': 'D',
    'Ḓ': 'D',
    'Ḋ': 'D',
    'Ḍ': 'D',
    'Ɗ': 'D',
    'Ḏ': 'D',
    'ǲ': 'D',
    'ǅ': 'D',
    'Đ': 'D',
    'Ƌ': 'D',
    'Ǳ': 'DZ',
    'Ǆ': 'DZ',
    'É': 'E',
    'Ĕ': 'E',
    'Ě': 'E',
    'Ȩ': 'E',
    'Ḝ': 'E',
    'Ê': 'E',
    'Ế': 'E',
    'Ệ': 'E',
    'Ề': 'E',
    'Ể': 'E',
    'Ễ': 'E',
    'Ḙ': 'E',
    'Ë': 'E',
    'Ė': 'E',
    'Ẹ': 'E',
    'Ȅ': 'E',
    'È': 'E',
    'Ẻ': 'E',
    'Ȇ': 'E',
    'Ē': 'E',
    'Ḗ': 'E',
    'Ḕ': 'E',
    'Ę': 'E',
    'Ɇ': 'E',
    'Ẽ': 'E',
    'Ḛ': 'E',
    'Ꝫ': 'ET',
    'Ḟ': 'F',
    'Ƒ': 'F',
    'Ǵ': 'G',
    'Ğ': 'G',
    'Ǧ': 'G',
    'Ģ': 'G',
    'Ĝ': 'G',
    'Ġ': 'G',
    'Ɠ': 'G',
    'Ḡ': 'G',
    'Ǥ': 'G',
    'Ḫ': 'H',
    'Ȟ': 'H',
    'Ḩ': 'H',
    'Ĥ': 'H',
    'Ⱨ': 'H',
    'Ḧ': 'H',
    'Ḣ': 'H',
    'Ḥ': 'H',
    'Ħ': 'H',
    'Í': 'I',
    'Ĭ': 'I',
    'Ǐ': 'I',
    'Î': 'I',
    'Ï': 'I',
    'Ḯ': 'I',
    'İ': 'I',
    'Ị': 'I',
    'Ȉ': 'I',
    'Ì': 'I',
    'Ỉ': 'I',
    'Ȋ': 'I',
    'Ī': 'I',
    'Į': 'I',
    'Ɨ': 'I',
    'Ĩ': 'I',
    'Ḭ': 'I',
    'Ꝺ': 'D',
    'Ꝼ': 'F',
    'Ᵹ': 'G',
    'Ꞃ': 'R',
    'Ꞅ': 'S',
    'Ꞇ': 'T',
    'Ꝭ': 'IS',
    'Ĵ': 'J',
    'Ɉ': 'J',
    'Ḱ': 'K',
    'Ǩ': 'K',
    'Ķ': 'K',
    'Ⱪ': 'K',
    'Ꝃ': 'K',
    'Ḳ': 'K',
    'Ƙ': 'K',
    'Ḵ': 'K',
    'Ꝁ': 'K',
    'Ꝅ': 'K',
    'Ĺ': 'L',
    'Ƚ': 'L',
    'Ľ': 'L',
    'Ļ': 'L',
    'Ḽ': 'L',
    'Ḷ': 'L',
    'Ḹ': 'L',
    'Ⱡ': 'L',
    'Ꝉ': 'L',
    'Ḻ': 'L',
    'Ŀ': 'L',
    'Ɫ': 'L',
    'ǈ': 'L',
    'Ł': 'L',
    'Ǉ': 'LJ',
    'Ḿ': 'M',
    'Ṁ': 'M',
    'Ṃ': 'M',
    'Ɱ': 'M',
    'Ń': 'N',
    'Ň': 'N',
    'Ņ': 'N',
    'Ṋ': 'N',
    'Ṅ': 'N',
    'Ṇ': 'N',
    'Ǹ': 'N',
    'Ɲ': 'N',
    'Ṉ': 'N',
    'Ƞ': 'N',
    'ǋ': 'N',
    'Ñ': 'N',
    'Ǌ': 'NJ',
    'Ó': 'O',
    'Ŏ': 'O',
    'Ǒ': 'O',
    'Ô': 'O',
    'Ố': 'O',
    'Ộ': 'O',
    'Ồ': 'O',
    'Ổ': 'O',
    'Ỗ': 'O',
    'Ö': 'O',
    'Ȫ': 'O',
    'Ȯ': 'O',
    'Ȱ': 'O',
    'Ọ': 'O',
    'Ő': 'O',
    'Ȍ': 'O',
    'Ò': 'O',
    'Ỏ': 'O',
    'Ơ': 'O',
    'Ớ': 'O',
    'Ợ': 'O',
    'Ờ': 'O',
    'Ở': 'O',
    'Ỡ': 'O',
    'Ȏ': 'O',
    'Ꝋ': 'O',
    'Ꝍ': 'O',
    'Ō': 'O',
    'Ṓ': 'O',
    'Ṑ': 'O',
    'Ɵ': 'O',
    'Ǫ': 'O',
    'Ǭ': 'O',
    'Ø': 'O',
    'Ǿ': 'O',
    'Õ': 'O',
    'Ṍ': 'O',
    'Ṏ': 'O',
    'Ȭ': 'O',
    'Ƣ': 'OI',
    'Ꝏ': 'OO',
    'Ɛ': 'E',
    'Ɔ': 'O',
    'Ȣ': 'OU',
    'Ṕ': 'P',
    'Ṗ': 'P',
    'Ꝓ': 'P',
    'Ƥ': 'P',
    'Ꝕ': 'P',
    'Ᵽ': 'P',
    'Ꝑ': 'P',
    'Ꝙ': 'Q',
    'Ꝗ': 'Q',
    'Ŕ': 'R',
    'Ř': 'R',
    'Ŗ': 'R',
    'Ṙ': 'R',
    'Ṛ': 'R',
    'Ṝ': 'R',
    'Ȑ': 'R',
    'Ȓ': 'R',
    'Ṟ': 'R',
    'Ɍ': 'R',
    'Ɽ': 'R',
    'Ꜿ': 'C',
    'Ǝ': 'E',
    'Ś': 'S',
    'Ṥ': 'S',
    'Š': 'S',
    'Ṧ': 'S',
    'Ş': 'S',
    'Ŝ': 'S',
    'Ș': 'S',
    'Ṡ': 'S',
    'Ṣ': 'S',
    'Ṩ': 'S',
    'Ť': 'T',
    'Ţ': 'T',
    'Ṱ': 'T',
    'Ț': 'T',
    'Ⱦ': 'T',
    'Ṫ': 'T',
    'Ṭ': 'T',
    'Ƭ': 'T',
    'Ṯ': 'T',
    'Ʈ': 'T',
    'Ŧ': 'T',
    'Ɐ': 'A',
    'Ꞁ': 'L',
    'Ɯ': 'M',
    'Ʌ': 'V',
    'Ꜩ': 'TZ',
    'Ú': 'U',
    'Ŭ': 'U',
    'Ǔ': 'U',
    'Û': 'U',
    'Ṷ': 'U',
    'Ü': 'U',
    'Ǘ': 'U',
    'Ǚ': 'U',
    'Ǜ': 'U',
    'Ǖ': 'U',
    'Ṳ': 'U',
    'Ụ': 'U',
    'Ű': 'U',
    'Ȕ': 'U',
    'Ù': 'U',
    'Ủ': 'U',
    'Ư': 'U',
    'Ứ': 'U',
    'Ự': 'U',
    'Ừ': 'U',
    'Ử': 'U',
    'Ữ': 'U',
    'Ȗ': 'U',
    'Ū': 'U',
    'Ṻ': 'U',
    'Ų': 'U',
    'Ů': 'U',
    'Ũ': 'U',
    'Ṹ': 'U',
    'Ṵ': 'U',
    'Ꝟ': 'V',
    'Ṿ': 'V',
    'Ʋ': 'V',
    'Ṽ': 'V',
    'Ꝡ': 'VY',
    'Ẃ': 'W',
    'Ŵ': 'W',
    'Ẅ': 'W',
    'Ẇ': 'W',
    'Ẉ': 'W',
    'Ẁ': 'W',
    'Ⱳ': 'W',
    'Ẍ': 'X',
    'Ẋ': 'X',
    'Ý': 'Y',
    'Ŷ': 'Y',
    'Ÿ': 'Y',
    'Ẏ': 'Y',
    'Ỵ': 'Y',
    'Ỳ': 'Y',
    'Ƴ': 'Y',
    'Ỷ': 'Y',
    'Ỿ': 'Y',
    'Ȳ': 'Y',
    'Ɏ': 'Y',
    'Ỹ': 'Y',
    'Ź': 'Z',
    'Ž': 'Z',
    'Ẑ': 'Z',
    'Ⱬ': 'Z',
    'Ż': 'Z',
    'Ẓ': 'Z',
    'Ȥ': 'Z',
    'Ẕ': 'Z',
    'Ƶ': 'Z',
    'Ĳ': 'IJ',
    'Œ': 'OE',
    'ᴀ': 'A',
    'ᴁ': 'AE',
    'ʙ': 'B',
    'ᴃ': 'B',
    'ᴄ': 'C',
    'ᴅ': 'D',
    'ᴇ': 'E',
    'ꜰ': 'F',
    'ɢ': 'G',
    'ʛ': 'G',
    'ʜ': 'H',
    'ɪ': 'I',
    'ʁ': 'R',
    'ᴊ': 'J',
    'ᴋ': 'K',
    'ʟ': 'L',
    'ᴌ': 'L',
    'ᴍ': 'M',
    'ɴ': 'N',
    'ᴏ': 'O',
    'ɶ': 'OE',
    'ᴐ': 'O',
    'ᴕ': 'OU',
    'ᴘ': 'P',
    'ʀ': 'R',
    'ᴎ': 'N',
    'ᴙ': 'R',
    'ꜱ': 'S',
    'ᴛ': 'T',
    'ⱻ': 'E',
    'ᴚ': 'R',
    'ᴜ': 'U',
    'ᴠ': 'V',
    'ᴡ': 'W',
    'ʏ': 'Y',
    'ᴢ': 'Z',
    'á': 'a',
    'ă': 'a',
    'ắ': 'a',
    'ặ': 'a',
    'ằ': 'a',
    'ẳ': 'a',
    'ẵ': 'a',
    'ǎ': 'a',
    'â': 'a',
    'ấ': 'a',
    'ậ': 'a',
    'ầ': 'a',
    'ẩ': 'a',
    'ẫ': 'a',
    'ä': 'a',
    'ǟ': 'a',
    'ȧ': 'a',
    'ǡ': 'a',
    'ạ': 'a',
    'ȁ': 'a',
    'à': 'a',
    'ả': 'a',
    'ȃ': 'a',
    'ā': 'a',
    'ą': 'a',
    'ᶏ': 'a',
    'ẚ': 'a',
    'å': 'a',
    'ǻ': 'a',
    'ḁ': 'a',
    'ⱥ': 'a',
    'ã': 'a',
    'ꜳ': 'aa',
    'æ': 'ae',
    'ǽ': 'ae',
    'ǣ': 'ae',
    'ꜵ': 'ao',
    'ꜷ': 'au',
    'ꜹ': 'av',
    'ꜻ': 'av',
    'ꜽ': 'ay',
    'ḃ': 'b',
    'ḅ': 'b',
    'ɓ': 'b',
    'ḇ': 'b',
    'ᵬ': 'b',
    'ᶀ': 'b',
    'ƀ': 'b',
    'ƃ': 'b',
    'ɵ': 'o',
    'ć': 'c',
    'č': 'c',
    'ç': 'c',
    'ḉ': 'c',
    'ĉ': 'c',
    'ɕ': 'c',
    'ċ': 'c',
    'ƈ': 'c',
    'ȼ': 'c',
    'ď': 'd',
    'ḑ': 'd',
    'ḓ': 'd',
    'ȡ': 'd',
    'ḋ': 'd',
    'ḍ': 'd',
    'ɗ': 'd',
    'ᶑ': 'd',
    'ḏ': 'd',
    'ᵭ': 'd',
    'ᶁ': 'd',
    'đ': 'd',
    'ɖ': 'd',
    'ƌ': 'd',
    'ı': 'i',
    'ȷ': 'j',
    'ɟ': 'j',
    'ʄ': 'j',
    'ǳ': 'dz',
    'ǆ': 'dz',
    'é': 'e',
    'ĕ': 'e',
    'ě': 'e',
    'ȩ': 'e',
    'ḝ': 'e',
    'ê': 'e',
    'ế': 'e',
    'ệ': 'e',
    'ề': 'e',
    'ể': 'e',
    'ễ': 'e',
    'ḙ': 'e',
    'ë': 'e',
    'ė': 'e',
    'ẹ': 'e',
    'ȅ': 'e',
    'è': 'e',
    'ẻ': 'e',
    'ȇ': 'e',
    'ē': 'e',
    'ḗ': 'e',
    'ḕ': 'e',
    'ⱸ': 'e',
    'ę': 'e',
    'ᶒ': 'e',
    'ɇ': 'e',
    'ẽ': 'e',
    'ḛ': 'e',
    'ꝫ': 'et',
    'ḟ': 'f',
    'ƒ': 'f',
    'ᵮ': 'f',
    'ᶂ': 'f',
    'ǵ': 'g',
    'ğ': 'g',
    'ǧ': 'g',
    'ģ': 'g',
    'ĝ': 'g',
    'ġ': 'g',
    'ɠ': 'g',
    'ḡ': 'g',
    'ᶃ': 'g',
    'ǥ': 'g',
    'ḫ': 'h',
    'ȟ': 'h',
    'ḩ': 'h',
    'ĥ': 'h',
    'ⱨ': 'h',
    'ḧ': 'h',
    'ḣ': 'h',
    'ḥ': 'h',
    'ɦ': 'h',
    'ẖ': 'h',
    'ħ': 'h',
    'ƕ': 'hv',
    'í': 'i',
    'ĭ': 'i',
    'ǐ': 'i',
    'î': 'i',
    'ï': 'i',
    'ḯ': 'i',
    'ị': 'i',
    'ȉ': 'i',
    'ì': 'i',
    'ỉ': 'i',
    'ȋ': 'i',
    'ī': 'i',
    'į': 'i',
    'ᶖ': 'i',
    'ɨ': 'i',
    'ĩ': 'i',
    'ḭ': 'i',
    'ꝺ': 'd',
    'ꝼ': 'f',
    'ᵹ': 'g',
    'ꞃ': 'r',
    'ꞅ': 's',
    'ꞇ': 't',
    'ꝭ': 'is',
    'ǰ': 'j',
    'ĵ': 'j',
    'ʝ': 'j',
    'ɉ': 'j',
    'ḱ': 'k',
    'ǩ': 'k',
    'ķ': 'k',
    'ⱪ': 'k',
    'ꝃ': 'k',
    'ḳ': 'k',
    'ƙ': 'k',
    'ḵ': 'k',
    'ᶄ': 'k',
    'ꝁ': 'k',
    'ꝅ': 'k',
    'ĺ': 'l',
    'ƚ': 'l',
    'ɬ': 'l',
    'ľ': 'l',
    'ļ': 'l',
    'ḽ': 'l',
    'ȴ': 'l',
    'ḷ': 'l',
    'ḹ': 'l',
    'ⱡ': 'l',
    'ꝉ': 'l',
    'ḻ': 'l',
    'ŀ': 'l',
    'ɫ': 'l',
    'ᶅ': 'l',
    'ɭ': 'l',
    'ł': 'l',
    'ǉ': 'lj',
    'ſ': 's',
    'ẜ': 's',
    'ẛ': 's',
    'ẝ': 's',
    'ḿ': 'm',
    'ṁ': 'm',
    'ṃ': 'm',
    'ɱ': 'm',
    'ᵯ': 'm',
    'ᶆ': 'm',
    'ń': 'n',
    'ň': 'n',
    'ņ': 'n',
    'ṋ': 'n',
    'ȵ': 'n',
    'ṅ': 'n',
    'ṇ': 'n',
    'ǹ': 'n',
    'ɲ': 'n',
    'ṉ': 'n',
    'ƞ': 'n',
    'ᵰ': 'n',
    'ᶇ': 'n',
    'ɳ': 'n',
    'ñ': 'n',
    'ǌ': 'nj',
    'ó': 'o',
    'ŏ': 'o',
    'ǒ': 'o',
    'ô': 'o',
    'ố': 'o',
    'ộ': 'o',
    'ồ': 'o',
    'ổ': 'o',
    'ỗ': 'o',
    'ö': 'o',
    'ȫ': 'o',
    'ȯ': 'o',
    'ȱ': 'o',
    'ọ': 'o',
    'ő': 'o',
    'ȍ': 'o',
    'ò': 'o',
    'ỏ': 'o',
    'ơ': 'o',
    'ớ': 'o',
    'ợ': 'o',
    'ờ': 'o',
    'ở': 'o',
    'ỡ': 'o',
    'ȏ': 'o',
    'ꝋ': 'o',
    'ꝍ': 'o',
    'ⱺ': 'o',
    'ō': 'o',
    'ṓ': 'o',
    'ṑ': 'o',
    'ǫ': 'o',
    'ǭ': 'o',
    'ø': 'o',
    'ǿ': 'o',
    'õ': 'o',
    'ṍ': 'o',
    'ṏ': 'o',
    'ȭ': 'o',
    'ƣ': 'oi',
    'ꝏ': 'oo',
    'ɛ': 'e',
    'ᶓ': 'e',
    'ɔ': 'o',
    'ᶗ': 'o',
    'ȣ': 'ou',
    'ṕ': 'p',
    'ṗ': 'p',
    'ꝓ': 'p',
    'ƥ': 'p',
    'ᵱ': 'p',
    'ᶈ': 'p',
    'ꝕ': 'p',
    'ᵽ': 'p',
    'ꝑ': 'p',
    'ꝙ': 'q',
    'ʠ': 'q',
    'ɋ': 'q',
    'ꝗ': 'q',
    'ŕ': 'r',
    'ř': 'r',
    'ŗ': 'r',
    'ṙ': 'r',
    'ṛ': 'r',
    'ṝ': 'r',
    'ȑ': 'r',
    'ɾ': 'r',
    'ᵳ': 'r',
    'ȓ': 'r',
    'ṟ': 'r',
    'ɼ': 'r',
    'ᵲ': 'r',
    'ᶉ': 'r',
    'ɍ': 'r',
    'ɽ': 'r',
    'ↄ': 'c',
    'ꜿ': 'c',
    'ɘ': 'e',
    'ɿ': 'r',
    'ś': 's',
    'ṥ': 's',
    'š': 's',
    'ṧ': 's',
    'ş': 's',
    'ŝ': 's',
    'ș': 's',
    'ṡ': 's',
    'ṣ': 's',
    'ṩ': 's',
    'ʂ': 's',
    'ᵴ': 's',
    'ᶊ': 's',
    'ȿ': 's',
    'ɡ': 'g',
    'ᴑ': 'o',
    'ᴓ': 'o',
    'ᴝ': 'u',
    'ť': 't',
    'ţ': 't',
    'ṱ': 't',
    'ț': 't',
    'ȶ': 't',
    'ẗ': 't',
    'ⱦ': 't',
    'ṫ': 't',
    'ṭ': 't',
    'ƭ': 't',
    'ṯ': 't',
    'ᵵ': 't',
    'ƫ': 't',
    'ʈ': 't',
    'ŧ': 't',
    'ᵺ': 'th',
    'ɐ': 'a',
    'ᴂ': 'ae',
    'ǝ': 'e',
    'ᵷ': 'g',
    'ɥ': 'h',
    'ʮ': 'h',
    'ʯ': 'h',
    'ᴉ': 'i',
    'ʞ': 'k',
    'ꞁ': 'l',
    'ɯ': 'm',
    'ɰ': 'm',
    'ᴔ': 'oe',
    'ɹ': 'r',
    'ɻ': 'r',
    'ɺ': 'r',
    'ⱹ': 'r',
    'ʇ': 't',
    'ʌ': 'v',
    'ʍ': 'w',
    'ʎ': 'y',
    'ꜩ': 'tz',
    'ú': 'u',
    'ŭ': 'u',
    'ǔ': 'u',
    'û': 'u',
    'ṷ': 'u',
    'ü': 'u',
    'ǘ': 'u',
    'ǚ': 'u',
    'ǜ': 'u',
    'ǖ': 'u',
    'ṳ': 'u',
    'ụ': 'u',
    'ű': 'u',
    'ȕ': 'u',
    'ù': 'u',
    'ủ': 'u',
    'ư': 'u',
    'ứ': 'u',
    'ự': 'u',
    'ừ': 'u',
    'ử': 'u',
    'ữ': 'u',
    'ȗ': 'u',
    'ū': 'u',
    'ṻ': 'u',
    'ų': 'u',
    'ᶙ': 'u',
    'ů': 'u',
    'ũ': 'u',
    'ṹ': 'u',
    'ṵ': 'u',
    'ᵫ': 'ue',
    'ꝸ': 'um',
    'ⱴ': 'v',
    'ꝟ': 'v',
    'ṿ': 'v',
    'ʋ': 'v',
    'ᶌ': 'v',
    'ⱱ': 'v',
    'ṽ': 'v',
    'ꝡ': 'vy',
    'ẃ': 'w',
    'ŵ': 'w',
    'ẅ': 'w',
    'ẇ': 'w',
    'ẉ': 'w',
    'ẁ': 'w',
    'ⱳ': 'w',
    'ẘ': 'w',
    'ẍ': 'x',
    'ẋ': 'x',
    'ᶍ': 'x',
    'ý': 'y',
    'ŷ': 'y',
    'ÿ': 'y',
    'ẏ': 'y',
    'ỵ': 'y',
    'ỳ': 'y',
    'ƴ': 'y',
    'ỷ': 'y',
    'ỿ': 'y',
    'ȳ': 'y',
    'ẙ': 'y',
    'ɏ': 'y',
    'ỹ': 'y',
    'ź': 'z',
    'ž': 'z',
    'ẑ': 'z',
    'ʑ': 'z',
    'ⱬ': 'z',
    'ż': 'z',
    'ẓ': 'z',
    'ȥ': 'z',
    'ẕ': 'z',
    'ᵶ': 'z',
    'ᶎ': 'z',
    'ʐ': 'z',
    'ƶ': 'z',
    'ɀ': 'z',
    'ﬀ': 'ff',
    'ﬃ': 'ffi',
    'ﬄ': 'ffl',
    'ﬁ': 'fi',
    'ﬂ': 'fl',
    'ĳ': 'ij',
    'œ': 'oe',
    'ﬆ': 'st',
    'ₐ': 'a',
    'ₑ': 'e',
    'ᵢ': 'i',
    'ⱼ': 'j',
    'ₒ': 'o',
    'ᵣ': 'r',
    'ᵤ': 'u',
    'ᵥ': 'v',
    'ₓ': 'x'
};
//# sourceMappingURL=latin-map.js.map

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadMatch; });
var TypeaheadMatch = (function () {
    function TypeaheadMatch(item, value, header) {
        if (value === void 0) { value = item; }
        if (header === void 0) { header = false; }
        this.item = item;
        this.value = value;
        this.header = header;
    }
    TypeaheadMatch.prototype.isHeader = function () {
        return this.header;
    };
    TypeaheadMatch.prototype.toString = function () {
        return this.value;
    };
    return TypeaheadMatch;
}());
//# sourceMappingURL=typeahead-match.class.js.map

/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_from__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_mergeMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_add_operator_toArray__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__component_loader__ = __webpack_require__(4);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadDirective; });













var TypeaheadDirective = (function () {
    function TypeaheadDirective(control, viewContainerRef, element, renderer, cis) {
        /** minimal no of characters that needs to be entered before typeahead kicks-in. When set to 0, typeahead shows on focus with full list of options (limited as normal by typeaheadOptionsLimit) */
        this.typeaheadMinLength = void 0;
        /** should be used only in case of typeahead attribute is array. If true - loading of options will be async, otherwise - sync. true make sense if options array is large. */
        this.typeaheadAsync = void 0;
        /** match latin symbols. If true the word súper would match super and vice versa. */
        this.typeaheadLatinize = true;
        /** break words with spaces. If true the text "exact phrase" here match would match with match exact phrase here but not with phrase here exact match (kind of "google style"). */
        this.typeaheadSingleWords = true;
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to break words. Defaults to space. */
        this.typeaheadWordDelimiters = ' ';
        /** should be used only in case typeaheadSingleWords attribute is true. Sets the word delimiter to match exact phrase. Defaults to simple and double quotes. */
        this.typeaheadPhraseDelimiters = '\'"';
        /** fired when 'busy' state of this component was changed, fired on async mode only, returns boolean */
        this.typeaheadLoading = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired on every key event and returns true in case of matches are not detected */
        this.typeaheadNoResults = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when option was selected, return object with data of this option */
        this.typeaheadOnSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        /** fired when blur event occurres. returns the active item */
        this.typeaheadOnBlur = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isTypeaheadOptionsListActive = false;
        this.keyUpEventEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.placement = 'bottom-left';
        this.element = element;
        this.ngControl = control;
        this.viewContainerRef = viewContainerRef;
        this.renderer = renderer;
        this._typeahead = cis
            .createLoader(element, viewContainerRef, renderer);
    }
    TypeaheadDirective.prototype.onChange = function (e) {
        if (this._container) {
            // esc
            if (e.keyCode === 27) {
                this.hide();
                return;
            }
            // up
            if (e.keyCode === 38) {
                this._container.prevActiveMatch();
                return;
            }
            // down
            if (e.keyCode === 40) {
                this._container.nextActiveMatch();
                return;
            }
            // enter
            if (e.keyCode === 13) {
                this._container.selectActiveMatch();
                return;
            }
        }
        // For `<input>`s, use the `value` property. For others that don't have a
        // `value` (such as `<span contenteditable="true">`, use `innerText`.
        var value = e.target.value !== undefined
            ? e.target.value
            : e.target.innerText;
        if (value.trim().length >= this.typeaheadMinLength) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit(e.target.value);
        }
        else {
            this.typeaheadLoading.emit(false);
            this.typeaheadNoResults.emit(false);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onFocus = function () {
        if (this.typeaheadMinLength === 0) {
            this.typeaheadLoading.emit(true);
            this.keyUpEventEmitter.emit('');
        }
    };
    TypeaheadDirective.prototype.onBlur = function () {
        if (this._container && !this._container.isFocused) {
            this.typeaheadOnBlur.emit(this._container.active);
            this.hide();
        }
    };
    TypeaheadDirective.prototype.onKeydown = function (e) {
        // no container - no problems
        if (!this._container) {
            return;
        }
        // if items is visible - prevent form submition
        if (e.keyCode === 13) {
            e.preventDefault();
            return;
        }
    };
    TypeaheadDirective.prototype.ngOnInit = function () {
        this.typeaheadOptionsLimit = this.typeaheadOptionsLimit || 20;
        this.typeaheadMinLength = this.typeaheadMinLength === void 0
            ? 1
            : this.typeaheadMinLength;
        this.typeaheadWaitMs = this.typeaheadWaitMs || 0;
        // async should be false in case of array
        if (this.typeaheadAsync === undefined && !(this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"])) {
            this.typeaheadAsync = false;
        }
        if (this.typeahead instanceof __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"]) {
            this.typeaheadAsync = true;
        }
        if (this.typeaheadAsync) {
            this.asyncActions();
        }
        else {
            this.syncActions();
        }
    };
    TypeaheadDirective.prototype.changeModel = function (match) {
        var valueStr = match.value;
        this.ngControl.viewToModelUpdate(valueStr);
        this.ngControl.control.setValue(valueStr);
        this.hide();
    };
    Object.defineProperty(TypeaheadDirective.prototype, "matches", {
        get: function () {
            return this._matches;
        },
        enumerable: true,
        configurable: true
    });
    TypeaheadDirective.prototype.show = function () {
        this._typeahead
            .attach(__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */])
            .to(this.container)
            .position({ attachment: 'bottom left' })
            .show({
            typeaheadRef: this,
            placement: this.placement,
            animation: false
        });
        this._container = this._typeahead.instance;
        this._container.parent = this;
        // This improves the speed as it won't have to be done for each list item
        var normalizedQuery = (this.typeaheadLatinize
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(this.ngControl.control.value)
            : this.ngControl.control.value).toString()
            .toLowerCase();
        this._container.query = this.typeaheadSingleWords
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["b" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        this._container.matches = this._matches;
        this.element.nativeElement.focus();
    };
    TypeaheadDirective.prototype.hide = function () {
        if (this._typeahead.isShown) {
            this._typeahead.hide();
            this._container = null;
        }
    };
    TypeaheadDirective.prototype.ngOnDestroy = function () {
        this._typeahead.dispose();
    };
    TypeaheadDirective.prototype.asyncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function () { return _this.typeahead; })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }, function (err) {
            console.error(err);
        });
    };
    TypeaheadDirective.prototype.syncActions = function () {
        var _this = this;
        this.keyUpEventEmitter
            .debounceTime(this.typeaheadWaitMs)
            .mergeMap(function (value) {
            var normalizedQuery = _this.normalizeQuery(value);
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].from(_this.typeahead)
                .filter(function (option) {
                return option && _this.testMatch(_this.normalizeOption(option), normalizedQuery);
            })
                .toArray();
        })
            .subscribe(function (matches) {
            _this.finalizeAsyncCall(matches);
        }, function (err) {
            console.error(err);
        });
    };
    TypeaheadDirective.prototype.normalizeOption = function (option) {
        var optionValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, this.typeaheadOptionField);
        var normalizedOption = this.typeaheadLatinize
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(optionValue)
            : optionValue;
        return normalizedOption.toLowerCase();
    };
    TypeaheadDirective.prototype.normalizeQuery = function (value) {
        // If singleWords, break model here to not be doing extra work on each
        // iteration
        var normalizedQuery = (this.typeaheadLatinize ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(value) : value)
            .toString()
            .toLowerCase();
        normalizedQuery = this.typeaheadSingleWords
            ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["b" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
            : normalizedQuery;
        return normalizedQuery;
    };
    TypeaheadDirective.prototype.testMatch = function (match, test) {
        var spaceLength;
        if (typeof test === 'object') {
            spaceLength = test.length;
            for (var i = 0; i < spaceLength; i += 1) {
                if (test[i].length > 0 && match.indexOf(test[i]) < 0) {
                    return false;
                }
            }
            return true;
        }
        else {
            return match.indexOf(test) >= 0;
        }
    };
    TypeaheadDirective.prototype.finalizeAsyncCall = function (matches) {
        this.prepareMatches(matches);
        this.typeaheadLoading.emit(false);
        this.typeaheadNoResults.emit(!this.hasMatches());
        if (!this.hasMatches()) {
            this.hide();
            return;
        }
        if (this._container) {
            // This improves the speed as it won't have to be done for each list item
            var normalizedQuery = (this.typeaheadLatinize
                ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["a" /* latinize */])(this.ngControl.control.value)
                : this.ngControl.control.value).toString()
                .toLowerCase();
            this._container.query = this.typeaheadSingleWords
                ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["b" /* tokenize */])(normalizedQuery, this.typeaheadWordDelimiters, this.typeaheadPhraseDelimiters)
                : normalizedQuery;
            this._container.matches = this._matches;
        }
        else {
            this.show();
        }
    };
    TypeaheadDirective.prototype.prepareMatches = function (options) {
        var _this = this;
        var limited = options.slice(0, this.typeaheadOptionsLimit);
        if (this.typeaheadGroupField) {
            var matches_1 = [];
            // extract all group names
            var groups = limited
                .map(function (option) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadGroupField); })
                .filter(function (v, i, a) { return a.indexOf(v) === i; });
            groups.forEach(function (group) {
                // add group header to array of matches
                matches_1.push(new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](group, group, true));
                // add each item of group to array of matches
                matches_1 = matches_1.concat(limited
                    .filter(function (option) { return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadGroupField) === group; })
                    .map(function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadOptionField)); }));
            });
            this._matches = matches_1;
        }
        else {
            this._matches = limited.map(function (option) { return new __WEBPACK_IMPORTED_MODULE_11__typeahead_match_class__["a" /* TypeaheadMatch */](option, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__typeahead_utils__["c" /* getValueFromObject */])(option, _this.typeaheadOptionField)); });
        }
    };
    TypeaheadDirective.prototype.hasMatches = function () {
        return this._matches.length > 0;
    };
    TypeaheadDirective.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"], args: [{ selector: '[typeahead]', exportAs: 'bs-typeahead' },] },
    ];
    /** @nocollapse */
    TypeaheadDirective.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NgControl"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"], },
        { type: __WEBPACK_IMPORTED_MODULE_12__component_loader__["a" /* ComponentLoaderFactory */], },
    ]; };
    TypeaheadDirective.propDecorators = {
        'typeahead': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadMinLength': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWaitMs': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionsLimit': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadOptionField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadGroupField': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadAsync': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLatinize': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadSingleWords': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadWordDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadPhraseDelimiters': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadItemTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'optionsListTemplate': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'typeaheadLoading': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadNoResults': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnSelect': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'typeaheadOnBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"] },],
        'container': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'onChange': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keyup', ['$event'],] },],
        'onFocus': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['focus',] },],
        'onBlur': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['blur',] },],
        'onKeydown': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"], args: ['keydown', ['$event'],] },],
    };
    return TypeaheadDirective;
}());
//# sourceMappingURL=typeahead.directive.js.map

/***/ }),
/* 74 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_74__;

/***/ }),
/* 75 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_75__;

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_76__;

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_77__;

/***/ }),
/* 78 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_78__;

/***/ }),
/* 79 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__checkbox_module__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__checkbox_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkbox_component__ = __webpack_require__(35);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__checkbox_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__checkbox_component__["b"]; });




/***/ }),
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__column_sorting_module__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__column_sorting_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_sorting_component__ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__column_sorting_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__column_sorting_component__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_sorting_directive__ = __webpack_require__(36);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__column_sorting_directive__["a"]; });





/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_module__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dashboard_component__ = __webpack_require__(37);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_service__ = __webpack_require__(7);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_2__dashboard_service__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__drag_handle_drag_handle_directive__ = __webpack_require__(38);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__drag_handle_drag_handle_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__widget_dashboard_widget_component__ = __webpack_require__(18);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_4__widget_dashboard_widget_component__["a"]; });







/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ebox_module__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ebox_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ebox_component__ = __webpack_require__(39);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__ebox_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__ebox_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__ebox_component__["c"]; });




/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__flippable_card_module__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__flippable_card_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__ = __webpack_require__(43);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["c"]; });




/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_display_panel_module__ = __webpack_require__(99);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__item_display_panel_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__item_display_panel_component__ = __webpack_require__(44);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__item_display_panel_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__item_display_panel_component__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__item_display_panel_component__["c"]; });




/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__progress_bar_module__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__progress_bar_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_bar_component__ = __webpack_require__(49);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__progress_bar_component__["a"]; });




/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__radiobutton_module__ = __webpack_require__(103);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__radiobutton_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__radiobutton_component__ = __webpack_require__(50);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__radiobutton_component__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__radiobutton_component__["b"]; });




/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__spark_module__ = __webpack_require__(105);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__spark_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__spark_component__ = __webpack_require__(52);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__spark_component__["a"]; });




/***/ }),
/* 88 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__tag_input_event__ = __webpack_require__(53);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__tag_input_event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tag_input_component__ = __webpack_require__(54);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__tag_input_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_input_module__ = __webpack_require__(106);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__tag_input_module__["a"]; });





/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__toggleswitch_module__ = __webpack_require__(107);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__toggleswitch_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__toggleswitch_component__ = __webpack_require__(55);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__toggleswitch_component__["a"]; });




/***/ }),
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_filter_pipe__ = __webpack_require__(60);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__string_filter_pipe__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__string_filter_module__ = __webpack_require__(114);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__string_filter_module__["a"]; });




/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumbs_component__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_router__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var BreadcrumbsModule = (function () {
    function BreadcrumbsModule() {
    }
    return BreadcrumbsModule;
}());
BreadcrumbsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["RouterModule"]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__breadcrumbs_component__["a" /* BreadcrumbsComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__breadcrumbs_component__["a" /* BreadcrumbsComponent */]]
    })
], BreadcrumbsModule);



/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__checkbox_component__ = __webpack_require__(35);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckboxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CheckboxModule = (function () {
    function CheckboxModule() {
    }
    return CheckboxModule;
}());
CheckboxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__checkbox_component__["b" /* CheckboxComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__checkbox_component__["b" /* CheckboxComponent */]]
    })
], CheckboxModule);



/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__column_sorting_component__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__column_sorting_directive__ = __webpack_require__(36);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColumnSortingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ColumnSortingModule = (function () {
    function ColumnSortingModule() {
    }
    return ColumnSortingModule;
}());
ColumnSortingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__column_sorting_component__["a" /* ColumnSortingComponent */], __WEBPACK_IMPORTED_MODULE_2__column_sorting_directive__["a" /* ColumnSortingDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__column_sorting_component__["a" /* ColumnSortingComponent */], __WEBPACK_IMPORTED_MODULE_2__column_sorting_directive__["a" /* ColumnSortingDirective */]]
    })
], ColumnSortingModule);



/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_component__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__widget_dashboard_widget_component__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_service__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__drag_handle_drag_handle_directive__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_resize_index__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_2__dashboard_component__["a" /* DashboardComponent */],
    __WEBPACK_IMPORTED_MODULE_3__widget_dashboard_widget_component__["a" /* DashboardWidgetComponent */],
    __WEBPACK_IMPORTED_MODULE_5__drag_handle_drag_handle_directive__["a" /* DashboardDragHandleDirective */]
];
var DashboardModule = (function () {
    function DashboardModule() {
    }
    return DashboardModule;
}());
DashboardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_6__directives_resize_index__["c" /* ResizeModule */]
        ],
        exports: DECLARATIONS,
        declarations: DECLARATIONS,
        providers: [__WEBPACK_IMPORTED_MODULE_4__dashboard_service__["a" /* DashboardService */]],
    })
], DashboardModule);



/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ebox_component__ = __webpack_require__(39);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EboxModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var EboxModule = (function () {
    function EboxModule() {
    }
    return EboxModule;
}());
EboxModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__ebox_component__["a" /* EboxComponent */], __WEBPACK_IMPORTED_MODULE_1__ebox_component__["c" /* EboxContentDirective */], __WEBPACK_IMPORTED_MODULE_1__ebox_component__["b" /* EboxHeaderDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__ebox_component__["a" /* EboxComponent */], __WEBPACK_IMPORTED_MODULE_1__ebox_component__["c" /* EboxContentDirective */], __WEBPACK_IMPORTED_MODULE_1__ebox_component__["b" /* EboxHeaderDirective */]]
    })
], EboxModule);



/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_tooltip__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_typeahead__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__facet_container_component__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__base_facet_base_facet_base_component__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__base_facet_header_facet_header_component__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__facet_check_list_facet_check_list_component__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__facet_typeahead_list_facet_typeahead_list_component__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacetsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_4__facet_container_component__["a" /* FacetContainerComponent */],
    __WEBPACK_IMPORTED_MODULE_6__base_facet_header_facet_header_component__["a" /* FacetHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_5__base_facet_base_facet_base_component__["a" /* FacetBaseComponent */],
    __WEBPACK_IMPORTED_MODULE_7__facet_check_list_facet_check_list_component__["a" /* FacetCheckListComponent */],
    __WEBPACK_IMPORTED_MODULE_8__facet_typeahead_list_facet_typeahead_list_component__["a" /* FacetTypeaheadListComponent */]
];
var FacetsModule = (function () {
    function FacetsModule() {
    }
    return FacetsModule;
}());
FacetsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_9__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_typeahead__["a" /* TypeaheadModule */].forRoot()
        ],
        exports: DECLARATIONS,
        declarations: DECLARATIONS
    })
], FacetsModule);



/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Facet; });
var Facet = (function () {
    function Facet(title, data, count, disabled, id) {
        if (data === void 0) { data = {}; }
        if (disabled === void 0) { disabled = false; }
        this.title = title;
        this.data = data;
        this.count = count;
        this.disabled = disabled;
        this.id = id;
    }
    return Facet;
}());



/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlippableCardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FlippableCardModule = (function () {
    function FlippableCardModule() {
    }
    return FlippableCardModule;
}());
FlippableCardModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["a" /* FlippableCardComponent */], __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["c" /* FlippableCardBackDirective */], __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["b" /* FlippableCardFrontDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["a" /* FlippableCardComponent */], __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["c" /* FlippableCardBackDirective */], __WEBPACK_IMPORTED_MODULE_1__flippable_card_component__["b" /* FlippableCardFrontDirective */]]
    })
], FlippableCardModule);



/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__item_display_panel_component__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDisplayPanelModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DECLARATIONS = [
    __WEBPACK_IMPORTED_MODULE_0__item_display_panel_component__["a" /* ItemDisplayPanelComponent */],
    __WEBPACK_IMPORTED_MODULE_0__item_display_panel_component__["b" /* ItemDisplayPanelContentDirective */],
    __WEBPACK_IMPORTED_MODULE_0__item_display_panel_component__["c" /* ItemDisplayPanelFooterDirective */]
];
var ItemDisplayPanelModule = (function () {
    function ItemDisplayPanelModule() {
    }
    return ItemDisplayPanelModule;
}());
ItemDisplayPanelModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        exports: DECLARATIONS,
        declarations: DECLARATIONS
    })
], ItemDisplayPanelModule);



/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderIconMenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageHeaderIconMenuComponent = (function () {
    function PageHeaderIconMenuComponent() {
    }
    PageHeaderIconMenuComponent.prototype.select = function (item) {
        if (item.select) {
            item.select.call(item, item);
        }
    };
    return PageHeaderIconMenuComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], PageHeaderIconMenuComponent.prototype, "menu", void 0);
PageHeaderIconMenuComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ux-page-header-icon-menu',
        template: __webpack_require__(139)
    })
], PageHeaderIconMenuComponent);



/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__page_header_component__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumbs_index__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__icon_menu_icon_menu_component__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_item_navigation_item_component__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_dropdown_item_navigation_dropdown_item_component__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageHeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PageHeaderModule = (function () {
    function PageHeaderModule() {
    }
    return PageHeaderModule;
}());
PageHeaderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumbs_index__["b" /* BreadcrumbsModule */],
            __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_dropdown__["b" /* BsDropdownModule */].forRoot()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__page_header_component__["a" /* PageHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_5__icon_menu_icon_menu_component__["a" /* PageHeaderIconMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_6__navigation_navigation_component__["a" /* PageHeaderNavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_7__navigation_navigation_item_navigation_item_component__["a" /* PageHeaderNavigationItemComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_dropdown_item_navigation_dropdown_item_component__["a" /* PageHeaderNavigationDropdownItemComponent */]
        ]
    })
], PageHeaderModule);



/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_bar_component__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_color_index__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressBarModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressBarModule = (function () {
    function ProgressBarModule() {
    }
    return ProgressBarModule;
}());
ProgressBarModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__services_color_index__["a" /* ColorServiceModule */]],
        exports: [__WEBPACK_IMPORTED_MODULE_1__progress_bar_component__["a" /* ProgressBarComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__progress_bar_component__["a" /* ProgressBarComponent */]]
    })
], ProgressBarModule);



/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__radiobutton_component__ = __webpack_require__(50);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RadioButtonModule = (function () {
    function RadioButtonModule() {
    }
    return RadioButtonModule;
}());
RadioButtonModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__radiobutton_component__["b" /* RadioButtonComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__radiobutton_component__["b" /* RadioButtonComponent */]]
    })
], RadioButtonModule);



/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_color_index__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slider_component__ = __webpack_require__(51);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SliderModule = (function () {
    function SliderModule() {
    }
    return SliderModule;
}());
SliderModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__services_color_index__["a" /* ColorServiceModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_3__slider_component__["a" /* SliderComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__slider_component__["a" /* SliderComponent */]]
    })
], SliderModule);



/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__spark_component__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__ = __webpack_require__(69);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SparkModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SparkModule = (function () {
    function SparkModule() {
    }
    return SparkModule;
}());
SparkModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_3_ngx_bootstrap_tooltip__["a" /* TooltipModule */].forRoot()
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__spark_component__["a" /* SparkComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__spark_component__["a" /* SparkComponent */]]
    })
], SparkModule);



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_focus_if_index__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_index__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tag_input_component__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_forms__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagInputModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TagInputModule = (function () {
    function TagInputModule() {
    }
    return TagInputModule;
}());
TagInputModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_0__directives_focus_if_index__["b" /* FocusIfModule */],
            __WEBPACK_IMPORTED_MODULE_1__typeahead_index__["b" /* TypeaheadModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_2__tag_input_component__["a" /* TagInputComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__tag_input_component__["a" /* TagInputComponent */]],
        providers: [],
    })
], TagInputModule);



/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_forms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toggleswitch_component__ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleSwitchModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToggleSwitchModule = (function () {
    function ToggleSwitchModule() {
    }
    return ToggleSwitchModule;
}());
ToggleSwitchModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__toggleswitch_component__["a" /* ToggleSwitchComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__toggleswitch_component__["a" /* ToggleSwitchComponent */]]
    })
], ToggleSwitchModule);



/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadOptionEvent; });
var TypeaheadOptionEvent = (function () {
    function TypeaheadOptionEvent(option) {
        this.option = option;
    }
    return TypeaheadOptionEvent;
}());



/***/ }),
/* 109 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directives_scroll_into_view_if_index__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_component__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    return TypeaheadModule;
}());
TypeaheadModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_0__directives_scroll_into_view_if_index__["c" /* ScrollIntoViewIfModule */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_1__typeahead_component__["a" /* TypeaheadComponent */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__typeahead_component__["a" /* TypeaheadComponent */]],
        providers: [],
    })
], TypeaheadModule);



/***/ }),
/* 110 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__focus_if_directive__ = __webpack_require__(57);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FocusIfModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FocusIfModule = (function () {
    function FocusIfModule() {
    }
    return FocusIfModule;
}());
FocusIfModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__focus_if_directive__["a" /* FocusIfDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__focus_if_directive__["a" /* FocusIfDirective */]]
    })
], FocusIfModule);



/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resize_directive__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__resize_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ResizeModule = (function () {
    function ResizeModule() {
    }
    return ResizeModule;
}());
ResizeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_1__resize_directive__["a" /* ResizeDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__resize_directive__["a" /* ResizeDirective */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__resize_service__["a" /* ResizeService */]]
    })
], ResizeModule);



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scroll_into_view_if_directive__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scroll_into_view_service__ = __webpack_require__(22);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollIntoViewIfModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScrollIntoViewIfModule = (function () {
    function ScrollIntoViewIfModule() {
    }
    return ScrollIntoViewIfModule;
}());
ScrollIntoViewIfModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: [__WEBPACK_IMPORTED_MODULE_1__scroll_into_view_if_directive__["a" /* ScrollIntoViewIfDirective */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_1__scroll_into_view_if_directive__["a" /* ScrollIntoViewIfDirective */]],
        providers: [__WEBPACK_IMPORTED_MODULE_2__scroll_into_view_service__["a" /* ScrollIntoViewService */]],
    })
], ScrollIntoViewIfModule);



/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_breadcrumbs_index__ = __webpack_require__(9);
/* inactive harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_checkbox_index__ = __webpack_require__(79);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CheckboxModule", function() { return __WEBPACK_IMPORTED_MODULE_1__components_checkbox_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CHECKBOX_VALUE_ACCESSOR", function() { return __WEBPACK_IMPORTED_MODULE_1__components_checkbox_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "CheckboxComponent", function() { return __WEBPACK_IMPORTED_MODULE_1__components_checkbox_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_column_sorting_index__ = __webpack_require__(80);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColumnSortingModule", function() { return __WEBPACK_IMPORTED_MODULE_2__components_column_sorting_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColumnSortingComponent", function() { return __WEBPACK_IMPORTED_MODULE_2__components_column_sorting_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColumnSortingState", function() { return __WEBPACK_IMPORTED_MODULE_2__components_column_sorting_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColumnSortingDirective", function() { return __WEBPACK_IMPORTED_MODULE_2__components_column_sorting_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__ = __webpack_require__(81);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ActionDirection", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Rounding", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["e"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DashboardDragHandleDirective", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["f"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DashboardWidgetComponent", function() { return __WEBPACK_IMPORTED_MODULE_3__components_dashboard_index__["g"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_ebox_index__ = __webpack_require__(82);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EboxModule", function() { return __WEBPACK_IMPORTED_MODULE_4__components_ebox_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EboxComponent", function() { return __WEBPACK_IMPORTED_MODULE_4__components_ebox_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EboxHeaderDirective", function() { return __WEBPACK_IMPORTED_MODULE_4__components_ebox_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "EboxContentDirective", function() { return __WEBPACK_IMPORTED_MODULE_4__components_ebox_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_facets_index__ = __webpack_require__(14);
/* inactive harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_flippable_card_index__ = __webpack_require__(83);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FlippableCardModule", function() { return __WEBPACK_IMPORTED_MODULE_6__components_flippable_card_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FlippableCardComponent", function() { return __WEBPACK_IMPORTED_MODULE_6__components_flippable_card_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FlippableCardFrontDirective", function() { return __WEBPACK_IMPORTED_MODULE_6__components_flippable_card_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FlippableCardBackDirective", function() { return __WEBPACK_IMPORTED_MODULE_6__components_flippable_card_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_item_display_panel_index__ = __webpack_require__(84);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayPanelModule", function() { return __WEBPACK_IMPORTED_MODULE_7__components_item_display_panel_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayPanelComponent", function() { return __WEBPACK_IMPORTED_MODULE_7__components_item_display_panel_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayPanelContentDirective", function() { return __WEBPACK_IMPORTED_MODULE_7__components_item_display_panel_index__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ItemDisplayPanelFooterDirective", function() { return __WEBPACK_IMPORTED_MODULE_7__components_item_display_panel_index__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_page_header_index__ = __webpack_require__(15);
/* inactive harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_progress_bar_index__ = __webpack_require__(85);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProgressBarModule", function() { return __WEBPACK_IMPORTED_MODULE_9__components_progress_bar_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ProgressBarComponent", function() { return __WEBPACK_IMPORTED_MODULE_9__components_progress_bar_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_radiobutton_index__ = __webpack_require__(86);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioButtonModule", function() { return __WEBPACK_IMPORTED_MODULE_10__components_radiobutton_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RADIOBUTTON_VALUE_ACCESSOR", function() { return __WEBPACK_IMPORTED_MODULE_10__components_radiobutton_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioButtonComponent", function() { return __WEBPACK_IMPORTED_MODULE_10__components_radiobutton_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_slider_index__ = __webpack_require__(16);
/* inactive harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_spark_index__ = __webpack_require__(87);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SparkModule", function() { return __WEBPACK_IMPORTED_MODULE_12__components_spark_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SparkComponent", function() { return __WEBPACK_IMPORTED_MODULE_12__components_spark_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_tag_input_index__ = __webpack_require__(88);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputEvent", function() { return __WEBPACK_IMPORTED_MODULE_13__components_tag_input_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputComponent", function() { return __WEBPACK_IMPORTED_MODULE_13__components_tag_input_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TagInputModule", function() { return __WEBPACK_IMPORTED_MODULE_13__components_tag_input_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_toggleswitch_index__ = __webpack_require__(89);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchModule", function() { return __WEBPACK_IMPORTED_MODULE_14__components_toggleswitch_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToggleSwitchComponent", function() { return __WEBPACK_IMPORTED_MODULE_14__components_toggleswitch_index__["b"]; });
/* empty harmony namespace reexport */
/* empty harmony namespace reexport */
/* empty harmony namespace reexport */
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_typeahead_index__ = __webpack_require__(13);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TypeaheadComponent", function() { return __WEBPACK_IMPORTED_MODULE_15__components_typeahead_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TypeaheadModule", function() { return __WEBPACK_IMPORTED_MODULE_15__components_typeahead_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__directives_resize_index__ = __webpack_require__(32);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResizeService", function() { return __WEBPACK_IMPORTED_MODULE_16__directives_resize_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResizeDirective", function() { return __WEBPACK_IMPORTED_MODULE_16__directives_resize_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ResizeModule", function() { return __WEBPACK_IMPORTED_MODULE_16__directives_resize_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__directives_focus_if_index__ = __webpack_require__(31);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FocusIfDirective", function() { return __WEBPACK_IMPORTED_MODULE_17__directives_focus_if_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FocusIfModule", function() { return __WEBPACK_IMPORTED_MODULE_17__directives_focus_if_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__directives_scroll_into_view_if_index__ = __webpack_require__(33);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollIntoViewIfDirective", function() { return __WEBPACK_IMPORTED_MODULE_18__directives_scroll_into_view_if_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollIntoViewService", function() { return __WEBPACK_IMPORTED_MODULE_18__directives_scroll_into_view_if_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ScrollIntoViewIfModule", function() { return __WEBPACK_IMPORTED_MODULE_18__directives_scroll_into_view_if_index__["c"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pipes_string_filter_index__ = __webpack_require__(90);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StringFilterPipe", function() { return __WEBPACK_IMPORTED_MODULE_19__pipes_string_filter_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StringFilterModule", function() { return __WEBPACK_IMPORTED_MODULE_19__pipes_string_filter_index__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_color_index__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorServiceModule", function() { return __WEBPACK_IMPORTED_MODULE_20__services_color_index__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ColorService", function() { return __WEBPACK_IMPORTED_MODULE_20__services_color_index__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ThemeColor", function() { return __WEBPACK_IMPORTED_MODULE_20__services_color_index__["c"]; });
/*
  Export Components
*/




















/*
  Export Directives
*/



/*
  Export Pipes
*/

/*
  Export Services
*/



/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__string_filter_pipe__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringFilterModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StringFilterModule = (function () {
    function StringFilterModule() {
    }
    return StringFilterModule;
}());
StringFilterModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        exports: [__WEBPACK_IMPORTED_MODULE_0__string_filter_pipe__["a" /* StringFilterPipe */]],
        declarations: [__WEBPACK_IMPORTED_MODULE_0__string_filter_pipe__["a" /* StringFilterPipe */]]
    })
], StringFilterModule);



/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__color_service__ = __webpack_require__(61);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorServiceModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ColorServiceModule = (function () {
    function ColorServiceModule() {
    }
    return ColorServiceModule;
}());
ColorServiceModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [],
        exports: [],
        declarations: [],
        providers: [__WEBPACK_IMPORTED_MODULE_1__color_service__["a" /* ColorService */]],
    })
], ColorServiceModule);



/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader_class__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentLoaderFactory; });



var ComponentLoaderFactory = (function () {
    function ComponentLoaderFactory(componentFactoryResolver, ngZone, injector, posService) {
        this._ngZone = ngZone;
        this._injector = injector;
        this._posService = posService;
        this._componentFactoryResolver = componentFactoryResolver;
    }
    /**
     *
     * @param _elementRef
     * @param _viewContainerRef
     * @param _renderer
     * @returns {ComponentLoader}
     */
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new __WEBPACK_IMPORTED_MODULE_1__component_loader_class__["a" /* ComponentLoader */](_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._posService);
    };
    ComponentLoaderFactory.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    ComponentLoaderFactory.ctorParameters = function () { return [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"], },
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"], },
        { type: __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */], },
    ]; };
    return ComponentLoaderFactory;
}());
//# sourceMappingURL=component-loader.factory.js.map

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__component_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__positioning__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BsDropdownModule; });









var BsDropdownModule = (function () {
    function BsDropdownModule() {
    }
    BsDropdownModule.forRoot = function (config) {
        return {
            ngModule: BsDropdownModule, providers: [
                __WEBPACK_IMPORTED_MODULE_1__component_loader__["a" /* ComponentLoaderFactory */],
                __WEBPACK_IMPORTED_MODULE_2__positioning__["a" /* PositioningService */],
                __WEBPACK_IMPORTED_MODULE_8__bs_dropdown_state__["a" /* BsDropdownState */],
                { provide: __WEBPACK_IMPORTED_MODULE_6__bs_dropdown_config__["a" /* BsDropdownConfig */], useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    ;
    BsDropdownModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_4__bs_dropdown_menu_directive__["a" /* BsDropdownMenuDirective */],
                        __WEBPACK_IMPORTED_MODULE_5__bs_dropdown_toggle_directive__["a" /* BsDropdownToggleDirective */],
                        __WEBPACK_IMPORTED_MODULE_7__bs_dropdown_directive__["a" /* BsDropdownDirective */]
                    ],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_3__bs_dropdown_container_component__["a" /* BsDropdownContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    BsDropdownModule.ctorParameters = function () { return []; };
    return BsDropdownModule;
}());
//# sourceMappingURL=bs-dropdown.module.js.map

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_positioning__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PositioningService; });


var PositioningService = (function () {
    function PositioningService() {
    }
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ng_positioning__["a" /* positionElements */])(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return document.querySelector(element);
        }
        if (element instanceof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) {
            return element.nativeElement;
        }
        return element;
    };
    PositioningService.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"] },
    ];
    /** @nocollapse */
    PositioningService.ctorParameters = function () { return []; };
    return PositioningService;
}());
//# sourceMappingURL=positioning.service.js.map

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tooltip_directive__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tooltip_config__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__component_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__positioning__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipModule; });







var TooltipModule = (function () {
    function TooltipModule() {
    }
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__tooltip_config__["a" /* TooltipConfig */], __WEBPACK_IMPORTED_MODULE_5__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_6__positioning__["a" /* PositioningService */]]
        };
    };
    ;
    TooltipModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */], __WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_3__tooltip_directive__["a" /* TooltipDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__tooltip_container_component__["a" /* TooltipContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TooltipModule.ctorParameters = function () { return []; };
    return TooltipModule;
}());
//# sourceMappingURL=tooltip.module.js.map

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__latin_map__ = __webpack_require__(71);
/* unused harmony reexport latinMap */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__typeahead_options_class__ = __webpack_require__(121);
/* unused harmony reexport TypeaheadOptions */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_match_class__ = __webpack_require__(72);
/* unused harmony reexport TypeaheadMatch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_utils__ = __webpack_require__(27);
/* unused harmony reexport escapeRegexp */
/* unused harmony reexport getValueFromObject */
/* unused harmony reexport tokenize */
/* unused harmony reexport latinize */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__typeahead_container_component__ = __webpack_require__(26);
/* unused harmony reexport TypeaheadContainerComponent */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__typeahead_directive__ = __webpack_require__(73);
/* unused harmony reexport TypeaheadDirective */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__typeahead_module__ = __webpack_require__(122);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__typeahead_module__["a"]; });







//# sourceMappingURL=index.js.map

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TypeaheadOptions */
var TypeaheadOptions = (function () {
    function TypeaheadOptions(options) {
        Object.assign(this, options);
    }
    return TypeaheadOptions;
}());
//# sourceMappingURL=typeahead-options.class.js.map

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_common__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__component_loader__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__positioning__ = __webpack_require__(11);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadModule; });






var TypeaheadModule = (function () {
    function TypeaheadModule() {
    }
    TypeaheadModule.forRoot = function () {
        return {
            ngModule: TypeaheadModule,
            providers: [__WEBPACK_IMPORTED_MODULE_4__component_loader__["a" /* ComponentLoaderFactory */], __WEBPACK_IMPORTED_MODULE_5__positioning__["a" /* PositioningService */]]
        };
    };
    ;
    TypeaheadModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"], args: [{
                    imports: [__WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]],
                    declarations: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    exports: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */], __WEBPACK_IMPORTED_MODULE_3__typeahead_directive__["a" /* TypeaheadDirective */]],
                    entryComponents: [__WEBPACK_IMPORTED_MODULE_2__typeahead_container_component__["a" /* TypeaheadContainerComponent */]]
                },] },
    ];
    /** @nocollapse */
    TypeaheadModule.ctorParameters = function () { return []; };
    return TypeaheadModule;
}());
//# sourceMappingURL=typeahead.module.js.map

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = OnChange;
/*tslint:disable:no-invalid-this */
function OnChange(defaultValue) {
    var sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            get: function () { return this[_key]; },
            set: function (value) {
                var prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
//# sourceMappingURL=decorators.js.map

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return win; });
/* unused harmony export document */
/* unused harmony export location */
/* unused harmony export gc */
/* unused harmony export performance */
/* unused harmony export Event */
/* unused harmony export MouseEvent */
/* unused harmony export KeyboardEvent */
/* unused harmony export EventTarget */
/* unused harmony export History */
/* unused harmony export Location */
/* unused harmony export EventListener */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || {};

var document = win.document;
var location = win.location;
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
//# sourceMappingURL=browser.js.map

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Trigger; });
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = (function () {
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
//# sourceMappingURL=trigger.class.js.map

/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__trigger_class__ = __webpack_require__(125);
/* unused harmony export parseTriggers */
/* harmony export (immutable) */ __webpack_exports__["a"] = listenToTriggers;

var DEFAULT_ALIASES = {
    hover: ['mouseenter', 'mouseleave'],
    focus: ['focusin', 'focusout']
};
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger) { return trigger.split(':'); })
        .map(function (triggerPair) {
        var alias = aliases[triggerPair[0]] || triggerPair;
        return new __WEBPACK_IMPORTED_MODULE_0__trigger_class__["a" /* Trigger */](alias[0], alias[1]);
    });
    var manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
    if (manualTriggers.length > 1) {
        throw 'Triggers parse error: only one manual trigger is allowed';
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw 'Triggers parse error: manual trigger can\'t be mixed with other triggers';
    }
    return parsedTriggers;
}
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    var parsedTriggers = parseTriggers(triggers);
    var listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    parsedTriggers.forEach(function (trigger) {
        if (trigger.open === trigger.close) {
            listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger.open, showFn), renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
//# sourceMappingURL=triggers.js.map

/***/ }),
/* 127 */
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\n    <li *ngFor=\"let crumb of crumbs\">\n\n        <!-- If there is a router link then use a tag -->\n        <a *ngIf=\"crumb.routerLink\"\n           [routerLink]=\"crumb.routerLink\" \n           [fragment]=\"crumb.fragment\" \n           [queryParams]=\"crumb.queryParams\" \n           (click)=\"clickCrumb($event, crumb)\">\n                {{ crumb.title }}\n        </a>\n\n        <!-- If there is not router link then display text in a span -->\n        <span *ngIf=\"!crumb.routerLink\">{{ crumb.title }}</span>\n    </li>\n</ol>"

/***/ }),
/* 128 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-checkbox\" tabindex=\"0\"\n    [class.ux-checked]=\"value == true\"\n    [class.ux-indeterminate]=\"value == indeterminateValue\"\n    [class.ux-simplified]=\"simplified == true\"\n    [class.ux-disabled]=\"disabled == true\"\n    (keydown.space)=\"keyDown($event)\">\n\n    <input type=\"checkbox\" role=\"checkbox\" tabindex=\"-1\"\n        [name]=\"name\" \n        [checked]=\"value\" \n        [disabled]=\"disabled\" />\n        \n</div>\n\n<div class=\"ux-checkbox-content\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-column-sorting\">\n    <i class=\"ux-column-sorting-icon hpe-icon\" \n        [class.hpe-ascend]=\"state===columnSortingState.Ascending\" \n        [class.hpe-descend]=\"state===columnSortingState.Descending\" \n        [class.column-sorting-icon-hidden]=\"state===columnSortingState.NoSort\"></i>\n    <p class=\"ux-column-sorting-number\">{{ orderNumber }}</p>\n</div>"

/***/ }),
/* 130 */
/***/ (function(module, exports) {

module.exports = "<div (uxResize)=\"onResize($event)\" throttle=\"16\" class=\"dashboard-container\">\n    <ng-content></ng-content>\n</div>\n\n<div class=\"position-indicator\" *ngIf=\"placeholder.visible\" [style.left.px]=\"placeholder.x\" [style.top.px]=\"placeholder.y\" [style.width.px]=\"placeholder.width\"\n    [style.height.px]=\"placeholder.height\"></div>"

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = "<div class=\"widget-content widget-col-span-{{ getColumnSpan() }} widget-row-span-{{ getRowSpan() }}\">\n    <ng-content></ng-content>\n</div>\n\n<div class=\"resizer-handle handle-top\" [style.top.px]=\"padding\" [hidden]=\"!resizable\"></div>\n<div class=\"resizer-handle handle-top-right\" [style.top.px]=\"padding\" [style.right.px]=\"padding\" [hidden]=\"!resizable && !stacked\"></div>\n<div class=\"resizer-handle handle-right\" [style.right.px]=\"padding\" [hidden]=\"!resizable || stacked\"></div>\n<div class=\"resizer-handle handle-bottom-right\" [style.bottom.px]=\"padding\" [style.right.px]=\"padding\" [hidden]=\"!resizable && !stacked\"></div>\n<div class=\"resizer-handle handle-bottom\" [style.bottom.px]=\"padding\" [hidden]=\"!resizable\"></div>\n<div class=\"resizer-handle handle-bottom-left\" [style.bottom.px]=\"padding\" [style.left.px]=\"padding\" [hidden]=\"!resizable && !stacked\"></div>\n<div class=\"resizer-handle handle-left\" [style.left.px]=\"padding\" [hidden]=\"!resizable || stacked\"></div>\n<div class=\"resizer-handle handle-top-left\" [style.top.px]=\"padding\" [style.left.px]=\"padding\" [hidden]=\"!resizable && !stacked\"></div>"

/***/ }),
/* 132 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-ebox-header\">\n    <ng-content select=\"ux-ebox-header\"></ng-content>\n</div>\n\n<div class=\"ux-ebox-content\">\n    <ng-content select=\"ux-ebox-content\"></ng-content>\n</div>"

/***/ }),
/* 133 */
/***/ (function(module, exports) {

module.exports = "<span class=\"facet-header-title\">{{ header }}</span>\n<span class=\"hpe-icon\" [class.hpe-down]=\"expanded\" [class.hpe-previous]=\"!expanded\" *ngIf=\"canExpand\"></span>"

/***/ }),
/* 134 */
/***/ (function(module, exports) {

module.exports = "<ux-facet-header [header]=\"header\" [(expanded)]=\"expanded\"></ux-facet-header>\n\n<!-- Create a container which will show when section is expanded -->\n<div class=\"facet-check-list-container\" [class.facet-check-list-scrollbar]=\"scrollbar\" *ngIf=\"expanded\">\n\n    <!-- Iterate through each possible facet -->\n    <div class=\"facet-check-list-item\" *ngFor=\"let facet of facets\" [class.facet-active]=\"isFacetSelected(facet)\" tabindex=\"0\"\n        (click)=\"toggleFacetSelection(facet)\" (keyup.enter)=\"toggleFacetSelection(facet)\" [class.disabled]=\"facet.disabled\">\n\n        <!-- Show check icon to indicate the state -->\n        <span class=\"facet-check-list-item-check\">\n            <span class=\"hpe-icon hpe-active\"></span>\n        </span>\n\n        <!-- Display the title -->\n        <span class=\"facet-check-list-item-title\">{{ facet.title }}</span>\n\n        <!-- Display the count if specified -->\n        <span class=\"facet-check-list-item-count\" *ngIf=\"facet.count !== undefined\">({{ facet.count }})</span>\n    </div>\n</div>"

/***/ }),
/* 135 */
/***/ (function(module, exports) {

module.exports = "<!-- Display Any Selected Facets -->\n<div class=\"facets-selected-container\">\n\n    <!-- Display Title an Clear Button -->\n    <div class=\"facets-selected-header-container\">\n\n        <!-- Show The Selected Text -->\n        <span class=\"facets-selected-header-label\">{{ header }}</span>\n\n        <!-- Add a Clear Button -->\n        <div class=\"facets-selected-clear-button\" tabindex=\"0\" [tooltip]=\"clearTooltip\" placement=\"left\" container=\"body\" (click)=\"deselectAllFacets()\"\n            (keyup.enter)=\"deselectAllFacets()\">\n\n            <svg class=\"facets-selected-clear-graphic\" viewBox=\"0 0 19 12\" shape-rendering=\"geometricPrecision\">\n                <rect class=\"light-grey\" x=\"0\" y=\"2\" width=\"7\" height=\"2\"></rect>\n                <rect class=\"dark-grey\" x=\"0\" y=\"5\" width=\"9\" height=\"2\"></rect>\n                <rect class=\"light-grey\" x=\"0\" y=\"8\" width=\"7\" height=\"2\"></rect>\n                <path class=\"dark-grey\" d=\"M9,1 h1 l9,9 v1 h-1 l-9,-9 v-1 Z\"></path>\n                <path class=\"dark-grey\" d=\"M9,11 v-1 l9,-9 h1 v1 l-9,9 h-1 Z\"></path>\n            </svg>\n        </div>\n\n    </div>\n\n    <!-- Display Tags For Selected Items -->\n    <div class=\"facets-selected-list\">\n\n        <!-- Show Selected Tags -->\n        <div class=\"facet-selected-tag\" tabindex=\"0\" *ngFor=\"let facet of facets\" (click)=\"deselectFacet(facet)\" (keyup.enter)=\"deselectFacet(facet)\">\n\n            <!-- Display Label -->\n            <span class=\"facet-selected-tag-label\">{{ facet.title }}</span>\n\n            <!-- Display Remove Icon -->\n            <span class=\"hpe-icon hpe-close\"></span>\n        </div>\n\n    </div>\n\n    <!-- Show Message Here if No Facets Selected -->\n    <p class=\"facets-selected-none-label\" *ngIf=\"emptyText && facets.length === 0\">{{ emptyText }}</p>\n\n</div>\n\n<!-- Any Facet Elements Should be Added Here By User -->\n<div class=\"facets-region\">\n    <ng-content></ng-content>\n</div>"

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = "<ux-facet-header [header]=\"header\" [(expanded)]=\"expanded\"></ux-facet-header>\n\n<div class=\"facet-typeahead-list-container\" *ngIf=\"expanded\">\n\n    <div class=\"facet-typeahead-list-selected-container\">\n\n        <div class=\"facet-typeahead-list-selected-option\" tabindex=\"0\" *ngFor=\"let facet of selected\" (click)=\"deselectFacet(facet)\"\n            (keyup.enter)=\"deselectFacet(facet)\">\n\n            <span class=\"facet-typeahead-list-selected-check hpe-icon hpe-active\"></span>\n            <span class=\"facet-typeahead-list-selected-option-title\">{{ facet.title }}</span>\n            <span class=\"facet-typeahead-list-selected-option-count\" *ngIf=\"facet.count\">({{ facet.count }})</span>\n            \n        </div>\n\n    </div>\n\n    <div class=\"facet-typeahead-list-control\">\n\n        <!-- Create Typeahead Control -->\n        <input type=\"text\" class=\"form-control\" [placeholder]=\"typeaheadConfig?.placeholder\" [typeahead]=\"typeaheadOptions\" [(ngModel)]=\"searchQuery\"\n            [typeaheadMinLength]=\"typeaheadConfig?.minCharacters\" [typeaheadOptionsLimit]=\"typeaheadConfig?.maxResults\" [typeaheadWaitMs]=\"typeaheadConfig?.delay\"\n            (typeaheadOnSelect)=\"selectOption($event)\" [typeaheadItemTemplate]=\"facetTypeaheadListOptionTemplate\">\n\n    </div>\n\n</div>\n\n<ng-template #facetTypeaheadListOptionTemplate let-model=\"item\" let-index=\"index\">\n    <p class=\"facet-typeahead-list-option\">{{ model.title }} <span class=\"facet-typeahead-list-option-count\" *ngIf=\"model.count\">({{ model.count }})</span></p>\n</ng-template>"

/***/ }),
/* 137 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-flipper\" [class.ux-flip-card]=\"flipped\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n\n    <div class=\"ux-flippable-card-front\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n        <ng-content select=\"ux-flippable-card-front\"></ng-content>\n    </div>\n\n    <div class=\"ux-flippable-card-back\" [style.width.px]=\"width\" [style.height.px]=\"height\">\n        <ng-content select=\"ux-flippable-card-back\"></ng-content>\n    </div>\n</div>"

/***/ }),
/* 138 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-item-display-panel\" [class.animate]=\"animate\" [class.item-display-panel-hide]=\"!visible\" [style.top]=\"top\" [style.height]=\"height\">\n\n    <div class=\"item-display-panel-header\" [class.item-display-panel-shadow]=\"shadow\">\n        <div class=\"heading-flex-box\">\n            <h3>{{ title }}</h3>\n            <span class=\"heading-close-button\" tabindex=\"0\" (click)=\"visible = false\" (keydown.enter)=\"visible = false\">\n                <i class=\"hpe-icon hpe-close\"></i>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"item-display-panel-content\">\n        <ng-content select=\"[uxItemDisplayPanelContent]\"></ng-content>\n    </div>\n\n    <div class=\"item-display-panel-footer\">\n        <ng-content select=\"[uxItemDisplayPanelFooter]\"></ng-content>\n    </div>\n\n</div>"

/***/ }),
/* 139 */
/***/ (function(module, exports) {

module.exports = "<div class=\"page-header-icon-menu\" dropdown dropdownToggle placement=\"bottom right\">\n\n    <a class=\"page-header-icon-menu-button\" (click)=\"select(menu)\">\n        <i class=\"hpe-icon\" [ngClass]=\"menu.icon\"></i>\n        <span class=\"label label-primary\" *ngIf=\"menu?.badge\">{{ menu.badge }}</span>\n    </a>\n\n    <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n\n        <li role=\"menuitem\" *ngFor=\"let dropdown of menu?.dropdown\" [class.dropdown-header]=\"dropdown.header\" [class.dropdown-divider]=\"dropdown.divider\">\n\n            <span class=\"font-bold\" *ngIf=\"dropdown.header\">{{ dropdown.title }}</span>\n\n            <a class=\"dropdown-item\" *ngIf=\"!dropdown.header\" (click)=\"select(dropdown)\">\n                <i class=\"hpe-icon hp-fw text-muted\" [ngClass]=\"dropdown.icon\"></i>\n                {{ dropdown.title }}\n                <span class=\"pull-right text-muted small\" *ngIf=\"dropdown.subtitle\">{{ dropdown.subtitle }}</span>\n            </a>\n        </li>\n\n    </ul>\n</div>"

/***/ }),
/* 140 */
/***/ (function(module, exports) {

module.exports = "<div role=\"menu-item\" dropdown [isOpen]=\"dropdownOpen\" container=\"body\" placement=\"right\" [isDisabled]=\"!item.children\" (mouseenter)=\"hoverStart()\"\n    (mouseleave)=\"hoverLeave()\" #subMenu=\"bs-dropdown\">\n\n    <!-- Show the menu item and the arrow if there are children -->\n    <a class=\"dropdown-item\" tabindex=\"0\" [class.selected]=\"item.selected\" (keyup.enter)=\"selectItem(item); subMenu.toggle()\" (click)=\"selectItem(item)\">\n        <span class=\"dropdown-item-title\">{{ item.title }}</span>\n        <span class=\"dropdown-item-icon hpe-icon hpe-next\" *ngIf=\"item.children\"></span>\n    </a>\n\n    <!-- Allow another level of menu items -->\n    <ul *dropdownMenu class=\"dropdown-menu horizontal-navigation-dropdown-submenu\" role=\"menu\" (mouseenter)=\"hoverStart()\" (mouseleave)=\"hoverLeave()\">\n\n        <li role=\"menuitem\" *ngFor=\"let subItem of item.children\" (click)=\"selectItem(subItem, item)\" (keyup.enter)=\"selectItem(subItem, item)\">\n            <a class=\"dropdown-item\" tabindex=\"0\" [class.selected]=\"subItem.selected\">\n                <span class=\"dropdown-item-title\">{{ subItem.title }}</span>\n            </a>\n        </li>\n    </ul>\n</div>"

/***/ }),
/* 141 */
/***/ (function(module, exports) {

module.exports = "<div class=\"horizontal-navigation-button\" dropdown dropdownToggle placement=\"bottom left\" [isDisabled]=\"!item?.children\" tabindex=\"0\" container=\"body\"\n    #menu=\"bs-dropdown\" (keyup.enter)=\"menu.toggle()\" [class.selected]=\"item?.selected\" (click)=\"selectItem()\">\n\n    <span class=\"hpe-icon navigation-item-icon\" *ngIf=\"item.icon\" [ngClass]=\"item?.icon\"></span>\n    <span class=\"navigation-item-label\">{{ item?.title }}</span>\n    <span class=\"hpe-icon hpe-down\" *ngIf=\"item?.children\"></span>\n\n    <div *dropdownMenu class=\"dropdown-menu horizontal-navigation-dropdown-menu\" role=\"menu\">\n        <ux-page-header-horizontal-navigation-dropdown-item *ngFor=\"let item of item?.children\" [item]=\"item\" (onSelect)=\"onItemSelect($event)\"></ux-page-header-horizontal-navigation-dropdown-item>\n    </div>\n\n</div>"

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = "<ux-page-header-horizontal-navigation-item *ngFor=\"let item of items\" [item]=\"item\" (onSelect)=\"onSelect($event)\"></ux-page-header-horizontal-navigation-item>"

/***/ }),
/* 143 */
/***/ (function(module, exports) {

module.exports = "<!-- Display Upper Section when not condensed -->\n<div class=\"page-header-actions\" *ngIf=\"!condensed\">\n\n    <div class=\"page-header-logo-container\" *ngIf=\"logo\">\n        <img [attr.src]=\"logo\" class=\"page-header-logo\">\n    </div>\n\n    <div class=\"page-header-navigation\" [ngClass]=\"alignment\">\n\n        <!-- The Top Navigation Options -->\n        <ux-page-header-horizontal-navigation [items]=\"items\"></ux-page-header-horizontal-navigation>\n    </div>\n\n    <div class=\"page-header-icon-menus\">\n        <ux-page-header-icon-menu *ngFor=\"let menu of iconMenus\" [menu]=\"menu\"></ux-page-header-icon-menu>\n    </div>\n</div>\n\n<!-- Display Lower Section When Not Condensed -->\n<div class=\"page-header-details\" *ngIf=\"!condensed\">\n\n    <div class=\"page-header-state-container\">\n\n        <div *ngIf=\"backVisible == true\" class=\"page-header-back-button\" (click)=\"goBack()\">\n            <span class=\"hpe-icon hpe-previous text-primary\"></span>\n        </div>\n\n        <div class=\"page-header-title-container\">\n\n            <ux-breadcrumbs [crumbs]=\"crumbs\"></ux-breadcrumbs>\n\n            <h1 class=\"page-header-title\">{{ header }}</h1>\n        </div>\n\n    </div>\n\n</div>\n\n<!-- Display This Section Optimized for Condensed Mode -->\n<div class=\"page-header-condensed-content\" *ngIf=\"condensed\">\n\n    <div class=\"page-header-breadcrumbs\">\n        <ux-breadcrumbs [crumbs]=\"getCondensedBreadcrumbs()\"></ux-breadcrumbs>\n    </div>\n\n    <div class=\"page-header-navigation\">\n\n        <!-- The Top Navigation Options -->\n        <ux-page-header-horizontal-navigation [items]=\"items\"></ux-page-header-horizontal-navigation>\n    </div>\n\n    <div class=\"page-header-icon-menus\">\n        <ux-page-header-icon-menu *ngFor=\"let menu of iconMenus\" [menu]=\"menu\"></ux-page-header-icon-menu>\n    </div>\n\n</div>"

/***/ }),
/* 144 */
/***/ (function(module, exports) {

module.exports = "<div class=\"progressbar-track\" [style.width.%]=\"percentage\" [style.backgroundColor]=\"barColor\">\n    <ng-content></ng-content>\n</div>"

/***/ }),
/* 145 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-radio-button\" tabindex=\"0\"\n    [class.ux-checked]=\"value === option\"\n    [class.ux-simplified]=\"simplified === true\"\n    [class.ux-disabled]=\"disabled === true\"\n    (keydown.space)=\"keyDown($event)\">\n\n    <input type=\"radio\" role=\"radio\" tabindex=\"-1\"\n        [name]=\"name\" \n        [checked]=\"value === option\" \n        [disabled]=\"disabled\"\n        [value]=\"option\"\n        [id]=\"id\" />\n        \n</div>\n\n<div class=\"ux-radio-button-content\">\n    <ng-content></ng-content>\n</div>\n"

/***/ }),
/* 146 */
/***/ (function(module, exports) {

module.exports = "<div class=\"track\" #track [class.narrow]=\"options.track.height === sliderSize.Narrow\" [class.wide]=\"options.track.height === sliderSize.Wide\">\n\n    <!-- Section Beneath Lower Thumb -->\n    <div class=\"track-section track-lower\" [style.flex-grow]=\"tracks.lower.size\" [style.background]=\"tracks.lower.color\"></div>\n\n    <!-- Lower Thumb Button / Line -->\n    <div class=\"thumb lower\" #lowerThumb [style.left.%]=\"thumbs.lower.position\" [style.z-index]=\"thumbs.lower.order\" [class.button]=\"options.handles.style === sliderStyle.Button\"\n        [class.line]=\"options.handles.style === sliderStyle.Line\" [class.narrow]=\"options.track.height === sliderSize.Narrow\"\n        [class.wide]=\"options.track.height === sliderSize.Wide\" (mouseenter)=\"thumbEvent(sliderThumb.Lower, sliderThumbEvent.MouseOver)\"\n        (mouseleave)=\"thumbEvent(sliderThumb.Lower, sliderThumbEvent.MouseLeave)\" (mousedown)=\"thumbEvent(sliderThumb.Lower, sliderThumbEvent.DragStart)\">\n\n        <!-- Lower Thumb Callout -->\n        <div class=\"tooltip top tooltip-lower\" #lowerTooltip [style.opacity]=\"tooltips.lower.visible ? 1 : 0\" [style.left.px]=\"tooltips.lower.position\">\n            <div class=\"tooltip-arrow\" [style.border-top-color]=\"options.handles.callout.background\"></div>\n            <div class=\"tooltip-inner\" [style.background-color]=\"options.handles.callout.background\" [style.color]=\"options.handles.callout.color\">\n                {{ tooltips.lower.label }}\n            </div>\n        </div>\n\n    </div>\n\n    <!-- Section of Track Between Lower and Upper Thumbs -->\n    <div class=\"track-section track-range\" *ngIf=\"options.type === sliderType.Range\" [style.flex-grow]=\"tracks.middle.size\" [style.background]=\"tracks.middle.color\">\n    </div>\n\n    <!-- Upper Thumb Button / Line -->\n    <div class=\"thumb upper\" #upperThumb [hidden]=\"options.type !== sliderType.Range\" [style.left.%]=\"thumbs.upper.position\" [style.z-index]=\"thumbs.upper.order\"\n        [class.button]=\"options.handles.style === sliderStyle.Button\" [class.line]=\"options.handles.style === sliderStyle.Line\"\n        [class.narrow]=\"options.track.height === sliderSize.Narrow\" [class.wide]=\"options.track.height === sliderSize.Wide\" (mouseenter)=\"thumbEvent(sliderThumb.Upper, sliderThumbEvent.MouseOver)\"\n        (mouseleave)=\"thumbEvent(sliderThumb.Upper, sliderThumbEvent.MouseLeave)\" (mousedown)=\"thumbEvent(sliderThumb.Upper, sliderThumbEvent.DragStart)\">\n\n        <!-- Upper Thumb Callout -->\n        <div class=\"tooltip top tooltip-upper\" #upperTooltip [style.opacity]=\"tooltips.upper.visible ? 1 : 0\" [style.left.px]=\"tooltips.upper.position\">\n            <div class=\"tooltip-arrow\" [style.border-top-color]=\"options.handles.callout.background\"></div>\n            <div class=\"tooltip-inner\" *ngIf=\"options.type === sliderType.Range\" [style.background-color]=\"options.handles.callout.background\"\n                [style.color]=\"options.handles.callout.color\">\n                {{ tooltips.upper.label }}\n            </div>\n        </div>\n    </div>\n\n    <!-- Section of Track Abover Upper Thumb -->\n    <div class=\"track-section track-higher\" [style.flex-grow]=\"tracks.upper.size\" [style.background]=\"tracks.upper.color\"></div>\n\n</div>\n\n<!-- Chart Ticks and Tick Labels -->\n<div class=\"tick-container\" *ngIf=\"options.track.ticks.major.show || options.track.ticks.minor.show\" [class.show-labels]=\"options.track.ticks.major.labels || options.track.ticks.minor.labels\">\n\n    <div class=\"tick\" *ngFor=\"let tick of ticks\" [class.major]=\"tick.type === sliderTickType.Major\" [class.minor]=\"tick.type === sliderTickType.Minor\"\n        [style.left.%]=\"tick.position\" [hidden]=\"!tick.showTicks\">\n        <div class=\"tick-indicator\"></div>\n        <div class=\"tick-label\" [hidden]=\"!tick.showLabels\">{{ tick.label }}</div>\n    </div>\n</div>"

/***/ }),
/* 147 */
/***/ (function(module, exports) {

module.exports = "<!-- Inline Spark Chart -->\n<div *ngIf=\"inlineLabel\" class=\"ux-spark-inline-label-container\">\n\n    <div class=\"ux-spark-inline-label-left\" [innerHtml]=\"inlineLabel\"></div>\n\n    <div class=\"ux-spark-line\">\n\n        <div class=\"ux-spark-top-container\" *ngIf=\"topLeftLabel || topRightLabel\">\n            <div class=\"ux-spark-label-top-left\" *ngIf=\"topLeftLabel\" [innerHtml]=\"topLeftLabel\"></div>\n            <div class=\"ux-spark-label-top-right\" *ngIf=\"topRightLabel\" [innerHtml]=\"topRightLabel\"></div>\n        </div>\n\n        <div class=\"ux-spark ux-inline\" [style.height.px]=\"barHeight\" [style.backgroundColor]=\"trackColor\" [tooltip]=\"tooltip\">\n            <div class=\"ux-spark-bar\" [style.width]=\"(value < 100 ? value : 100) + '%'\" [style.backgroundColor]=\"barColor\"></div>\n        </div>\n\n        <div class=\"ux-spark-bottom-container\" *ngIf=\"bottomLeftLabel || bottomRightLabel\">\n            <div class=\"ux-spark-label-bottom-left\" *ngIf=\"bottomLeftLabel\" [innerHtml]=\"bottomLeftLabel\"></div>\n            <div class=\"ux-spark-label-bottom-right\" *ngIf=\"bottomRightLabel\" [innerHtml]=\"bottomRightLabel\"></div>\n        </div>\n\n    </div>\n</div>\n\n<!-- End Inline Spark Chart -->\n\n\n<!-- Non Inline Spark Chart -->\n<div *ngIf=\"!inlineLabel\">\n\n    <div class=\"ux-spark-top-container\" *ngIf=\"topLeftLabel || topRightLabel\">\n        <div class=\"ux-spark-label-top-left\" *ngIf=\"topLeftLabel\" [innerHtml]=\"topLeftLabel\"></div>\n        <div class=\"ux-spark-label-top-right\" *ngIf=\"topRightLabel\" [innerHtml]=\"topRightLabel\"></div>\n    </div>\n\n    <div class=\"ux-spark\" [style.height.px]=\"barHeight\" [style.backgroundColor]=\"trackColor\" [tooltip]=\"tooltip\">\n        <div class=\"ux-spark-bar\" [style.width]=\"(value < 100 ? value : 100) + '%'\" [style.backgroundColor]=\"barColor\"></div>\n    </div>\n\n    <div class=\"ux-spark-bottom-container\" *ngIf=\"bottomLeftLabel || bottomRightLabel\">\n        <div class=\"ux-spark-label-bottom-left\" *ngIf=\"bottomLeftLabel\" [innerHtml]=\"bottomLeftLabel\"></div>\n        <div class=\"ux-spark-label-bottom-right\" *ngIf=\"bottomRightLabel\" [innerHtml]=\"bottomRightLabel\"></div>\n    </div>\n</div>\n\n<!-- End Non Inline Spark Chart -->"

/***/ }),
/* 148 */
/***/ (function(module, exports) {

module.exports = "<ol>\n    <li *ngFor=\"let tag of tags; let i = index\" class=\"ux-tag\"\n        [class.disabled]=\"disabled\"\n        [attr.tabindex]=\"disabled ? null : i\"\n        [focusIf]=\"isSelected(i)\"\n        (click)=\"tagClickHandler($event, tag, i)\"\n        (focus)=\"selectTagAt(i)\">\n        \n        <ng-container [ngTemplateOutlet]=\"tagTemplate\"\n            [ngOutletContext]=\"{tag: tag, index: i, disabled: disabled, api: tagApi}\">\n        </ng-container>\n\n    </li>\n    <li *ngIf=\"isInputVisible()\" class=\"ux-tag-input\">\n        <input #tagInput type=\"text\" class=\"ux-tag-input\"\n            [(ngModel)]=\"input\"\n            [class.invalid]=\"!inputValid\"\n            [placeholder]=\"disabled ? '' : (placeholder || '')\"\n            [disabled]=\"disabled\"\n            [focusIf]=\"isSelected(tags.length)\"\n            (click)=\"inputClickHandler()\"\n            (focus)=\"inputFocusHandler()\"\n            (paste)=\"inputPasteHandler($event)\">\n    </li>\n</ol>\n\n<ng-content #typeahead></ng-content>\n\n<ng-template #defaultTagTemplate let-tag=\"tag\" let-index=\"index\" let-disabled=\"disabled\" let-api=\"api\">\n    <span class=\"ux-tag-text\">{{api.getTagDisplay(tag)}}</span>\n    <button *ngIf=\"api.canRemoveTagAt(index)\" type=\"button\" class=\"ux-tag-remove\" [disabled]=\"disabled\" (click)=\"api.removeTagAt(index); $event.stopPropagation();\"><i class=\"hpe-icon hpe-close\"></i></button>\n</ng-template>"

/***/ }),
/* 149 */
/***/ (function(module, exports) {

module.exports = "<div class=\"ux-toggleswitch\" \n  tabindex=\"0\"\n  (keydown)=\"keydown($event)\"\n  [class.checked]=\"value === true\"\n  [class.disabled]=\"disabled === true\">\n\n  <span class=\"ux-toggleswitch-bg\"></span>\n  \n  <span class=\"ux-toggleswitch-nub\"></span>\n\n  <input type=\"checkbox\" \n    role=\"checkbox\"\n    [name]=\"name\" \n    [checked]=\"value === true\"\n    [disabled]=\"disabled === true\"\n    tabindex=\"-1\" />\n</div>\n\n<div class=\"ux-toggleswitch-content\">\n  <ng-content></ng-content>\n</div>\n"

/***/ }),
/* 150 */
/***/ (function(module, exports) {

module.exports = "<ol *ngIf=\"visibleOptions.length > 0\">\n    <li *ngFor=\"let option of visibleOptions; let i = index\"\n        [class.disabled]=\"isDisabled(option)\"\n        [class.highlighted]=\"isHighlighted(option)\"\n        [uxScrollIntoViewIf]=\"isHighlighted(option)\"\n        [scrollParent]=\"typeaheadElement\"\n        (mousedown)=\"optionMousedownHandler($event)\"\n        (click)=\"optionClickHandler($event, option)\"\n        (mouseover)=\"highlight(option)\">\n\n        <ng-container [ngTemplateOutlet]=\"optionTemplate\"\n            [ngOutletContext]=\"{option: option, api: optionApi}\">\n        </ng-container>\n\n    </li>\n</ol>\n<div *ngIf=\"visibleOptions.length === 0\">\n    <ng-container [ngTemplateOutlet]=\"noOptionsTemplate\">\n    </ng-container>\n</div>\n\n<ng-template #defaultOptionTemplate let-option=\"option\" let-api=\"api\">\n    <span class=\"ux-typeahead-option\" [innerHtml]=\"api.getDisplayHtml(option)\"></span>\n</ng-template>\n\n<ng-template #defaultNoOptionsTemplate>\n    <span class=\"ux-typeahead-no-options\">No results</span>\n</ng-template>"

/***/ }),
/* 151 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_151__;

/***/ }),
/* 152 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_152__;

/***/ }),
/* 153 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_153__;

/***/ }),
/* 154 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_154__;

/***/ }),
/* 155 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_155__;

/***/ }),
/* 156 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_156__;

/***/ })
/******/ ]);
});