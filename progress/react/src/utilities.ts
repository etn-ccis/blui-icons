import {IconPropType} from './types'

// if a value VALUE is outside the range, rangeValue(VALUE, min, max)
// will return the closest point to VALUE in the range [min, max]
export const rangeValue = function(value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
};

// will return a point coord on the circle with given radius
// the coord goes clockwise as the percentage increases
export const getCoordinates = (percent: number, radius = 12): { x: number; y: number } => ({
    x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
    y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
});

// default settings shared across all icons
export const defaultProps = {
    percent: 100,
    size: 24,
    ring: 10,
    outlined: false,
    charging: false,
    color: 'inherit'
}
