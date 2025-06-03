#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Building new RNBLUI-Material-Symbols-vector-icon-style icons..."

echo -ne "${BLUE}Clearing existing Font folder...${NC}"
rm -rf lib/*
# rm -rf fonts/*
# rm -rf glyphMaps/*
# echo -e "${BLUE}Done${NC}"

# we will use the latest icons from this folder instead of from NPM
# echo -ne "Loading latest Brightlayer UI Material Symbols icon font package...${NC}"
# echo -e "${BLUE}Done${NC}"

echo -ne "Copying latest icon font and glyph map...${NC}"
cp ../icon-font/MaterialSymbols.json ./glyphmaps
cp ../icon-font/MaterialSymbolsOutlined.ttf ./fonts
echo -e "${BLUE}Done${NC}"

echo -ne "Compiling typescript...${NC}"
tsc --p tsconfig.build.json
cp lib/src/* lib/
rm -rf lib/src
rm -rf lib/glyphmaps
echo -e "${BLUE}Done${NC}"

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "RNBLUIMaterialSymbolsVectorIcons package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0