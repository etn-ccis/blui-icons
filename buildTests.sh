#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -n "Checking for svg folder..."
if [ ! -d ./svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./svg ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  icon sprite: "
if [ ! -f ./svg/icons.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./svg/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./icons/readme.md ] && [ ! -f ./icons/Readme.md ] && [ ! -f ./icons/README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  metadata: "
if [ ! -f ./svg/index.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi


echo -n "Checking for symbols folder..."
if [ ! -d ./symbols ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./symbols ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  symbols sprite: "
if [ ! -f ./symbols/symbols.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./symbols/package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./symbols/readme.md ] && [ ! -f ./symbols/Readme.md ] && [ ! -f ./symbols/README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  metadata (optional): "
if [ ! -f ./symbols/index.json ]; then echo -e "${GRAY}Not Found${NC}"; else echo -e "${GREEN}Found${NC}"; fi

echo -e "\r\n${GREEN}------------------------------------"
echo -e "Build artifacts successfully created"
echo -e "------------------------------------${NC}"

exit 0