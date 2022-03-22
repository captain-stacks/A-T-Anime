const {Schema, model} = require('mongoose');

const animeSchema = new Schema(
    {
        englishTitle: {
            type: String
        },
        romajiTitle: {
            type: String
        },
        nativeTitle: {
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
        coverImageLarge: {
            type: String
        },
        coverImageMedium: {
            type: String
        },
        bannerImage: {
            type: String
        },
        popularity: {
            type: Number
        },
        studioName: {
            type: String
        },
        studioUrl: {
            type: String
        }
    }
)
const Anime = model('Anime', animeSchema);

module.exports = Anime;