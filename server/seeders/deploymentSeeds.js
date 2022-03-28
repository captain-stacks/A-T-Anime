const db = require('../config/connection');
const { User, MyAnime, Anime } = require('../models');
const animeData = require('./animeSeed');

db.once('open', async () => {
    await Anime.deleteMany({});
    await MyAnime.deleteMany({});
    await User.deleteMany({});

    //push anime data into anime Model db
    await Anime.collection.insertMany(animeData);


    console.log('Seeding complete');
    process.exit(0);
});