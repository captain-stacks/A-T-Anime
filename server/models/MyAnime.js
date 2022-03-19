const {Schema, model} = require('mongoose');

const myanimeSchema = new Schema(
    {
        userId: {
            type: String
        },
        anime: {
            type: Schema.Types.ObjectId,
            ref: 'Anime'
        }
    }
)
const MyAnime = model('MyAnime', myanimeSchema);

module.exports = MyAnime;