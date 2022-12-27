const resolvers = {
  Query: {
    baskets: (_, __, { dataSources }) => {
      return dataSources.BasketsAPI.getAllBaskets();
    },
    basket: (_, { id }, { dataSources }) => {
      return dataSources.BasketsAPI.getBasket(id);
    },
  },
  Basket: {
    lineItems: ({ lineitems }) => {
      return lineitems.map((item) => {
        return {
          product: {
            id: item.id,
          },
          quantity: item.quantity,
        };
      });
    },
  },
  Mutation: {
    addProductToBasket: async (_, args, { dataSources }) => {
      const { basketId, productId, quantity } = args;
      await dataSources.BasketsAPI.addProductToBasket(
        basketId,
        productId,
        quantity
      );
      return {
        code: 200,
        success: true,
        message: `Successfully added new product`,
      };
    },
  },
};
export default resolvers;
