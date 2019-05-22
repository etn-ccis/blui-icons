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
        <rect [attr.x]="startX" y="7" fill="black"  [attr.width]="rv(percent/100*fillWidth, 0, 100)" height="10" />
      </mask>
      <clipPath [id]="getID()">
        <path overflow="visible" [attr.d]="getClipPath()"/>
      </clipPath>
    </defs>
    <path [attr.fill]="color || 'currentColor'"  [attr.fill-opacity]="(outlined || percent >= 100) ? '1' : '0.3'" [attr.clip-path]="'url(#' + getID() + ')'" [attr.d]="getBasepath()"/>
      
      <g  [attr.fill]= "color || 'currentColor'">
      
<rect [attr.fill]="color || 'currentColor'" [attr.x]="startX" y="7" [attr.clip-path]="'url(#' + getID() + ')'" [attr.width]="rv(percent/100*fillWidth, 0, 100)" height="10"  [attr.mask]="outlined && charging ? 'url(#' + maskIDleft + ')' : null"/>
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmF0dGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AcHhibHVlL25nLXByb2dyZXNzLWljb25zLyIsInNvdXJjZXMiOlsibGliL2JhdHRlcnkvYmF0dGVyeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFnQzFDLE1BQU0sT0FBTyxnQkFBZ0I7SUFrQjNCO1FBakJBLFlBQU8sR0FBVyxHQUFHLENBQUM7UUFDdEIsU0FBSSxHQUFXLEVBQUUsQ0FBQztRQUVsQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFPMUIsYUFBUSxHQUFHLHVIQUF1SCxDQUFDO1FBQ25JLGVBQVUsR0FBRyw2TkFBNk4sQ0FBQztRQUMzTyxpQkFBWSxHQUFHLHNKQUFzSixDQUFDO1FBQ3RLLFdBQU0sR0FBRyxrQkFBa0IsQ0FBQztRQUM1QixhQUFRLEdBQUcseUJBQXlCLENBQUM7UUEwQnJDLE9BQUUsR0FBRyxVQUFVLENBQUM7SUF4QkEsQ0FBQzs7OztJQUVqQixRQUFRO0lBQ1IsQ0FBQzs7OztJQUNELFdBQVc7UUFFVCxJQUFJLENBQUMsVUFBVSxHQUFHLFdBQVcsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzdDLElBQUksQ0FBQyxXQUFXLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQzdDLENBQUM7Ozs7SUFHRCxXQUFXO1FBQ1QsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7O0lBQ0QsV0FBVztRQUNULE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0QsQ0FBQzs7OztJQUNELEtBQUs7UUFDSCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZELENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGtCQUFrQjtnQkFDNUIsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F3QlQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQzthQUM3RDs7Ozs7O0lBRUMsbUNBQXNCOztJQUN0QixnQ0FBa0I7O0lBQ2xCLGlDQUFjOztJQUNkLG9DQUEwQjs7SUFDMUIsb0NBQTBCOztJQUMxQixzQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIsa0NBQWU7O0lBQ2YscUNBQWlCOztJQUdqQixvQ0FBbUk7O0lBQ25JLHNDQUEyTzs7SUFDM08sd0NBQXNLOztJQUN0SyxrQ0FBNEI7O0lBQzVCLG9DQUFxQzs7SUEwQnJDLDhCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0ICwgT25DaGFuZ2VzfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdiYXR0ZXJ5LXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjQgMjQ7XCIgeG1sOnNwYWNlPVwicHJlc2VydmVcIj4gXG4gICAgXG4gICAgPGRlZnM+XG4gICAgICA8bWFzayAqbmdJZiA9IFwib3V0bGluZWQgXCIgW2F0dHIuaWRdPVwibWFza0lEbGVmdFwiPlxuICAgICAgICA8cmVjdCB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgZmlsbD1cIndoaXRlXCIgLz5cbiAgICAgICAgPHBvbHlnb24gZmlsbD1cImJsYWNrXCIgcG9pbnRzPVwiMTEuNSwxMyAxMS41LDE1IDQsMTEgOS41LDExIDkuNSw5IDE3LDEzIFwiIC8+XG4gICAgICA8L21hc2s+XG4gICAgICA8bWFzayAqbmdJZiA9IFwib3V0bGluZWQgXCIgW2F0dHIuaWRdPVwibWFza0lEcmlnaHRcIj5cbiAgICAgICAgPHJlY3Qgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIGZpbGw9XCJ3aGl0ZVwiIC8+XG4gICAgICAgIDxyZWN0IFthdHRyLnhdPVwic3RhcnRYXCIgeT1cIjdcIiBmaWxsPVwiYmxhY2tcIiAgW2F0dHIud2lkdGhdPVwicnYocGVyY2VudC8xMDAqZmlsbFdpZHRoLCAwLCAxMDApXCIgaGVpZ2h0PVwiMTBcIiAvPlxuICAgICAgPC9tYXNrPlxuICAgICAgPGNsaXBQYXRoIFtpZF09XCJnZXRJRCgpXCI+XG4gICAgICAgIDxwYXRoIG92ZXJmbG93PVwidmlzaWJsZVwiIFthdHRyLmRdPVwiZ2V0Q2xpcFBhdGgoKVwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgPC9kZWZzPlxuICAgIDxwYXRoIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiAgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIihvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCkgPyAnMScgOiAnMC4zJ1wiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCMnICsgZ2V0SUQoKSArICcpJ1wiIFthdHRyLmRdPVwiZ2V0QmFzZXBhdGgoKVwiLz5cbiAgICAgIFxuICAgICAgPGcgIFthdHRyLmZpbGxdPSBcImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCI+XG4gICAgICBcbjxyZWN0IFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci54XT1cInN0YXJ0WFwiIHk9XCI3XCIgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoIycgKyBnZXRJRCgpICsgJyknXCIgW2F0dHIud2lkdGhdPVwicnYocGVyY2VudC8xMDAqZmlsbFdpZHRoLCAwLCAxMDApXCIgaGVpZ2h0PVwiMTBcIiAgW2F0dHIubWFza109XCJvdXRsaW5lZCAmJiBjaGFyZ2luZyA/ICd1cmwoIycgKyBtYXNrSURsZWZ0ICsgJyknIDogbnVsbFwiLz5cbjxwb2x5Z29uICAqbmdJZiA9IFwib3V0bGluZWQgJiYgY2hhcmdpbmdcIiBwb2ludHM9XCIxMS41LDEzIDExLjUsMTUgNCwxMSA5LjUsMTEgOS41LDkgMTcsMTNcIiBbYXR0ci5tYXNrXT1cIid1cmwoIycgKyBtYXNrSURyaWdodCArICcpJ1wiIC8+XG4gICAgICA8L2c+XG4gICAgPC9zdmc+XG4gIGAsXG4gIHN0eWxlczogW10sXG4gIGlucHV0czogWydwZXJjZW50JywgJ3NpemUnLCAnY29sb3InLCAnY2hhcmdpbmcnLCAnb3V0bGluZWQnXVxufSlcbmV4cG9ydCBjbGFzcyBCYXR0ZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDogbnVtYmVyID0gMTAwO1xuICBzaXplOiBudW1iZXIgPSAyNDtcbiAgY29sb3I6IHN0cmluZztcbiAgY2hhcmdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgb3V0bGluZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgbWFza0lEbGVmdDogc3RyaW5nO1xuICBtYXNrSURyaWdodDogc3RyaW5nO1xuICBzdGFydFg6IG51bWJlcjtcbiAgZmlsbFdpZHRoOm51bWJlcjtcblxuXG4gIGJhc2VQYXRoID0gJ00yMCwxMFY4LjNDMjAsNy42LDE5LjQsNywxOC43LDdIMy4zQzIuNiw3LDIsNy42LDIsOC4zdjcuM0MyLDE2LjQsMi42LDE3LDMuMywxN2gxNS4zYzAuNywwLDEuMy0wLjYsMS4zLTEuM1YxNGgydi00SDIweic7XG4gIGNoYXJnZVBhdGggPSAnTTIwLDEwVjguMzNhMS4zMTksMS4zMTksMCwwLDAtMS0xLjI2M0ExLjI1NywxLjI1NywwLDAsMCwxOC42Nyw3SDMuMzRBMS4zMzgsMS4zMzgsMCwwLDAsMiw4LjMzdjcuMzNBMS4zMzgsMS4zMzgsMCwwLDAsMy4zMywxN0gxOC42N2ExLjI1NywxLjI1NywwLDAsMCwuMzMtLjA2NywxLjMxOSwxLjMxOSwwLDAsMCwxLTEuMjYzVjE0aDJWMTBabS04LjUsM3YyTDQsMTFIOS41VjlMMTcsMTNaJztcbiAgb3V0bGluZWRQYXRoID0gJ00xOCw5djZINFY5SDE4bS43LTJIMy4zQTEuMzI0LDEuMzI0LDAsMCwwLDIsOC4zdjcuM0ExLjM0NywxLjM0NywwLDAsMCwzLjMsMTdIMTguNmExLjMyNCwxLjMyNCwwLDAsMCwxLjMtMS4zVjE0aDJWMTBIMjBWOC4zQTEuMzI0LDEuMzI0LDAsMCwwLDE4LjcsN1onO1xuICBiYXNlSUQgPSAncHhiLWJhdHRlcnktY2xpcCc7XG4gIGNoYXJnZUlEID0gJ3B4Yi1iYXR0ZXJ5LWNsaXAtY2hhcmdlJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuXG4gICAgdGhpcy5tYXNrSURsZWZ0ID0gJ21hc2tMZWZ0LScgKyB0aGlzLnBlcmNlbnQ7XG4gICAgdGhpcy5tYXNrSURyaWdodCA9ICdtYXNrUmlnaHQtJyArIHRoaXMucGVyY2VudDtcblxuICAgIHRoaXMuc3RhcnRYID0gdGhpcy5vdXRsaW5lZCA/IDMuOSA6IDI7XG4gICAgdGhpcy5maWxsV2lkdGggPSB0aGlzLm91dGxpbmVkID8gMTQuMiA6IDE4O1xuICB9XG5cblxuICBnZXRCYXNlcGF0aCgpIHtcbiAgICByZXR1cm4gKHRoaXMub3V0bGluZWQgPyB0aGlzLm91dGxpbmVkUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIGdldENsaXBQYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlUGF0aCA6IHRoaXMuYmFzZVBhdGgpO1xuICB9XG4gIGdldElEKCkge1xuICAgIHJldHVybiAodGhpcy5jaGFyZ2luZyA/IHRoaXMuY2hhcmdlSUQgOiB0aGlzLmJhc2VJRCk7XG4gIH1cblxuICBydiA9IHJhbmdlVmFsdWU7XG5cbn0iXX0=