/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class PieComponent {
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
    <svg [attr.height]="size+'px'" [attr.width]="size+'px'" x="0px" y="0px" viewBox="0 0 24 24" style="transform: rotate(-.25turn)">
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
PieComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    PieComponent.prototype.percent;
    /** @type {?} */
    PieComponent.prototype.size;
    /** @type {?} */
    PieComponent.prototype.color;
    /** @type {?} */
    PieComponent.prototype.ring;
    /** @type {?} */
    PieComponent.prototype.stroke;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3BpZS8iLCJzb3VyY2VzIjpbImxpYi9waWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBZ0JsRCxNQUFNO0lBTUo7UUFMQSxZQUFPLEdBQVUsR0FBRyxDQUFDO1FBQ3JCLFNBQUksR0FBVSxFQUFFLENBQUM7UUFFakIsU0FBSSxHQUFVLEVBQUUsQ0FBQztJQUVELENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7Ozs7Ozs7SUFDRCxVQUFVLENBQUMsS0FBSyxFQUFFLEdBQUcsRUFBRSxHQUFHO1FBQ3hCLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0lBQzFDLENBQUM7Ozs7O0lBQ0QsY0FBYyxDQUFDLE9BQU87O2NBQ2QsTUFBTSxHQUFHLEVBQUU7O2NBQ1gsT0FBTyxHQUFHLE9BQU8sR0FBQyxHQUFHO1FBQzNCLE1BQU0sQ0FBQztZQUNMLENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNELENBQUMsRUFBRSxNQUFNLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzVELENBQUE7SUFDSCxDQUFDOzs7WUFuQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixRQUFRLEVBQUU7Ozs7Ozs7O0dBUVQ7Z0JBQ0QsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLENBQUMsU0FBUyxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsTUFBTSxDQUFDO2FBQzdDOzs7OztJQUVDLCtCQUFxQjs7SUFDckIsNEJBQWlCOztJQUNqQiw2QkFBYTs7SUFDYiw0QkFBaUI7O0lBQ2pCLDhCQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAncGllLXByb2dyZXNzJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c3ZnIFthdHRyLmhlaWdodF09XCJzaXplKydweCdcIiBbYXR0ci53aWR0aF09XCJzaXplKydweCdcIiB4PVwiMHB4XCIgeT1cIjBweFwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHlsZT1cInRyYW5zZm9ybTogcm90YXRlKC0uMjV0dXJuKVwiPlxuICAgICAgPGNsaXBQYXRoIFthdHRyLmlkXT1cIidweGItZG9udXQtY2xpcC0nK3N0cm9rZVwiPlxuICAgICAgICA8cGF0aCBbYXR0ci5kXT1cIidNMTIsMkExMCwxMCwwLDEsMCwyMiwxMiwxMCwxMCwwLDAsMCwxMiwyWm0wLCcgKyAoMjAtc3Ryb2tlKSArJ0EnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywnICsgKDIwLTIqc3Ryb2tlKS8yICsgJywwLDEsMSwnICsgKDIyLXN0cm9rZSkgKyAnLDEyLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLCcgKyAoMjAtMipzdHJva2UpLzIgKyAnLDAsMCwxLDEyLCcgKyAoMjItc3Ryb2tlKSArICdaJ1wiLz5cbiAgICAgIDwvY2xpcFBhdGg+XG4gICAgICA8Y2lyY2xlIFthdHRyLmNsaXAtcGF0aF09XCIndXJsKCNweGItZG9udXQtY2xpcC0nK3N0cm9rZSsnKSdcIiBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5maWxsLW9wYWNpdHldPVwicGVyY2VudCA+PSAxMDAgPyAnMScgOiAnMC4zJ1wiPjwvY2lyY2xlPlxuICAgICAgPHBhdGggKm5nSWY9XCJyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkgPiAwICYmIHJhbmdlVmFsdWUocGVyY2VudCwgMCwgMTAwKSA8IDEwMFwiIFthdHRyLmZpbGxdPVwiY29sb3IgfHwgJ2N1cnJlbnRDb2xvcidcIiBbYXR0ci5jbGlwLXBhdGhdPVwiJ3VybCgjcHhiLWRvbnV0LWNsaXAtJytzdHJva2UrJyknXCIgW2F0dHIuZF09XCInTSAxMiwxMiBIIDI0IEEgMTIsMTIsMCwnKyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCk+PTUwPzE6MCkrJywxLCcrZ2V0Q29vcmRpbmF0ZXMocmFuZ2VWYWx1ZShwZXJjZW50LCAwLCAxMDApKVsneCddKycsJytnZXRDb29yZGluYXRlcyhyYW5nZVZhbHVlKHBlcmNlbnQsIDAsIDEwMCkpWyd5J10rJ1onXCIgLz5cbiAgICA8L3N2Zz5cbiAgYCxcbiAgc3R5bGVzOiBbXSxcbiAgaW5wdXRzOiBbJ3BlcmNlbnQnLCAnc2l6ZScsICdjb2xvcicsICdyaW5nJ11cbn0pXG5leHBvcnQgY2xhc3MgUGllQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgcGVyY2VudDpudW1iZXIgPSAxMDA7XG4gIHNpemU6bnVtYmVyID0gMjQ7XG4gIGNvbG9yOnN0cmluZztcbiAgcmluZzpudW1iZXIgPSAxMDtcbiAgc3Ryb2tlOm51bWJlcjtcbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0cm9rZSA9IE1hdGgubWF4KDEsTWF0aC5taW4oMTAsIE1hdGgucm91bmQodGhpcy5yaW5nKSkpO1xuICB9XG4gIHJhbmdlVmFsdWUodmFsdWUsIG1pbiwgbWF4KXtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLE1hdGgubWluKHZhbHVlLG1heCkpXG4gIH1cbiAgZ2V0Q29vcmRpbmF0ZXMocGVyY2VudCl7XG4gICAgY29uc3QgcmFkaXVzID0gMTI7XG4gICAgY29uc3QgZGVncmVlcyA9IHBlcmNlbnQqMy42O1xuICAgIHJldHVybiB7XG4gICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChNYXRoLlBJLzE4MCkgKiAoZGVncmVlcykpKSxcbiAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKE1hdGguUEkvMTgwKSAqIChkZWdyZWVzKSkpXG4gICAgfVxuICB9XG5cbn1cbiJdfQ==