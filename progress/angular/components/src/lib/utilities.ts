export const rangeValue = function (value: number, min: number, max: number): number {
    return Math.max(min, Math.min(value, max));
};

export const getCoordinates = function (percent: number, radius = 12): { x: number; y: number } {
    return {
        x: radius + radius * Math.cos((percent / 100) * 2 * Math.PI),
        y: radius + radius * Math.sin((percent / 100) * 2 * Math.PI),
    };
};
