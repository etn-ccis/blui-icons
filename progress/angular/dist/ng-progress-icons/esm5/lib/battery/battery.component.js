/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { rangeValue } from '../utilities';
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
        { type: Component, args: [{
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
export { BatteryComponent };
if (false) {
    /** @type {?} */
    BatteryComponent.prototype.percent;
    /** @type {?} */
    BatteryComponent.prototype.size;
    /** @type {?} */
    BatteryComponent.prototype.color;
    /** @type {?} */
    BatteryComponent.prototype.charging;
    /** @type {?} */
    BatteryComponent.prototype.outlined;
    /** @type {?} */
    BatteryComponent.prototype.maskIDleft;
    /** @type {?} */
    BatteryComponent.prototype.maskIDright;
    /** @type {?} */
    BatteryComponent.prototype.startX;
    /** @type {?} */
    BatteryComponent.prototype.fillWidth;
    /** @type {?} */
    BatteryComponent.prototype.basePath;
    /** @type {?} */
    BatteryComponent.prototype.chargePath;
    /** @type {?} */
    BatteryComponent.prototype.outlinedPath;
    /** @type {?} */
    BatteryComponent.prototype.baseID;
    /** @type {?} */
    BatteryComponent.prototype.chargeID;
    /** @type {?} */
    BatteryComponent.prototype.rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUUxQztJQStDRTtRQWpCQSxZQUFPLEdBQVcsR0FBRyxDQUFDO1FBQ3RCLFNBQUksR0FBVyxFQUFFLENBQUM7UUFFbEIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBTzFCLGFBQVEsR0FBRyx1SEFBdUgsQ0FBQztRQUNuSSxlQUFVLEdBQUcsNk5BQTZOLENBQUM7UUFDM08saUJBQVksR0FBRyxzSkFBc0osQ0FBQztRQUN0SyxXQUFNLEdBQUcsa0JBQWtCLENBQUM7UUFDNUIsYUFBUSxHQUFHLHlCQUF5QixDQUFDO1FBdUJyQyxPQUFFLEdBQUcsVUFBVSxDQUFDO0lBckJBLENBQUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxXQUFXLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLFlBQVksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBRS9DLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3QyxDQUFDOzs7O0lBR0Qsc0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0Qsc0NBQVc7OztJQUFYO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUMzRCxDQUFDOzs7O0lBQ0QsZ0NBQUs7OztJQUFMO1FBQ0UsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RCxDQUFDOztnQkFsRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLFFBQVEsRUFBRSxvK0NBdUJUO29CQUNELE1BQU0sRUFBRSxFQUFFO29CQUNWLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxVQUFVLENBQUM7aUJBQzdEOzs7O0lBMENELHVCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0F6Q1ksZ0JBQWdCOzs7SUFDM0IsbUNBQXNCOztJQUN0QixnQ0FBa0I7O0lBQ2xCLGlDQUFjOztJQUNkLG9DQUEwQjs7SUFDMUIsb0NBQTBCOztJQUMxQixzQ0FBVzs7SUFDWCx1Q0FBWTs7SUFDWixrQ0FBTzs7SUFDUCxxQ0FBVTs7SUFHVixvQ0FBbUk7O0lBQ25JLHNDQUEyTzs7SUFDM08sd0NBQXNLOztJQUN0SyxrQ0FBNEI7O0lBQzVCLG9DQUFxQzs7SUF1QnJDLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyByYW5nZVZhbHVlIH0gZnJvbSAnLi4vdXRpbGl0aWVzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYmF0dGVyeS1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+IFxuICAgIFxuICAgIDxkZWZzPlxuICAgICAgPG1hc2sgKm5nSWYgPSBcIm91dGxpbmVkIFwiIFthdHRyLmlkXT1cIm1hc2tJRGxlZnRcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxwb2x5Z29uIGZpbGw9XCJibGFja1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxMyBcIiAvPlxuICAgICAgPC9tYXNrPlxuICAgICAgPG1hc2sgKm5nSWYgPSBcIm91dGxpbmVkIFwiIFthdHRyLmlkXT1cIm1hc2tJRHJpZ2h0XCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cmVjdCBbYXR0ci54XT1cInN0YXJ0WFwiIHk9XCI3XCIgZmlsbD1cImJsYWNrXCIgIFthdHRyLndpZHRoXT1cInJ2KHBlcmNlbnQvMTAwKmZpbGxXaWR0aCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiICBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIuZF09XCJnZXRCYXNlcGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIFtpZF09XCJnZXRJRCgpXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIFthdHRyLmRdPVwiZ2V0Q2xpcFBhdGgoKVwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8ZyAgW2F0dHIuZmlsbF09IFwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj5cbiAgICAgIFxuPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLnhdPVwic3RhcnRYXCIgeT1cIjdcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIiBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCpmaWxsV2lkdGgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiICBbYXR0ci5tYXNrXT1cIm91dGxpbmVkICYmIGNoYXJnaW5nID8gJ3VybCgjJyArIG1hc2tJRGxlZnQgKyAnKScgOiBudWxsXCIvPlxuPHBvbHlnb24gICpuZ0lmID0gXCJvdXRsaW5lZCAmJiBjaGFyZ2luZ1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxM1wiIFthdHRyLm1hc2tdPVwiJ3VybCgjJyArIG1hc2tJRHJpZ2h0ICsgJyknXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdjaGFyZ2luZycsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICBjaGFyZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBvdXRsaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBtYXNrSURsZWZ0O1xuICBtYXNrSURyaWdodDtcbiAgc3RhcnRYO1xuICBmaWxsV2lkdGg7XG5cblxuICBiYXNlUGF0aCA9ICdNMjAsMTBWOC4zQzIwLDcuNiwxOS40LDcsMTguNyw3SDMuM0MyLjYsNywyLDcuNiwyLDguM3Y3LjNDMiwxNi40LDIuNiwxNywzLjMsMTdoMTUuM2MwLjcsMCwxLjMtMC42LDEuMy0xLjNWMTRoMnYtNEgyMHonO1xuICBjaGFyZ2VQYXRoID0gJ00yMCwxMFY4LjMzYTEuMzE5LDEuMzE5LDAsMCwwLTEtMS4yNjNBMS4yNTcsMS4yNTcsMCwwLDAsMTguNjcsN0gzLjM0QTEuMzM4LDEuMzM4LDAsMCwwLDIsOC4zM3Y3LjMzQTEuMzM4LDEuMzM4LDAsMCwwLDMuMzMsMTdIMTguNjdhMS4yNTcsMS4yNTcsMCwwLDAsLjMzLS4wNjcsMS4zMTksMS4zMTksMCwwLDAsMS0xLjI2M1YxNGgyVjEwWm0tOC41LDN2Mkw0LDExSDkuNVY5TDE3LDEzWic7XG4gIG91dGxpbmVkUGF0aCA9ICdNMTgsOXY2SDRWOUgxOG0uNy0ySDMuM0ExLjMyNCwxLjMyNCwwLDAsMCwyLDguM3Y3LjNBMS4zNDcsMS4zNDcsMCwwLDAsMy4zLDE3SDE4LjZhMS4zMjQsMS4zMjQsMCwwLDAsMS4zLTEuM1YxNGgyVjEwSDIwVjguM0ExLjMyNCwxLjMyNCwwLDAsMCwxOC43LDdaJztcbiAgYmFzZUlEID0gJ3B4Yi1iYXR0ZXJ5LWNsaXAnO1xuICBjaGFyZ2VJRCA9ICdweGItYmF0dGVyeS1jbGlwLWNoYXJnZSc7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm1hc2tJRGxlZnQgPSAnbWFza0xlZnQtJyArIHRoaXMucGVyY2VudDtcbiAgICB0aGlzLm1hc2tJRHJpZ2h0ID0gJ21hc2tSaWdodC0nICsgdGhpcy5wZXJjZW50O1xuXG4gICAgdGhpcy5zdGFydFggPSB0aGlzLm91dGxpbmVkID8gMy45IDogMjtcbiAgICB0aGlzLmZpbGxXaWR0aCA9IHRoaXMub3V0bGluZWQgPyAxNC4yIDogMTg7XG4gIH1cblxuXG4gIGdldEJhc2VwYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0Q2xpcFBhdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VJRCA6IHRoaXMuYmFzZUlEKTtcbiAgfVxuXG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSJdfQ==