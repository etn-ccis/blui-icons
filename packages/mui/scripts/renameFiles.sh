# This script renames the two files below to follow our naming convention for capitalization
# The renaming in the component definitions and the index file happen through the SVGR icon and index templates
echo "Renaming files..."
[ ! -f "./tsx/EvPlugIec62196T3A.tsx" ] || mv ./tsx/EvPlugIec62196T3A.tsx ./tsx/EvPlugIec62196T3a.tsx
[ ! -f "./tsx/EvPlugIec62196T3C.tsx" ] || mv ./tsx/EvPlugIec62196T3C.tsx ./tsx/EvPlugIec62196T3c.tsx
echo "Files renamed successfully"
exit 0