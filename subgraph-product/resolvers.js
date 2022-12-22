const resolvers = {
    Query: {
      products: (_, __, { dataSources }) => {
        return dataSources.ProductsAPI.getAllLocations();
      },
      product: (_, { id }, { dataSources }) => {
        return dataSources.ProductsAPI.getProduct(id);
      },
    },
  };
export default resolvers;