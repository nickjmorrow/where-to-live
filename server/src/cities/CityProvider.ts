import { injectable } from 'tsyringe';
import { CityModel } from './CityModel';
import { EntityManagerProvider } from '../infrastructure/EntityManagerProvider';
import { City } from './entities/City';

@injectable()
export class CityProvider {
	private entityManagerProvider: EntityManagerProvider;

	public constructor(entityManagerProvider: EntityManagerProvider) {
		this.entityManagerProvider = entityManagerProvider;
	}

	public async getCities(): Promise<CityModel[]> {
		return (await this.entityManagerProvider.getEntityManager()).find(City);
	}
}
