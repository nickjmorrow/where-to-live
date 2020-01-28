import { CityModel } from 'cities/CityModel';
import { Metric } from 'cities/Metric';
import { injectable } from 'tsyringe';

@injectable()
export class ScoreCalculator {
	calculateScores(cities: CityModel[], metrics: Metric[]) {
		const metricMaxes = metrics.reduce<{ [P in keyof CityModel]: number }>((aggM, curM) => {
			aggM[curM.accessor] = cities.reduce((agg, c) => Math.max(agg, c[curM.accessor]), 0);
			return aggM;
		}, {} as { [P in keyof CityModel]: number });

		const intermediateCityScores = cities.map(c => {
			const score = metrics.reduce((agg, cur) => {
				const normalizedMetric = (cur.multiplier * c[cur.accessor]) / metricMaxes[cur.accessor];
				return agg + normalizedMetric;
			}, 0);
			return { ...c, score };
		});

		const maximumScore = intermediateCityScores.reduce((agg, cur) => Math.max(agg, cur.score), 0);

		return intermediateCityScores.map(c => ({
			...c,
			score: parseInt(((c.score / maximumScore) * 100).toFixed(0), 10),
		}));
	}
}
