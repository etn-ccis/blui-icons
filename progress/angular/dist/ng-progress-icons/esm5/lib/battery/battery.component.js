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
    };
    /**
     * @return {?}
     */
    BatteryComponent.prototype.ngOnChanges = /**
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
                    template: "\n    <svg [attr.height]=\"size+'px'\" [attr.width]=\"size+'px'\" x=\"0px\" y=\"0px\" viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\"> \n    \n    <defs>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDleft\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <polygon fill=\"black\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 \" />\n      </mask>\n      <mask *ngIf = \"outlined \" [attr.id]=\"maskIDright\">\n        <rect width=\"100%\" height=\"100%\" fill=\"white\" />\n        <rect [attr.x]=\"startX\" y=\"7\" fill=\"black\"  [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\" />\n      </mask>\n      <clipPath [id]=\"getID()\">\n        <path overflow=\"visible\" [attr.d]=\"getClipPath()\"/>\n      </clipPath>\n    </defs>\n    <path [attr.fill]=\"color || 'currentColor'\"  [attr.fill-opacity]=\"(outlined || percent >= 100) ? '1' : '0.3'\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.d]=\"getBasepath()\"/>\n      \n      <g  [attr.fill]= \"color || 'currentColor'\">\n      \n<rect [attr.fill]=\"color || 'currentColor'\" [attr.x]=\"startX\" y=\"7\" [attr.clip-path]=\"'url(#' + getID() + ')'\" [attr.width]=\"rv(percent/100*fillWidth, 0, 100)\" height=\"10\"  [attr.mask]=\"outlined && charging ? 'url(#' + maskIDleft + ')' : null\"/>\n<polygon  *ngIf = \"outlined && charging\" points=\"11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13\" [attr.mask]=\"'url(#' + maskIDright + ')'\" />\n      </g>\n    </svg>\n  ",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFFMUM7SUFnREU7UUFqQkEsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQU8xQixhQUFRLEdBQUcsdUhBQXVILENBQUM7UUFDbkksZUFBVSxHQUFHLDZOQUE2TixDQUFDO1FBQzNPLGlCQUFZLEdBQUcsc0pBQXNKLENBQUM7UUFDdEssV0FBTSxHQUFHLGtCQUFrQixDQUFDO1FBQzVCLGFBQVEsR0FBRyx5QkFBeUIsQ0FBQztRQTBCckMsT0FBRSxHQUFHLFVBQVUsQ0FBQztJQXhCQSxDQUFDOzs7O0lBRWpCLG1DQUFROzs7SUFBUjtJQUNBLENBQUM7Ozs7SUFDRCxzQ0FBVzs7O0lBQVg7UUFFRSxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxzQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzdELENBQUM7Ozs7SUFDRCxzQ0FBVzs7O0lBQVg7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzNELENBQUM7Ozs7SUFDRCxnQ0FBSzs7O0lBQUw7UUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7O2dCQXRFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtvQkFDNUIsUUFBUSxFQUFFLDQrQ0F3QlQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQztpQkFDN0Q7Ozs7SUE2Q0QsdUJBQUM7Q0FBQSxBQTFFRCxJQTBFQztTQTVDWSxnQkFBZ0I7OztJQUMzQixtQ0FBc0I7O0lBQ3RCLGdDQUFrQjs7SUFDbEIsaUNBQWM7O0lBQ2Qsb0NBQTBCOztJQUMxQixvQ0FBMEI7O0lBQzFCLHNDQUFtQjs7SUFDbkIsdUNBQW9COztJQUNwQixrQ0FBZTs7SUFDZixxQ0FBaUI7O0lBR2pCLG9DQUFtSTs7SUFDbkksc0NBQTJPOztJQUMzTyx3Q0FBc0s7O0lBQ3RLLGtDQUE0Qjs7SUFDNUIsb0NBQXFDOztJQTBCckMsOEJBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgLCBPbkNoYW5nZXN9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhdHRlcnktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPiBcbiAgICBcbiAgICA8ZGVmcz5cbiAgICAgIDxtYXNrICpuZ0lmID0gXCJvdXRsaW5lZCBcIiBbYXR0ci5pZF09XCJtYXNrSURsZWZ0XCI+XG4gICAgICAgIDxyZWN0IHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjEwMCVcIiBmaWxsPVwid2hpdGVcIiAvPlxuICAgICAgICA8cG9seWdvbiBmaWxsPVwiYmxhY2tcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTMgXCIgLz5cbiAgICAgIDwvbWFzaz5cbiAgICAgIDxtYXNrICpuZ0lmID0gXCJvdXRsaW5lZCBcIiBbYXR0ci5pZF09XCJtYXNrSURyaWdodFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHJlY3QgW2F0dHIueF09XCJzdGFydFhcIiB5PVwiN1wiIGZpbGw9XCJibGFja1wiICBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCpmaWxsV2lkdGgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgICA8Y2xpcFBhdGggW2lkXT1cImdldElEKClcIj5cbiAgICAgICAgPHBhdGggb3ZlcmZsb3c9XCJ2aXNpYmxlXCIgW2F0dHIuZF09XCJnZXRDbGlwUGF0aCgpXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiICBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIuZF09XCJnZXRCYXNlcGF0aCgpXCIvPlxuICAgICAgXG4gICAgICA8ZyAgW2F0dHIuZmlsbF09IFwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj5cbiAgICAgIFxuPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLnhdPVwic3RhcnRYXCIgeT1cIjdcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIiBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCpmaWxsV2lkdGgsIDAsIDEwMClcIiBoZWlnaHQ9XCIxMFwiICBbYXR0ci5tYXNrXT1cIm91dGxpbmVkICYmIGNoYXJnaW5nID8gJ3VybCgjJyArIG1hc2tJRGxlZnQgKyAnKScgOiBudWxsXCIvPlxuPHBvbHlnb24gICpuZ0lmID0gXCJvdXRsaW5lZCAmJiBjaGFyZ2luZ1wiIHBvaW50cz1cIjExLjUsMTMgMTEuNSwxNSA0LDExIDkuNSwxMSA5LjUsOSAxNywxM1wiIFthdHRyLm1hc2tdPVwiJ3VybCgjJyArIG1hc2tJRHJpZ2h0ICsgJyknXCIgLz5cbiAgICAgIDwvZz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdjaGFyZ2luZycsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICBjaGFyZ2luZzogYm9vbGVhbiA9IGZhbHNlO1xuICBvdXRsaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBtYXNrSURsZWZ0OiBzdHJpbmc7XG4gIG1hc2tJRHJpZ2h0OiBzdHJpbmc7XG4gIHN0YXJ0WDogbnVtYmVyO1xuICBmaWxsV2lkdGg6bnVtYmVyO1xuXG5cbiAgYmFzZVBhdGggPSAnTTIwLDEwVjguM0MyMCw3LjYsMTkuNCw3LDE4LjcsN0gzLjNDMi42LDcsMiw3LjYsMiw4LjN2Ny4zQzIsMTYuNCwyLjYsMTcsMy4zLDE3aDE1LjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjE0aDJ2LTRIMjB6JztcbiAgY2hhcmdlUGF0aCA9ICdNMjAsMTBWOC4zM2ExLjMxOSwxLjMxOSwwLDAsMC0xLTEuMjYzQTEuMjU3LDEuMjU3LDAsMCwwLDE4LjY3LDdIMy4zNEExLjMzOCwxLjMzOCwwLDAsMCwyLDguMzN2Ny4zM0ExLjMzOCwxLjMzOCwwLDAsMCwzLjMzLDE3SDE4LjY3YTEuMjU3LDEuMjU3LDAsMCwwLC4zMy0uMDY3LDEuMzE5LDEuMzE5LDAsMCwwLDEtMS4yNjNWMTRoMlYxMFptLTguNSwzdjJMNCwxMUg5LjVWOUwxNywxM1onO1xuICBvdXRsaW5lZFBhdGggPSAnTTE4LDl2Nkg0VjlIMThtLjctMkgzLjNBMS4zMjQsMS4zMjQsMCwwLDAsMiw4LjN2Ny4zQTEuMzQ3LDEuMzQ3LDAsMCwwLDMuMywxN0gxOC42YTEuMzI0LDEuMzI0LDAsMCwwLDEuMy0xLjNWMTRoMlYxMEgyMFY4LjNBMS4zMjQsMS4zMjQsMCwwLDAsMTguNyw3Wic7XG4gIGJhc2VJRCA9ICdweGItYmF0dGVyeS1jbGlwJztcbiAgY2hhcmdlSUQgPSAncHhiLWJhdHRlcnktY2xpcC1jaGFyZ2UnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG5cbiAgICB0aGlzLm1hc2tJRGxlZnQgPSAnbWFza0xlZnQtJyArIHRoaXMucGVyY2VudDtcbiAgICB0aGlzLm1hc2tJRHJpZ2h0ID0gJ21hc2tSaWdodC0nICsgdGhpcy5wZXJjZW50O1xuXG4gICAgdGhpcy5zdGFydFggPSB0aGlzLm91dGxpbmVkID8gMy45IDogMjtcbiAgICB0aGlzLmZpbGxXaWR0aCA9IHRoaXMub3V0bGluZWQgPyAxNC4yIDogMTg7XG4gIH1cblxuXG4gIGdldEJhc2VwYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0Q2xpcFBhdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VJRCA6IHRoaXMuYmFzZUlEKTtcbiAgfVxuXG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSJdfQ==