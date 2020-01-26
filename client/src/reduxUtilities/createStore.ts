import { createStore as reduxCreateStore } from 'redux';
import { rootReducer } from 'reduxUtilities/rootReducer';

const getWindow = () => {
	if (typeof window !== 'undefined') {
		return (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__();
	}
	return undefined;
};

export const createStore = () => reduxCreateStore(rootReducer, getWindow());
