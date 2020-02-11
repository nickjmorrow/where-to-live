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
};

const AppInternal: React.FC<RouteComponentProps> = () => {
	const dispatch = useDispatch();
	dispatch(uiActions.getCities.request());
	dispatch(uiActions.getMetricGroups.request());

	return (
		<ThemeContext.Provider value={getThemeFromNewInputs(themeInputs)}>
			<Main />
		</ThemeContext.Provider>
	);
};

export const App = withRouter(AppInternal);
