import { createIconSet } from '@react-native-vector-icons/common';
import glyphMap from '../glyphmaps/BrightlayerUIIcons.json';

const BLUIIcon = createIconSet(glyphMap, {
    postScriptName: 'BrightlayerUIIcons',
    fontFileName: 'BrightlayerUIIcons.ttf',
    fontSource: require('../fonts/BrightlayerUIIcons.ttf'), // eslint-disable-line @typescript-eslint/no-require-imports, global-require
});

export default BLUIIcon;
