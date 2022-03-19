const {Schema, model} = require('mongoose');

const animeSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },
        imageUrl: {
            type: String
        }
    }
)
const Anime = model('Anime', animeSchema);

module.exports = Anime;