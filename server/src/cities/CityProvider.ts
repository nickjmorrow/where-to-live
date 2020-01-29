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
		const cityEntities = await (await this.entityManagerProvider.getEntityManager()).find(City);
		return cityEntities.map(this.toCityModel);
	}

	private toCityModel(city: City): CityModel {
		return {
			cityId: city.cityId,
			label: city.name,
			costOfLiving: city.costOfLiving,
			population: city.population,
			happiness: city.happiness,
			techJobs: city.techJobs,
			isVisible: true,
		};
	}
}
