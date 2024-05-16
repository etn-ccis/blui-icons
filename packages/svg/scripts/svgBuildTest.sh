#!/bin/bash
RED='\033[0;31m'
GREEN='\033[0;32m'
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo "Checking for required files..."
echo -ne "  package.json: "
if [ ! -f ./package.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  readme: "
if [ ! -f ./readme.md ] && [ ! -f ./Readme.md ] && [ ! -f ./README.md ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  metadata: "
if [ ! -f ./index.json ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi

# Sprites
echo -ne "  action sprite: "
if [ ! -f ./sprites/action.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  agriculture sprite: "
if [ ! -f ./sprites/agriculture.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  alert sprite: "
if [ ! -f ./sprites/alert.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  av sprite: "
if [ ! -f ./sprites/av.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  communication sprite: "
if [ ! -f ./sprites/communication.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  companies sprite: "
if [ ! -f ./sprites/companies.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  content sprite: "
if [ ! -f ./sprites/content.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  device sprite: "
if [ ! -f ./sprites/device.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  devices sprite: "
if [ ! -f ./sprites/devices.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  editor sprite: "
if [ ! -f ./sprites/editor.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  file sprite: "
if [ ! -f ./sprites/file.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  general sprite: "
if [ ! -f ./sprites/general.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  hardware sprite: "
if [ ! -f ./sprites/hardware.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  home sprite: "
if [ ! -f ./sprites/home.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  image sprite: "
if [ ! -f ./sprites/image.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  industrial sprite: "
if [ ! -f ./sprites/industrial.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  lighting sprite: "
if [ ! -f ./sprites/lighting.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  maps sprite: "
if [ ! -f ./sprites/maps.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  navigation sprite: "
if [ ! -f ./sprites/navigation.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  notification sprite: "
if [ ! -f ./sprites/notification.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  places sprite: "
if [ ! -f ./sprites/places.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  platform sprite: "
if [ ! -f ./sprites/platform.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  platforms sprite: "
if [ ! -f ./sprites/platforms.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  ppe sprite: "
if [ ! -f ./sprites/ppe.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  residential sprite: "
if [ ! -f ./sprites/residential.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  search sprite: "
if [ ! -f ./sprites/search.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  social sprite: "
if [ ! -f ./sprites/social.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  sports sprite: "
if [ ! -f ./sprites/sports.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  status sprite: "
if [ ! -f ./sprites/status.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  system sprite: "
if [ ! -f ./sprites/system.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  toggle sprite: "
if [ ! -f ./sprites/toggle.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  tools sprite: "
if [ ! -f ./sprites/tools.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  transportation sprite: "
if [ ! -f ./sprites/transportation.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi
echo -ne "  vehicles sprite: "
if [ ! -f ./sprites/vehicles.svg ]; then echo -e "${RED}Not Found${NC}" && exit 1; else echo -e "${GREEN}Found${NC}"; fi


echo -e "\r\n${GREEN}----------------------------------"
echo -e "SVG artifacts successfully created"
echo -e "----------------------------------${NC}\r\n\r\n"

exit 0