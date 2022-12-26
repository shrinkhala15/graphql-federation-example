const resolvers = {
  Query: {
    products: (_, __, { dataSources }) => {
      return dataSources.ProductsAPI.getAllLocations();
    },
    product: (_, { id }, { dataSources }) => {
      return dataSources.ProductsAPI.getProduct(id);
    },
  },
  Product: {
    __resolveReference: ({id}, { dataSources }) => {
      return dataSources.locationsAPI.getLocation(id);
    },
  },
};
export default resolvers;
