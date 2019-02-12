/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { rangeValue } from '../utilities';
export class BatteryComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.rv = rangeValue;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
BatteryComponent.decorators = [
    { type: Component, args: [{
                selector: 'battery-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve">
      <path [attr.fill]="color || 'currentColor'" fill-opacity="0.3" d="M20,10V8.3C20,7.6,19.4,7,18.7,7H3.3C2.6,7,2,7.6,2,8.3v7.3C2,16.4,2.6,17,3.3,17h15.3c0.7,0,1.3-0.6,1.3-1.3V14h2v-4H20z"/>
      <clipPath id="pxb-battery-clip">
        <path overflow="visible" d="M20,8.33C20,7.6,19.4,7,18.67,7H3.34C2.6,7,2,7.6,2,8.33v7.33C2,16.4,2.6,17,3.33,17h15.34C19.4,17,20,16.4,20,15.67V8.33z"/>
      </clipPath> 
      <rect [attr.fill]="color || 'currentColor'" x="2" y="7" clip-path="url(#pxb-battery-clip)" [attr.width]="rv(percent/100*18, 0, 100)" height="10" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color']
            },] },
];
/** @nocollapse */
BatteryComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    BatteryComponent.prototype.percent;
    /** @type {?} */
    BatteryComponent.prototype.size;
    /** @type {?} */
    BatteryComponent.prototype.color;
    /** @type {?} */
    BatteryComponent.prototype.rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQWdCMUMsTUFBTSxPQUFPLGdCQUFnQjtJQUkzQjtRQUhBLFlBQU8sR0FBVSxHQUFHLENBQUM7UUFDckIsU0FBSSxHQUFVLEVBQUUsQ0FBQztRQU9qQixPQUFFLEdBQUcsVUFBVSxDQUFDO0lBTEEsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7O1lBckJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLENBQUM7YUFDckM7Ozs7OztJQUVDLG1DQUFxQjs7SUFDckIsZ0NBQWlCOztJQUNqQixpQ0FBYTs7SUFNYiw4QkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmFuZ2VWYWx1ZSB9IGZyb20gJy4uL3V0aWxpdGllcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2JhdHRlcnktcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNCAyNDtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPlxuICAgICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIGZpbGwtb3BhY2l0eT1cIjAuM1wiIGQ9XCJNMjAsMTBWOC4zQzIwLDcuNiwxOS40LDcsMTguNyw3SDMuM0MyLjYsNywyLDcuNiwyLDguM3Y3LjNDMiwxNi40LDIuNiwxNywzLjMsMTdoMTUuM2MwLjcsMCwxLjMtMC42LDEuMy0xLjNWMTRoMnYtNEgyMHpcIi8+XG4gICAgICA8Y2xpcFBhdGggaWQ9XCJweGItYmF0dGVyeS1jbGlwXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIGQ9XCJNMjAsOC4zM0MyMCw3LjYsMTkuNCw3LDE4LjY3LDdIMy4zNEMyLjYsNywyLDcuNiwyLDguMzN2Ny4zM0MyLDE2LjQsMi42LDE3LDMuMzMsMTdoMTUuMzRDMTkuNCwxNywyMCwxNi40LDIwLDE1LjY3VjguMzN6XCIvPlxuICAgICAgPC9jbGlwUGF0aD4gXG4gICAgICA8cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgeD1cIjJcIiB5PVwiN1wiIGNsaXAtcGF0aD1cInVybCgjcHhiLWJhdHRlcnktY2xpcClcIiBbYXR0ci53aWR0aF09XCJydihwZXJjZW50LzEwMCoxOCwgMCwgMTAwKVwiIGhlaWdodD1cIjEwXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvciddXG59KVxuZXhwb3J0IGNsYXNzIEJhdHRlcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgcnYgPSByYW5nZVZhbHVlO1xuXG59Il19