#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Building new MUI-style icons..."

echo -ne "${BLUE}Installing dependencies...${NC}"
yarn install:dependencies
echo -e "${BLUE}Done${NC}"

echo -ne "${BLUE}Clearing existing dist folder...${NC}"
rm -rf dist
mkdir -p dist
echo -e "${BLUE}Done${NC}"

echo -ne "Running MUI converter utility...${NC}"
svgr --out-dir ./dist --template svgr-template.js --index-template index-template.js  -- ../svg
svgr --out-dir ./dist --no-index --template svgr-eaton-template.js -- ../svg/eaton*.svg

EvPlugIec62196T3AFILE=./dist/EvPlugIec62196T3A.js
if [ -f "$EvPlugIec62196T3AFILE" ]; then
    mv ./dist/EvPlugIec62196T3A.js ./dist/EvPlugIec62196T3a.js
fi

EvPlugIec62196T3CFILE=./dist/EvPlugIec62196T3C.js
if [ -f "$EvPlugIec62196T3CFILE" ]; then
    mv ./dist/EvPlugIec62196T3C.js ./dist/EvPlugIec62196T3c.js
fi

babel dist --presets=@babel/preset-react,@babel/preset-env --out-dir dist
cp ../svg/index.json ./dist/index.json
echo -e "${BLUE}Done${NC}"

echo -ne "Creating TypeScript typings...${NC}"
babel-node --config-file ./scripts/mui-icon-builder/babel.config.js ./scripts/mui-icon-builder/create-typings.js
echo -e "${BLUE}Done${NC}"

echo -ne "Copying NPM package meta files...${NC}"
cp package.json dist/package.json
cp README.md dist/README.md
cp LICENSE dist/LICENSE
cp CHANGELOG.md dist/CHANGELOG.md
echo -e "${BLUE}Done${NC}"

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "MUI package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0