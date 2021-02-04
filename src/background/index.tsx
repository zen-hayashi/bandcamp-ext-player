import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Background from './Background';
import { wrapStore } from 'webext-redux';
import store from "../store";

wrapStore(store)

ReactDOM.render(
    <Provider store={store}>
        <Background></Background>
    </Provider>,
    document.getElementById('root'),
    )
