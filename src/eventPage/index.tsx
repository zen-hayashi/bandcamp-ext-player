import React from 'react';
import { render } from 'react-dom';
import { Store,applyMiddleware } from 'webext-redux'
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import {EventPage} from './EventPage';
import "./index.css";

const initApp = () => {
    const pageData = window.document.querySelectorAll('[data-embed]')[0];
    const pageCrumbs = window.document.querySelector('#js-crumbs-data');
    if (!pageData || !pageCrumbs) return;
    const element = document.createElement('div');
    element.id = 'root'
    document.getElementById('name-section').before(element);
    const store = new Store();
    const middleware = [thunkMiddleware];
    const storeWithMiddleware = applyMiddleware(store, ...middleware);
    storeWithMiddleware.subscribe(() => {
      console.log(storeWithMiddleware.getState())
    })
    
    storeWithMiddleware.ready().then(() => {
      render(
        <div>
          <Provider store={storeWithMiddleware}>
            <EventPage />
          </Provider>
        </div>,
        document.getElementById('root')
      )
    })
}
initApp()