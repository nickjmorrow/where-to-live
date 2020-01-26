import { RootState } from 'reduxUtilities/rootReducer';
import { createSelector } from 'reselect';

export const getRoutingSlice = (state: RootState) => state.routing;

export const getPathname = (state: RootState) => getRoutingSlice(state).location?.pathname;

type PageType = 'home' | 'saved';

export const getUrlSelector = createSelector(getPathname, (pathname: string | undefined) => {
	return pathname && pathname.slice(1, pathname.length);
});

export const pageTypeSelector = createSelector(
	getUrlSelector,
	(url: string | undefined): PageType => {
		return url !== '' ? 'home' : 'saved';
	},
);
