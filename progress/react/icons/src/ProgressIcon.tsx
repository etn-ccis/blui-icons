import React from 'react';
import {ProgressIconProps} from "./types";
import {makeStyles, createStyles, Theme} from '@material-ui/core/styles';
import clsx from 'clsx';
import color from 'color';

const useStyles = makeStyles<Theme, ProgressIconProps>(() =>
    createStyles({
        progressIcon: {
            position: 'relative',
            justifyContent: 'center',
            alignItems: 'center',
        },
        progressIconLabel: {
            display: 'flex',
            textAlign: 'center',
            zIndex: 2,
            fontSize: (props): number => props.labelSize || props.size/4,
            WebkitTextStrokeWidth: (props): number => props.size/60,
            color: (props): string => props.labelColor,
        },
        centered: {
            width: (props): number => props.size,
            height: (props): number => props.size,
            lineHeight: (props): string => `${props.size}px`,
            fontWeight: 900,
            display: 'block',
            position: 'absolute',
            '-webkitTextFillColor': (props): string => props.labelColor,
            '-webkitTextStrokeColor': (props): string => color && color(props.labelColor).isDark() ? 'white' : 'black',
            '-webkitTextStrokeWidth': (props): string => `${props.size / 60}px`
        }
    })
);

export const ProgressIcon: React.FC<ProgressIconProps> = (props) => {
    const { showPercentLabel, labelPosition = 'center', children, percent } = props;
    const defaultClasses = useStyles(props);

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
        <span className={defaultClasses.progressIcon} style={{ display: isCentered() ? 'inline-block' : 'inline-flex', flexDirection: getFlexDirection()}}>
            {showPercentLabel &&
                <span className={clsx(defaultClasses.progressIconLabel, isCentered() ? defaultClasses.centered : '')}>
                    {percent}%
                </span>
            }
            {children}
        </span>
    );
};
