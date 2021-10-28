#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building components...${NC}"
yarn build

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./demos/showcase/node_modules/@brightlayer-ui/icons-mui"
mkdir -p "./demos/showcase/node_modules/@brightlayer-ui/icons-mui"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into node_modules...${NC}";
cp -r ./dist/. ./demos/showcase/node_modules/@brightlayer-ui/icons-mui
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BLUE}Linking Components: ${NC}"
if [ ! -f ./demos/showcase/node_modules/@brightlayer-ui/icons-mui/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./demos/showcase/node_modules/@brightlayer-ui/icons-mui ];
    then
        if [ ! -f ./demos/showcase/node_modules/@brightlayer-ui/icons-mui/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi
echo -e "${GRAY}Complete${NC}\r\n"
