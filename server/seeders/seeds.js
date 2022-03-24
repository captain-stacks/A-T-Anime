const faker = require('faker');

const db = require('../config/connection');
const { User, MyAnime, Anime } = require('../models');
//const animeData = require('./animedb');
const animeData = require('./animeSeed');

db.once('open', async () => {
    await Anime.deleteMany({});
    await MyAnime.deleteMany({});
    await User.deleteMany({});

    // create user data seed
    const userData = [];

    for (let i = 0; i < 15; i += 1) {
        const username = faker.internet.userName();
        const email = faker.internet.email(username);
        const password = faker.internet.password();

        userData.push({ username, email, password });
    }

    const createdUsers = await User.collection.insertMany(userData);

    // create followers for seeded users
    for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];

        let followerId = userId;

        while (followerId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
            followerId = createdUsers.ops[randomUserIndex];
        }

        await User.updateOne({ _id: userId }, { $addToSet: { followers: followerId } });
    }

    // create following for seeded users
    for (let i = 0; i < 100; i += 1) {
        const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
        const { _id: userId } = createdUsers.ops[randomUserIndex];

        let followingId = userId;

        while (followingId === userId) {
            const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
            followingId = createdUsers.ops[randomUserIndex];
        }

        await User.updateOne({ _id: userId }, { $addToSet: { following: followingId } });
    }

    //push anime data into anime Model db
    const createdAnime = await Anime.collection.insertMany(animeData);

    //creating random myanime lists for seeded users
    const userListData = [];
    for (let i = 0; i < 15; i += 1) {
        const anime = []; 
        // Gets user ID
        const { _id: userId } = createdUsers.ops[i];

        // Creates 5 Myanime for user
        for (let i=0; i<5; i+= 1) {
            const randomAnimeIndex = Math.floor(Math.random() * createdAnime.ops.length);
            // Gets random anime
            const addAnime = createdAnime.ops[randomAnimeIndex];
            //anime.push(addAnime);

            // Puts random anime in MyAnime
            let myAnimedata = await MyAnime.create({ userId: userId, score: 5, anime: [addAnime._id] });
            // Puts new MyAnime in User
            const updatedUser = await User.findOneAndUpdate(
                { _id: userId },
                { $push: { myAnime: myAnimedata._id }},
                { new: true }
            );
        }

        //await User.updateOne({ _id: userId }, { $addToSet: { myAnime: anime } });

        //userListData.push({userId, anime});
    }
    //await MyAnime.collection.insertMany(userListData);
    //console.log(userListData);


    console.log('Seeding complete');
    process.exit(0);
});