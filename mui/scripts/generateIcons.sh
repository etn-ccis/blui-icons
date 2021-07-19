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

echo -ne "${BLUE}Clearing existing icons folder...${NC}"
rm -rf icons
mkdir -p icons
echo -e "${BLUE}Done${NC}"

echo -ne "Loading latest PX Blue icon package...${NC}"
yarn upgrade @pxblue/icons-svg
rm -rf node_modules/@pxblue/icons-svg/icons.svg
echo -e "${BLUE}Done${NC}"

echo -ne "Running MUI converter utility...${NC}"
cd scripts/mui-icon-builder
babel-node --config-file ./babel.config.js builder.js --output-dir ../../icons --svg-dir ../../node_modules/@pxblue/icons-svg
cd ../..
babel icons --presets=@babel/preset-react,@babel/preset-env --out-dir icons
cp node_modules/@pxblue/icons-svg/index.json ./icons/index.json
echo -e "${BLUE}Done${NC}"

echo -ne "Creating TypeScript typings...${NC}"
babel-node --config-file ./scripts/mui-icon-builder/babel.config.js ./scripts/mui-icon-builder/create-typings.js
echo -e "${BLUE}Done${NC}"

echo -ne "Copying NPM package meta files...${NC}"
cp package.json icons/package.json
cp README.md icons/README.md
cp LICENSE icons/LICENSE
cp CHANGELOG.md icons/CHANGELOG.md
echo -e "${BLUE}Done${NC}"

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "MUI package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0