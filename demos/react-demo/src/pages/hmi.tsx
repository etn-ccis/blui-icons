import React from 'react';
import * as Icons from '@brightlayer-ui/icons-hmi';
import { Box, SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const meta = require('@brightlayer-ui/icons-hmi/index.json');

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

export const HmiPage: React.FC = () => (
    <>
        <Grid container sx={styles.container}>
            {sorted.map((icon: any) => {
                // Transform filename to component name matching SVGR's logic
                const componentName = icon.filename
                    .replace('.svg', '')
                    .split('_')
                    .map((s: string) => (
                        // If the part has numbers or mixed case (like "1X", "2G", "LTE"), 
                        // just capitalize first letter and lowercase the rest
                        // This matches SVGR's default behavior
                         s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
                    ))
                    .join('')
                    .split(' ')
                    .map((s: string) => s.charAt(0).toUpperCase() + s.slice(1))
                    .join('')
                    // Now handle the special cases where we need uppercase letters preserved
                    .replace(/(\d)x/gi, '$1X')  // 1x -> 1X
                    .replace(/(\d)g/gi, '$1G'); // 2g -> 2G, 3g -> 3G, etc.
                
                const Component =
                    //@ts-ignore
                    Icons[componentName];
                
                // Skip icons that don't have a corresponding component
                if (!Component) {
                    return null;
                }
                
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
