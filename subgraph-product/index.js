import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import resolvers from "./resolvers.js";
import typeDefs from "./typeDefs.js";
import ProductsAPI from "./datasources/ProductsApi.js";

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const port = 4001;
const subgraphName = "products";

try {
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          ProductsAPI: new ProductsAPI(),
        },
      };
    },
    listen: { port },
  });

  console.log(`🚀 Subgraph ${subgraphName} running at ${url}`);
} catch (err) {
  console.error(err);
}
