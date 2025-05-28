/**
 Copyright (c) 2021-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider, StyledEngineProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import '@brightlayer-ui/icons/BrightlayerUIIcons.css';

// TODO: Remove this after the issues with @types/react goes away
// https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/68444
/* eslint-disable */
declare global {
    namespace React {
        interface DOMAttributes<T> {
            component?: string | undefined;
            disabled?: string | undefined;
            selected?: string | undefined;
            placeholder?: string | undefined;
            onPointerEnterCapture?: React.PointerEventHandler<T> | undefined;
            onPointerLeaveCapture?: React.PointerEventHandler<T> | undefined;
        }
    }
}
/* eslint-enable */

const container = document.getElementById('root');
if (!container) throw new Error('Root Element was not found in the DOM');

const root = ReactDOMClient.createRoot(container);

root.render(
    <StyledEngineProvider injectFirst>
        <ThemeProvider theme={createTheme(BLUIThemes.blue)}>
            <BrowserRouter>
                <CssBaseline />
                <App />
            </BrowserRouter>
        </ThemeProvider>
    </StyledEngineProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
