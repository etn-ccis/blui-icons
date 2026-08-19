import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgDeviceConfigurationSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="device_configuration_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#device_configuration_slashed_svg__a)">
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 19c0-3.9 3.1-7 7-7 .7 0 1.4.1 2 .3V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7.3c-.2-.6-.3-1.3-.3-2ZM5 8V5h14v3H5Z"
            />
            <path d="M21.304 18.978a2.401 2.401 0 0 1-2.5.56l-2.353 2.353a.342.342 0 0 1-.49 0l-.967-.966a.342.342 0 0 1 0-.49l2.354-2.354a2.401 2.401 0 0 1 .56-2.5 2.393 2.393 0 0 1 2.83-.407l-1.622 1.623.973.973 1.622-1.622c.49.904.36 2.064-.407 2.83Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgDeviceConfigurationSlashed'
);
export default SvgDeviceConfigurationSlashed;
