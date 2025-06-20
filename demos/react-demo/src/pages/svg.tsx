import React from 'react';
import { Box, SxProps } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import EatonLogo from '@brightlayer-ui/icons-svg/eaton.svg';
import EatonLogoWithTagline from '@brightlayer-ui/icons-svg/eaton_tagline.svg';
import EatonLogoTwoTone from '@brightlayer-ui/icons-svg/eaton_two_tone.svg';
import EVPlugTypeOne from '@brightlayer-ui/icons-svg/ev_plug_type_one.svg';
import EVPlugType2 from '@brightlayer-ui/icons-svg/ev_plug_type_two.svg';
import AC from '@brightlayer-ui/icons-svg/ac.svg';
import AccountSettings from '@brightlayer-ui/icons-svg/account_settings.svg';
import Maintenance from '@brightlayer-ui/icons-svg/maintenance.svg';
import MapMarkerMultiple from '@brightlayer-ui/icons-svg/map_marker_multiple.svg';
import XStorage from '@brightlayer-ui/icons-svg/xstorage.svg';
import XStorageAlt from '@brightlayer-ui/icons-svg/xstorage_alt.svg';

const svgIcons = [
    {
        name: 'Eaton Logo',
        filename: 'eaton.svg',
        icon: EatonLogo,
    },
    {
        name: 'Eaton Logo with Tagline',
        filename: 'eaton_tagline.svg',
        icon: EatonLogoWithTagline,
    },
    {
        name: 'Eaton Logo Two Tone',
        filename: 'eaton_two_tone.svg',
        icon: EatonLogoTwoTone,
    },
    {
        name: 'EV Plug Type One',
        filename: 'ev_plug_type_one.svg',
        icon: EVPlugTypeOne,
    },
    {
        name: 'EV Plug Type Two',
        filename: 'ev_plug_type_two.svg',
        icon: EVPlugType2,
    },
    {
        name: 'AC',
        filename: 'ac.svg',
        icon: AC,
    },
    {
        name: 'Account Settings',
        filename: 'account_settings.svg',
        icon: AccountSettings,
    },
    {
        name: 'Maintenance Mode',
        filename: 'maintenance.svg',
        icon: Maintenance,
    },
    {
        name: 'Map Marker Multiple',
        filename: 'map_marker_multiple.svg',
        icon: MapMarkerMultiple,
    },
    {
        name: 'xStorage',
        filename: 'xstorage.svg',
        icon: XStorage,
    },
    {
        name: 'xStorage Alt',
        filename: 'xstorage_alt.svg',
        icon: XStorageAlt,
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
        <Grid container sx={styles.container}>
            {sorted.map((icon: any) => (
                <Grid size={2} key={icon.filename} sx={styles.gridItem}>
                    <Box sx={styles.iconWrapper}>
                        <img src={icon.icon} />
                        <Box sx={styles.iconName}>{icon.filename}</Box>
                    </Box>
                </Grid>
            ))}
        </Grid>
    </>
);
