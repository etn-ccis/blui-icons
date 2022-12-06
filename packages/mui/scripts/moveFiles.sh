# This script renames the two files below to follow our naming convention for capitalization
# The renaming in the component definitions and the index file happen through the SVGR icon and index templates
[ ! -f "./dist/EvPlugIec62196T3A.js" ] || mv ./dist/EvPlugIec62196T3A.js ./dist/EvPlugIec62196T3a.js
[ ! -f "./dist/EvPlugIec62196T3C.js" ] || mv ./dist/EvPlugIec62196T3C.js ./dist/EvPlugIec62196T3c.js
exit 0