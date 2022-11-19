import React from 'react';
// import * as Icons from '@brightlayer-ui/icons-mui';
import { Box, Grid, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
// import camelCase from 'camelcase';

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
        fontSize: 48,
    },
    iconName: {
        wordBreak: 'break-all',
        textAlign: 'center',
    },
};

export const FontPage: React.FC = () => (
    <>
        <Grid container spacing={2} sx={styles.container}>
            {sorted.map(
                (
                    icon: any //{
                ) => (
                    //@ts-ignore
                    // const Component = Icons[camelCase(icon.filename.replace('.svg', ''), { pascalCase: true })];
                    // return (
                    <Grid item xs={2} key={icon.filename} sx={styles.gridItem}>
                        <Box sx={styles.iconWrapper}>
                            {/* <Component sx={styles.icon} /> */}
                            <i
                                style={{ fontSize: '1.5rem' }}
                                className={`blui-${icon.filename.replace('.svg', '')}`}
                            ></i>
                            <Box sx={styles.iconName}>{icon.filename}</Box>
                        </Box>
                    </Grid>
                )
                // );
                /*}*/
            )}
        </Grid>
    </>
);
