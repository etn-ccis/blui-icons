import React from 'react';
import * as Icons from '@brightlayer-ui/icons-mui';
import { Box, Grid } from '@mui/material';
import { useTheme, Theme } from '@mui/material/styles';
import camelCase from 'camelcase';

const meta = require('@brightlayer-ui/icons-mui/index.json');

const sorted = meta.icons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

const styles = (theme: Theme) => ({
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
});

export const App: React.FC = () => {
    const theme = useTheme();
    const defaultStyles = styles(theme);

    return (
        <>
            <Grid container spacing={2} sx={{ root: defaultStyles.container }}>
                {sorted.map((icon: any) => {
                    //@ts-ignore
                    const Component = Icons[camelCase(icon.filename.replace('.svg', ''), { pascalCase: true })];
                    return (
                        <Grid item xs={2} key={icon.filename} sx={{ root: defaultStyles.gridItem }}>
                            <Box sx={defaultStyles.iconWrapper}>
                                <Component sx={defaultStyles.icon} />
                                <Box sx={defaultStyles.iconName}>{icon.filename}</Box>
                            </Box>
                        </Grid>
                    );
                })}
            </Grid>
        </>
    );
};
