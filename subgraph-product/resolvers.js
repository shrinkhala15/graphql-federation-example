const resolvers = {
  Query: {
    products: (_, __, { dataSources }) => {
      return dataSources.ProductsAPI.getAllProducts();
    },
    product: (_, { id }, { dataSources }) => {
      return dataSources.ProductsAPI.getProduct(id);
    },
  },
  Product: {
    __resolveReference: ({ id }, { dataSources }) => {
      return dataSources.ProductsAPI.getProduct(id);
    },
  },

  Mutation: {
    createProduct: async (_, args, { dataSources }) => {
      const { id, name, description, price } = args;
      let product = await dataSources.ProductsAPI.createProduct(
        id,
        name,
        description,
        price
      );

      return {
        code: 200,
        success: true,
        message: `Successfully added new product to basket`,
      };
    },
  },
};
export default resolvers;
