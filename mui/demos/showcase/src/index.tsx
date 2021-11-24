import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import * as BLUIThemes from '@brightlayer-ui/react-themes';
import '@brightlayer-ui/react-themes/open-sans';
import { App } from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={createMuiTheme(BLUIThemes.blue)}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
