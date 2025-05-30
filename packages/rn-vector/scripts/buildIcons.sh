#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Building new RN-vector-icon-style icons..."

echo -ne "${BLUE}Clearing existing Font folder...${NC}"
rm -rf Fonts/*
rm -rf GlyphMaps/*
echo -e "${BLUE}Done${NC}"

# we will use the latest icons from this folder instead of from NPM
# echo -ne "Loading latest Brightlayer UI icon font package...${NC}"
# yarn upgrade @brightlayer-ui/icons
# echo -e "${BLUE}Done${NC}"

echo -ne "Copying latest icon font and glyph map...${NC}"
cp ../icon-font/BrightlayerUIIcons.json ./glyphMaps
cp ../icon-font/BrightlayerUIIcons.ttf ./fonts
echo -e "${BLUE}Done${NC}"

echo -ne "Compiling typescript...${NC}"
tsc --p tsconfig.build.json
cp lib/src/* lib/
rm -rf lib/src
rm -rf lib/glyphmaps
echo -e "${BLUE}Done${NC}"

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "RNBLUIVectorIcons package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0