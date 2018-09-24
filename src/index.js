import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import Main from "./components/Main";
import store from "./store/ReduxStore";

ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Main />
        </HashRouter>
    </Provider>, document.getElementById('root'));