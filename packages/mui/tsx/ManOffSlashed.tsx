import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgManOffSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="man_off_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#man_off_slashed_svg__a)">
            <path d="m21.9 21.9-1.415 1.414L14 16.828V22h-4v-7H8v-4.172L.686 3.515 2.101 2.1 21.9 21.9ZM10 7h4c.55 0 1.021.196 1.413.588.391.391.587.862.587 1.412v4.172L9.835 7.007C9.89 7.003 9.944 7 10 7ZM10.588 2.587A1.926 1.926 0 0 1 12 2c.55 0 1.02.196 1.412.587C13.804 2.98 14 3.45 14 4s-.196 1.02-.587 1.412A1.927 1.927 0 0 1 12 6.001c-.55 0-1.021-.197-1.413-.589A1.926 1.926 0 0 1 10 4c0-.55.196-1.02.588-1.413Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgManOffSlashed'
);
export default SvgManOffSlashed;
