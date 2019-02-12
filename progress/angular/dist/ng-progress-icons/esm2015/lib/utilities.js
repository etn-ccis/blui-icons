/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const rangeValue = (/**
 * @param {?} value
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function (value, min, max) {
    return Math.max(min, Math.min(value, max));
});
/** @type {?} */
export const getCoordinates = (/**
 * @param {?} percent
 * @param {?=} radius
 * @return {?}
 */
function (percent, radius = 12) {
    return {
        x: radius + (radius * Math.cos((percent / 100) * 2 * Math.PI)),
        y: radius + (radius * Math.sin((percent / 100) * 2 * Math.PI))
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHB4Ymx1ZS9uZy1wcm9ncmVzcy1pY29ucy8iLCJzb3VyY2VzIjpbImxpYi91dGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sVUFBVTs7Ozs7O0FBQUcsVUFBUyxLQUFLLEVBQUUsR0FBRyxFQUFFLEdBQUc7SUFDOUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBQyxHQUFHLENBQUMsQ0FBQyxDQUFBO0FBQzVDLENBQUMsQ0FBQTs7QUFFRCxNQUFNLE9BQU8sY0FBYzs7Ozs7QUFBRyxVQUFTLE9BQU8sRUFBRSxNQUFNLEdBQUcsRUFBRTtJQUN2RCxPQUFPO1FBQ0gsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUU7UUFDNUQsQ0FBQyxFQUFFLE1BQU0sR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFFLENBQUMsT0FBTyxHQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUU7S0FDL0QsQ0FBQTtBQUNMLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCByYW5nZVZhbHVlID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KXtcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLE1hdGgubWluKHZhbHVlLG1heCkpXG59XG5cbmV4cG9ydCBjb25zdCBnZXRDb29yZGluYXRlcyA9IGZ1bmN0aW9uKHBlcmNlbnQsIHJhZGl1cyA9IDEyKXtcbiAgICByZXR1cm4ge1xuICAgICAgICB4OiByYWRpdXMgKyAocmFkaXVzICogTWF0aC5jb3MoIChwZXJjZW50LzEwMCkgKiAyKk1hdGguUEkpICksXG4gICAgICAgIHk6IHJhZGl1cyArIChyYWRpdXMgKiBNYXRoLnNpbiggKHBlcmNlbnQvMTAwKSAqIDIqTWF0aC5QSSkgKVxuICAgIH1cbn0iXX0=