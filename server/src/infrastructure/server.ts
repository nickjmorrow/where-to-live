import dotenv from 'dotenv';

dotenv.config();

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { app } from './app';
import { typeOrmConfig } from './config';
import { logger } from './logger';
import { gql, ApolloServer } from 'apollo-server-express';
import { container } from 'tsyringe';
import { ResolverProvider } from 'infrastructure/graphql/ResolversProvider';
import chalk from 'chalk';

process.on('uncaughtException', e => {
	logger.error(e);
	process.exit(1);
});

process.on('unhandledRejection', e => {
	logger.error(e!);
	process.exit(1);
});

const typeDefs = gql`
	type Query {
		getUser(id: Int!): User
		getCities: [City]
		getUsers: [User]
	}
	type Mutation {
		addUser(firstName: String!, lastName: String!, age: Int!): Boolean!
	}
	type User {
		id: Int!
		firstName: String!
		lastName: String!
		age: Int!
	}

	type City {
		cityId: Int!
		label: String!
		costOfLiving: Int!
		population: Int!
		happiness: Int!
		techJobs: Int!
		isVisible: Boolean!
	}
`;

const { PORT = 3000 } = process.env;

const startServer = async () => {
	const resolvers = container.resolve(ResolverProvider).getResolvers();

	const server = new ApolloServer({ typeDefs, resolvers });

	await createConnection(typeOrmConfig);

	server.applyMiddleware({ app });

	const { PORT = 3000 } = process.env;

	app.listen({ port: PORT }, () => {
		const host = `http://localhost:${PORT}`;
		console.log(`\nServer is running on ${chalk.underline.blue(host)}`);
		console.log(
			`Graphql queries available at ${chalk.underline.blue(host)}${chalk.underline.blue(server.graphqlPath)}`,
		);
	});
};

startServer();
