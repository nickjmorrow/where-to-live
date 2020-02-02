const developmentUrl = 'http://localhost:3001';
const productionUrl = 'https://tranquil-shore-43790.herokuapp.com/';

export const getBaseUrl = () => {
	const env = process.env.NODE_ENV;
	return env === 'development' ? developmentUrl : productionUrl;
};
