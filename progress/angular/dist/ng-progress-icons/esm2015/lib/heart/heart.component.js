/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { rangeValue } from '../utilities';
export class HeartComponent {
    constructor() {
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
    ngOnInit() {
        this.startY = this.outlined ? 19.45 : 21.35;
        this.startX = this.outlined ? 14.55 : 18.35;
    }
    /**
     * @return {?}
     */
    getPath() {
        return (this.outlined ? this.outlinedPath : this.basePath);
    }
}
HeartComponent.decorators = [
    { type: Component, args: [{
                selector: 'heart-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path [attr.fill]="color || 'currentColor'" [attr.fill-opacity]="(outlined || percent >= 100) ? '1' : '0.3'" [attr.d]="getPath()"/>
      <clipPath id="pxb-heart-clip">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
      </clipPath>
      <rect [attr.fill]="color || 'currentColor'" clip-path="url(#pxb-heart-clip)" x="2" [attr.y]="startY-(rv(percent,0,100))*startX/100" width="20" height="20" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'outlined']
            },] },
];
/** @nocollapse */
HeartComponent.ctorParameters = () => [];
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
    HeartComponent.prototype.startY;
    /** @type {?} */
    HeartComponent.prototype.startX;
    /** @type {?} */
    HeartComponent.prototype.basePath;
    /** @type {?} */
    HeartComponent.prototype.outlinedPath;
    /** @type {?} */
    HeartComponent.prototype.rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9oZWFydC9oZWFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWdCMUMsTUFBTSxPQUFPLGNBQWM7SUFVekI7UUFUQSxZQUFPLEdBQVUsR0FBRyxDQUFDO1FBQ3JCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsYUFBUSxHQUFXLEtBQUssQ0FBQztRQUl6QixhQUFRLEdBQUcsZ0xBQWdMLENBQUM7UUFDNUwsaUJBQVksR0FBRywyWUFBMlksQ0FBQztRQWEzWixPQUFFLEdBQUcsVUFBVSxDQUFDO0lBWkQsQ0FBQzs7OztJQUdoQixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBRTlDLENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7YUFDakQ7Ozs7OztJQUVDLGlDQUFxQjs7SUFDckIsOEJBQWlCOztJQUNqQiwrQkFBYTs7SUFDYixrQ0FBeUI7O0lBQ3pCLGdDQUFPOztJQUNQLGdDQUFPOztJQUVQLGtDQUE0TDs7SUFDNUwsc0NBQTJaOztJQWEzWiw0QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2hlYXJ0LXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj5cbiAgICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuZF09XCJnZXRQYXRoKClcIi8+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJweGItaGVhcnQtY2xpcFwiPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6XCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxyZWN0IFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBjbGlwLXBhdGg9XCJ1cmwoI3B4Yi1oZWFydC1jbGlwKVwiIHg9XCIyXCIgW2F0dHIueV09XCJzdGFydFktKHJ2KHBlcmNlbnQsMCwxMDApKSpzdGFydFgvMTAwXCIgd2lkdGg9XCIyMFwiIGhlaWdodD1cIjIwXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdvdXRsaW5lZCddXG59KVxuZXhwb3J0IGNsYXNzIEhlYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgb3V0bGluZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBzdGFydFk7XG4gIHN0YXJ0WDtcblxuICBiYXNlUGF0aCA9ICdNMTIgMjEuMzVsLTEuNDUtMS4zMkM1LjQgMTUuMzYgMiAxMi4yOCAyIDguNSAyIDUuNDIgNC40MiAzIDcuNSAzYzEuNzQgMCAzLjQxLjgxIDQuNSAyLjA5QzEzLjA5IDMuODEgMTQuNzYgMyAxNi41IDMgMTkuNTggMyAyMiA1LjQyIDIyIDguNWMwIDMuNzgtMy40IDYuODYtOC41NSAxMS41NEwxMiAyMS4zNXonO1xuICBvdXRsaW5lZFBhdGggPSAnTTE2LjUsNUEzLjQ2MiwzLjQ2MiwwLDAsMSwyMCw4LjVjMCwyLjg4NS0zLjEyNSw1LjcyNS03Ljg1NiwxMC4wMjRsLS4wMzUuMDMyLS4xLjA5NC0uMTI0LS4xMTNDNy4xMzUsMTQuMjM0LDQsMTEuMzkxLDQsOC41QTMuNDYyLDMuNDYyLDAsMCwxLDcuNSw1YTMuOTYsMy45NiwwLDAsMSwyLjk3NywxLjM4N0wxMiw4LjE3NWwxLjUyMy0xLjc4OEEzLjk2LDMuOTYsMCwwLDEsMTYuNSw1bTAtMkE1Ljk4OCw1Ljk4OCwwLDAsMCwxMiw1LjA5LDUuOTg4LDUuOTg4LDAsMCwwLDcuNSwzLDUuNDQ3LDUuNDQ3LDAsMCwwLDIsOC41YzAsMy43OCwzLjQsNi44Niw4LjU1LDExLjUzTDEyLDIxLjM1bDEuNDUtMS4zMUMxOC42LDE1LjM2LDIyLDEyLjI4LDIyLDguNUE1LjQ0Nyw1LjQ0NywwLDAsMCwxNi41LDNaJztcbiAgY29uc3RydWN0b3IoKSB7fVxuICAgXG5cbiAgbmdPbkluaXQoKSB7ICBcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMub3V0bGluZWQgPyAxOS40NSA6IDIxLjM1O1xuICAgIHRoaXMuc3RhcnRYID0gdGhpcy5vdXRsaW5lZCA/IDE0LjU1IDogMTguMzU7XG5cbiAgfVxuXG4gIGdldFBhdGgoKXtcbiAgICByZXR1cm4gKHRoaXMub3V0bGluZWQgPyB0aGlzLm91dGxpbmVkUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSJdfQ==