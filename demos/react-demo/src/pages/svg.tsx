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
        family: ['Platforms'],
        style: 'baseline',
        tags: ['eaton', 'logo'],
        author: 'Eaton',
        size: 24,
    },
    {
        name: 'Eaton Logo with Tagline',
        filename: 'eaton_tagline.svg',
        family: ['Platforms'],
        style: 'baseline',
        tags: ['eaton', 'logo'],
        author: 'Eaton',
        size: 24,
    },
    {
        name: 'Eaton Logo Two Tone',
        filename: 'eaton_two_tone.svg',
        family: ['Platforms'],
        style: 'two-tone',
        tags: ['eaton', 'logo'],
        author: 'Eaton',
        size: 24,
    },
    {
        name: 'EV Plug Type One',
        filename: 'ev_plug_type_one.svg',
        family: ['Vehicles'],
        style: 'outlined',
        tags: [
            'electric vehicle',
            'inlet',
            'connector',
            'j1772',
            'japan',
            'charge',
            'charging station',
            'sae',
            'type 1',
        ],
        author: 'Paulo Morgado (Brightlayer UI)',
        size: 24,
        deprecatedToBLUIIcon: 'ev_plug_iec_62196_t1',
    },
    {
        name: 'EV Plug Type Two',
        filename: 'ev_plug_type_two.svg',
        family: ['Vehicles'],
        style: 'outlined',
        tags: ['electric vehicle', 'inlet', 'connector', 'mennekes', 'europe', 'charge', 'charging station', 'type 2'],
        author: 'Paulo Morgado (Brightlayer UI)',
        size: 24,
        deprecatedToBLUIIcon: 'ev_plug_iec_62196_t2',
    },
    {
        name: 'AC',
        filename: 'ac.svg',
        family: ['status'],
        style: 'baseline',
        tags: ['ac', 'current', 'alternating current'],
        description: 'Used to represent Alternating Current (AC)',
        author: 'Eric Atha (Brightlayer UI)',
        size: 24,
    },
    {
        name: 'Account Settings',
        filename: 'account_settings.svg',
        family: ['General'],
        style: 'baseline',
        tags: ['account', 'settings', 'person'],
        author: 'Michael Irigoyen',
        size: 24,
    },
    {
        name: 'Maintenance Mode',
        filename: 'maintenance.svg',
        family: ['Status'],
        style: 'baseline',
        tags: [
            'circle',
            'maintain',
            'mode',
            'service',
            'upkeep',
            'condition',
            'repair',
            'wrench',
            'tool',
            'care',
            'event',
        ],
        description: 'Used to represent maintainance mode or service event',
        author: 'Eric Atha (Brightlayer UI)',
        size: 24,
    },
    {
        name: 'Map Marker Multiple',
        filename: 'map_marker_multiple.svg',
        family: ['status'],
        style: 'baseline',
        tags: ['pins', 'places', 'locations'],
        author: 'Austin Andrews',
        size: 24,
    },
    {
        name: 'xStorage',
        filename: 'xstorage.svg',
        family: ['Devices'],
        style: 'baseline',
        tags: ['device', 'product', 'equipment', 'electrical', 'battery', 'storage', 'backup', 'solar'],
        author: 'Eric Atha (Brightlayer UI)',
        description: 'Represents the ESB product xStorage',
        size: 24,
    },
    {
        name: 'xStorage Alt',
        filename: 'xstorage_alt.svg',
        family: ['Devices'],
        style: 'baseline',
        tags: ['device', 'product', 'equipment', 'electrical', 'battery', 'storage', 'backup', 'solar'],
        author: 'Unknown',
        description: 'Represents the ESB product xStorage',
        size: 24,
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
