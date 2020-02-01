import 'reflect-metadata';
import '../registerAliases';

import { ApolloServer, gql } from 'apollo-server-express';
import chalk from 'chalk';
import dotenv from 'dotenv';
import { ResolverProvider } from 'infrastructure/ResolversProvider';

import { container } from 'tsyringe';
import { createConnection } from 'typeorm';

import { app } from './app';
import { typeOrmConfig } from './config';
import { logger } from './logger';

dotenv.config();

const typeDefs = gql`
	type Query {
		getUser(id: Int!): User
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
`;

const scott = { id: 1, firstName: 'Scott', lastName: 'Gustas', age: 99 };

// const resolvers = {
// 	Query: {
// 		getUser: async (_: any, args: any) => {
// 			const { id } = args;

// 			return scott;
// 		},
// 		getUsers: () => {
// 			return [scott];
// 		},
// 		getCities: async () => {},
// 	},
// 	Mutation: {
// 		addUser: async (_: any, args: any) => {
// 			console.log(args);
// 			return true;
// 		},
// 	},
// };

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

process.on('uncaughtException', e => {
	logger.error(e);
	process.exit(1);
});

process.on('unhandledRejection', e => {
	logger.error(e!);
	process.exit(1);
});

startServer();
