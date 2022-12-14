import React from 'react';
// import * as Icons from '@brightlayer-ui/icons-mui';
import { Box, Grid, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
// import camelCase from 'camelcase';
import Breaker from '@brightlayer-ui/icons-svg/breaker.svg';

const svgIcons = [
    {
        name: 'Eaton Logo',
        filename: 'eaton.svg',
    },
    {
        name: 'Eaton Logo with Tagline',
        filename: 'eaton_tagline.svg',
    },
    {
        name: 'Eaton Logo Two Tone',
        filename: 'eaton_two_tone.svg',
    },
    {
        name: 'EV Plug Type One',
        filename: 'ev_plug_type_one.svg',
    },
    {
        name: 'EV Plug Type Two',
        filename: 'ev_plug_type_two.svg',
    },
    {
        name: 'AC',
        filename: 'ac.svg',
    },
    {
        name: 'Account Settings',
        filename: 'account_settings.svg',
    },
    {
        name: 'Maintenance Mode',
        filename: 'maintenance.svg',
    },
    {
        name: 'Map Marker Multiple',
        filename: 'map_marker_multiple.svg',
    },
    {
        name: 'xStorage',
        filename: 'xstorage.svg',
    },
    {
        name: 'xStorage Alt',
        filename: 'xstorage_alt.svg',
    },
];

const sorted = svgIcons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

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

export const SvgPage: React.FC = () => (
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
                            <img src={Breaker} />
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
