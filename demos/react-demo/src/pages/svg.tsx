import React from 'react';
import { Box, Divider, SxProps, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import { Theme } from '@mui/material/styles';
import EatonLogo from '@brightlayer-ui/icons-svg/eaton.svg';
import EatonLogoWithTagline from '@brightlayer-ui/icons-svg/eaton_tagline.svg';
import EatonLogoTwoTone from '@brightlayer-ui/icons-svg/eaton_two_tone.svg';
import EVPlugTypeOne from '@brightlayer-ui/icons-svg/ev_plug_type_one.svg';
import EVPlugType2 from '@brightlayer-ui/icons-svg/ev_plug_type_two.svg';
import AC from '@brightlayer-ui/icons-svg/ac.svg';
import AcSlashed from '@brightlayer-ui/icons-svg/ac_slashed.svg';
import AccountSettings from '@brightlayer-ui/icons-svg/account_settings.svg';
import AccountSettingsSlashed from '@brightlayer-ui/icons-svg/account_settings_slashed.svg';
import Maintenance from '@brightlayer-ui/icons-svg/maintenance.svg';
import MapMarkerMultiple from '@brightlayer-ui/icons-svg/map_marker_multiple.svg';
import Pxblue from '@brightlayer-ui/icons-svg/pxblue.svg';
import XStorage from '@brightlayer-ui/icons-svg/xstorage.svg';
import XStorageAlt from '@brightlayer-ui/icons-svg/xstorage_alt.svg';
import ThemeLightDark from '@brightlayer-ui/icons-svg/theme_light_dark.svg';
import SlashOnly from '@brightlayer-ui/icons-svg/slash_only.svg';
import { SlashedSvgIcon } from '../components/SlashedSvgIcon';

const svgIcons = [
    { name: 'Eaton Logo', filename: 'eaton.svg', icon: EatonLogo },
    { name: 'Eaton Logo with Tagline', filename: 'eaton_tagline.svg', icon: EatonLogoWithTagline },
    { name: 'Eaton Logo Two Tone', filename: 'eaton_two_tone.svg', icon: EatonLogoTwoTone },
    { name: 'EV Plug Type One', filename: 'ev_plug_type_one.svg', icon: EVPlugTypeOne },
    { name: 'EV Plug Type Two', filename: 'ev_plug_type_two.svg', icon: EVPlugType2 },
    { name: 'AC', filename: 'ac.svg', icon: AC },
    { name: 'AC Slashed (pre-built)', filename: 'ac_slashed.svg', icon: AcSlashed },
    { name: 'Account Settings', filename: 'account_settings.svg', icon: AccountSettings },
    {
        name: 'Account Settings Slashed (pre-built)',
        filename: 'account_settings_slashed.svg',
        icon: AccountSettingsSlashed,
    },
    { name: 'Maintenance Mode', filename: 'maintenance.svg', icon: Maintenance },
    { name: 'Map Marker Multiple', filename: 'map_marker_multiple.svg', icon: MapMarkerMultiple },
    { name: 'xStorage', filename: 'xstorage.svg', icon: XStorage },
    { name: 'xStorage Alt', filename: 'xstorage_alt.svg', icon: XStorageAlt },
    { name: 'Theme Light Dark', filename: 'theme_light_dark.svg', icon: ThemeLightDark },
    { name: 'Pxblue', filename: 'pxblue.svg', icon: Pxblue },
    { name: 'Slash Only', filename: 'slash_only.svg', icon: SlashOnly },
];

/** Icons used to demonstrate the runtime SlashedSvgIcon component */
const runtimeSlashDemos: Array<{ label: string; src: string }> = [
    { label: 'ac.svg', src: AC },
    { label: 'account_settings.svg', src: AccountSettings },
    { label: 'maintenance.svg', src: Maintenance },
    { label: 'map_marker_multiple.svg', src: MapMarkerMultiple },
    { label: 'pxblue.svg', src: Pxblue },
    { label: 'xstorage.svg', src: XStorage },
    { label: 'theme_light_dark.svg', src: ThemeLightDark },
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
        gap: 1,
    },
    icon: {
        fontSize: 48,
    },
    iconName: {
        wordBreak: 'break-all',
        textAlign: 'center',
    },
    comparisonRow: {
        display: 'flex',
        alignItems: 'flex-end',
        gap: 3,
    },
    comparisonItem: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0.5,
    },
};

export const SvgPage: React.FC = () => (
    <>
        {/* ── Existing static SVG icons ── */}
        <Grid container sx={styles.container}>
            {sorted.map((icon: any) => (
                <Grid size={2} key={icon.filename} sx={styles.gridItem}>
                    <Box sx={styles.iconWrapper}>
                        <img src={icon.icon} width={48} height={48} alt={icon.name} />
                        <Box sx={styles.iconName}>{icon.filename}</Box>
                    </Box>
                </Grid>
            ))}
        </Grid>

        {/* ── Runtime SlashedSvgIcon component demo ── */}
        <Box sx={{ maxWidth: 700, margin: 'auto', mt: 4, px: 2 }}>
            <Divider sx={{ mb: 3 }} />
            <Typography variant="h6" gutterBottom>
                Runtime <code>SlashedSvgIcon</code> component
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Each icon below is fetched at runtime, its SVG content is inlined, and an SVG{' '}
                <code>&lt;mask&gt;</code> clips the slash band out of the icon before the slash is
                drawn on top — no pre-built slashed variants required.
            </Typography>

            <Grid container sx={{ mb: 2 }}>
                {runtimeSlashDemos.map(({ label, src }) => (
                    <Grid size={3} key={label} sx={styles.gridItem}>
                        <Box sx={styles.comparisonRow}>
                            {/* Original */}
                            <Box sx={styles.comparisonItem}>
                                <img src={src} width={48} height={48} alt={label} />
                                <Typography variant="caption" color="text.secondary">
                                    original
                                </Typography>
                            </Box>

                            {/* Runtime slashed */}
                            <Box sx={styles.comparisonItem}>
                                <SlashedSvgIcon iconSrc={src} size={48} alt={`${label} slashed`} />
                                <Typography variant="caption" color="text.secondary">
                                    slashed
                                </Typography>
                            </Box>
                        </Box>
                        <Typography variant="caption" sx={styles.iconName} display="block" mt={1}>
                            {label}
                        </Typography>
                    </Grid>
                ))}
            </Grid>

            {/* Custom slash color demo */}
            <Divider sx={{ my: 3 }} />
            <Typography variant="subtitle2" gutterBottom>
                Custom <code>slashColor</code> prop
            </Typography>
            <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap' }}>
                {(
                    [
                        { color: '#727E84', label: 'default (#727E84)' },
                        { color: '#CA3C3C', label: 'red (#CA3C3C)' },
                        { color: '#007BC1', label: 'blue (#007BC1)' },
                        { color: '#007A33', label: 'green (#007A33)' },
                    ] as const
                ).map(({ color, label }) => (
                    <Box key={color} sx={styles.comparisonItem}>
                        <SlashedSvgIcon iconSrc={Maintenance} size={48} slashColor={color} />
                        <Typography variant="caption" color="text.secondary">
                            {label}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    </>
);
