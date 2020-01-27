import { CityModel } from 'cities/CityModel';
import { Metric } from 'cities/Metric';

interface Output {
	cityId: number;
	score: number;
}

interface MetricMultiplier {
	costOfLiving: number;
	population: number;
}

export class ScoreCalculator {
	calculateScores(cities: CityModel[], metricMultiplier: MetricMultiplier) {
		return cities.map(city => {
			let score = 0;

			score += city.costOfLiving * metricMultiplier.costOfLiving;
			score += city.population + metricMultiplier.population;

			return {
				cityId: city.cityId,
				score,
			};
		});
	}
}
