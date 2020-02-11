import { CityModel } from 'cities/CityModel';
import { Metric } from 'cities/Metric';
import { injectable } from 'tsyringe';

const getExtrema = (validCities: CityModel[], curM: Metric): number => {
	if (!curM.calculationConfig.isIncludedInCalculation) {
		throw new Error('Must be included in calculation.');
	}

	switch (curM.calculationConfig.sortType.order) {
		case 'descending':
			return validCities.reduce((agg, c) => Math.max(agg, c[curM.accessor] as number), Number.NEGATIVE_INFINITY);
		case 'ascending':
			return validCities.reduce((agg, c) => Math.min(agg, c[curM.accessor] as number), Number.POSITIVE_INFINITY);
	}
};

const getRatio = (city: CityModel, metric: Metric, metricExtremum: number) => {
	if (!metric.calculationConfig.isIncludedInCalculation) {
		throw new Error();
	}

	switch (metric.calculationConfig.sortType.order) {
		case 'descending':
			return (city[metric.accessor] as number) / metricExtremum;
		case 'ascending':
			return metricExtremum / (city[metric.accessor] as number);
	}
};

@injectable()
export class ScoreCalculator {
	calculateScores(cities: CityModel[], metrics: Metric[]) {
		const scoreableMetrics = metrics.filter(m => m.calculationConfig.isIncludedInCalculation);
		const validCities = cities.filter(c => c.isVisible);

		const metricExtrema = scoreableMetrics.reduce<{ [P in keyof CityModel]: number }>((aggM, curM) => {
			aggM[curM.accessor] = getExtrema(validCities, curM);
			return aggM;
		}, {} as { [P in keyof CityModel]: number });

		const intermediateCityScores = cities.map(city => {
			const score = city.isVisible
				? scoreableMetrics.reduce((agg, currentMetric) => {
						if (!currentMetric.calculationConfig.isIncludedInCalculation) {
							throw new Error('Unnexpected metric.');
						}
						const metricExtremum = metricExtrema[currentMetric.accessor];
						const normalizedMetric =
							currentMetric.calculationConfig.multiplier * getRatio(city, currentMetric, metricExtremum);
						return agg + normalizedMetric;
				  }, 0)
				: 0;
			return { ...city, score };
		});

		const maximumScore = intermediateCityScores.reduce((agg, cur) => Math.max(agg, cur.score), 0);

		return intermediateCityScores.map(c => ({
			...c,
			score: parseInt(((c.score / maximumScore) * 100).toFixed(0), 10),
		}));
	}
}
