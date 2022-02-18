import React from 'react';
import * as Icons from '@brightlayer-ui/icons-mui';
import { Grid } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import createStyles from '@mui/styles/createStyles';
import { useTheme, Theme } from '@mui/material/styles';

const meta = require('@brightlayer-ui/icons-mui/index.json');

const getMuiIconName = (filename: string): string =>
    filename.replace(/\.svg/, '').replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());

const sorted = meta.icons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            maxWidth: 700,
            margin: 'auto',
        },
        gridItem: {
            padding: theme.spacing(2),
        },
        iconWrapper: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
        icon: {
            fontSize: theme.spacing(6),
        },
        iconName: {
            wordBreak: 'break-all',
            textAlign: 'center',
        },
    })
);

export const App: React.FC = () => {
    const theme = useTheme();
    const classes = useStyles(theme);

    return (
        <>
            <Grid container spacing={2} classes={{ root: classes.container }}>
                {sorted.map((icon: any) => {
                    //@ts-ignore
                    const Component = Icons[getMuiIconName(icon.filename)];
                    return (
                        <Grid item xs={2} key={icon.filename} classes={{ root: classes.gridItem }}>
                            <div className={classes.iconWrapper}>
                                <Component className={classes.icon} />
                                <div className={classes.iconName}>{icon.filename}</div>
                            </div>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
