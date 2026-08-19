import React from 'react';
import { createSvgIcon } from '@mui/material/utils';
const SvgSolarPanelSlashed = createSvgIcon(
    React.createElement(
        React.Fragment,
        {},
        <defs>
            <clipPath id="solar_panel_slashed_svg__a">
                <path
                    d="M0 0h24v24H0Zm-24.36-27.21-2.84 2.84 75.6 75.6 2.84-2.84Z"
                    clipRule="evenodd"
                    fillRule="evenodd"
                />
            </clipPath>
        </defs>,
        <g clipPath="url(#solar_panel_slashed_svg__a)">
            <path d="M13 18h4v2H7v-2h4v-2H2l.333-2h18L20 16h-7v2ZM7.58 12.5H2.583L3.167 9h4.998l-.586 3.5ZM14.08 12.5H9.1L9.688 9h4.978l-.586 3.5ZM20.584 12.5h-4.983l.585-3.5h4.981l-.583 3.5ZM8.416 7.5H3.417L4 4h5.002l-.586 3.5ZM14.916 7.5H9.937l.586-3.5h4.979l-.586 3.5ZM21.417 7.5h-4.98l.585-3.5H22l-.583 3.5Z" />
        </g>,
        <path data-name="slash-overlay" d="M4.22 4.21 2.8 5.63l15.6 15.6 1.42-1.42Z" fill="currentColor" />
    ),
    'SvgSolarPanelSlashed'
);
export default SvgSolarPanelSlashed;
