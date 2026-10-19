const cheerio = require('cheerio');

const FILLABLE_TAGS = new Set(['path', 'rect', 'circle', 'ellipse', 'polygon', 'polyline']);
const STROKE_TAGS = new Set(['line', 'polyline', 'path', 'rect', 'circle', 'ellipse', 'polygon']);
const WHITE = '#FFFFFF';

const isSkippablePaint = (value) => {
    if (!value) return true;
    const normalized = value.trim().toLowerCase();
    return (
        normalized === 'none' ||
        normalized === 'transparent' ||
        normalized.startsWith('url(')
    );
};

const parseHexColor = (value) => {
    const normalized = value.trim().toLowerCase();
    if (!normalized.startsWith('#')) return undefined;

    if (normalized.length === 4) {
        return normalized
            .slice(1)
            .split('')
            .map((digit) => Number.parseInt(digit + digit, 16));
    }

    if (normalized.length === 7) {
        return [1, 3, 5].map((index) => Number.parseInt(normalized.slice(index, index + 2), 16));
    }

    return undefined;
};

const parseRgbColor = (value) => {
    const match = value
        .trim()
        .toLowerCase()
        .match(/^rgba?\(([^)]+)\)$/);
    if (!match) return undefined;

    const parts = match[1].split(',').map((part) => Number.parseFloat(part.trim()));
    if (parts.length < 3 || parts.slice(0, 3).some((part) => Number.isNaN(part))) return undefined;
    return parts.slice(0, 3);
};

const parseNamedColor = (value) => {
    const normalized = value.trim().toLowerCase();
    if (normalized === 'black') return [0, 0, 0];
    if (normalized === 'white') return [255, 255, 255];
    return undefined;
};

const parseColor = (value) => parseHexColor(value) || parseRgbColor(value) || parseNamedColor(value);

const isNeutralDark = (value) => {
    if (!value) return false;

    const normalized = value.trim().toLowerCase();
    if (normalized === 'currentcolor') return true;

    const rgb = parseColor(normalized);
    if (!rgb) return false;

    const [red, green, blue] = rgb;
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);

    return max <= 32 && max - min <= 24;
};

const shouldSetDefaultFill = ($node) => {
    const tagName = $node[0]?.tagName?.toLowerCase();
    if (!tagName || !FILLABLE_TAGS.has(tagName)) return false;
    if ($node.attr('fill') || $node.attr('stroke')) return false;
    return true;
};

const shouldSetDefaultStroke = ($node) => {
    const tagName = $node[0]?.tagName?.toLowerCase();
    if (!tagName || !STROKE_TAGS.has(tagName)) return false;
    if ($node.attr('stroke') || $node.attr('fill')) return false;
    return tagName === 'line';
};

const applyDarkVariant = (svg) => {
    const $ = cheerio.load(svg, { xmlMode: true });

    $('*').each((_, element) => {
        const $node = $(element);
        const fill = $node.attr('fill');
        const stroke = $node.attr('stroke');

        if (fill && !isSkippablePaint(fill) && isNeutralDark(fill)) {
            $node.attr('fill', WHITE);
        }

        if (stroke && !isSkippablePaint(stroke) && isNeutralDark(stroke)) {
            $node.attr('stroke', WHITE);
        }

        if (shouldSetDefaultFill($node)) {
            $node.attr('fill', WHITE);
        }

        if (shouldSetDefaultStroke($node)) {
            $node.attr('stroke', WHITE);
        }
    });

    return $.xml();
};

module.exports = {
    applyDarkVariant,
};