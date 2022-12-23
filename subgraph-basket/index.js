import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";
import BasketsAPI from "./datasources/BasketsApi.js";
import { buildSubgraphSchema } from '@apollo/subgraph';

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers })
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const port = 4002;
const subgraphName = "basket";

try {
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          BasketsAPI: new BasketsAPI(),
        },
      };
    },
    listen: { port },
  });

  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
} catch (err) {
  console.error(err);
}

