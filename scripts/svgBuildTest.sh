#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -n "Checking for svg folder... "
if [ ! -d ./svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./svg ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  icon sprite: "
if [ ! -f ./svg/icons.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./svg/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./svg/readme.md ] && [ ! -f ./svg/Readme.md ] && [ ! -f ./svg/README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  metadata: "
if [ ! -f ./svg/index.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}----------------------------------"
echo -e "SVG artifacts successfully created"
echo -e "----------------------------------${NC}\r\n\r\n"

exit 0