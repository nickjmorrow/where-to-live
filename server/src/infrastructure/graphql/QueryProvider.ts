import { injectable } from 'tsyringe';
import { CityProvider } from 'cities/CityProvider';
import { Resolvers } from 'infrastructure/graphql/types/Resolvers';

@injectable()
export class QueryProvider {
	private _cityProvider: CityProvider;

	constructor(cityProvider: CityProvider) {
		this._cityProvider = cityProvider;
	}

	public getQueryResolvers(): Resolvers {
		return {
			Query: {
				getCities: async () => await this._cityProvider.getCities(),
			},
		};
	}
}
