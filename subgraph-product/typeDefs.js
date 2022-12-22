// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = `#graphql
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.
  
  type product {
    id: ID!
    "The name of the product"
    name: String!
    "A short description about the product"
    description: String!
    "The product's main photo as a URL"
    photo: String!
    "The product price"
    price: Int
  }
  

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each.
  type Query {
    "The full list of products presented by the Interplanetary Space Tourism department"
    products: [product!]!
    "The details of a specific product"
    product(id: ID!): product
  }
`;

export default typeDefs;
