"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_vector_icons_1 = require("react-native-vector-icons");
const BrightlayerUIIcons_json_1 = __importDefault(require("./GlyphMaps/BrightlayerUIIcons.json"));
exports.default = react_native_vector_icons_1.createIconSet(BrightlayerUIIcons_json_1.default, 'BrightlayerUIIcons', 'BrightlayerUIIcons.ttf');
