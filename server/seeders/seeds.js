const faker = require('faker');

const db = require('../config/connection');
const { User, MyAnime, Anime } = require('../models');

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

    // create followers
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

    // create following
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

    console.log('Seeding complete');
    process.exit(0);
});