import React from 'react';
import * as Icons from '@pxblue/icons-mui';
const meta = require('@pxblue/icons-mui/index.json');

const getMuiIconName = (filename: string): string =>
    filename.replace(/\.svg/, '').replace(/(^.)|(_)(.)/g, (match, p1, p2, p3) => (p1 || p3).toUpperCase());

const sorted = meta.icons.sort((a: any, b: any) => (a.filename > b.filename ? 1 : -1));

export const App: React.FC = () => (
    <div>
        {sorted.map((icon: any) => {
            //@ts-ignore
            const Component = Icons[getMuiIconName(icon.filename)];
            return (
                <div
                    key={icon.filename}
                    style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', margin: 10 }}
                >
                    <Component style={{ fontSize: 64 }} />
                    <div>{icon.filename}</div>
                </div>
            );
        })}
    </div>
);
