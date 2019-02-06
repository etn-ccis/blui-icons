/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export var rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
export var getCoordinates = (/**
 * @param {?} percent
 * @return {?}
 */
function (percent) {
    /** @type {?} */
    var radius = 12;
    /** @type {?} */
    var degrees = percent * 3.6;
    return {
        x: radius + (radius * Math.cos((Math.PI / 180) * (degrees))),
        y: radius + (radius * Math.sin((Math.PI / 180) * (degrees)))
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLEtBQU8sVUFBVTs7Ozs7O0FBQUcsVUFBUyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzVDLENBQUMsQ0FBQTs7QUFFRCxNQUFNLEtBQU8sY0FBYzs7OztBQUFHLFVBQVMsT0FBTzs7UUFDcEMsTUFBTSxHQUFHLEVBQUU7O1FBQ1gsT0FBTyxHQUFHLE9BQU8sR0FBQyxHQUFHO0lBQzNCLE9BQU87UUFDSCxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUMzRCxDQUFDLEVBQUUsTUFBTSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztLQUM5RCxDQUFBO0FBQ0wsQ0FBQyxDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHJhbmdlVmFsdWUgPSBmdW5jdGlvbih2YWx1ZSwgbWluLCBtYXgpe1xuICAgIHJldHVybiBNYXRoLm1heChtaW4sTWF0aC5taW4odmFsdWUsbWF4KSlcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvb3JkaW5hdGVzID0gZnVuY3Rpb24ocGVyY2VudCl7XG4gICAgY29uc3QgcmFkaXVzID0gMTI7XG4gICAgY29uc3QgZGVncmVlcyA9IHBlcmNlbnQqMy42O1xuICAgIHJldHVybiB7XG4gICAgICAgIHg6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLmNvcyggKE1hdGguUEkvMTgwKSAqIChkZWdyZWVzKSkpLFxuICAgICAgICB5OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5zaW4oIChNYXRoLlBJLzE4MCkgKiAoZGVncmVlcykpKVxuICAgIH1cbn0iXX0=