#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking for required files (MUI build)..."
echo -ne "  dist folder: "
if [ ! -s ./dist ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index: "
if [ ! -f ./dist/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  types: "
if [ ! -f ./dist/index.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./dist/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./dist/README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  license: "
if [ ! -f ./dist/LICENSE ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  metadata: "
if [ ! -f ./dist/index.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}-----------------------------------"
echo -e "MUI package successfully created"
echo -e "-----------------------------------${NC}\r\n\r\n"

exit 0