import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { createMuiTheme, CssBaseline, ThemeProvider } from '@material-ui/core';
import * as PXBThemes from '@pxblue/react-themes';
import '@pxblue/react-themes/open-sans';

ReactDOM.render(
    <ThemeProvider theme={createMuiTheme(PXBThemes.blue)}>
        <CssBaseline />
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
