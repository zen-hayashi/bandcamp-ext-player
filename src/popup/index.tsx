import Popup from './Popup';
import React from 'react';
import { render } from 'react-dom';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

function initApp() {
    const store = new Store();
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    store.subscribe(()=>{
        console.log(store.getState());
    })
    const theme = createMuiTheme({
                palette: {
                    type: prefersDarkMode ? 'dark' : 'light',
                },
            })

    store.ready().then(() => {
        // The store implements the same interface as Redux's store
        // so you can use tools like `react-redux` no problem!
        render(
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Popup />
                </ThemeProvider>
            </Provider>
            , document.getElementById('popup'));
    })
};

initApp();