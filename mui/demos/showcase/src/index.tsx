import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import {
    CssBaseline,
    ThemeProvider,
    // Theme,
    StyledEngineProvider,
    createTheme,
    adaptV4Theme,
} from '@mui/material';
import { Theme } from '@mui/material/styles';
import '@mui/styles';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

declare module '@mui/styles/defaultTheme' {
    // eslint-disable-next-line @typescript-eslint/no-empty-interface
    interface DefaultTheme extends Theme {}
}

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <ThemeProvider theme={createTheme(adaptV4Theme(BLUIThemes.blue))}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
