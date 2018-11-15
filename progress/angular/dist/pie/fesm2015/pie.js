import { Injectable, Component, NgModule, defineInjectable } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PieService {
    constructor() { }
}
PieService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] },
];
/** @nocollapse */
PieService.ctorParameters = () => [];
/** @nocollapse */ PieService.ngInjectableDef = defineInjectable({ factory: function PieService_Factory() { return new PieService(); }, token: PieService, providedIn: "root" });

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PieComponent {
    constructor() {
        this.percent = 100;
        this.size = 24;
        this.ring = 10;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.stroke = Math.max(1, Math.min(10, Math.round(this.ring)));
    }
    /**
     * @param {?} value
     * @param {?} min
     * @param {?} max
     * @return {?}
     */
    rangeValue(value, min, max) {
        return Math.max(min, Math.min(value, max));
    }
    /**
     * @param {?} percent
     * @return {?}
     */
    getCoordinates(percent) {
        /** @type {?} */
        const radius = 12;
        /** @type {?} */
        const degrees = percent * 3.6;
        return {
            x: radius + (radius * Math.cos((Math.PI / 180) * (degrees))),
            y: radius + (radius * Math.sin((Math.PI / 180) * (degrees)))
        };
    }
}
PieComponent.decorators = [
    { type: Component, args: [{
                selector: 'pie-progress',
                template: `
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="enableBackground: 'new 0 0 24 24'; xmlSpace:'preserve'; transform:'rotate(-.25turn)'">
      <clipPath [attr.id]="'pxb-donut-clip-'+stroke">
        <path [attr.d]="'M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,' + (20-stroke) +'A' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,1,1,' + (22-stroke) + ',12,' + (20-2*stroke)/2 + ',' + (20-2*stroke)/2 + ',0,0,1,12,' + (22-stroke) + 'Z'"/>
      </clipPath>
      <circle [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" cx="12" cy="12" r="10" [attr.fill]="color || 'currentColor'" [attr.fill-opacity]="percent >= 100 ? '1' : '0.3'"></circle>
      <path *ngIf="rangeValue(percent, 0, 100) > 0 && rangeValue(percent, 0, 100) < 100" [attr.fill]="color || 'currentColor'" [attr.clip-path]="'url(#pxb-donut-clip-'+stroke+')'" [attr.d]="'M 12,12 H 24 A 12,12,0,'+(rangeValue(percent, 0, 100)>=50?1:0)+',1,'+getCoordinates(rangeValue(percent, 0, 100))['x']+','+getCoordinates(rangeValue(percent, 0, 100))['y']+'Z'" />
    </svg>
  `,
                styles: [],
                inputs: ['percent', 'size', 'color', 'ring']
            },] },
];
/** @nocollapse */
PieComponent.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class PieModule {
}
PieModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [PieComponent],
                exports: [PieComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { PieService, PieComponent, PieModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9waWUvbGliL3BpZS5zZXJ2aWNlLnRzIiwibmc6Ly9waWUvbGliL3BpZS5jb21wb25lbnQudHMiLCJuZzovL3BpZS9saWIvcGllLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFBpZVNlcnZpY2Uge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG59XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdwaWUtcHJvZ3Jlc3MnLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzdmcgW2F0dHIuaGVpZ2h0XT1cInNpemUrJ3B4J1wiIFthdHRyLndpZHRoXT1cInNpemUrJ3B4J1wiIHg9XCIwcHhcIiB5PVwiMHB4XCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0eWxlPVwiZW5hYmxlQmFja2dyb3VuZDogJ25ldyAwIDAgMjQgMjQnOyB4bWxTcGFjZToncHJlc2VydmUnOyB0cmFuc2Zvcm06J3JvdGF0ZSgtLjI1dHVybiknXCI+XG4gICAgICA8Y2xpcFBhdGggW2F0dHIuaWRdPVwiJ3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlXCI+XG4gICAgICAgIDxwYXRoIFthdHRyLmRdPVwiJ00xMiwyQTEwLDEwLDAsMSwwLDIyLDEyLDEwLDEwLDAsMCwwLDEyLDJabTAsJyArICgyMC1zdHJva2UpICsnQScgKyAoMjAtMipzdHJva2UpLzIgKyAnLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLDAsMSwxLCcgKyAoMjItc3Ryb2tlKSArICcsMTIsJyArICgyMC0yKnN0cm9rZSkvMiArICcsJyArICgyMC0yKnN0cm9rZSkvMiArICcsMCwwLDEsMTIsJyArICgyMi1zdHJva2UpICsgJ1onXCIvPlxuICAgICAgPC9jbGlwUGF0aD5cbiAgICAgIDxjaXJjbGUgW2F0dHIuY2xpcC1wYXRoXT1cIid1cmwoI3B4Yi1kb251dC1jbGlwLScrc3Ryb2tlKycpJ1wiIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmZpbGwtb3BhY2l0eV09XCJwZXJjZW50ID49IDEwMCA/ICcxJyA6ICcwLjMnXCI+PC9jaXJjbGU+XG4gICAgICA8cGF0aCAqbmdJZj1cInJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSA+IDAgJiYgcmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApIDwgMTAwXCIgW2F0dHIuZmlsbF09XCJjb2xvciB8fCAnY3VycmVudENvbG9yJ1wiIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBbYXR0ci5kXT1cIidNIDEyLDEyIEggMjQgQSAxMiwxMiwwLCcrKHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKT49NTA/MTowKSsnLDEsJytnZXRDb29yZGluYXRlcyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkpWyd4J10rJywnK2dldENvb3JkaW5hdGVzKHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSlbJ3knXSsnWidcIiAvPlxuICAgIDwvc3ZnPlxuICBgLFxuICBzdHlsZXM6IFtdLFxuICBpbnB1dHM6IFsncGVyY2VudCcsICdzaXplJywgJ2NvbG9yJywgJ3JpbmcnXVxufSlcbmV4cG9ydCBjbGFzcyBQaWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBwZXJjZW50Om51bWJlciA9IDEwMDtcbiAgc2l6ZTpudW1iZXIgPSAyNDtcbiAgY29sb3I6c3RyaW5nO1xuICByaW5nOm51bWJlciA9IDEwO1xuICBzdHJva2U6bnVtYmVyO1xuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3Ryb2tlID0gTWF0aC5tYXgoMSxNYXRoLm1pbigxMCwgTWF0aC5yb3VuZCh0aGlzLnJpbmcpKSk7XG4gIH1cbiAgcmFuZ2VWYWx1ZSh2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbiAgfVxuICBnZXRDb29yZGluYXRlcyhwZXJjZW50KXtcbiAgICBjb25zdCByYWRpdXMgPSAxMjtcbiAgICBjb25zdCBkZWdyZWVzID0gcGVyY2VudCozLjY7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKE1hdGguUEkvMTgwKSAqIChkZWdyZWVzKSkpLFxuICAgICAgeTogcmFkaXVzICsgKHJhZGl1cyAqIE1hdGguc2luKCAoTWF0aC5QSS8xODApICogKGRlZ3JlZXMpKSlcbiAgICB9XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7ICBcbmltcG9ydCB7IFBpZUNvbXBvbmVudCB9IGZyb20gJy4vcGllLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGVcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUGllQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1BpZUNvbXBvbmVudF1cbn0pXG5leHBvcnQgY2xhc3MgUGllTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTtJQU9FLGlCQUFpQjs7O1lBTGxCLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs7Ozs7OztBQ0pEO0lBc0JFO3VCQUxpQixHQUFHO29CQUNOLEVBQUU7b0JBRUYsRUFBRTtLQUVDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMvRDs7Ozs7OztJQUNELFVBQVUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7UUFDeEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0tBQ3pDOzs7OztJQUNELGNBQWMsQ0FBQyxPQUFPOztRQUNwQixNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUM7O1FBQ2xCLE1BQU0sT0FBTyxHQUFHLE9BQU8sR0FBQyxHQUFHLENBQUM7UUFDNUIsT0FBTztZQUNMLENBQUMsRUFBRSxNQUFNLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBRSxNQUFNLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVELENBQUE7S0FDRjs7O1lBbkNGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsY0FBYztnQkFDeEIsUUFBUSxFQUFFOzs7Ozs7OztHQVFUO2dCQUNELE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxDQUFDLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQzthQUM3Qzs7Ozs7Ozs7O0FDZkQ7OztZQUlDLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUUsQ0FBQyxZQUFZLENBQUM7Z0JBQzVCLE9BQU8sRUFBRSxDQUFDLFlBQVksQ0FBQzthQUN4Qjs7Ozs7Ozs7Ozs7Ozs7OyJ9