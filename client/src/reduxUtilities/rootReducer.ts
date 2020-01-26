import { combineReducers } from 'redux';
import { uiReducer } from 'reduxUtilities/uiReducer';
import { routerReducer } from 'react-router-redux';

export const rootReducer = combineReducers({
	ui: uiReducer,
	routing: routerReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
