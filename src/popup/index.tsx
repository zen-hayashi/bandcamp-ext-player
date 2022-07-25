import Popup from './Popup';
import React from 'react';
import { render } from 'react-dom';
// import useMediaQuery from @mui/material/useMediaQuery';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux'
// import { createTheme, ThemeProvider } from '@mui/styles';

function initApp() {
    const store = new Store();
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    store.subscribe(()=>{
        console.log(store.getState());
    })
    // const theme = createTheme({
    //             palette: {
    //                 type: prefersDarkMode ? 'dark' : 'light',
    //             },
    //         })

    store.ready().then(() => {
        // The store implements the same interface as Redux's store
        // so you can use tools like `react-redux` no problem!
        render(
            <Provider store={store}>
                {/* <ThemeProvider theme={theme}>
                    <CssBaseline /> */}
                    <Popup />
                {/* </ThemeProvider> */}
            </Provider>
            , document.getElementById('popup'));
    })
};

initApp();