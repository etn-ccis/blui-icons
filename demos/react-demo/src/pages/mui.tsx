import React from 'react';
import * as Icons from '@brightlayer-ui/icons-mui';
import { Box, Divider, SxProps, Typography } from '@mui/material';
import { Theme } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import meta from '@brightlayer-ui/icons-mui/index.json';

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

const toPascalCase = (value: string): string =>
    value
        .split(/[^a-zA-Z0-9]+/)
        .filter(Boolean)
        .map((segment) => `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`)
        .join('');

const resolveIconComponent = (icon: any): React.ElementType<{ sx?: SxProps<Theme> }> | undefined => {
    const iconMap = Icons as Record<string, React.ElementType<{ sx?: SxProps<Theme> }>>;
    const byFilename = toPascalCase(icon.filename.replace('.svg', ''));
    const byName = toPascalCase(icon.name || '');
    return iconMap[byFilename] || iconMap[byName];
};

export const MuiPage: React.FC = () => (
    <>
        <Grid container sx={styles.container}>
            {sorted.map((icon: any) => {
                const Component = resolveIconComponent(icon);
                return (
                    <Grid size={2} key={icon.filename} sx={styles.gridItem}>
                        <Box sx={styles.iconWrapper}>
                            {Component ? <Component sx={styles.icon} /> : <Box sx={styles.icon}>-</Box>}
                            <Box sx={styles.iconName}>{icon.filename}</Box>
                        </Box>
                    </Grid>
                );
            })}
        </Grid>

        <Divider sx={{ my: 4 }} />
        <Typography variant="h6" sx={{ textAlign: 'center', mb: 2 }}>SlashedIcon — clipping mask + slash overlay</Typography>
        <Grid container sx={styles.container}>
            {([['Battery', '#727E84'], ['SolarPanel', '#D32F2F'], ['Fan', '#1976D2']] as [string, string][]).map(
                ([name, color]) => {
                    const Component = (Icons as any)[name];
                    const SlashedIconCmp = (Icons as any).SlashedIcon as React.FC<{ size?: number; slashColor?: string; children: React.ReactElement }>;
                    return Component && SlashedIconCmp ? (
                        <Grid size={2} key={name} sx={styles.gridItem}>
                            <Box sx={styles.iconWrapper}>
                                <SlashedIconCmp size={48} slashColor={color}>
                                    <Component />
                                </SlashedIconCmp>
                                <Box sx={styles.iconName}>{name}</Box>
                            </Box>
                        </Grid>
                    ) : null;
                }
            )}
        </Grid>
    </>
);
