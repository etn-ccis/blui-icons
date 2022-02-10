import React from 'react';
import * as Icons from '@brightlayer-ui/icons-mui';
import { Grid } from '@mui/material';
const meta = require('@brightlayer-ui/icons-mui/index.json');

const getMuiIconName = (filename: string): string =>
    filename.replace(/\.svg/, '').replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());

const sorted = meta.icons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

export const App: React.FC = () => (
    <>
        <Grid container spacing={6} style={{ maxWidth: 700, margin: 'auto' }}>
            {sorted.map((icon: any) => {
                //@ts-ignore
                const Component = Icons[getMuiIconName(icon.filename)];
                return (
                    <Grid item xs={2} key={icon.filename}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Component style={{ fontSize: 48 }} />
                            <div style={{ wordBreak: 'break-all', textAlign: 'center' }}>{icon.filename}</div>
                        </div>
                    </Grid>
                );
            })}
        </Grid>
    </>
);
