const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

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

    getGenealogy: async (root, { _id }, { Genealogy }) => {
      const genealogy = await Genealogy.findOne({ _id });
      return genealogy;
    },

    getCurrentUser: async (root, args, { currentUser, User }) => {
      if (!currentUser) {
        return null;
      }
      const user = await User.findOne({
        username: currentUser.username,
      }).populate({
        path: 'favorites',
        model: 'Genealogy', // make sure this is singular
      });
      return user; // if you leave this out you won't get the user
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

    signinUser: async (root, { username, password }, { User }) => {
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error('User not found');
      }
      // check to make sure password matches with user
      // that is found
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid Password');
      }
      // all good? return token
      return { token: createToken(user, process.env.SECRET, '1hr') };
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
