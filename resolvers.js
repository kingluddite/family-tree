exports.resolvers = {
  Query: {
    getAllGenealogies: async (root, args, { Genealogy }) => {
      const allGenealogies = await Genealogy.find();
      return allGenealogies;
    },
  },

  Mutation: {
    addGenealogy: async (
      root,
      { firstName, lastName, dateOfBirth, description, username },
      { Genealogy }
    ) => {
      const newGenealogy = await new Genealogy({
        firstName,
        lastName,
        dateOfBirth,
        description,
        username,
      }).save();
      return newGenealogy;
    },
  },
};
