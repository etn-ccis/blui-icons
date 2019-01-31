#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -n "Checking progress icons (react)... "
cd progress/react
if [ ! -d ./dist ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./dist ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  battery: "
if [ ! -f ./dist/Battery.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  heart: "
if [ ! -f ./dist/Heart.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  pie: "
if [ ! -f ./dist/Pie.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  index: "
if [ ! -f ./dist/index.js ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi


echo -n "Checking progress icons (angular)... "
cd ../angular
if [ ! -d ./dist ]; then echo -e "${RED}Not Found${NC}" && exit 1; fi
if [ ! -s ./dist ]; then echo -e "${RED}Directory Empty${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo "Checking for required files..."
echo -ne "  battery: "
if [ ! -s ./dist/ng-progress-icons/lib/battery ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  heart: "
if [ ! -s ./dist/ng-progress-icons/lib/heart ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  pie: "
if [ ! -s ./dist/ng-progress-icons/lib/pie ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  component: "
if [ ! -f ./dist/ng-progress-icons/lib/ng-progress-icons.component.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  module: "
if [ ! -f ./dist/ng-progress-icons/lib/ng-progress-icons.module.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  service: "
if [ ! -f ./dist/ng-progress-icons/lib/ng-progress-icons.service.d.ts ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
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