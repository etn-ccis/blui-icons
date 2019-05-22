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
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.startY = this.outlined ? 18.35 : 21.35;
        this.fillHeight = this.outlined ? 13.35 : 18.35;
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
      <rect [attr.fill]="color || 'currentColor'" clip-path="url(#pxb-heart-clip)" x="2" [attr.y]="startY-(rv(percent,0,100))*fillHeight/100" width="20" height="20" />
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
    HeartComponent.prototype.fillHeight;
    /** @type {?} */
    HeartComponent.prototype.basePath;
    /** @type {?} */
    HeartComponent.prototype.outlinedPath;
    /** @type {?} */
    HeartComponent.prototype.rv;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi9oZWFydC9oZWFydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFnQjFDLE1BQU0sT0FBTyxjQUFjO0lBVXpCO1FBVEEsWUFBTyxHQUFXLEdBQUcsQ0FBQztRQUN0QixTQUFJLEdBQVcsRUFBRSxDQUFDO1FBRWxCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFJMUIsYUFBUSxHQUFHLGdMQUFnTCxDQUFDO1FBQzVMLGlCQUFZLEdBQUcsMllBQTJZLENBQUM7UUFlM1osT0FBRSxHQUFHLFVBQVUsQ0FBQztJQWRBLENBQUM7Ozs7SUFHakIsUUFBUTtJQUVSLENBQUM7Ozs7SUFDRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztRQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2xELENBQUM7Ozs7SUFFRCxPQUFPO1FBQ0wsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7WUFyQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLFFBQVEsRUFBRTs7Ozs7Ozs7R0FRVDtnQkFDRCxNQUFNLEVBQUUsRUFBRTtnQkFDVixNQUFNLEVBQUUsQ0FBQyxTQUFTLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBRSxVQUFVLENBQUM7YUFDakQ7Ozs7OztJQUVDLGlDQUFzQjs7SUFDdEIsOEJBQWtCOztJQUNsQiwrQkFBYzs7SUFDZCxrQ0FBMEI7O0lBQzFCLGdDQUFlOztJQUNmLG9DQUFrQjs7SUFFbEIsa0NBQTRMOztJQUM1TCxzQ0FBMlo7O0lBZTNaLDRCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJhbmdlVmFsdWUgfSBmcm9tICcuLi91dGlsaXRpZXMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdoZWFydC1wcm9ncmVzcycsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHN2ZyBbYXR0ci5oZWlnaHRdPVwic2l6ZSsncHgnXCIgW2F0dHIud2lkdGhdPVwic2l6ZSsncHgnXCIgeD1cIjBweFwiIHk9XCIwcHhcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0O1wiIHhtbDpzcGFjZT1cInByZXNlcnZlXCI+XG4gICAgICA8cGF0aCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgW2F0dHIuZmlsbC1vcGFjaXR5XT1cIihvdXRsaW5lZCB8fCBwZXJjZW50ID49IDEwMCkgPyAnMScgOiAnMC4zJ1wiIFthdHRyLmRdPVwiZ2V0UGF0aCgpXCIvPlxuICAgICAgPGNsaXBQYXRoIGlkPVwicHhiLWhlYXJ0LWNsaXBcIj5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAyMS4zNWwtMS40NS0xLjMyQzUuNCAxNS4zNiAyIDEyLjI4IDIgOC41IDIgNS40MiA0LjQyIDMgNy41IDNjMS43NCAwIDMuNDEuODEgNC41IDIuMDlDMTMuMDkgMy44MSAxNC43NiAzIDE2LjUgMyAxOS41OCAzIDIyIDUuNDIgMjIgOC41YzAgMy43OC0zLjQgNi44Ni04LjU1IDExLjU0TDEyIDIxLjM1elwiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8cmVjdCBbYXR0ci5maWxsXT1cImNvbG9yIHx8ICdjdXJyZW50Q29sb3InXCIgY2xpcC1wYXRoPVwidXJsKCNweGItaGVhcnQtY2xpcClcIiB4PVwiMlwiIFthdHRyLnldPVwic3RhcnRZLShydihwZXJjZW50LDAsMTAwKSkqZmlsbEhlaWdodC8xMDBcIiB3aWR0aD1cIjIwXCIgaGVpZ2h0PVwiMjBcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ291dGxpbmVkJ11cbn0pXG5leHBvcnQgY2xhc3MgSGVhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50OiBudW1iZXIgPSAxMDA7XG4gIHNpemU6IG51bWJlciA9IDI0O1xuICBjb2xvcjogc3RyaW5nO1xuICBvdXRsaW5lZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdGFydFk6IG51bWJlcjtcbiAgZmlsbEhlaWdodDpudW1iZXI7XG5cbiAgYmFzZVBhdGggPSAnTTEyIDIxLjM1bC0xLjQ1LTEuMzJDNS40IDE1LjM2IDIgMTIuMjggMiA4LjUgMiA1LjQyIDQuNDIgMyA3LjUgM2MxLjc0IDAgMy40MS44MSA0LjUgMi4wOUMxMy4wOSAzLjgxIDE0Ljc2IDMgMTYuNSAzIDE5LjU4IDMgMjIgNS40MiAyMiA4LjVjMCAzLjc4LTMuNCA2Ljg2LTguNTUgMTEuNTRMMTIgMjEuMzV6JztcbiAgb3V0bGluZWRQYXRoID0gJ00xNi41LDVBMy40NjIsMy40NjIsMCwwLDEsMjAsOC41YzAsMi44ODUtMy4xMjUsNS43MjUtNy44NTYsMTAuMDI0bC0uMDM1LjAzMi0uMS4wOTQtLjEyNC0uMTEzQzcuMTM1LDE0LjIzNCw0LDExLjM5MSw0LDguNUEzLjQ2MiwzLjQ2MiwwLDAsMSw3LjUsNWEzLjk2LDMuOTYsMCwwLDEsMi45NzcsMS4zODdMMTIsOC4xNzVsMS41MjMtMS43ODhBMy45NiwzLjk2LDAsMCwxLDE2LjUsNW0wLTJBNS45ODgsNS45ODgsMCwwLDAsMTIsNS4wOSw1Ljk4OCw1Ljk4OCwwLDAsMCw3LjUsMyw1LjQ0Nyw1LjQ0NywwLDAsMCwyLDguNWMwLDMuNzgsMy40LDYuODYsOC41NSwxMS41M0wxMiwyMS4zNWwxLjQ1LTEuMzFDMTguNiwxNS4zNiwyMiwxMi4yOCwyMiw4LjVBNS40NDcsNS40NDcsMCwwLDAsMTYuNSwzWic7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cblxuICBuZ09uSW5pdCgpIHtcblxuICB9XG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5vdXRsaW5lZCA/IDE4LjM1IDogMjEuMzU7XG4gICAgdGhpcy5maWxsSGVpZ2h0ID0gdGhpcy5vdXRsaW5lZCA/IDEzLjM1IDogMTguMzU7XG4gIH1cblxuICBnZXRQYXRoKCkge1xuICAgIHJldHVybiAodGhpcy5vdXRsaW5lZCA/IHRoaXMub3V0bGluZWRQYXRoIDogdGhpcy5iYXNlUGF0aCk7XG4gIH1cbiAgcnYgPSByYW5nZVZhbHVlO1xuXG59Il19