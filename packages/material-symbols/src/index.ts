import { createIconSet } from '@react-native-vector-icons/common';
import glyphMap from '../glyphmaps/MaterialSymbols.json';

const MaterialSymbolsIcon = createIconSet(glyphMap, {
    postScriptName: 'MaterialSymbolsIcons',
    fontFileName: 'MaterialSymbolsOutlined.ttf',
    fontSource: require('../fonts/MaterialSymbolsOutlined.ttf'), // eslint-disable-line @typescript-eslint/no-require-imports, global-require
});

export default MaterialSymbolsIcon;
