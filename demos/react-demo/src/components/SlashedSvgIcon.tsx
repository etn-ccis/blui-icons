import React, { useEffect, useId, useState } from 'react';

// Matches the values in packages/svg/scripts/slashUtils.js
const SLASH_PATH = 'M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z';
const DEFAULT_SLASH_COLOR = 'currentColor';

// White highlight band: same width as the gray band, offset one band-width in the
// upper-right perpendicular direction (+1.42, −1.42 on the 24×24 viewBox).
// Bottom edge  = top edge of SLASH_PATH  (4.22,4.21)→(19.82,19.81)
// Top edge     = that edge + (1.42,−1.42) → (5.64,2.79)→(21.24,18.39)
const WHITE_SLASH_PATH = 'M5.64 2.79 L4.22 4.21 L19.82 19.81 L21.24 18.39 Z';

// Expanded mask covers both bands: from the gray bottom edge to the white top edge.
const EXPANDED_MASK_PATH = 'M5.64 2.79 L2.80 5.63 L18.40 21.23 L21.24 18.39 Z';

type SlashedSvgIconProps = {
    /** URL to a bundled/trusted SVG asset. */
    iconSrc: string;
    size?: number;
    slashColor?: string;
    alt?: string;
};

/**
 * Renders an SVG icon with a vector clipping mask that cuts the slash band
 * out of the icon, then draws the slash on top — all at runtime.
 *
 * NOTE: `iconSrc` must point to a trusted, same-origin SVG asset.
 * Using arbitrary external URLs would expose dangerouslySetInnerHTML to
 * untrusted content.
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
        fetch(iconSrc)
            .then((r) => r.text())
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
            .catch(() => {});
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
                {/*
                 * White = icon is visible; black = icon is cut out in both bands.
                 * EXPANDED_MASK_PATH covers the gray band + white highlight band.
                 */}
                <mask id={maskId}>
                    <rect width="24" height="24" fill="white" />
                    <path d={EXPANDED_MASK_PATH} fill="black" />
                </mask>
            </defs>
            {/* Icon paths, clipped by the expanded mask */}
            {/* eslint-disable-next-line react/no-danger */}
            <g mask={`url(#${maskId})`} dangerouslySetInnerHTML={{ __html: svgData.innerHTML }} />
            {/* White highlight drawn first (below the gray band) */}
            <path d={WHITE_SLASH_PATH} fill="white" />
            {/* Gray slash drawn on top */}
            <path d={SLASH_PATH} fill={slashColor} />
        </svg>
    );
};
