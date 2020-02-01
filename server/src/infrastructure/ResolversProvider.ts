import { injectable } from 'tsyringe';
import { Resolvers } from 'infrastructure/graphql/types/Resolvers';
import { QueryProvider } from 'infrastructure/graphql/QueryProvider';

@injectable()
export class ResolverProvider {
	private _queryProvider: QueryProvider;

	constructor(queryProvider: QueryProvider) {
		this._queryProvider = queryProvider;
	}

	public getResolvers(): Resolvers {
		return { ...this._queryProvider.getQueryResolvers() };
	}
}
