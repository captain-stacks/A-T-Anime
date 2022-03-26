const {Schema, model} = require('mongoose');

const myanimeSchema = new Schema(
    {
        userId: {
            type: String
        },
        score: {
            type: Number,
            min: 1,
            max: 10
        },
        anime: {
            type: Schema.Types.ObjectId,
            ref: 'Anime'
        }
    }
)
const MyAnime = model('MyAnime', myanimeSchema);

module.exports = MyAnime;