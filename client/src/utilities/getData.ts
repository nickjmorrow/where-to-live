const cityNames = ['San Francisco, CA', 'New York, NY', 'Chicago, Illinois', 'Toronnto, CA', 'Seattle, WA'];

const createDeterministicNumber = (input: string) =>
	input
		.split('')
		.map(c => c.charCodeAt(0))
		.reduce((agg, cur) => agg + cur) % 100;

const createDatum = (cityName: string) => {
	const cityNum = createDeterministicNumber(cityName);

	return {
		label: cityName,
		score: (createDeterministicNumber('score') * cityNum) % 99,
		costOfLiving: (createDeterministicNumber('costOfLiving') * cityNum) % 99,
		medianIncome: (createDeterministicNumber('medianIncome') * cityNum) % 99,
		crimeRate: (createDeterministicNumber('crimeRate') * cityNum) % 99,
		population: (createDeterministicNumber('population') * cityNum) % 56,
		isVisible: true,
	};
};

export const data = cityNames.map(createDatum);
