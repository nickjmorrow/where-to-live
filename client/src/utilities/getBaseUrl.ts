const developmentUrl = 'http://localhost:3001';
const productionUrl = 'https://sleepy-tundra-74114.herokuapp.com/';

export const getBaseUrl = () => {
	const env = process.env.NODE_ENV;
	return env === 'development' ? developmentUrl : productionUrl;
};
