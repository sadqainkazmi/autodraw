webpackJsonp([1,4],{

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(45)();
// imports


// module
exports.push([module.i, ".canvas {\n  width: 365px;\n  margin-bottom: 55px;\n  vertical-align: top; }\n  .canvas canvas {\n    border: 1px solid #B3C8B6;\n    display: block;\n    background-color: white; }\n  .canvas .clear-canvas-button {\n    margin-top: 10px;\n    padding: 7px;\n    font-size: 16px;\n    border-radius: 5px;\n    color: white;\n    background-color: #ff4f75;\n    cursor: pointer;\n    position: absolute;\n    margin-bottom: 40px;\n    outline: none; }\n\n.canvas, .autodraw-results {\n  margin-top: 45px;\n  margin-left: 40px; }\n\n.canvas, .autodraw-results, canvas {\n  border-radius: 10px;\n  display: inline-block; }\n\n.autodraw-results {\n  width: 650px;\n  height: 350px;\n  overflow-y: auto;\n  background-color: white;\n  box-shadow: 0px 1px 8px #B3C8B6; }\n\n.autodraw-image {\n  border: 1px solid #B3C8B6;\n  display: inline-block;\n  width: 90px;\n  height: 90px;\n  padding: 0;\n  margin: 5px;\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 142:
/***/ (function(module, exports) {

module.exports = "<header>\r\n  <h1>AutoDraw<br><h2>An Intelligent App</h2></h1>\r\n  <h2>Artificial Intelligent Project | PAF-Kiet 102470</h2>\r\n \r\n</header>\r\n\r\n<div class=\"canvas\">\r\n  <canvas #canvas width=\"350\" height=\"350\"></canvas>\r\n  <button type=\"button\" class=\"clear-canvas-button\" (click)=\"eraseCanvas()\">Clear canvas</button>\r\n</div>\r\n\r\n\r\n<div class=\"autodraw-results\">\r\n  <ng-template ngFor [ngForOf]=\"drawSuggestions\" let-suggestion>\r\n    <figure class=\"autodraw-image\" *ngFor=\"let icon of suggestion.icons\" (click)=\"pickSuggestion(icon)\">\r\n      <img src=\"{{ icon }}\" width=\"90\" height=\"90\" alt=\"{{ suggestion.name }}\" title=\"{{ suggestion.name }}\">\r\n    </figure>\r\n  </ng-template>\r\n</div>\r\n"

/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(78);


/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auto_draw_service__ = __webpack_require__(86);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auto_draw_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 77:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 77;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(87);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_fromEvent__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(autoDrawService) {
        this.autoDrawService = autoDrawService;
        this.previousXAxis = 0;
        this.previousYAxis = 0;
        this.currentXAxis = 0;
        this.currentYAxis = 0;
        this.pressing = false;
        this.shapes = [];
        this.intervalLastPosition = [-1, -1];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.autoDrawService.loadStencils();
        this.context = this.canvas.nativeElement.getContext('2d');
        var mouseEvents = ['mousemove', 'mousedown', 'mouseup', 'mouseout'];
        this.canvasMouseEventSubscriptions = mouseEvents.map(function (mouseEvent) { return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"]
            .fromEvent(_this.canvas.nativeElement, mouseEvent)
            .subscribe(function (event) { return _this.draw(event); }); });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.canvasMouseEventSubscriptions; _i < _a.length; _i++) {
            var mouseEventSubscription = _a[_i];
            mouseEventSubscription.unsubscribe();
        }
    };
    AppComponent.prototype.eraseCanvas = function () {
        this.shapes = [];
        this.context.clearRect(0, 0, this.canvas.nativeElement.width, this.canvas.nativeElement.height);
    };
    AppComponent.prototype.prepareNewShape = function () {
        this.currentShape = [
            [],
            [],
            [] // Times
        ];
    };
    AppComponent.prototype.storeCoordinates = function () {
        if (this.intervalLastPosition[0] !== this.previousXAxis && this.intervalLastPosition[1] !== this.previousYAxis) {
            this.intervalLastPosition = [this.previousXAxis, this.previousYAxis];
            this.currentShape = [
                this.currentShape[0].concat([this.previousXAxis]),
                this.currentShape[1].concat([this.previousYAxis]),
                this.currentShape[2].concat([Date.now() - this.pressedAt])
            ];
        }
    };
    AppComponent.prototype.onDrawingMouseDown = function (mouseEvent) {
        var _this = this;
        var highlightStartPoint, drawColorStartingPoint = 'black';
        this.previousXAxis = this.currentXAxis;
        this.previousYAxis = this.currentYAxis;
        this.currentXAxis = mouseEvent.clientX - this.canvas.nativeElement.offsetLeft;
        this.currentYAxis = mouseEvent.clientY - this.canvas.nativeElement.offsetTop;
        this.pressing = true;
        this.pressedAt = Date.now();
        highlightStartPoint = true;
        this.prepareNewShape();
        if (highlightStartPoint) {
            this.context.beginPath();
            this.context.fillStyle = drawColorStartingPoint;
            this.context.fillRect(this.currentXAxis, this.currentYAxis, 2, 2);
            this.context.closePath();
            highlightStartPoint = false;
        }
        // Stores coordinates every 9ms
        return window.setInterval(function () { return _this.storeCoordinates(); }, 9);
    };
    AppComponent.prototype.onDrawingMouseMove = function (mouseEvent) {
        var drawStroke = 8, drawColor = 'black';
        this.previousXAxis = this.currentXAxis;
        this.previousYAxis = this.currentYAxis;
        this.currentXAxis = mouseEvent.clientX - this.canvas.nativeElement.offsetLeft;
        this.currentYAxis = mouseEvent.clientY - this.canvas.nativeElement.offsetTop;
        this.context.beginPath();
        this.context.moveTo(this.previousXAxis, this.previousYAxis);
        this.context.lineTo(this.currentXAxis, this.currentYAxis);
        this.context.strokeStyle = drawColor;
        this.context.fillStyle = drawColor;
        this.context.lineCap = 'round';
        this.context.lineJoin = 'round';
        this.context.lineWidth = drawStroke;
        this.context.stroke();
        this.context.closePath();
    };
    AppComponent.prototype.draw = function (mouseEvent) {
        var storeCoordinateInterval;
        if (mouseEvent.type === 'mousedown') {
            storeCoordinateInterval = this.onDrawingMouseDown(mouseEvent);
        }
        if (mouseEvent.type === 'mouseup' || this.pressing && mouseEvent.type === 'mouseout') {
            this.pressing = false;
            clearInterval(storeCoordinateInterval);
            this.commitCurrentShape();
        }
        if (mouseEvent.type === 'mousemove' && this.pressing) {
            this.onDrawingMouseMove(mouseEvent);
        }
    };
    AppComponent.prototype.commitCurrentShape = function () {
        var _this = this;
        this.shapes.push(this.currentShape);
        var drawOptions = {
            canvasWidth: this.canvas.nativeElement.width,
            canvasHeight: this.canvas.nativeElement.height
        };
        this.autoDrawService.drawSuggestions(this.shapes, drawOptions)
            .subscribe(function (suggestions) { return _this.drawSuggestions = suggestions; });
    };
    AppComponent.prototype.pickSuggestion = function (source) {
        var _this = this;
        this.eraseCanvas();
        var image = new Image();
        image.onload = function () { return _this.context.drawImage(image, 0, 0); };
        image.src = source;
    };
    return AppComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* ViewChild */])('canvas'),
    __metadata("design:type", Object)
], AppComponent.prototype, "canvas", void 0);
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_6" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(142),
        styles: [__webpack_require__(141)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AutoDrawService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services__["a" /* AutoDrawService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(52);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services__["a" /* AutoDrawService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AutoDrawService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var API_ENDPOINT = 'https://inputtools.google.com/request?ime=handwriting&app=autodraw&dbg=1&cs=1&oe=UTF-8';
var STENCILS_ENDPOINT = 'src/data/stencils.json';
var AutoDrawService = (function () {
    function AutoDrawService(http) {
        this.http = http;
    }
    AutoDrawService.prototype.loadStencils = function () {
        var _this = this;
        this.http.get(STENCILS_ENDPOINT).subscribe(function (response) { return _this.stencils = response.json(); });
    };
    AutoDrawService.prototype.drawSuggestions = function (shapes, drawOptions) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Headers */]({
            'Content-Type': 'application/json; charset=utf-8'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return this.http.post(API_ENDPOINT, JSON.stringify({
            input_type: 0,
            requests: [{
                    language: 'autodraw',
                    writing_guide: {
                        "width": drawOptions.canvasWidth,
                        "height": drawOptions.canvasHeight
                    },
                    ink: shapes
                }]
        }), options).map(function (response) {
            var data = response.json();
            var results = JSON.parse(data[1][0][3].debug_info.match(/SCORESINKS: (.*) Service_Recognize:/)[1])
                .map(function (result) {
                return {
                    name: result[0],
                    icons: (_this.stencils[result[0]] || []).map(function (collection) { return collection.src; })
                };
            });
            return results;
        });
    };
    return AutoDrawService;
}());
AutoDrawService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AutoDrawService);

var _a;
//# sourceMappingURL=auto-draw.service.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=environment.js.map

/***/ })

},[174]);
//# sourceMappingURL=main.bundle.js.map