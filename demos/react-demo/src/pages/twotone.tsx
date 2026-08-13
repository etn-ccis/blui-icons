import React from 'react';
import { BatteryChargingTwotone50, CybersecurityTwoTone } from '@brightlayer-ui/icons-mui';
import { TwoToneIcon, TwoToneStatus } from '../components/TwoToneIcon';
// Material (Figma) two-tone icons — Action category
import AccountBalanceWalletTwoTone from '@mui/icons-material/AccountBalanceWalletTwoTone';
import ScheduleTwoTone from '@mui/icons-material/ScheduleTwoTone';
// Material (Figma) two-tone icons — Hardware category
import DevicesOtherTwoTone from '@mui/icons-material/DevicesOtherTwoTone';
import RouterTwoTone from '@mui/icons-material/RouterTwoTone';
// Material (Figma) two-tone icons — Device category
import BluetoothTwoTone from '@mui/icons-material/BluetoothTwoTone';
import StorageTwoTone from '@mui/icons-material/StorageTwoTone';
// Material (Figma) two-tone icons — Maps category
import PlaceTwoTone from '@mui/icons-material/PlaceTwoTone';
import LocalShippingTwoTone from '@mui/icons-material/LocalShippingTwoTone';
import { Box, SxProps, Typography, Paper } from '@mui/material';
import { Theme, ThemeProvider, createTheme } from '@mui/material/styles';

const STATUSES: TwoToneStatus[] = ['neutral', 'primary', 'success', 'warning', 'orange', 'error', 'purple'];

const BLUI_ICONS = [
    { name: 'BatteryChargingTwotone50', icon: BatteryChargingTwotone50 },
    { name: 'CybersecurityTwoTone', icon: CybersecurityTwoTone },
];

const MATERIAL_ICONS = [
    { name: 'AccountBalanceWalletTwoTone (Material · Action)', icon: AccountBalanceWalletTwoTone },
    { name: 'ScheduleTwoTone (Material · Action)', icon: ScheduleTwoTone },
    { name: 'DevicesOtherTwoTone (Material · Hardware)', icon: DevicesOtherTwoTone },
    { name: 'RouterTwoTone (Material · Hardware)', icon: RouterTwoTone },
    { name: 'BluetoothTwoTone (Material · Device)', icon: BluetoothTwoTone },
    { name: 'StorageTwoTone (Material · Device)', icon: StorageTwoTone },
    { name: 'PlaceTwoTone (Material · Maps)', icon: PlaceTwoTone },
    { name: 'LocalShippingTwoTone (Material · Maps)', icon: LocalShippingTwoTone },
];

const styles: { [key: string]: SxProps<Theme> } = {
    section: {
        p: 3,
        m: 2,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        gap: 3,
        flexWrap: 'wrap',
        mb: 2,
    },
    statusCell: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minWidth: 72,
    },
};

const ThemedPanel: React.FC<{ mode: 'light' | 'dark' }> = ({ mode }) => (
    <ThemeProvider theme={createTheme({ palette: { mode } })}>
        <Paper sx={styles.section}>
            <Typography variant="h6" gutterBottom>
                {mode === 'light' ? 'Light theme' : 'Dark theme'}
            </Typography>

            <Typography variant="overline" color="text.secondary">
                Brightlayer UI two-tone icons
            </Typography>
            {BLUI_ICONS.map(({ name, icon }) => (
                <Box key={name} sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Box sx={styles.row}>
                        {STATUSES.map((status) => (
                            <Box key={status} sx={styles.statusCell}>
                                <TwoToneIcon icon={icon} status={status} sx={{ fontSize: 48 }} />
                                <Typography variant="caption">{status}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}

            <Typography variant="overline" color="text.secondary">
                Material two-tone icons
            </Typography>
            {MATERIAL_ICONS.map(({ name, icon }) => (
                <Box key={name} sx={{ mb: 3 }}>
                    <Typography variant="body2" color="text.secondary" gutterBottom>
                        {name}
                    </Typography>
                    <Box sx={styles.row}>
                        {STATUSES.map((status) => (
                            <Box key={status} sx={styles.statusCell}>
                                <TwoToneIcon icon={icon} status={status} sx={{ fontSize: 48 }} />
                                <Typography variant="caption">{status}</Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            ))}
        </Paper>
    </ThemeProvider>
);

export const TwoTonePage: React.FC = () => (
    <Box sx={{ maxWidth: 900, margin: 'auto', p: 2 }}>
        <ThemedPanel mode="light" />
        <ThemedPanel mode="dark" />
    </Box>
);
