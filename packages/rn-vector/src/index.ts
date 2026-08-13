import * as React from 'react';
import { createIconSet } from '@react-native-vector-icons/common';
import { StyleProp, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import glyphMap from '../GlyphMaps/BrightlayerUIIcons.json';
import glyphPaths from './glyphPaths.json';

const DEFAULT_GAP_OFFSET_X = 1.42;
const DEFAULT_GAP_OFFSET_Y = -1.42;
const DEFAULT_SVG_GAP_OFFSET_X = 0;
const DEFAULT_SVG_GAP_OFFSET_Y = 0;
const DEFAULT_ICON_SIZE = 24;
const DEFAULT_FONT_UNITS_PER_EM = 300;
const FONT_TO_VIEWBOX_SCALE = DEFAULT_ICON_SIZE / DEFAULT_FONT_UNITS_PER_EM;

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
    slashGapOffsetX?: number;
    slashGapOffsetY?: number;
    slashGapStyle?: StyleProp<TextStyle>;
    slashGapVisible?: boolean;
    slashColor?: BLUIIconProps['color'];
    slashName?: keyof typeof glyphMap;
    slashSize?: BLUIIconProps['size'];
    slashStyle?: StyleProp<TextStyle>;
};

export type SlashedBLUISvgMaskIconProps = {
    children?: React.ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    size?: number;
    slashColor?: BLUIIconProps['color'];
    slashGapOffsetX?: number;
    slashGapOffsetY?: number;
    slashGapVisible?: boolean;
    svgStyle?: StyleProp<ViewStyle>;
    viewBox?: string;
};

export type SlashedBLUISvgGlyphIconProps = Omit<SlashedBLUISvgMaskIconProps, 'children'> & {
    color?: BLUIIconProps['color'];
    name: keyof typeof glyphPaths;
};

const RECT_PATH = 'M0 0 L24 0 L24 24 L0 24 Z';

const translatePath = (path: string, offsetX: number, offsetY: number): string => {
    let isXCoordinate = true;
    return path.replace(/-?\d*\.?\d+/g, (value) => {
        const coordinate = Number.parseFloat(value);
        const translated = isXCoordinate ? coordinate + offsetX : coordinate + offsetY;
        isXCoordinate = !isXCoordinate;
        return translated.toFixed(2);
    });
};

export const SlashedBLUISvgMaskIcon: React.FC<SlashedBLUISvgMaskIconProps> = ({
    children,
    containerStyle,
    size = DEFAULT_ICON_SIZE,
    slashColor = 'currentColor',
    slashGapOffsetX = DEFAULT_SVG_GAP_OFFSET_X,
    slashGapOffsetY = DEFAULT_SVG_GAP_OFFSET_Y,
    slashGapVisible = true,
    svgStyle,
    viewBox = '0 0 24 24',
}) => {
    const clipId = `blui-slash-clip-${React.useId().replace(/:/g, '_')}`;
    const translatedClipBandPath = slashGapVisible
        ? translatePath(CLIP_BAND_PATH, slashGapOffsetX, slashGapOffsetY)
        : '';
    const clipD = `${RECT_PATH} ${translatedClipBandPath}`.trim();

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
                d: SLASH_PATH,
                fill: slashColor,
            })
        )
    );
};

export const SlashedBLUISvgGlyphIcon: React.FC<SlashedBLUISvgGlyphIconProps> = ({
    color = 'currentColor',
    name,
    slashGapOffsetX = DEFAULT_SVG_GAP_OFFSET_X,
    slashGapOffsetY = DEFAULT_SVG_GAP_OFFSET_Y,
    ...props
}) => {
    const glyphPath = glyphPaths[name];

    return React.createElement(
        SlashedBLUISvgMaskIcon,
        {
            ...props,
            slashGapOffsetX,
            slashGapOffsetY,
        },
        React.createElement(Path, {
            d: glyphPath,
            fill: color,
            transform: `translate(0 ${DEFAULT_ICON_SIZE}) scale(${FONT_TO_VIEWBOX_SCALE} ${-FONT_TO_VIEWBOX_SCALE})`,
        })
    );
};

export const SlashedBLUIIcon: React.FC<SlashedBLUIIconProps> = ({
    containerStyle,
    slashGapColor,
    slashGapOffsetX = DEFAULT_GAP_OFFSET_X,
    slashGapOffsetY = DEFAULT_GAP_OFFSET_Y,
    slashGapStyle,
    slashGapVisible = true,
    slashColor,
    slashName = 'slash_only',
    slashSize,
    slashStyle,
    style,
    ...props
}) =>
    React.createElement(
        View,
        { style: [styles.container, containerStyle] },
        React.createElement(BLUIIcon, { ...props, style }),
        slashGapVisible
            ? React.createElement(BLUIIcon, {
                  ...props,
                  color: slashGapColor ?? 'transparent',
                  name: slashName,
                  size: slashSize ?? props.size,
                  style: [
                      style,
                      styles.overlay,
                      {
                          color: slashGapColor ?? 'transparent',
                          transform: [{ translateX: slashGapOffsetX }, { translateY: slashGapOffsetY }],
                      },
                      slashGapStyle,
                  ],
              })
            : null,
        React.createElement(BLUIIcon, {
            ...props,
            color: slashColor ?? props.color,
            name: slashName,
            size: slashSize ?? props.size,
            style: [style, styles.overlay, slashStyle],
        })
    );

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
