/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { rangeValue } from '../utilities';
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
        { type: Component, args: [{
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
export { HeartComponent };
if (false) {
    /** @type {?} */
    HeartComponent.prototype.percent;
    /** @type {?} */
    HeartComponent.prototype.size;
    /** @type {?} */
    HeartComponent.prototype.color;
    /** @type {?} */
    HeartComponent.prototype.outlined;
    /** @type {?} */
    HeartComponent.prototype.basePath;
    /** @type {?} */
    HeartComponent.prototype.singletonePath;
    /** @type {?} */
    HeartComponent.prototype.rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9oZWFydC9oZWFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQztJQXNCRTtRQVBBLFlBQU8sR0FBVSxHQUFHLENBQUM7UUFDckIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQUVqQixhQUFRLEdBQVcsS0FBSyxDQUFDO1FBRXpCLGFBQVEsR0FBRyxnTEFBZ0wsQ0FBQztRQUM1TCxtQkFBYyxHQUFHLDJZQUEyWSxDQUFDO1FBUzdaLE9BQUUsR0FBRyxVQUFVLENBQUM7SUFSQSxDQUFDOzs7O0lBRWpCLGlDQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFFRCxnQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9ELENBQUM7O2dCQTdCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsUUFBUSxFQUFFLGl3QkFRVDtvQkFDRCxNQUFNLEVBQUUsRUFBRTtvQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7aUJBQ2pEOzs7O0lBbUJELHFCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FsQlksY0FBYzs7O0lBQ3pCLGlDQUFxQjs7SUFDckIsOEJBQWlCOztJQUNqQiwrQkFBYTs7SUFDYixrQ0FBeUI7O0lBRXpCLGtDQUE0TDs7SUFDNUwsd0NBQTZaOztJQVM3Wiw0QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYXJ0LXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuZF09XCJnZXRQYXRoKClcIi8+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJweGItaGVhcnQtY2xpcFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxyZWN0IFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBjbGlwLXBhdGg9XCJ1cmwoI3B4Yi1oZWFydC1jbGlwKVwiIHg9XCIyXCIgW2F0dHIueV09XCIyMS4zNS0ocnYocGVyY2VudCwwLDEwMCkpKjE4LjM1LzEwMFwiIHdpZHRoPVwiMjBcIiBoZWlnaHQ9XCIyMFwiIC8+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBIZWFydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6bnVtYmVyID0gMTAwO1xuICBzaXplOm51bWJlciA9IDI0O1xuICBjb2xvcjpzdHJpbmc7XG4gIG91dGxpbmVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBiYXNlUGF0aCA9ICdNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXonO1xuICBzaW5nbGV0b25lUGF0aCA9ICdNMTYuNSw1QTMuNDYyLDMuNDYyLDAsMCwxLDIwLDguNWMwLDIuODg1LTMuMTI1LDUuNzI1LTcuODU2LDEwLjAyNGwtLjAzNS4wMzItLjEuMDk0LS4xMjQtLjExM0M3LjEzNSwxNC4yMzQsNCwxMS4zOTEsNCw4LjVBMy40NjIsMy40NjIsMCwwLDEsNy41LDVhMy45NiwzLjk2LDAsMCwxLDIuOTc3LDEuMzg3TDEyLDguMTc1bDEuNTIzLTEuNzg4QTMuOTYsMy45NiwwLDAsMSwxNi41LDVtMC0yQTUuOTg4LDUuOTg4LDAsMCwwLDEyLDUuMDksNS45ODgsNS45ODgsMCwwLDAsNy41LDMsNS40NDcsNS40NDcsMCwwLDAsMiw4LjVjMCwzLjc4LDMuNCw2Ljg2LDguNTUsMTEuNTNMMTIsMjEuMzVsMS40NS0xLjMxQzE4LjYsMTUuMzYsMjIsMTIuMjgsMjIsOC41QTUuNDQ3LDUuNDQ3LDAsMCwwLDE2LjUsM1onO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgZ2V0UGF0aCgpe1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMuc2luZ2xldG9uZVBhdGggOiB0aGlzLmJhc2VQYXRoKTtcbiAgfVxuICBydiA9IHJhbmdlVmFsdWU7XG5cbn0iXX0=