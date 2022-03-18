const {Schema, model} = require('mongoose');

const myanimeSchema = new Schema(
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
const MyAnime = model('MyAnime', myanimeSchema);

module.exports = MyAnime;