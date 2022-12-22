const resolvers = {
    Query: {
      baskets: (_, __, { dataSources }) => {
        return dataSources.BasketsAPI.getAllBaskets();
      },
      basket: (_, { id }, { dataSources }) => {
        return dataSources.BasketsAPI.getBasket(id);
      },
    },
  };
export default resolvers;