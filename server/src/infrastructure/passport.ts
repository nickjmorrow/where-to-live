import { PassportStatic } from 'passport';
// tslint:disable-next-line:no-var-requires
const GoogleTokenStrategy = require('passport-google-token').Strategy;

export const useGoogleTokenStrategy = (passport: PassportStatic) => {
	passport.use(
		new GoogleTokenStrategy(
			{
				clientID: process.env.GOOGLE_CLIENT_ID,
				clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			},

			(accessToken: string, refreshToken: string, profile: any, done: any) => {
				const user = { accessToken, profile };
				return done(null, user);
			},
		),
	);
};
