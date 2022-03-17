const { User } = require('../models');
//const { AuthenticationError } = require('apollo-server-express');
//const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    // get user by id
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password')
          .populate('followers')
          .populate('following');
    
        return userData;
      }
    
      //throw new AuthenticationError('Not logged in');
    },
    // get all users
    users: async () => {
      return User.find()
        .select('-__v -password')
        .populate('followers')
        .populate('following');
    }
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signtoken(user);
      return {user, token};
    }
  }
}

module.exports = resolvers;