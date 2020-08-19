import React from 'react';
import {ProgressIconProps} from "./types";
import { makeStyles, createStyles } from '@material-ui/core/styles';


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
            '&.center': {
                fontWeight: 900,
                webkitTextFillColor: 'black',
                webkitTextStrokeColor: 'white'
            }
        },
    })
);

export const ProgressIcon: React.FC<ProgressIconProps> = (props) => {

    const { showPercentLabel, size = 24, labelPosition, labelColor, labelSize, children, percent } = props;
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
    };

    // @ts-ignore
    const isCentered = (): boolean => labelPosition === 'center';

    return (
        <span className={classes.progressIcon} style={{ flexDirection: getFlexDirection()}}>
            {showPercentLabel &&
                <span
                    className={classes.progressIconLabel}
                    style={
                    {   color: labelColor,
                        width: isCentered() ? labelSize : 'unset',
                        height: isCentered() ? labelSize : 'unset',
                        WebkitTextStrokeWidth: size/60,
                        lineHeight: (labelPosition === 'top' || labelPosition === 'bottom' ? 'unset' : `${size}px`),
                        position: isCentered() ? 'absolute' : 'unset',
                        display: isCentered() ? '' : 'flex'
                    }
                }>
                    {percent}
                </span>
            }
            {children}
        </span>
    );
};
