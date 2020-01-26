import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from 'reduxUtilities/rootSaga';
import { rootReducer } from 'reduxUtilities/rootReducer';
import { AppState } from 'reduxUtilities/AppState';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const sagaMiddleware = createSagaMiddleware();

const configureStore = (initialState: AppState) => {
	const middleware = [sagaMiddleware, routerMiddleware(createBrowserHistory())];

	// In development, use the browser's Redux dev tools extension if installed
	const enhancers = [];
	const isDevelopment = process.env.NODE_ENV === 'development';
	if (isDevelopment && typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
		enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
	}

	const intermediateStore = createStore(
		rootReducer,
		initialState,
		compose(applyMiddleware(...middleware), ...enhancers),
	);

	sagaMiddleware.run(rootSaga);

	return intermediateStore;
};

export const store = configureStore((window as any).initialReduxState);
