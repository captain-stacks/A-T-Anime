const {Schema, model} = require('mongoose');

const animeSchema = new Schema({
    englishTitle: {
        type: String
    },
    romajiTitle: {
        type: String
    },
    nativeTitle: {
        type: String
    },
    type: {
        type: String
    },
    format: {
        type: String
    },
    status: {
        type: String
    },
    description: {
        type: String
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String
    },
    season: {
        type: String
    },
    episodes: {
        type: Number
    },
    duration: {
        type: Number
    },
    source: {
        type: String
    },
    coverImageLarge: {
        type: String
    },
    coverImageMedium: {
        type: String
    },
    bannerImage: {
        type: String
    },
    genres: [String],
    studio: {
        type: String
    }
})
const Anime = model('Anime', animeSchema);

module.exports = Anime;