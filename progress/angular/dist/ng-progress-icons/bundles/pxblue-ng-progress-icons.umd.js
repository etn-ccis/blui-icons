(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('@pxblue/ng-progress-icons', ['exports', '@angular/core', '@angular/common'], factory) :
    (factory((global.pxblue = global.pxblue || {}, global.pxblue['ng-progress-icons'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgProgressIconsService = /** @class */ (function () {
        function NgProgressIconsService() {
        }
        NgProgressIconsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] },
        ];
        /** @nocollapse */
        NgProgressIconsService.ctorParameters = function () { return []; };
        /** @nocollapse */ NgProgressIconsService.ngInjectableDef = i0.defineInjectable({ factory: function NgProgressIconsService_Factory() { return new NgProgressIconsService(); }, token: NgProgressIconsService, providedIn: "root" });
        return NgProgressIconsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgProgressIconsComponent = /** @class */ (function () {
        function NgProgressIconsComponent() {
        }
        /**
         * @return {?}
         */
        NgProgressIconsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        NgProgressIconsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'progress-ng-progress-icons',
                        template: "\n    <p>\n      ng-progress-icons works!\n    </p>\n  ",
                        styles: []
                    },] },
        ];
        /** @nocollapse */
        NgProgressIconsComponent.ctorParameters = function () { return []; };
        return NgProgressIconsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var rangeValue = ( /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */function (value, min, max) {
        return Math.max(min, Math.min(value, max));
    });
    /** @type {?} */
    var getCoordinates = ( /**
     * @param {?} percent
     * @param {?=} radius
     * @return {?}
     */function (percent, radius) {
        if (radius === void 0) {
            radius = 12;
        }
        return {
            x: radius + (radius * Math.cos((percent / 100) * 2 * Math.PI)),
            y: radius + (radius * Math.sin((percent / 100) * 2 * Math.PI))
        };
    });

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var BatteryComponent = /** @class */ (function () {
        function BatteryComponent() {
            this.percent = 100;
            this.size = 24;
            this.charging = false;
            this.outlined = false;
            this.basePath = 'M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z';
            this.chargePath = 'M20,10V8.33a1.319,1.319,0,0,0-1-1.263A1.257,1.257,0,0,0,18.67,7H3.34A1.338,1.338,0,0,0,2,8.33v7.33A1.338,1.338,0,0,0,3.33,17H18.67a1.257,1.257,0,0,0,.33-.067,1.319,1.319,0,0,0,1-1.263V14h2V10Zm-8.5,3v2L4,11H9.5V9L17,13Z';
            this.outlinedPath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
            this.baseID = 'pxb-battery-clip';
            this.chargeID = 'pxb-battery-clip-charge';
            this.rv = rangeValue;
        }
        /**
         * @return {?}
         */
        BatteryComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.maskIDleft = 'maskLeft-' + this.percent;
                this.maskIDright = 'maskRight-' + this.percent;
                this.startX = this.outlined ? 3.9 : 2;
                this.fillWidth = this.outlined ? 14.2 : 18;
            };
        /**
         * @return {?}
         */
        BatteryComponent.prototype.getBasepath = /**
         * @return {?}
         */
            function () {
                return (this.outlined ? this.outlinedPath : this.basePath);
            };
        /**
         * @return {?}
         */
        BatteryComponent.prototype.getClipPath = /**
         * @return {?}
         */
            function () {
                return (this.charging ? this.chargePath : this.basePath);
            };
        /**
         * @return {?}
         */
        BatteryComponent.prototype.getID = /**
         * @return {?}
         */
            function () {
                return (this.charging ? this.chargeID : this.baseID);
            };
        BatteryComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'battery-progress',
                        template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"> \n    \n    <defs>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDleft\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <polygon fill=\"black\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 \" />\n      </mask>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDright\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <rect [attr.x]=\"startX\" y=\"7\" fill=\"black\"  [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\" />\n      </mask>\n    </defs>\n    <path [attr.fill]=\"color || 'currentColor'\"  [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.d]=\"getBasepath()\"/>\n      <clipPath [id]=\"getID()\">\n        <path overflow=\"visible\" [attr.d]=\"getClipPath()\"/>\n      </clipPath>\n      <g  [attr.fill]= \"color || 'currentColor'\">\n      \n<rect [attr.fill]=\"color || 'currentColor'\" [attr.x]=\"startX\" y=\"7\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\"  [attr.mask]=\"outlined && charging ? 'url(#' + maskIDleft + ')' : null\"/>\n<polygon  *ngIf = \"outlined && charging\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13\" [attr.mask]=\"'url(#' + maskIDright + ')'\" />\n      </g>\n    </svg>\n  ",
                        styles: [],
                        inputs: ['percent', 'size', 'color', 'charging', 'outlined']
                    },] },
        ];
        /** @nocollapse */
        BatteryComponent.ctorParameters = function () { return []; };
        return BatteryComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var HeartComponent = /** @class */ (function () {
        function HeartComponent() {
            this.percent = 100;
            this.size = 24;
            this.outlined = false;
            this.basePath = 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z';
            this.outlinedPath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
            this.rv = rangeValue;
        }
        /**
         * @return {?}
         */
        HeartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.startY = this.outlined ? 19.45 : 21.35;
                this.startX = this.outlined ? 14.55 : 18.35;
            };
        /**
         * @return {?}
         */
        HeartComponent.prototype.getPath = /**
         * @return {?}
         */
            function () {
                return (this.outlined ? this.outlinedPath : this.basePath);
            };
        HeartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'heart-progress',
                        template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n      <path [attr.fill]=\"color || 'currentColor'\" [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.d]=\"getPath()\"/>\n      <clipPath id=\"pxb-heart-clip\">\n        <path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>\n      </clipPath>\n      <rect [attr.fill]=\"color || 'currentColor'\" clip-path=\"url(#pxb-heart-clip)\" x=\"2\" [attr.y]=\"startY-(rv(percent,0,100))*startX/100\" width=\"20\" height=\"20\" />\n    </svg>\n  ",
                        styles: [],
                        inputs: ['percent', 'size', 'color', 'outlined']
                    },] },
        ];
        /** @nocollapse */
        HeartComponent.ctorParameters = function () { return []; };
        return HeartComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PieComponent = /** @class */ (function () {
        function PieComponent() {
            this.percent = 100;
            this.size = 24;
            this.ring = 10;
            this.outlined = false;
            this.iconStroke = 2;
            // Ring properties
            this.centerX = 12;
            this.centerY = 12;
            // Outer ring
            this.outerRadiusLarge = 10;
        }
        /**
         * @return {?}
         */
        PieComponent.prototype.getPath = /**
         * @return {?}
         */
            function () {
                return "M 12,12 H 24 A 12,12,0," + (this.percent >= 50 ? 1 : 0) + ",1," + getCoordinates(this.percent)['x'] + "," + getCoordinates(this.percent)['y'] + "Z";
            };
        /**
         * @return {?}
         */
        PieComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
                this.stroke = this.outlined ? Math.max(this.stroke, 2 * this.iconStroke + 1) : this.stroke;
                this.innerRadiusLarge = 10 - this.iconStroke;
                this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
                this.innerRadiusSmall = 10 - this.stroke;
                if (this.innerRadiusSmall === 0) {
                    this.outerRadiusSmall = 0;
                }
                this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
                this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
                this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
            };
        PieComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'pie-progress',
                        template: "\n    <svg [attr.height]=\"size+'px'\" \n    [attr.width]=\"size+'px'\" \n    x=\"0px\" y=\"0px\" \n    viewBox=\"0 0 24 24\" \n    style=\"transform: rotate(-.25turn)\">\n\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"clipPath\"/>\n      </clipPath>\n      <path [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\"\n      [attr.fill]=\"color || 'currentColor'\" \n      [attr.fill-opacity]=\"outlined || percent >= 100 ? '1' : '0.3'\"\n      [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n    />\n    <path *ngIf=\"percent > 0 && percent < 100\" \n    [attr.fill]=\"color || 'currentColor'\" \n    [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" \n    [attr.d]= \"getPath()\"  />\n\n      <circle *ngIf=\"percent === 100 && outlined\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\"></circle>\n      \n    </svg>\n  ",
                        styles: [],
                        inputs: ['percent', 'size', 'color', 'ring', 'outlined']
                    },] },
        ];
        /** @nocollapse */
        PieComponent.ctorParameters = function () { return []; };
        return PieComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NgProgressIconsModule = /** @class */ (function () {
        function NgProgressIconsModule() {
        }
        NgProgressIconsModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule
                        ],
                        declarations: [NgProgressIconsComponent, BatteryComponent, HeartComponent, PieComponent],
                        exports: [
                            NgProgressIconsComponent,
                            BatteryComponent, HeartComponent, PieComponent
                        ]
                    },] },
        ];
        return NgProgressIconsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NgProgressIconsService = NgProgressIconsService;
    exports.NgProgressIconsComponent = NgProgressIconsComponent;
    exports.NgProgressIconsModule = NgProgressIconsModule;
    exports.BatteryComponent = BatteryComponent;
    exports.HeartComponent = HeartComponent;
    exports.PieComponent = PieComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhibHVlLW5nLXByb2dyZXNzLWljb25zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMuc2VydmljZS50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi91dGlsaXRpZXMudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL2hlYXJ0L2hlYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvcGllL3BpZS5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL25nLXByb2dyZXNzLWljb25zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUHJvZ3Jlc3NJY29uc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1uZy1wcm9ncmVzcy1pY29ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1wcm9ncmVzcy1pY29ucyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImV4cG9ydCBjb25zdCByYW5nZVZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KXtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLE1hdGgubWluKHZhbHVlLG1heCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBlcmNlbnQsIHJhZGl1cyA9IDEyKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChwZXJjZW50LzEwMCkgKiAyKk1hdGguUEkpICksXG4gICAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhdHRlcnktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPiBcbiAgICBcbiAgICA8ZGVmcz5cbiAgICAgIDxtYXNrICpuZ0lmID0gXCJvdXRsaW5lZCBcIiBbYXR0ci5pZF09XCJtYXNrSURsZWZ0XCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cG9seWdvbiBmaWxsPVwiYmxhY2tcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTMgXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICAgIDxtYXNrICpuZ0lmID0gXCJvdXRsaW5lZCBcIiBbYXR0ci5pZF09XCJtYXNrSURyaWdodFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHJlY3QgW2F0dHIueF09XCJzdGFydFhcIiB5PVwiN1wiIGZpbGw9XCJibGFja1wiICBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCpmaWxsV2lkdGgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgPC9kZWZzPlxuICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIihvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCkgPyAnMScgOiAnMC4zJ1wiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiIFthdHRyLmRdPVwiZ2V0QmFzZXBhdGgoKVwiLz5cbiAgICAgIDxjbGlwUGF0aCBbaWRdPVwiZ2V0SUQoKVwiPlxuICAgICAgICA8cGF0aCBvdmVyZmxvdz1cInZpc2libGVcIiBbYXR0ci5kXT1cImdldENsaXBQYXRoKClcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPGcgIFthdHRyLmZpbGxdPSBcImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCI+XG4gICAgICBcbjxyZWN0IFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci54XT1cInN0YXJ0WFwiIHk9XCI3XCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIud2lkdGhdPVwicnYocGVyY2VudC8xMDAqZmlsbFdpZHRoLCAwLCAxMDApXCIgaGVpZ2h0PVwiMTBcIiAgW2F0dHIubWFza109XCJvdXRsaW5lZCAmJiBjaGFyZ2luZyA/ICd1cmwoIycgKyBtYXNrSURsZWZ0ICsgJyknIDogbnVsbFwiLz5cbjxwb2x5Z29uICAqbmdJZiA9IFwib3V0bGluZWQgJiYgY2hhcmdpbmdcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTNcIiBbYXR0ci5tYXNrXT1cIid1cmwoIycgKyBtYXNrSURyaWdodCArICcpJ1wiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAnY2hhcmdpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDogbnVtYmVyID0gMTAwO1xuICBzaXplOiBudW1iZXIgPSAyNDtcbiAgY29sb3I6IHN0cmluZztcbiAgY2hhcmdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3V0bGluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbWFza0lEbGVmdDtcbiAgbWFza0lEcmlnaHQ7XG4gIHN0YXJ0WDtcbiAgZmlsbFdpZHRoO1xuXG5cbiAgYmFzZVBhdGggPSAnTTIwLDEwVjguM0MyMCw3LjYsMTkuNCw3LDE4LjcsN0gzLjNDMi42LDcsMiw3LjYsMiw4LjN2Ny4zQzIsMTYuNCwyLjYsMTcsMy4zLDE3aDE1LjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjE0aDJ2LTRIMjB6JztcbiAgY2hhcmdlUGF0aCA9ICdNMjAsMTBWOC4zM2ExLjMxOSwxLjMxOSwwLDAsMC0xLTEuMjYzQTEuMjU3LDEuMjU3LDAsMCwwLDE4LjY3LDdIMy4zNEExLjMzOCwxLjMzOCwwLDAsMCwyLDguMzN2Ny4zM0ExLjMzOCwxLjMzOCwwLDAsMCwzLjMzLDE3SDE4LjY3YTEuMjU3LDEuMjU3LDAsMCwwLC4zMy0uMDY3LDEuMzE5LDEuMzE5LDAsMCwwLDEtMS4yNjNWMTRoMlYxMFptLTguNSwzdjJMNCwxMUg5LjVWOUwxNywxM1onO1xuICBvdXRsaW5lZFBhdGggPSAnTTE4LDl2Nkg0VjlIMThtLjctMkgzLjNBMS4zMjQsMS4zMjQsMCwwLDAsMiw4LjN2Ny4zQTEuMzQ3LDEuMzQ3LDAsMCwwLDMuMywxN0gxOC42YTEuMzI0LDEuMzI0LDAsMCwwLDEuMy0xLjNWMTRoMlYxMEgyMFY4LjNBMS4zMjQsMS4zMjQsMCwwLDAsMTguNyw3Wic7XG4gIGJhc2VJRCA9ICdweGItYmF0dGVyeS1jbGlwJztcbiAgY2hhcmdlSUQgPSAncHhiLWJhdHRlcnktY2xpcC1jaGFyZ2UnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5tYXNrSURsZWZ0ID0gJ21hc2tMZWZ0LScgKyB0aGlzLnBlcmNlbnQ7XG4gICAgdGhpcy5tYXNrSURyaWdodCA9ICdtYXNrUmlnaHQtJyArIHRoaXMucGVyY2VudDtcblxuICAgIHRoaXMuc3RhcnRYID0gdGhpcy5vdXRsaW5lZCA/IDMuOSA6IDI7XG4gICAgdGhpcy5maWxsV2lkdGggPSB0aGlzLm91dGxpbmVkID8gMTQuMiA6IDE4O1xuICB9XG5cblxuICBnZXRCYXNlcGF0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMub3V0bGluZWQgPyB0aGlzLm91dGxpbmVkUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIGdldENsaXBQYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIGdldElEKCkge1xuICAgIHJldHVybiAodGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlSUQgOiB0aGlzLmJhc2VJRCk7XG4gIH1cblxuICBydiA9IHJhbmdlVmFsdWU7XG5cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYXJ0LXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuZF09XCJnZXRQYXRoKClcIi8+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJweGItaGVhcnQtY2xpcFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxyZWN0IFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBjbGlwLXBhdGg9XCJ1cmwoI3B4Yi1oZWFydC1jbGlwKVwiIHg9XCIyXCIgW2F0dHIueV09XCJzdGFydFktKHJ2KHBlcmNlbnQsMCwxMDApKSpzdGFydFgvMTAwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEhlYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgb3V0bGluZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBzdGFydFk7XG4gIHN0YXJ0WDtcblxuICBiYXNlUGF0aCA9ICdNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXonO1xuICBvdXRsaW5lZFBhdGggPSAnTTE2LjUsNUEzLjQ2MiwzLjQ2MiwwLDAsMSwyMCw4LjVjMCwyLjg4NS0zLjEyNSw1LjcyNS03Ljg1NiwxMC4wMjRsLS4wMzUuMDMyLS4xLjA5NC0uMTI0LS4xMTNDNy4xMzUsMTQuMjM0LDQsMTEuMzkxLDQsOC41QTMuNDYyLDMuNDYyLDAsMCwxLDcuNSw1YTMuOTYsMy45NiwwLDAsMSwyLjk3NywxLjM4N0wxMiw4LjE3NWwxLjUyMy0xLjc4OEEzLjk2LDMuOTYsMCwwLDEsMTYuNSw1bTAtMkE1Ljk4OCw1Ljk4OCwwLDAsMCwxMiw1LjA5LDUuOTg4LDUuOTg4LDAsMCwwLDcuNSwzLDUuNDQ3LDUuNDQ3LDAsMCwwLDIsOC41YzAsMy43OCwzLjQsNi44Niw4LjU1LDExLjUzTDEyLDIxLjM1bDEuNDUtMS4zMUMxOC42LDE1LjM2LDIyLDEyLjI4LDIyLDguNUE1LjQ0Nyw1LjQ0NywwLDAsMCwxNi41LDNaJztcbiAgY29uc3RydWN0b3IoKSB7fVxuICAgXG5cbiAgbmdPbkluaXQoKSB7ICBcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMub3V0bGluZWQgPyAxOS40NSA6IDIxLjM1O1xuICAgIHRoaXMuc3RhcnRYID0gdGhpcy5vdXRsaW5lZCA/IDE0LjU1IDogMTguMzU7XG5cbiAgfVxuXG4gIGdldFBhdGgoKXtcbiAgICByZXR1cm4gKHRoaXMub3V0bGluZWQgPyB0aGlzLm91dGxpbmVkUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlLCBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgXG4gICAgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgXG4gICAgeD1cIjBweFwiIHk9XCIwcHhcIiBcbiAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgXG4gICAgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIj5cblxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cImNsaXBQYXRoXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxwYXRoIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIlxuICAgICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgICAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIm91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwID8gJzEnIDogJzAuMydcIlxuICAgICAgW2F0dHIuZF09XCJvdXRsaW5lZCA/IG91dGxpbmVCYXNlIDogdHdvVG9uZUJhc2VcIlxuICAgIC8+XG4gICAgPHBhdGggKm5nSWY9XCJwZXJjZW50ID4gMCAmJiBwZXJjZW50IDwgMTAwXCIgXG4gICAgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFxuICAgIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBcbiAgICBbYXR0ci5kXT0gXCJnZXRQYXRoKClcIiAgLz5cblxuICAgICAgPGNpcmNsZSAqbmdJZj1cInBlcmNlbnQgPT09IDEwMCAmJiBvdXRsaW5lZFwiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj48L2NpcmNsZT5cbiAgICAgIFxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ3JpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICByaW5nOiBudW1iZXIgPSAxMDtcbiAgb3V0bGluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3V0bGluZUJhc2U7XG4gIHR3b1RvbmVCYXNlO1xuICBjbGlwUGF0aDtcbiAgaWNvblN0cm9rZSA9IDI7XG4gIHN0cm9rZTtcbiAgXG5cbiAgLy8gUmluZyBwcm9wZXJ0aWVzXG4gIGNlbnRlclggPSAxMjtcbiAgY2VudGVyWSA9IDEyO1xuXG4gIC8vIE91dGVyIHJpbmdcbiAgb3V0ZXJSYWRpdXNMYXJnZSA9IDEwO1xuICBpbm5lclJhZGl1c0xhcmdlO1xuXG4gIC8vIElubmVyIFJpbmdcbiAgb3V0ZXJSYWRpdXNTbWFsbDtcbiAgaW5uZXJSYWRpdXNTbWFsbDtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbmdldFBhdGgoKXtcbiAgcmV0dXJuIGBNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCR7dGhpcy5wZXJjZW50ID49IDUwID8gMSA6IDB9LDEsJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd4J119LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5wZXJjZW50KVsneSddfVpgXG59XG5uZ09uSW5pdCgpIHtcbiAgdGhpcy5zdHJva2UgPSAgTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICB0aGlzLnN0cm9rZSA9IHRoaXMub3V0bGluZWQgPyBNYXRoLm1heCh0aGlzLnN0cm9rZSwgMiAqIHRoaXMuaWNvblN0cm9rZSArIDEpIDogdGhpcy5zdHJva2U7XG4gIHRoaXMuaW5uZXJSYWRpdXNMYXJnZSA9IDEwIC0gdGhpcy5pY29uU3Ryb2tlO1xuICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICB0aGlzLmlubmVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlO1xuICBpZih0aGlzLmlubmVyUmFkaXVzU21hbGwgPT09IDApXG4gIHtcbiAgICB0aGlzLm91dGVyUmFkaXVzU21hbGwgPSAwO1xuICB9XG4gXG4gXG4gIHRoaXMub3V0bGluZUJhc2UgPSBgXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBaXG4gIE0gJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgQSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9IDAgMSAxICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBaXG5gO1xudGhpcy50d29Ub25lQmFzZSA9ICBgXG5NICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZK3RoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbkEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuWlxuYDtcbnRoaXMuY2xpcFBhdGggPSBgXG5NMTIsMlxuQTEwLDEwLDAsMSwwLDIyLDEyLFxuMTAsMTAsMCwwLDAsMTIsMlxuWlxubTAsJHsyMC10aGlzLnN0cm9rZX0gXG5BICR7MTAtdGhpcy5zdHJva2V9LCR7MTAtdGhpcy5zdHJva2V9LDAsMSwxLCR7MjItdGhpcy5zdHJva2V9LDEyLFxuJHsxMC10aGlzLnN0cm9rZX0sJHsxMC10aGlzLnN0cm9rZX0sMCwwLDEsMTIsJHsyMi10aGlzLnN0cm9rZX1cblpcbmBcbiAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuaW1wb3J0IHsgTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1wcm9ncmVzcy1pY29ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmF0dGVyeUNvbXBvbmVudCB9IGZyb20gJy4vYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFydENvbXBvbmVudCB9IGZyb20gJy4vaGVhcnQvaGVhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZUNvbXBvbmVudCB9IGZyb20gJy4vcGllL3BpZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05nUHJvZ3Jlc3NJY29uc0NvbXBvbmVudCwgQmF0dGVyeUNvbXBvbmVudCwgSGVhcnRDb21wb25lbnQsIFBpZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQsIFxuICAgIEJhdHRlcnlDb21wb25lbnQsIEhlYXJ0Q29tcG9uZW50LCBQaWVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Byb2dyZXNzSWNvbnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztxQ0FKRDtLQVFDOzs7Ozs7QUNSRDtRQWFFO1NBQWlCOzs7O1FBRWpCLDJDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFBRSw0QkFBNEI7d0JBQ3RDLFFBQVEsRUFBRSx5REFJVDt3QkFDRCxNQUFNLEVBQUUsRUFBRTtxQkFDWDs7OztRQVFELCtCQUFDO0tBQUE7Ozs7Ozs7QUNsQkQsUUFBYSxVQUFVOzs7OztPQUFHLFVBQVMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQzlDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQTtJQUM1QyxDQUFDLENBQUE7O0FBRUQsUUFBYSxjQUFjOzs7O09BQUcsVUFBUyxPQUFPLEVBQUUsTUFBVztRQUFYLHVCQUFBO1lBQUEsV0FBVzs7UUFDdkQsT0FBTztZQUNI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