const { Schema } = require('mongoose')

const actorsSchema = new Schema(
    {
        name: {type: String, required: true},
        age: {type: Number, required: true},
        alive: {type: Boolean, required: true},
        movies: {type: Schema.Types.ObjectId, ref: 'Movies'},
        image: {type: String, required: true}
    },

{ timestamps: true }
)

module.exports = actorsSchema