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
            options: { sort: { score: -1 } },
            populate: {
              path: 'anime',
              model: 'Anime'
            }
          });

        return userData;
      }

      throw new AuthenticationError("Not logged in");
    },

    user: async (parent, { userId }) => {
      const userData = await User.findOne({ _id: userId })
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

    userByUserName: async (parent, { userName }) => {
      const userData = await User.findOne({ username: userName })
      .populate("followers")
      .populate("following")
      .populate({
        path: 'myAnime',
        model: 'MyAnime',
        options: { sort: { score: -1 } },
        populate: {
          path: 'anime',
          model: 'Anime'
        }
      });

      return userData;
    },

    userSearchBar: async (parent, { page, userName }) => {
      const user = await User.find({ username: { $regex: `${userName}`, $options: "i" } }, function(err, docs) {
        if (err) console.log(err);
        console.log(userName);
        })
        .populate("followers")
        .populate("following")
        .populate({
          path: 'myAnime',
          model: 'MyAnime',
          populate: {
            path: 'anime',
            model: 'Anime'
          }
        })
        .limit(52)
        .skip((page * 52) - 52);
      return user;
    },

    getAnimeBySearch: async (parent, { page, title }) => {
      const anime = await Anime.find({ $or: [ { 
        romajiTitle: { 
          $regex: `${title}`, 
          $options: "i" 
        }}, { 
        englishTitle: { 
          $regex: `${title}`, 
          $options: "i" 
        }}]})
        .limit(52)
        .skip((page * 52) - 52);
      return anime;
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

    animebyId: async (parent, { animeId }) => {
      const anime = await Anime.findOne({ _id: animeId });

      return anime;
    },

    allAnime: async (parent , { page }) => {
      const anime = await Anime.find()
      .limit(51)
      .skip((page * 51) - 51);

      return anime;
    },

    isFollow: async (parent, { followingId }, context) => {
      
      const following = await User.findOne({$and: [ {_id: context.user._id}, {following: followingId}]});
      
      return following;
    }
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

    unFollow: async (parent, { followingId }, context) => {
      if (context.user) {

        const follower = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { following: followingId } },
          { new: true }
        ).populate("following");

        const followedUser = await User.findOneAndUpdate(
          { _id: followingId },
          { $pull: { followers: context.user._id } },
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

        let myAnime = await MyAnime.find({$and: [ {userId: context.user._id}, {anime: [args.animeId]}]});

        if (myAnime.length) {
          return;
        }

        myAnime = await MyAnime.create({ userId: context.user._id, anime: [args.animeId] });
        myAnime = await myAnime.populate('anime').execPopulate();

        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $push: { myAnime: myAnime._id } },
          { new: true }
        );
        //console.log(myAnime);

        return myAnime;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    // Take removes anime from users list
    removeAnime: async (parent, args, context) => {
      if (context.user) {
        
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { myAnime: [args.animeId] } },
          { new: true }
        );

        const removedAnime = await MyAnime.findOneAndDelete({ userId: context.user._id, anime: [args.animeId] })
        .populate('anime');
        

        return removedAnime;
      }

      throw new AuthenticationError("You need to be logged in!");
    },

    createAnime: async (parent, args) => {
      const anime = await Anime.create(args);

      return anime;
    },

    updateScore: async (parent, { score, myAnimeId }, context) => {
      if (context.user) {

        const updatedMyAnime = await MyAnime.findOneAndUpdate(
          { _id: myAnimeId, userId: context.user._id },
          { score: score },
          { new: true }
        );
        return updatedMyAnime;
      }
    }
  },
};

module.exports = resolvers;
