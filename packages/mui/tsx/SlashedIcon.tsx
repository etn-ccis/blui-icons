import React from 'react';
import { Box } from '@mui/material';

// Filled diagonal band: 45° line from top-left to bottom-right on a 24×24 viewBox.
// Corners are offset ±1px perpendicular to the line direction (±0.7071, ∓0.7071).
const SLASH_PATH = 'M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z';

// CSS mask SVG: white = show icon pixels, black = cut out (hide) the slash band.
const MASK_URL = `url("data:image/svg+xml,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">` +
        `<rect width="24" height="24" fill="white"/>` +
        `<path d="${SLASH_PATH}" fill="black"/>` +
        `</svg>`
)}")`;

export type SlashedIconProps = {
    /** Any MUI SvgIcon element, e.g. <Battery /> */
    children: React.ReactElement;
    /** Width and height in pixels. Default: 24 */
    size?: number;
    /** Fill color of the slash band. Default: 'currentColor' */
    slashColor?: string;
};

/**
 * Wraps any MUI SvgIcon with a diagonal slash using a vector clipping mask.
 *
 * The icon is masked so its pixels are hidden in the slash band area,
 * then the slash polygon is drawn on top in `slashColor`.
 *
 * @example
 * <SlashedIcon size={48} slashColor="#727E84">
 *   <Battery />
 * </SlashedIcon>
 */
const SlashedIcon: React.FC<SlashedIconProps> = ({ children, size = 24, slashColor = 'currentColor' }) => (
    <Box sx={{ position: 'relative', display: 'inline-flex', width: size, height: size }}>
        {/* Icon with clipping mask applied — slash band is cut out of the icon */}
        <Box
            sx={{
                WebkitMaskImage: MASK_URL,
                maskImage: MASK_URL,
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 100%',
                width: size,
                height: size,
                display: 'inline-flex',
            }}
        >
            {React.cloneElement(children, {
                style: { ...(children.props.style ?? {}), width: size, height: size, fontSize: size },
            })}
        </Box>
        {/* Slash polygon drawn on top of the clipped icon */}
        <Box sx={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
            <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path d={SLASH_PATH} fill={slashColor} />
            </svg>
        </Box>
    </Box>
);

export default SlashedIcon;
