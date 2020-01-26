import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import axios from 'axios';
import { store } from 'reduxUtilities/store';
import { getBaseUrl } from 'utilities/getBaseUrl';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';

axios.defaults.baseURL = getBaseUrl();

ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
