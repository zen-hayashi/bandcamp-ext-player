import Popup from './Popup';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Store } from 'webext-redux'

function initApp() {
    const store = new Store();
    // const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    store.subscribe(()=>{
        console.log(store.getState());
    })

    store.ready().then(() => {
        // The store implements the same interface as Redux's store
        // so you can use tools like `react-redux` no problem!
        render(
            <Provider store={store}>
                    <Popup />
            </Provider>
            , document.getElementById('popup'));
    })
};

initApp();