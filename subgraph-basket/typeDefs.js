import gql from "graphql-tag";

const typeDefs = gql`
  extend schema @link(
      url: "https://specs.apollo.dev/federation/v2.0"
      import: ["@key", "@shareable"]
    )

  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  type basket {
    basketId: ID!
    totalCost: Float
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    baskets: [basket!]!
    basket(id: ID!): basket
  }
`;

export default typeDefs;
