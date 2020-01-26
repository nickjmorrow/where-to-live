import {
	ArgumentType,
	getThemeFromNewInputs,
	ThemeContext,
	updateThemeInputs,
} from '@nickjmorrow/react-component-library';
import { Main } from 'components/Main';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { RootState } from 'reduxUtilities/rootReducer';
import { uiActions } from 'reduxUtilities/uiActions';
import './App.css';

const themeInputs: ArgumentType<typeof updateThemeInputs>[0] = {
	typography: {
		fontFamily: {
			default: 'Overpass, sans-serif',
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
	},
	defaultShowBoxShadow: false,
};

const AppInternal: React.FC<RouteComponentProps> = () => {
	const dispatch = useDispatch();
	dispatch(uiActions.getCities.request());

	return (
		<div className="App" style={{ display: 'flex', justifyContent: 'center', minHeight: '100vh', marginTop: '300px' }}>
			<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
				<Main />
			</ThemeContext.Provider>
		</div>
	);
};

export const App = withRouter(AppInternal);
