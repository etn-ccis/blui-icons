#!/usr/bin/env node

'use strict';

const cheerio = require('cheerio');

const DEFAULT_SLASH_COLOR = 'currentColor';

// Diagonal band polygon at 45°, ±1px wide on a 24×24 viewBox.
const SLASH_PATH = 'M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z';

// White highlight band: same width as the gray band, offset one band-width in the
// upper-right perpendicular direction (+1.42, −1.42 on the 24×24 viewBox).
// Bottom edge = top edge of SLASH_PATH  (4.22,4.21)→(19.82,19.81)
// Top edge    = that edge + (1.42,−1.42) → (5.64,2.79)→(21.24,18.39)
const WHITE_SLASH_PATH = 'M5.64 2.79 L4.22 4.21 L19.82 19.81 L21.24 18.39 Z';

// Expanded mask covers both bands: from the gray bottom edge to the white top edge.
const EXPANDED_MASK_PATH = 'M5.64 2.79 L2.80 5.63 L18.40 21.23 L21.24 18.39 Z';

/**
 * Injects a vector clipping mask into an SVG string:
 *   1. Wraps all existing icon paths in <g mask="url(#slash-mask)">
 *      so the icon's fill is cut out across both the gray and white bands.
 *   2. Appends the white highlight band, then the gray slash polygon on top.
 *
 * @param {string} svg - Raw SVG file contents.
 * @returns {string} Modified SVG string.
 */
function applySlashMask(svg) {
    const $ = cheerio.load(svg, { xmlMode: true, decodeEntities: false });

    // Remove any previous slash overlay and mask
    $('[data-name="slash-overlay"]').remove();
    $('#slash-mask').remove();

    const $svg = $('svg');

    // Ensure <defs> exists
    if ($svg.children('defs').length === 0) {
        $svg.prepend('<defs></defs>');
    }

    // Add the clip mask: white = show icon, black = cut out both bands
    $svg.children('defs').append(
        `<mask id="slash-mask">` +
        `<rect width="24" height="24" fill="white"/>` +
        `<path d="${EXPANDED_MASK_PATH}" fill="black"/>` +
        `</mask>`
    );

    // Wrap all non-defs children in a masked group
    const $nonDefs = $svg.children().not('defs');
    const innerHtml = $nonDefs.map((_, el) => $.xml(el)).get().join('');
    $nonDefs.remove();
    $svg.append(`<g mask="url(#slash-mask)">${innerHtml}</g>`);

    // Draw the white highlight band first, then the gray slash on top
    $svg.append(
        `<path data-name="slash-highlight" d="${WHITE_SLASH_PATH}" fill="white"/>`
    );
    $svg.append(
        `<path data-name="slash-overlay" d="${SLASH_PATH}" fill="${DEFAULT_SLASH_COLOR}"/>`
    );

    // Extract just the <svg>...</svg> element from cheerio output
    const output = $.xml();
    const match = output.match(/<svg[\s\S]*<\/svg>/);
    return match ? match[0] : output;
}

module.exports = { applySlashMask, SLASH_PATH, WHITE_SLASH_PATH, EXPANDED_MASK_PATH, DEFAULT_SLASH_COLOR };
