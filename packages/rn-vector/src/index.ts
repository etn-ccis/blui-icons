import * as React from 'react';
import { createIconSet } from '@react-native-vector-icons/common';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import glyphMap from '../GlyphMaps/BrightlayerUIIcons.json';
import glyphPaths from './glyphPaths.json';

const DEFAULT_ICON_SIZE = 24;
const DEFAULT_SLASH_LENGTH = 1;
const DEFAULT_FONT_UNITS_PER_EM = 300;
const FONT_TO_VIEWBOX_SCALE = DEFAULT_ICON_SIZE / DEFAULT_FONT_UNITS_PER_EM;
const SLASH_CENTER_X = 12;
const SLASH_CENTER_Y = 12;

const SLASH_PATH = 'M4.22 4.21 L2.80 5.63 L18.40 21.23 L19.82 19.81 Z';
const CLIP_BAND_PATH = 'M-24.36 -27.21 L-27.20 -24.37 L48.40 51.23 L51.24 48.39 Z';

const BLUIIcon = createIconSet(glyphMap, {
    postScriptName: 'BrightlayerUIIcons',
    fontFileName: 'BrightlayerUIIcons.ttf',
    fontSource: require('../Fonts/BrightlayerUIIcons.ttf'), // eslint-disable-line @typescript-eslint/no-require-imports, global-require
});

type BLUIIconProps = React.ComponentProps<typeof BLUIIcon>;

export type SlashedBLUIIconProps = BLUIIconProps & {
    containerStyle?: StyleProp<ViewStyle>;
    slashGapColor?: BLUIIconProps['color'];
    slashGapStyle?: StyleProp<TextStyle>;
    slashGapVisible?: boolean;
    slashColor?: BLUIIconProps['color'];
    slashLength?: number;
    slashName?: keyof typeof glyphMap;
    slashSize?: BLUIIconProps['size'];
    slashStyle?: StyleProp<TextStyle>;
};

export type SlashedBLUISvgMaskIconProps = {
    children?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    size?: number;
    slashColor?: BLUIIconProps['color'];
    slashLength?: number;
    slashGapVisible?: boolean;
    svgStyle?: StyleProp<ViewStyle>;
    viewBox?: string;
};

export type SlashedBLUISvgGlyphIconProps = Omit<SlashedBLUISvgMaskIconProps, 'children'> & {
    color?: BLUIIconProps['color'];
    name: keyof typeof glyphPaths;
};

const RECT_PATH = 'M0 0 L24 0 L24 24 L0 24 Z';

const scaleSlashPathLength = (path: string, slashLength: number): string => {
    const clampedSlashLength = Math.max(slashLength, 0);

    return path.replace(/(-?\d*\.?\d+)\s+(-?\d*\.?\d+)/g, (match, x, y) => {
        const dx = Number.parseFloat(x) - SLASH_CENTER_X;
        const dy = Number.parseFloat(y) - SLASH_CENTER_Y;
        const parallel = (dx + dy) * Math.SQRT1_2;
        const perpendicular = (-dx + dy) * Math.SQRT1_2;
        const scaledParallel = parallel * clampedSlashLength;
        const scaledX = SLASH_CENTER_X + (scaledParallel - perpendicular) * Math.SQRT1_2;
        const scaledY = SLASH_CENTER_Y + (scaledParallel + perpendicular) * Math.SQRT1_2;

        return match.replace(/-?\d*\.?\d+\s+-?\d*\.?\d+/, `${scaledX.toFixed(2)} ${scaledY.toFixed(2)}`);
    });
};

export const SlashedBLUISvgMaskIcon: React.FC<SlashedBLUISvgMaskIconProps> = ({
    children,
    containerStyle,
    size = DEFAULT_ICON_SIZE,
    slashColor = 'currentColor',
    slashLength = DEFAULT_SLASH_LENGTH,
    slashGapVisible = true,
    svgStyle,
    viewBox = '0 0 24 24',
}) => {
    const clipId = `blui-slash-clip-${React.useId().replace(/:/g, '_')}`;
    const slashPath = scaleSlashPathLength(SLASH_PATH, slashLength);
    const clipBandPath = slashGapVisible ? scaleSlashPathLength(CLIP_BAND_PATH, slashLength) : '';
    const clipD = `${RECT_PATH} ${clipBandPath}`.trim();

    return React.createElement(
        View,
        { style: [styles.container, containerStyle] },
        React.createElement(
            Svg,
            {
                width: size,
                height: size,
                viewBox,
                style: svgStyle,
            },
            React.createElement(
                Defs,
                null,
                React.createElement(
                    ClipPath,
                    { id: clipId },
                    React.createElement(Path, {
                        d: clipD,
                        clipRule: 'evenodd',
                        fillRule: 'evenodd',
                    })
                )
            ),
            React.createElement(G, { clipPath: `url(#${clipId})` }, children),
            React.createElement(Path, {
                d: slashPath,
                fill: slashColor,
            })
        )
    );
};

export const SlashedBLUIIcon: React.FC<SlashedBLUISvgGlyphIconProps> = ({
    color = 'currentColor',
    name,
    ...props
}) => {
    const glyphPath = glyphPaths[name];

    return React.createElement(
        SlashedBLUISvgMaskIcon,
        props,
        React.createElement(Path, {
            d: glyphPath,
            fill: color,
            transform: `translate(0 ${DEFAULT_ICON_SIZE}) scale(${FONT_TO_VIEWBOX_SCALE} ${-FONT_TO_VIEWBOX_SCALE})`,
        })
    );
};

const styles = StyleSheet.create({
    container: {
        alignSelf: 'flex-start',
    },
    overlay: {
        left: 0,
        position: 'absolute',
        top: 0,
    },
});

export default BLUIIcon;
