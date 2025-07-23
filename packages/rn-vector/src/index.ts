import { createIconSet } from '@react-native-vector-icons/common';
import glyphMap from '../GlyphMaps/BrightlayerUIIcons.json';

const BLUIIcon = createIconSet(glyphMap, {
    postScriptName: 'BrightlayerUIIcons',
    fontFileName: 'BrightlayerUIIcons.ttf',
    fontSource: require('../Fonts/BrightlayerUIIcons.ttf'), // eslint-disable-line @typescript-eslint/no-require-imports, global-require
});

export default BLUIIcon;
