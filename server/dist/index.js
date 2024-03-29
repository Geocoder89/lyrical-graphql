import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from "fs";
import resolvers from './resolvers/index.js';
const typeDefs = readFileSync('./schema.graphql', { encoding: 'utf-8' });
(async function () {
    const server = new ApolloServer({
        typeDefs,
        resolvers
    });
    const { url } = await startStandaloneServer(server, {
        listen: {
            port: 8080
        }
    });
    console.log(`🚀  Server ready at ${url}`);
})();
