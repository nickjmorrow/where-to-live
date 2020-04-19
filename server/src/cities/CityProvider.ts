import { injectable } from 'tsyringe';
import { CityModel } from 'cities/CityModel';
import { EntityManagerProvider } from 'infrastructure/EntityManagerProvider';
import { City } from 'cities/entities/City';

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
			population: city.population,
			qualityOfLifeIndex: city.qualityOfLifeIndex,
			purchasingPowerIndex: city.purchasingPowerIndex,
			safetyIndex: city.safetyIndex,
			healthCareIndex: city.healthCareIndex,
			costOfLivingIndex: city.costOfLivingIndex,
			propertyPriceToIncomeRatio: city.propertyPriceToIncomeRatio,
			trafficCommuteTimeIndex: city.trafficCommuteTimeIndex,
			pollutionIndex: city.pollutionIndex,
			climateIndex: city.climateIndex,
			isVisible: true,
		};
	}
}
