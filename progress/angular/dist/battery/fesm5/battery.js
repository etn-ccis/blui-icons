import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BatteryService = /** @class */ (function () {
    function BatteryService() {
    }
    BatteryService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] },
    ];
    /** @nocollapse */
    BatteryService.ctorParameters = function () { return []; };
    /** @nocollapse */ BatteryService.ngInjectableDef = defineInjectable({ factory: function BatteryService_Factory() { return new BatteryService(); }, token: BatteryService, providedIn: "root" });
    return BatteryService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BatteryComponent = /** @class */ (function () {
    function BatteryComponent() {
        this.percent = 100;
        this.size = 24;
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
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    BatteryComponent.prototype.rangeValue = /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    function (value, min, max) {
        return Math.max(min, Math.min(value, max));
    };
    BatteryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'battery-progress',
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n      <path [attr.fill]=\"color || 'currentColor'\" fill-opacity=\"0.3\" d=\"M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z\"/>\n      <clipPath id=\"pxb-battery-clip\">\n        <path overflow=\"visible\" d=\"M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z\"/>\n      </clipPath> \n      <rect [attr.fill]=\"color || 'currentColor'\" x=\"2\" y=\"7\" clip-path=\"url(#pxb-battery-clip)\" [attr.width]=\"rangeValue(percent/100*18, 0, 100)\" height=\"10\" />\n    </svg>\n  ",
                    styles: [],
                    inputs: ['percent', 'size', 'color']
                },] },
    ];
    /** @nocollapse */
    BatteryComponent.ctorParameters = function () { return []; };
    return BatteryComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var BatteryModule = /** @class */ (function () {
    function BatteryModule() {
    }
    BatteryModule.decorators = [
        { type: NgModule, args: [{
                    imports: [],
                    declarations: [BatteryComponent],
                    exports: [BatteryComponent]
                },] },
    ];
    return BatteryModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { BatteryService, BatteryComponent, BatteryModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vYmF0dGVyeS9saWIvYmF0dGVyeS5zZXJ2aWNlLnRzIiwibmc6Ly9iYXR0ZXJ5L2xpYi9iYXR0ZXJ5LmNvbXBvbmVudC50cyIsIm5nOi8vYmF0dGVyeS9saWIvYmF0dGVyeS5tb2R1bGUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhdHRlcnktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIGZpbGwtb3BhY2l0eT1cIjAuM1wiIGQ9XCJNMjAsMTBWOC4zQzIwLDcuNiwxOS40LDcsMTguNyw3SDMuM0MyLjYsNywyLDcuNiwyLDguM3Y3LjNDMiwxNi40LDIuNiwxNywzLjMsMTdoMTUuM2MwLjcsMCwxLjMtMC42LDEuMy0xLjNWMTRoMnYtNEgyMHpcIi8+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJweGItYmF0dGVyeS1jbGlwXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIGQ9XCJNMjAsOC4zM0MyMCw3LjYsMTkuNCw3LDE4LjY3LDdIMy4zNEMyLjYsNywyLDcuNiwyLDguMzN2Ny4zM0MyLDE2LjQsMi42LDE3LDMuMzMsMTdoMTUuMzRDMTkuNCwxNywyMCwxNi40LDIwLDE1LjY3VjguMzN6XCIvPlxuICAgICAgPC9jbGlwUGF0aD4gXG4gICAgICA8cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgeD1cIjJcIiB5PVwiN1wiIGNsaXAtcGF0aD1cInVybCgjcHhiLWJhdHRlcnktY2xpcClcIiBbYXR0ci53aWR0aF09XCJyYW5nZVZhbHVlKHBlcmNlbnQvMTAwKjE4LCAwLCAxMDApXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJ11cbn0pXG5leHBvcnQgY2xhc3MgQmF0dGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6bnVtYmVyID0gMTAwO1xuICBzaXplOm51bWJlciA9IDI0O1xuICBjb2xvcjpzdHJpbmc7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICByYW5nZVZhbHVlKHZhbHVlLCBtaW4sIG1heCl7XG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbixNYXRoLm1pbih2YWx1ZSxtYXgpKVxuICB9XG5cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmF0dGVyeUNvbXBvbmVudCB9IGZyb20gJy4vYmF0dGVyeS5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW0JhdHRlcnlDb21wb25lbnRdLFxuICBleHBvcnRzOiBbQmF0dGVyeUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgQmF0dGVyeU1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtJQU9FO0tBQWlCOztnQkFMbEIsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7Ozs7eUJBSkQ7Ozs7Ozs7QUNBQTtJQW9CRTt1QkFIaUIsR0FBRztvQkFDTixFQUFFO0tBRUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSO0tBQ0M7Ozs7Ozs7SUFFRCxxQ0FBVTs7Ozs7O0lBQVYsVUFBVyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0tBQ3pDOztnQkF6QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSx3eEJBUVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7aUJBQ3JDOzs7OzJCQWZEOzs7Ozs7O0FDQUE7Ozs7Z0JBR0MsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLGdCQUFnQixDQUFDO29CQUNoQyxPQUFPLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztpQkFDNUI7O3dCQVJEOzs7Ozs7Ozs7Ozs7Ozs7In0=