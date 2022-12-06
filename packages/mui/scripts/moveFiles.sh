# This script renames the two files below to follow our naming convention for capitalization
# The renaming in the component definitions and the index file happen through the SVGR icon and index templates
[ ! -f "./tsx/EvPlugIec62196T3A.jsx" ] || mv ./tsx/EvPlugIec62196T3A.jsx ./tsx/EvPlugIec62196T3a.jsx
[ ! -f "./tsx/EvPlugIec62196T3C.jsx" ] || mv ./tsx/EvPlugIec62196T3C.jsx ./tsx/EvPlugIec62196T3c.jsx
exit 0