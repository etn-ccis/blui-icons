import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgMapMarkerMultipleSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="map_marker_multiple_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#map_marker_multiple_slashed_svg__a)">
            <path d="M14 11.5c1.4 0 2.5-1.1 2.5-2.5S15.4 6.5 14 6.5 11.5 7.6 11.5 9s1.1 2.5 2.5 2.5M14 2c3.9 0 7 3.1 7 7 0 5.2-7 13-7 13S7 14.2 7 9c0-3.9 3.1-7 7-7M5 9c0 4.5 5.1 10.7 6 11.8L10 22S3 14.2 3 9c0-3.2 2.1-5.8 5-6.7-1.8 1.6-3 4-3 6.7z" />
            <path fill="none" d="M0 0h24v24H0z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgMapMarkerMultipleSlashed'
);
export default SvgMapMarkerMultipleSlashed;
