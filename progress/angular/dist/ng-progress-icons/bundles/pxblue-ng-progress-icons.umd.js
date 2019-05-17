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
            this.singletonePath = 'M18,9v6H4V9H18m.7-2H3.3A1.324,1.324,0,0,0,2,8.3v7.3A1.347,1.347,0,0,0,3.3,17H18.6a1.324,1.324,0,0,0,1.3-1.3V14h2V10H20V8.3A1.324,1.324,0,0,0,18.7,7Z';
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
            };
        /**
         * @return {?}
         */
        BatteryComponent.prototype.getBasepath = /**
         * @return {?}
         */
            function () {
                return (this.outlined ? this.singletonePath : this.basePath);
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
                        template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"> \n    \n    <defs>\n      <mask id=\"hole\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <polygon fill=\"black\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 \" />\n      </mask>\n      <mask id=\"test\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <rect x=\"2\" y=\"7\" fill=\"black\"  [attr.width]=\"rv(percent/100*18, 0, 100)\" height=\"10\" />\n      </mask>\n    </defs>\n    <path [attr.fill]=\"color || 'currentColor'\"  [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.d]=\"getBasepath()\"/>\n      <clipPath [id]=\"getID()\">\n        <path overflow=\"visible\" [attr.d]=\"getClipPath()\"/>\n      </clipPath>\n      <g *ngIf = \"percent > 0\" [attr.fill]= \"color || 'currentColor'\">\n      <rect [attr.fill]=\"color || 'currentColor'\" x=\"2\" y=\"7\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.width]=\"rv(percent/100*18, 0, 100)\" height=\"10\"  mask=\"outlined && charging ? url(#hole) : null\"/>\n      <polygon  *ngIf = \"outlined && charging\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13\" mask=\"url(#test)\" />\n      </g>\n    </svg>\n  ",
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
            this.singletonePath = 'M16.5,5A3.462,3.462,0,0,1,20,8.5c0,2.885-3.125,5.725-7.856,10.024l-.035.032-.1.094-.124-.113C7.135,14.234,4,11.391,4,8.5A3.462,3.462,0,0,1,7.5,5a3.96,3.96,0,0,1,2.977,1.387L12,8.175l1.523-1.788A3.96,3.96,0,0,1,16.5,5m0-2A5.988,5.988,0,0,0,12,5.09,5.988,5.988,0,0,0,7.5,3,5.447,5.447,0,0,0,2,8.5c0,3.78,3.4,6.86,8.55,11.53L12,21.35l1.45-1.31C18.6,15.36,22,12.28,22,8.5A5.447,5.447,0,0,0,16.5,3Z';
            this.rv = rangeValue;
        }
        /**
         * @return {?}
         */
        HeartComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        HeartComponent.prototype.getPath = /**
         * @return {?}
         */
            function () {
                return (this.outlined ? this.singletonePath : this.basePath);
            };
        HeartComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'heart-progress',
                        template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n      <path [attr.fill]=\"color || 'currentColor'\" [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.d]=\"getPath()\"/>\n      <clipPath id=\"pxb-heart-clip\">\n        <path d=\"M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z\"/>\n      </clipPath>\n      <rect [attr.fill]=\"color || 'currentColor'\" clip-path=\"url(#pxb-heart-clip)\" x=\"2\" [attr.y]=\"21.35-(rv(percent,0,100))*18.35/100\" width=\"20\" height=\"20\" />\n    </svg>\n  ",
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
            this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
            this.iconStroke = 2;
            // Ring properties
            this.centerX = 12;
            this.centerY = 12;
            // Outer ring
            this.outerRadiusLarge = 10;
            this.innerRadiusLarge = 10 - this.iconStroke;
            // Inner Ring
            this.outerRadiusSmall = 10 - this.stroke + this.iconStroke;
            this.innerRadiusSmall = 10 - this.stroke;
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
                if (this.innerRadiusSmall === 0) {
                    this.outerRadiusSmall = 0;
                }
                console.log(this.outlined);
                this.stroke = Math.max(this.stroke, 2 * this.iconStroke + 1);
                this.outlineBase = "\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\n  A " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusLarge) + "\n  A " + this.innerRadiusLarge + " " + this.innerRadiusLarge + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusLarge) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusSmall) + "\n  A " + this.outerRadiusSmall + " " + this.outerRadiusSmall + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusSmall) + "\n  Z\n  M " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY + this.innerRadiusSmall) + "\n  A " + this.innerRadiusSmall + " " + this.innerRadiusSmall + " 0 1 1 " + this.centerX + " " + (this.centerY - this.innerRadiusSmall) + "\n  Z\n";
                this.twoToneBase = "\nM " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY + this.outerRadiusLarge) + "\nA " + this.outerRadiusLarge + " " + this.outerRadiusLarge + " 0 1 0 " + this.centerX + " " + (this.centerY - this.outerRadiusLarge) + "\nZ\n";
                this.clipPath = "\nM12,2\nA10,10,0,1,0,22,12,\n10,10,0,0,0,12,2\nZ\nm0," + (20 - this.stroke) + " \nA " + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,1,1," + (22 - this.stroke) + ",12,\n" + (10 - this.stroke) + "," + (10 - this.stroke) + ",0,0,1,12," + (22 - this.stroke) + "\nZ\n";
            };
        PieComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'pie-progress',
                        template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"transform: rotate(-.25turn)\">\n      <clipPath [attr.id]=\"'pxb-donut-clip-'+stroke\">\n        <path [attr.d]=\"clipPath\"/>\n      </clipPath>\n      <path [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\"\n      [attr.fill]=\"color || 'currentColor'\" \n      [attr.fill-opacity]=\"outlined || percent >= 100 ? '1' : '0.3'\"\n      [attr.d]=\"outlined ? outlineBase : twoToneBase\"\n    />\n    <path *ngIf=\"percent > 0 && percent < 100\" \n    [attr.fill]=\"color || 'currentColor'\" \n    [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" \n    [attr.d]= \"getPath()\"  />\n\n      <circle *ngIf=\"percent === 100 && outlined\" [attr.clip-path]=\"'url(#pxb-donut-clip-'+stroke+')'\" cx=\"12\" cy=\"12\" r=\"10\" [attr.fill]=\"color || 'currentColor'\"></circle>\n      \n    </svg>\n  ",
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHhibHVlLW5nLXByb2dyZXNzLWljb25zLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMuc2VydmljZS50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvbmctcHJvZ3Jlc3MtaWNvbnMuY29tcG9uZW50LnRzIiwibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zL2xpYi91dGlsaXRpZXMudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL2hlYXJ0L2hlYXJ0LmNvbXBvbmVudC50cyIsIm5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy9saWIvcGllL3BpZS5jb21wb25lbnQudHMiLCJuZzovL0BweGJsdWUvbmctcHJvZ3Jlc3MtaWNvbnMvbGliL25nLXByb2dyZXNzLWljb25zLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIE5nUHJvZ3Jlc3NJY29uc1NlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwcm9ncmVzcy1uZy1wcm9ncmVzcy1pY29ucycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICBuZy1wcm9ncmVzcy1pY29ucyB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbn1cbiIsImV4cG9ydCBjb25zdCByYW5nZVZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KXtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLE1hdGgubWluKHZhbHVlLG1heCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBlcmNlbnQsIHJhZGl1cyA9IDEyKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChwZXJjZW50LzEwMCkgKiAyKk1hdGguUEkpICksXG4gICAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKVxuICAgIH1cbn0iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhdHRlcnktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPiBcbiAgICBcbiAgICA8ZGVmcz5cbiAgICAgIDxtYXNrIGlkPVwiaG9sZVwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHBvbHlnb24gZmlsbD1cImJsYWNrXCIgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzIFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgICA8bWFzayBpZD1cInRlc3RcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxyZWN0IHg9XCIyXCIgeT1cIjdcIiBmaWxsPVwiYmxhY2tcIiAgW2F0dHIud2lkdGhdPVwicnYocGVyY2VudC8xMDAqMTgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgPC9kZWZzPlxuICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIihvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCkgPyAnMScgOiAnMC4zJ1wiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiIFthdHRyLmRdPVwiZ2V0QmFzZXBhdGgoKVwiLz5cbiAgICAgIDxjbGlwUGF0aCBbaWRdPVwiZ2V0SUQoKVwiPlxuICAgICAgICA8cGF0aCBvdmVyZmxvdz1cInZpc2libGVcIiBbYXR0ci5kXT1cImdldENsaXBQYXRoKClcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPGcgKm5nSWYgPSBcInBlcmNlbnQgPiAwXCIgW2F0dHIuZmlsbF09IFwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj5cbiAgICAgIDxyZWN0IFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiB4PVwiMlwiIHk9XCI3XCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIud2lkdGhdPVwicnYocGVyY2VudC8xMDAqMTgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiICBtYXNrPVwib3V0bGluZWQgJiYgY2hhcmdpbmcgPyB1cmwoI2hvbGUpIDogbnVsbFwiLz5cbiAgICAgIDxwb2x5Z29uICAqbmdJZiA9IFwib3V0bGluZWQgJiYgY2hhcmdpbmdcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTNcIiBtYXNrPVwidXJsKCN0ZXN0KVwiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAnY2hhcmdpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgY2hhcmdpbmc6Ym9vbGVhbiA9IGZhbHNlO1xuICBvdXRsaW5lZDpib29sZWFuID0gZmFsc2U7XG5cbiAgYmFzZVBhdGggPSAnTTIwLDEwVjguM0MyMCw3LjYsMTkuNCw3LDE4LjcsN0gzLjNDMi42LDcsMiw3LjYsMiw4LjN2Ny4zQzIsMTYuNCwyLjYsMTcsMy4zLDE3aDE1LjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjE0aDJ2LTRIMjB6JztcbiAgY2hhcmdlUGF0aCA9ICdNMjAsMTBWOC4zM2ExLjMxOSwxLjMxOSwwLDAsMC0xLTEuMjYzQTEuMjU3LDEuMjU3LDAsMCwwLDE4LjY3LDdIMy4zNEExLjMzOCwxLjMzOCwwLDAsMCwyLDguMzN2Ny4zM0ExLjMzOCwxLjMzOCwwLDAsMCwzLjMzLDE3SDE4LjY3YTEuMjU3LDEuMjU3LDAsMCwwLC4zMy0uMDY3LDEuMzE5LDEuMzE5LDAsMCwwLDEtMS4yNjNWMTRoMlYxMFptLTguNSwzdjJMNCwxMUg5LjVWOUwxNywxM1onO1xuICBzaW5nbGV0b25lUGF0aCA9ICdNMTgsOXY2SDRWOUgxOG0uNy0ySDMuM0ExLjMyNCwxLjMyNCwwLDAsMCwyLDguM3Y3LjNBMS4zNDcsMS4zNDcsMCwwLDAsMy4zLDE3SDE4LjZhMS4zMjQsMS4zMjQsMCwwLDAsMS4zLTEuM1YxNGgyVjEwSDIwVjguM0ExLjMyNCwxLjMyNCwwLDAsMCwxOC43LDdaJztcbiAgYmFzZUlEID0gJ3B4Yi1iYXR0ZXJ5LWNsaXAnO1xuICBjaGFyZ2VJRCA9ICdweGItYmF0dGVyeS1jbGlwLWNoYXJnZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBcblxuICBnZXRCYXNlcGF0aCgpe1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMuc2luZ2xldG9uZVBhdGggOiB0aGlzLmJhc2VQYXRoKTtcbiAgfVxuICBnZXRDbGlwUGF0aCgpe1xuICAgIHJldHVybiAodGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIGdldElEKCl7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VJRCA6IHRoaXMuYmFzZUlEKTtcbiAgfVxuXG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaGVhcnQtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmZpbGwtb3BhY2l0eV09XCIob3V0bGluZWQgfHwgcGVyY2VudCA+PSAxMDApID8gJzEnIDogJzAuMydcIiBbYXR0ci5kXT1cImdldFBhdGgoKVwiLz5cbiAgICAgIDxjbGlwUGF0aCBpZD1cInB4Yi1oZWFydC1jbGlwXCI+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXpcIi8+XG4gICAgICA8L2NsaXBQYXRoPlxuICAgICAgPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIGNsaXAtcGF0aD1cInVybCgjcHhiLWhlYXJ0LWNsaXApXCIgeD1cIjJcIiBbYXR0ci55XT1cIjIxLjM1LShydihwZXJjZW50LDAsMTAwKSkqMTguMzUvMTAwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEhlYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgb3V0bGluZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIGJhc2VQYXRoID0gJ00xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1eic7XG4gIHNpbmdsZXRvbmVQYXRoID0gJ00xNi41LDVBMy40NjIsMy40NjIsMCwwLDEsMjAsOC41YzAsMi44ODUtMy4xMjUsNS43MjUtNy44NTYsMTAuMDI0bC0uMDM1LjAzMi0uMS4wOTQtLjEyNC0uMTEzQzcuMTM1LDE0LjIzNCw0LDExLjM5MSw0LDguNUEzLjQ2MiwzLjQ2MiwwLDAsMSw3LjUsNWEzLjk2LDMuOTYsMCwwLDEsMi45NzcsMS4zODdMMTIsOC4xNzVsMS41MjMtMS43ODhBMy45NiwzLjk2LDAsMCwxLDE2LjUsNW0wLTJBNS45ODgsNS45ODgsMCwwLDAsMTIsNS4wOSw1Ljk4OCw1Ljk4OCwwLDAsMCw3LjUsMyw1LjQ0Nyw1LjQ0NywwLDAsMCwyLDguNWMwLDMuNzgsMy40LDYuODYsOC41NSwxMS41M0wxMiwyMS4zNWwxLjQ1LTEuMzFDMTguNiwxNS4zNiwyMiwxMi4yOCwyMiw4LjVBNS40NDcsNS40NDcsMCwwLDAsMTYuNSwzWic7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBnZXRQYXRoKCl7XG4gICAgcmV0dXJuICh0aGlzLm91dGxpbmVkID8gdGhpcy5zaW5nbGV0b25lUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlLCBnZXRDb29yZGluYXRlcyB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3BpZS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJ0cmFuc2Zvcm06IHJvdGF0ZSgtLjI1dHVybilcIj5cbiAgICAgIDxjbGlwUGF0aCBbYXR0ci5pZF09XCIncHhiLWRvbnV0LWNsaXAtJytzdHJva2VcIj5cbiAgICAgICAgPHBhdGggW2F0dHIuZF09XCJjbGlwUGF0aFwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8cGF0aCBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCJcbiAgICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBcbiAgICAgIFthdHRyLmZpbGwtb3BhY2l0eV09XCJvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCA/ICcxJyA6ICcwLjMnXCJcbiAgICAgIFthdHRyLmRdPVwib3V0bGluZWQgPyBvdXRsaW5lQmFzZSA6IHR3b1RvbmVCYXNlXCJcbiAgICAvPlxuICAgIDxwYXRoICpuZ0lmPVwicGVyY2VudCA+IDAgJiYgcGVyY2VudCA8IDEwMFwiIFxuICAgIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBcbiAgICBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgXG4gICAgW2F0dHIuZF09IFwiZ2V0UGF0aCgpXCIgIC8+XG5cbiAgICAgIDxjaXJjbGUgKm5nSWY9XCJwZXJjZW50ID09PSAxMDAgJiYgb3V0bGluZWRcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCI+PC9jaXJjbGU+XG4gICAgICBcbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdyaW5nJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDogbnVtYmVyID0gMTAwO1xuICBzaXplOiBudW1iZXIgPSAyNDtcbiAgY29sb3I6IHN0cmluZztcbiAgcmluZzogbnVtYmVyID0gMTA7XG4gIG91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XG4gIG91dGxpbmVCYXNlO1xuICB0d29Ub25lQmFzZTtcbiAgY2xpcFBhdGg7XG5cbiAgc3Ryb2tlID0gTWF0aC5tYXgoMSxNYXRoLm1pbigxMCwgTWF0aC5yb3VuZCh0aGlzLnJpbmcpKSk7XG4gIGljb25TdHJva2UgPSAyO1xuICBcblxuICAvLyBSaW5nIHByb3BlcnRpZXNcbiAgY2VudGVyWCA9IDEyO1xuICBjZW50ZXJZID0gMTI7XG5cbiAgLy8gT3V0ZXIgcmluZ1xuICBvdXRlclJhZGl1c0xhcmdlID0gMTA7XG4gIGlubmVyUmFkaXVzTGFyZ2UgPSAxMCAtIHRoaXMuaWNvblN0cm9rZTtcblxuICAvLyBJbm5lciBSaW5nXG4gIG91dGVyUmFkaXVzU21hbGwgPSAxMCAtIHRoaXMuc3Ryb2tlICsgdGhpcy5pY29uU3Ryb2tlO1xuICBpbm5lclJhZGl1c1NtYWxsID0gMTAgLSB0aGlzLnN0cm9rZTtcbiAgXG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbmdldFBhdGgoKXtcbiAgcmV0dXJuIGBNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCR7dGhpcy5wZXJjZW50ID49IDUwID8gMSA6IDB9LDEsJHtnZXRDb29yZGluYXRlcyh0aGlzLnBlcmNlbnQpWyd4J119LCR7Z2V0Q29vcmRpbmF0ZXModGhpcy5wZXJjZW50KVsneSddfVpgXG59XG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgoMSwgTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICAgIGlmKHRoaXMuaW5uZXJSYWRpdXNTbWFsbCA9PT0gMClcbiAge1xuICAgIHRoaXMub3V0ZXJSYWRpdXNTbWFsbCA9IDA7XG4gIH1cbiAgY29uc29sZS5sb2codGhpcy5vdXRsaW5lZCk7XG4gIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgodGhpcy5zdHJva2UsIDIgKiB0aGlzLmljb25TdHJva2UgKyAxKVxuICB0aGlzLm91dGxpbmVCYXNlID0gYFxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzTGFyZ2V9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzTGFyZ2V9ICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5pbm5lclJhZGl1c0xhcmdlfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c0xhcmdlfSAke3RoaXMuaW5uZXJSYWRpdXNMYXJnZX0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNMYXJnZX1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLm91dGVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLm91dGVyUmFkaXVzU21hbGx9ICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAwIDEgMCAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5vdXRlclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5vdXRlclJhZGl1c1NtYWxsfSAke3RoaXMub3V0ZXJSYWRpdXNTbWFsbH0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNTbWFsbH1cbiAgWlxuICBNICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWS10aGlzLmlubmVyUmFkaXVzU21hbGx9XG4gIEEgJHt0aGlzLmlubmVyUmFkaXVzU21hbGx9ICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAwIDEgMSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclkrdGhpcy5pbm5lclJhZGl1c1NtYWxsfVxuICBBICR7dGhpcy5pbm5lclJhZGl1c1NtYWxsfSAke3RoaXMuaW5uZXJSYWRpdXNTbWFsbH0gMCAxIDEgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMuaW5uZXJSYWRpdXNTbWFsbH1cbiAgWlxuYDtcbnRoaXMudHdvVG9uZUJhc2UgPSAgYFxuTSAke3RoaXMuY2VudGVyWH0gJHt0aGlzLmNlbnRlclktdGhpcy5vdXRlclJhZGl1c0xhcmdlfVxuQSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gJHt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9IDAgMSAwICR7dGhpcy5jZW50ZXJYfSAke3RoaXMuY2VudGVyWSt0aGlzLm91dGVyUmFkaXVzTGFyZ2V9XG5BICR7dGhpcy5vdXRlclJhZGl1c0xhcmdlfSAke3RoaXMub3V0ZXJSYWRpdXNMYXJnZX0gMCAxIDAgJHt0aGlzLmNlbnRlclh9ICR7dGhpcy5jZW50ZXJZLXRoaXMub3V0ZXJSYWRpdXNMYXJnZX1cblpcbmA7XG50aGlzLmNsaXBQYXRoID0gYFxuTTEyLDJcbkExMCwxMCwwLDEsMCwyMiwxMixcbjEwLDEwLDAsMCwwLDEyLDJcblpcbm0wLCR7MjAtdGhpcy5zdHJva2V9IFxuQSAkezEwLXRoaXMuc3Ryb2tlfSwkezEwLXRoaXMuc3Ryb2tlfSwwLDEsMSwkezIyLXRoaXMuc3Ryb2tlfSwxMixcbiR7MTAtdGhpcy5zdHJva2V9LCR7MTAtdGhpcy5zdHJva2V9LDAsMCwxLDEyLCR7MjItdGhpcy5zdHJva2V9XG5aXG5gXG4gIH1cblxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJzsgIFxuaW1wb3J0IHsgTmdQcm9ncmVzc0ljb25zQ29tcG9uZW50IH0gZnJvbSAnLi9uZy1wcm9ncmVzcy1pY29ucy5jb21wb25lbnQnO1xuaW1wb3J0IHsgQmF0dGVyeUNvbXBvbmVudCB9IGZyb20gJy4vYmF0dGVyeS9iYXR0ZXJ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBIZWFydENvbXBvbmVudCB9IGZyb20gJy4vaGVhcnQvaGVhcnQuY29tcG9uZW50JztcbmltcG9ydCB7IFBpZUNvbXBvbmVudCB9IGZyb20gJy4vcGllL3BpZS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW05nUHJvZ3Jlc3NJY29uc0NvbXBvbmVudCwgQmF0dGVyeUNvbXBvbmVudCwgSGVhcnRDb21wb25lbnQsIFBpZUNvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOZ1Byb2dyZXNzSWNvbnNDb21wb25lbnQsIFxuICAgIEJhdHRlcnlDb21wb25lbnQsIEhlYXJ0Q29tcG9uZW50LCBQaWVDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBOZ1Byb2dyZXNzSWNvbnNNb2R1bGUgeyB9XG4iXSwibmFtZXMiOlsiSW5qZWN0YWJsZSIsIkNvbXBvbmVudCIsIk5nTW9kdWxlIiwiQ29tbW9uTW9kdWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7UUFPRTtTQUFpQjs7b0JBTGxCQSxhQUFVLFNBQUM7d0JBQ1YsVUFBVSxFQUFFLE1BQU07cUJBQ25COzs7OztxQ0FKRDtLQVFDOzs7Ozs7QUNSRDtRQWFFO1NBQWlCOzs7O1FBRWpCLDJDQUFROzs7WUFBUjthQUNDOztvQkFkRkMsWUFBUyxTQUFDO3dCQUNULFFBQVEsRUFB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