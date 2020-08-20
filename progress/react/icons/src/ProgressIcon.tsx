import React from 'react';
import {ProgressIconProps} from "./types";

import {createUseStyles} from 'react-jss'
import clsx from 'clsx';
import color from 'color';

const useStyles =
   createUseStyles({
        progressIcon: {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
        },
        progressIconLabel: {
            display: 'flex',
            textAlign: 'center',
            zIndex: 2,
        },
        centered: {
            fontWeight: 900,
            display: 'block',
            position: 'absolute',
        }
    });

export const ProgressIcon: React.FC<ProgressIconProps> = (props) => {
    const { showPercentLabel, labelPosition = 'center', children, percent } = props;
    const defaultClasses = useStyles(props);

    const propsProgressIconLabelStyles = {
        fontSize: props.labelSize || props.size/4,
        color: props.labelColor,
    };

    const propsCenteredStyles = {
        '-webkitTextFillColor': props.labelColor,
        '-webkitTextStrokeColor': color && color(props.labelColor).isDark() ? 'white' : 'black',
        '-webkitTextStrokeWidth': `${props.size / 60}px`,
        width: props.size,
        height: props.size,
        lineHeight: `${props.size}px`,
    };

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

    const isCentered = (): boolean => labelPosition === 'center';

    return (
        <span className={defaultClasses.progressIcon} style={{ display: isCentered() ? 'inline-block' : 'inline-flex', flexDirection: getFlexDirection()}}>
            {showPercentLabel &&
                <span
                   style={Object.assign(propsProgressIconLabelStyles, isCentered() ? propsCenteredStyles : {})}
                   className={clsx(defaultClasses.progressIconLabel, isCentered() ? defaultClasses.centered : '')}>
                    {percent}%
                </span>
            }
            {children}
        </span>
    );
};
