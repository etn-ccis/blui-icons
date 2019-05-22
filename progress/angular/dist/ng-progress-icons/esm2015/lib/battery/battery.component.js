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
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.maskIDleft = 'maskLeft-' + this.percent;
        this.maskIDright = 'maskRight-' + this.percent;
        this.startX = this.outlined ? 3.9 : 2;
        this.fillWidth = this.outlined ? 14.2 : 18;
    }
    /**
     * @return {?}
     */
    getBasepath() {
        return (this.outlined ? this.outlinedPath : this.basePath);
    }
    /**
     * @return {?}
     */
    getClipPath() {
        return (this.charging ? this.chargePath : this.basePath);
    }
    /**
     * @return {?}
     */
    getID() {
        return (this.charging ? this.chargeID : this.baseID);
    }
}
BatteryComponent.decorators = [
    { type: Component, args: [{
                selector: 'battery-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"> 
    
    <defs>
      <mask *ngIf = "outlined " [attr.id]="maskIDleft">
        <rect width="100%" height="100%" fill="white" />
        <polygon fill="black" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13 " />
      </mask>
      <mask *ngIf = "outlined " [attr.id]="maskIDright">
        <rect width="100%" height="100%" fill="white" />
        <rect [attr.x]="startX" y="7" fill="black"  [attr.width]="(rv(percent, 0, 100)/100*fillWidth)" height="10" />
      </mask>
      <clipPath [id]="getID()">
        <path overflow="visible" [attr.d]="getClipPath()"/>
      </clipPath>
    </defs>
    <path [attr.fill]="color || 'currentColor'"  [attr.fill-opacity]="(outlined || percent >= 100) ? '1' : '0.3'" [attr.clip-path]="'url(#' + getID() + ')'" [attr.d]="getBasepath()"/>
      
      <g  [attr.fill]= "color || 'currentColor'">
      
<rect [attr.fill]="color || 'currentColor'" [attr.x]="startX" y="7" [attr.clip-path]="'url(#' + getID() + ')'" [attr.width]="(rv(percent, 0, 100)/100*fillWidth)" height="10"  [attr.mask]="outlined && charging ? 'url(#' + maskIDleft + ')' : null"/>
<polygon  *ngIf = "outlined && charging" points="11.5,13 11.5,15 4,11 9.5,11 9.5,9 17,13" [attr.mask]="'url(#' + maskIDright + ')'" />
      </g>
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'charging', 'outlined']
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFnQzFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFrQjNCO1FBakJBLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFPMUIsYUFBUSxHQUFHLHVIQUF1SCxDQUFDO1FBQ25JLGVBQVUsR0FBRyw2TkFBNk4sQ0FBQztRQUMzTyxpQkFBWSxHQUFHLHNKQUFzSixDQUFDO1FBQ3RLLFdBQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUM1QixhQUFRLEdBQUcseUJBQXlCLENBQUM7UUEwQnJDLE9BQUUsR0FBRyxVQUFVLENBQUM7SUF4QkEsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELFdBQVc7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELEtBQUs7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQzthQUM3RDs7Ozs7O0lBRUMsbUNBQXNCOztJQUN0QixnQ0FBa0I7O0lBQ2xCLGlDQUFjOztJQUNkLG9DQUEwQjs7SUFDMUIsb0NBQTBCOztJQUMxQixzQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIsa0NBQWU7O0lBQ2YscUNBQWtCOztJQUdsQixvQ0FBbUk7O0lBQ25JLHNDQUEyTzs7SUFDM08sd0NBQXNLOztJQUN0SyxrQ0FBNEI7O0lBQzVCLG9DQUFxQzs7SUEwQnJDLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXR0ZXJ5LXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4gXG4gICAgXG4gICAgPGRlZnM+XG4gICAgICA8bWFzayAqbmdJZiA9IFwib3V0bGluZWQgXCIgW2F0dHIuaWRdPVwibWFza0lEbGVmdFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHBvbHlnb24gZmlsbD1cImJsYWNrXCIgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzIFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgICA8bWFzayAqbmdJZiA9IFwib3V0bGluZWQgXCIgW2F0dHIuaWRdPVwibWFza0lEcmlnaHRcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxyZWN0IFthdHRyLnhdPVwic3RhcnRYXCIgeT1cIjdcIiBmaWxsPVwiYmxhY2tcIiAgW2F0dHIud2lkdGhdPVwiKHJ2KHBlcmNlbnQsIDAsIDEwMCkvMTAwKmZpbGxXaWR0aClcIiBoZWlnaHQ9XCIxMFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgICA8Y2xpcFBhdGggW2lkXT1cImdldElEKClcIj5cbiAgICAgICAgPHBhdGggb3ZlcmZsb3c9XCJ2aXNpYmxlXCIgW2F0dHIuZF09XCJnZXRDbGlwUGF0aCgpXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICA8L2RlZnM+XG4gICAgPHBhdGggW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiICBbYXR0ci5maWxsLW9wYWNpdHldPVwiKG91dGxpbmVkIHx8IHBlcmNlbnQgPj0gMTAwKSA/ICcxJyA6ICcwLjMnXCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIuZF09XCJnZXRCYXNlcGF0aCgpXCIvPlxuICAgICAgXG4gICAgICA8ZyAgW2F0dHIuZmlsbF09IFwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIj5cbiAgICAgIFxuPHJlY3QgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLnhdPVwic3RhcnRYXCIgeT1cIjdcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjJyArIGdldElEKCkgKyAnKSdcIiBbYXR0ci53aWR0aF09XCIocnYocGVyY2VudCwgMCwgMTAwKS8xMDAqZmlsbFdpZHRoKVwiIGhlaWdodD1cIjEwXCIgIFthdHRyLm1hc2tdPVwib3V0bGluZWQgJiYgY2hhcmdpbmcgPyAndXJsKCMnICsgbWFza0lEbGVmdCArICcpJyA6IG51bGxcIi8+XG48cG9seWdvbiAgKm5nSWYgPSBcIm91dGxpbmVkICYmIGNoYXJnaW5nXCIgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzXCIgW2F0dHIubWFza109XCIndXJsKCMnICsgbWFza0lEcmlnaHQgKyAnKSdcIiAvPlxuICAgICAgPC9nPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ2NoYXJnaW5nJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgQmF0dGVyeUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHBlcmNlbnQ6IG51bWJlciA9IDEwMDtcbiAgc2l6ZTogbnVtYmVyID0gMjQ7XG4gIGNvbG9yOiBzdHJpbmc7XG4gIGNoYXJnaW5nOiBib29sZWFuID0gZmFsc2U7XG4gIG91dGxpbmVkOiBib29sZWFuID0gZmFsc2U7XG4gIG1hc2tJRGxlZnQ6IHN0cmluZztcbiAgbWFza0lEcmlnaHQ6IHN0cmluZztcbiAgc3RhcnRYOiBudW1iZXI7XG4gIGZpbGxXaWR0aDogbnVtYmVyO1xuXG5cbiAgYmFzZVBhdGggPSAnTTIwLDEwVjguM0MyMCw3LjYsMTkuNCw3LDE4LjcsN0gzLjNDMi42LDcsMiw3LjYsMiw4LjN2Ny4zQzIsMTYuNCwyLjYsMTcsMy4zLDE3aDE1LjNjMC43LDAsMS4zLTAuNiwxLjMtMS4zVjE0aDJ2LTRIMjB6JztcbiAgY2hhcmdlUGF0aCA9ICdNMjAsMTBWOC4zM2ExLjMxOSwxLjMxOSwwLDAsMC0xLTEuMjYzQTEuMjU3LDEuMjU3LDAsMCwwLDE4LjY3LDdIMy4zNEExLjMzOCwxLjMzOCwwLDAsMCwyLDguMzN2Ny4zM0ExLjMzOCwxLjMzOCwwLDAsMCwzLjMzLDE3SDE4LjY3YTEuMjU3LDEuMjU3LDAsMCwwLC4zMy0uMDY3LDEuMzE5LDEuMzE5LDAsMCwwLDEtMS4yNjNWMTRoMlYxMFptLTguNSwzdjJMNCwxMUg5LjVWOUwxNywxM1onO1xuICBvdXRsaW5lZFBhdGggPSAnTTE4LDl2Nkg0VjlIMThtLjctMkgzLjNBMS4zMjQsMS4zMjQsMCwwLDAsMiw4LjN2Ny4zQTEuMzQ3LDEuMzQ3LDAsMCwwLDMuMywxN0gxOC42YTEuMzI0LDEuMzI0LDAsMCwwLDEuMy0xLjNWMTRoMlYxMEgyMFY4LjNBMS4zMjQsMS4zMjQsMCwwLDAsMTguNyw3Wic7XG4gIGJhc2VJRCA9ICdweGItYmF0dGVyeS1jbGlwJztcbiAgY2hhcmdlSUQgPSAncHhiLWJhdHRlcnktY2xpcC1jaGFyZ2UnO1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cbiAgbmdPbkNoYW5nZXMoKSB7XG5cbiAgICB0aGlzLm1hc2tJRGxlZnQgPSAnbWFza0xlZnQtJyArIHRoaXMucGVyY2VudDtcbiAgICB0aGlzLm1hc2tJRHJpZ2h0ID0gJ21hc2tSaWdodC0nICsgdGhpcy5wZXJjZW50O1xuXG4gICAgdGhpcy5zdGFydFggPSB0aGlzLm91dGxpbmVkID8gMy45IDogMjtcbiAgICB0aGlzLmZpbGxXaWR0aCA9IHRoaXMub3V0bGluZWQgPyAxNC4yIDogMTg7XG4gIH1cblxuXG4gIGdldEJhc2VwYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0Q2xpcFBhdGgoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgZ2V0SUQoKSB7XG4gICAgcmV0dXJuICh0aGlzLmNoYXJnaW5nID8gdGhpcy5jaGFyZ2VJRCA6IHRoaXMuYmFzZUlEKTtcbiAgfVxuXG4gIHJ2ID0gcmFuZ2VWYWx1ZTtcblxufSJdfQ==