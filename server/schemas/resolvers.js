const { User, Anime, MyAnime } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    // get user by id
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select("-__v -password")
          .populate("followers")
          .populate("following")
          .populate({
            path: 'myAnime',
            model: 'MyAnime',
            populate: {
              path: 'anime',
              model: 'Anime'
            }
          });

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },
    // get all users
    users: async () => {
      const userData = User.find()
        .select("-__v -password")
        .populate("followers")
        .populate("following")
        .populate({
          path: 'myAnime',
          model: 'MyAnime',
          populate: {
            path: 'anime',
            model: 'Anime'
          }
        });


      return userData;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);
      return { token, user };
    },

    follow: async (parent, { followingId }, context) => {
      if (context.user) {
        const follower = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { following: followingId } },
          { new: true }
        ).populate("following");

        const followedUser = await User.findOneAndUpdate(
          { _id: followingId },
          { $addToSet: { followers: context.user._id } },
          { new: true }
        ).populate("followers");

        return follower;
      }
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }
      const token = signToken(user);
      return { token, user };
    },

    // Takes anime and puts it in users list
    addAnime: async (parent, args, context) => {
      if (context.user) {
        let myAnime = await MyAnime.create({ userId: context.user._id, anime: [args.animeId] });
        myAnime = await myAnime.populate('anime').execPopulate();

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { myAnime: myAnime._id } },
          { new: true }
        );
        console.log(myAnime);

        return myAnime;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    createAnime: async (parent, args) => {
      const anime = await Anime.create(args);

      return anime;
    },
  },
};

module.exports = resolvers;
