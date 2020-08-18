import React from 'react';
import {ProgressIconProps} from "./types";
import { useTheme, makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(() =>
    createStyles({
        progressIcon: {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
            display: 'inline-block',
        },
        progressIconLabel: {
            textAlign: 'center',
            zIndex: 2,
            '&center': {

            }
        },
    })
);

export const ProgressIcon: React.FC<ProgressIconProps> = (props) => {

    const { showPercentLabel, labelPosition, labelColor, labelSize, children, percent } = props;
    const classes = useStyles();

    const getFlexDirection = (): any => {
        switch (labelPosition) {
            case 'left':
                return 'row';
            case 'right':
                return 'row-reverse';
            case 'top':
                return 'column';
            case 'bottom':
                return 'column-reverse';
            default:
                return '';
        }
    }

    return (
        <span style={{ flexDirection: getFlexDirection()}}>
            {showPercentLabel &&
                <span>
                    {percent}
                </span>
            }
            {children}
        </span>
    );
};
