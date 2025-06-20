import React from 'react';
import * as Icons from '@brightlayer-ui/icons-mui';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const meta = require('@brightlayer-ui/icons-mui/index.json');

const sorted = meta.icons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

const styles: { [key: string]: SxProps<Theme> } = {
    container: {
        maxWidth: 700,
        margin: 'auto',
    },
    gridItem: {
        p: 2,
    },
    iconWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    icon: {
        fontSize: 24,
    },
    iconName: {
        wordBreak: 'break-all',
        textAlign: 'center',
    },
};

export const MuiPage: React.FC = () => (
    <>
        <Grid container sx={styles.container}>
            {sorted.map((icon: any) => {
                const Component =
                    //@ts-ignore
                    Icons[
                        icon.filename
                            .replace('.svg', '')
                            .split('_')
                            .map((s: string) => `${s.charAt(0).toUpperCase()}${s.slice(1)}`)
                            .join('')
                    ];
                return (
                    <Grid size={2} key={icon.filename} sx={styles.gridItem}>
                        <Box sx={styles.iconWrapper}>
                            <Component sx={styles.icon} />
                            <Box sx={styles.iconName}>{icon.filename}</Box>
                        </Box>
                    </Grid>
                );
            })}
        </Grid>
    </>
);
