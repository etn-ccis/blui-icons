import React, { useEffect, useId, useState } from 'react';

// Matches the values in packages/svg/scripts/slashUtils.js
const SLASH_PATH = 'M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z';
const DEFAULT_SLASH_COLOR = 'currentColor';

// White highlight band: same width as the gray band, offset one band-width in the
// upper-right perpendicular direction (+1.42, -1.42 on the 24x24 viewBox).
const WHITE_SLASH_PATH = 'M5.64 2.79 L4.22 4.21 L19.82 19.81 L21.24 18.39 Z';

// Expanded mask covers both bands: from the gray bottom edge to the white top edge.
const EXPANDED_MASK_PATH = 'M5.64 2.79 L2.80 5.63 L18.40 21.23 L21.24 18.39 Z';

export type SlashedSvgIconProps = {
    /** URL to a bundled/trusted SVG asset. */
    iconSrc: string;
    size?: number;
    slashColor?: string;
    alt?: string;
};

/**
 * Renders an SVG icon with a vector clipping mask that cuts the slash band
 * out of the icon, then draws the slash on top at runtime.
 *
 * NOTE: `iconSrc` must point to a trusted, same-origin SVG asset.
 */
export const SlashedSvgIcon: React.FC<SlashedSvgIconProps> = ({
    iconSrc,
    size = 48,
    slashColor = DEFAULT_SLASH_COLOR,
    alt = '',
}) => {
    const uid = useId().replace(/:/g, '_');
    const maskId = `slash-mask-${uid}`;

    const [svgData, setSvgData] = useState<{ viewBox: string; innerHTML: string } | null>(null);

    useEffect(() => {
        let cancelled = false;
        setSvgData(null);

        fetch(iconSrc)
            .then((r) => {
                if (!r.ok) throw new Error(`Failed to fetch SVG: ${r.status}`);
                return r.text();
            })
            .then((text) => {
                if (cancelled) return;
                const parser = new DOMParser();
                const doc = parser.parseFromString(text, 'image/svg+xml');
                const svgEl = doc.querySelector('svg');
                if (!svgEl) return;
                setSvgData({
                    viewBox: svgEl.getAttribute('viewBox') ?? '0 0 24 24',
                    innerHTML: svgEl.innerHTML,
                });
            })
            .catch(() => {
                if (cancelled) return;
                setSvgData(null);
            });

        return () => {
            cancelled = true;
        };
    }, [iconSrc]);

    if (!svgData) return <svg width={size} height={size} aria-hidden="true" />;

    return (
        <svg
            viewBox={svgData.viewBox}
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            role={alt ? 'img' : 'presentation'}
            aria-label={alt || undefined}
        >
            <defs>
                <mask id={maskId}>
                    <rect width="24" height="24" fill="white" />
                    <path d={EXPANDED_MASK_PATH} fill="black" />
                </mask>
            </defs>
            {/* eslint-disable-next-line react/no-danger */}
            <g mask={`url(#${maskId})`} dangerouslySetInnerHTML={{ __html: svgData.innerHTML }} />
            <path d={WHITE_SLASH_PATH} fill="white" />
            <path d={SLASH_PATH} fill={slashColor} />
        </svg>
    );
};

export default SlashedSvgIcon;
