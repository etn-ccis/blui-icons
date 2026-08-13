#!/usr/bin/env node

'use strict';

const cheerio = require('cheerio');

const DEFAULT_SLASH_COLOR = 'currentColor';

// Diagonal band polygon at 45°, ±1px wide on a 24×24 viewBox.
const SLASH_PATH = 'M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z';

// Transparent gap band: one band-width above the gray slash
// (+1.42, −1.42 offset on the 24×24 viewBox).
const GAP_PATH = 'M5.64 2.79 L4.22 4.21 L19.82 19.81 L21.24 18.39 Z';

// Clip area covering both the gap band and the gray slash band.
// Extended beyond the 24x24 viewBox to prevent endpoint antialias bleed.
const CLIP_BAND_PATH = 'M-24.36 -27.21 L-27.20 -24.37 L48.40 51.23 L51.24 48.39 Z';

/**
 * Injects a vector clipping mask into an SVG string:
 *   1. Wraps all existing icon paths in <g clip-path="url(#slash-clip)">
 *      so the icon is cut out in both the gap and the gray slash band.
 *   2. Appends only the gray slash polygon on top — the gap is left as empty
 *      canvas (transparent), matching the same technique used in
 *      theme_light_dark.svg where the space between moon and sun is unpainted.
 *
 * Uses clipPath + evenodd instead of <mask> for React Native compatibility
 * (react-native-svg renders <mask> contents as visible elements).
 *
 * @param {string} svg - Raw SVG file contents.
 * @returns {string} Modified SVG string.
 */
function applySlashMask(svg) {
    const $ = cheerio.load(svg, { xmlMode: true, decodeEntities: false });

    // Remove any previous slash overlay and clip path
    $('[data-name="slash-overlay"]').remove();
    $('[data-name="slash-highlight"]').remove();
    $('#slash-clip').remove();
    $('#slash-mask').remove();

    const $svg = $('svg');

    // Ensure <defs> exists
    if ($svg.children('defs').length === 0) {
        $svg.prepend('<defs></defs>');
    }

    // Compound path: full 24×24 rect + combined gap+slash band.
    // With evenodd fill rule the overlapping region becomes a hole,
    // so the icon is only visible outside both bands.
    const clipD = `M0 0 L24 0 L24 24 L0 24 Z ${CLIP_BAND_PATH}`;
    $svg.children('defs').append(
        `<clipPath id="slash-clip">` + `<path d="${clipD}" clip-rule="evenodd" fill-rule="evenodd"/>` + `</clipPath>`
    );

    // Wrap all non-defs children in a clipped group
    const $nonDefs = $svg.children().not('defs');
    const innerHtml = $nonDefs
        .map((_, el) => $.xml(el))
        .get()
        .join('');
    $nonDefs.remove();
    $svg.append(`<g clip-path="url(#slash-clip)">${innerHtml}</g>`);

    // Draw the slash on top
    $svg.append(`<path data-name="slash-overlay" d="${SLASH_PATH}" fill="${DEFAULT_SLASH_COLOR}"/>`);

    // Extract just the <svg>...</svg> element from cheerio output
    const output = $.xml();
    const match = output.match(/<svg[\s\S]*<\/svg>/);
    return match ? match[0] : output;
}

module.exports = { applySlashMask, SLASH_PATH, GAP_PATH, CLIP_BAND_PATH, DEFAULT_SLASH_COLOR };
