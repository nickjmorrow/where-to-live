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
import {
	ThemeContext,
	getThemeFromNewInputs,
	ArgumentType,
	updateThemeInputs,
} from '@nickjmorrow/react-component-library';

axios.defaults.baseURL = getBaseUrl();

if (process.env.NODE_ENV === 'development') {
	const whyDidYouRender = require('@welldone-software/why-did-you-render');
	whyDidYouRender(React, { trackAllPureComponents: true });
}

const themeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
	typography: {
		fontFamily: {
			default: 'Overpass, sans-serif',
			title: 'Kavoon, cursive',
		},
	},
	colors: {
		core: {
			hue: 260,
			saturation: 100,
		},
		accent: {
			hue: 50,
			middleLightness: 47,
			saturation: 90,
		},
		neutral: {
			lightnessDecrement: 15,
		},
	},
	defaultShowBoxShadow: false,
	border: {
		borderRadius: {
			br1: 8,
		},
	},
	appSettings: {
		githubUrl: 'https://github.com/nickjmorrow/where-to-live',
	},
};

ReactDOM.render(
	<Provider store={store}>
		<Router history={createBrowserHistory()}>
			<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
				<App />
			</ThemeContext.Provider>
		</Router>
	</Provider>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
