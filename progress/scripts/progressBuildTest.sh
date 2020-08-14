#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -n "Checking progress icons (React)... "
cd ./react
yarn && yarn build
if [ ! -d ./dist ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./dist ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  Battery.js: "
if [ ! -f ./dist/Battery.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Battery.d.ts: "
if [ ! -f ./dist/Battery.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Heart.js: "
if [ ! -f ./dist/Heart.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Heart.d.ts: "
if [ ! -f ./dist/Heart.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Pie.js: "
if [ ! -f ./dist/Pie.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Pie.d.ts: "
if [ ! -f ./dist/Pie.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Ups.js: "
if [ ! -f ./dist/Ups.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  Ups.d.ts: "
if [ ! -f ./dist/Ups.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.js: "
if [ ! -f ./dist/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index.d.ts: "
if [ ! -f ./dist/index.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  CHANGELOG.md: "
if [ ! -f ./CHANGELOG.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi


echo -n "Checking progress icons (Angular)... "
cd ../angular
yarn && yarn build
if [ ! -d ./dist ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./dist ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  battery: "
if [ ! -s ./dist/ng-progress-icons/lib/battery ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  heart: "
if [ ! -s ./dist/ng-progress-icons/lib/heart ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  pie: "
if [ ! -s ./dist/ng-progress-icons/lib/pie ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  ups: "
if [ ! -s ./dist/ng-progress-icons/lib/ups ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  module: "
if [ ! -f ./dist/ng-progress-icons/lib/ng-progress-icons.module.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

cd ..
cd ..

echo -e "\r\n${GREEN}--------------------------------------------"
echo -e "Progress Icon artifacts successfully created"
echo -e "--------------------------------------------${NC}\r\n\r\n"

exit 0
