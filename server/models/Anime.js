const {Schema, model} = require('mongoose');

const animeSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true
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
            year: {
                type: Number
            },
            month: {
                type: Number
            },
            day: {
                type: Number
            }
        },
        endDate: {
            year: {
                type: Number
            },
            month: {
                type: Number
            },
            day: {
                type: Number
            }
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
        coverImage: {
            large: {
                type: String
            },
            medium: {
                type: String
            }
        },
        bannerImage: {
            type: String
        },
        genres: [String],
        studio: {
            type: String
        }
    }
)
const Anime = model('Anime', animeSchema);

module.exports = Anime;