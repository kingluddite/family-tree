const jwt = require('jsonwebtoken');

const createToken = (user, secret, expiresIn) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, secret, { expiresIn });
};

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

    signupUser: async (root, { username, email, password }, { User }) => {
      // check if the user already exists
      const user = await User.findOne({ username });
      if (user) {
        throw new Error('User already exists');
      }
      // we know the user doesn't exist yet
      // so now we will start to create the user
      const newUser = await new User({
        username,
        email,
        password,
      }).save();
      return { token: createToken(newUser, process.env.SECRET, '1hr') };
    },
  },
};