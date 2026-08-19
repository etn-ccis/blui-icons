import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgHostSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="host_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#host_slashed_svg__a)">
            <path d="M4 21c-.55 0-1.02-.196-1.413-.587A1.926 1.926 0 0 1 2 19V5c0-.55.196-1.02.587-1.413A1.926 1.926 0 0 1 4 3h5c.55 0 1.02.196 1.412.587C10.804 3.98 11 4.45 11 5v14c0 .55-.196 1.02-.588 1.413A1.926 1.926 0 0 1 9 21H4Zm11 0c-.55 0-1.02-.196-1.412-.587A1.926 1.926 0 0 1 13 19V5c0-.55.196-1.02.588-1.413A1.926 1.926 0 0 1 15 3h5c.55 0 1.02.196 1.413.587C21.803 3.98 22 4.45 22 5v14c0 .55-.196 1.02-.587 1.413A1.926 1.926 0 0 1 20 21h-5ZM5 15h3v-2H5v2Zm11 0h3v-2h-3v2ZM5 12h3v-2H5v2Zm11 0h3v-2h-3v2ZM5 9h3V7H5v2Zm11 0h3V7h-3v2Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgHostSlashed'
);
export default SvgHostSlashed;
