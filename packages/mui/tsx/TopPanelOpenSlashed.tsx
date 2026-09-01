import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgTopPanelOpenSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="top_panel_open_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#top_panel_open_slashed_svg__a)">
            <path d="M8 12.5h8l-4 4-4-4ZM5 3c-.55 0-1.02.196-1.413.587A1.926 1.926 0 0 0 3 5v14c0 .55.196 1.02.587 1.413C3.98 20.803 4.45 21 5 21h14c.55 0 1.02-.196 1.413-.587.391-.392.587-.863.587-1.413V5c0-.55-.196-1.02-.587-1.413A1.926 1.926 0 0 0 19 3H5Zm0 7h14v9H5v-9Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgTopPanelOpenSlashed'
);
export default SvgTopPanelOpenSlashed;
