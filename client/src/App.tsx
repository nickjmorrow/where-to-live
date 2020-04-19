import { Main } from 'components/Main';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { uiActions } from 'reduxUtilities/uiActions';
import './App.css';

const AppInternal: React.FC<RouteComponentProps> = () => {
	const dispatch = useDispatch();
	dispatch(uiActions.getCities.request());
	dispatch(uiActions.getMetricGroups.request());

	return <Main />;
};

export const App = withRouter(AppInternal);
