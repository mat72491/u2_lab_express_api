const { Schema } = require('mongoose')

const reviewsSchema = new Schema (
    {
        title: { type: Schema.Types.ObjectId, ref: 'Movies' },
        actor: { type: Schema.Types.ObjectId, ref: 'Actors'}, //this references the parent schema
        score: { type: String, required: true },
        comments: { type: String, required: true }
    },
{timestamps: true}
)
 module.exports = reviewsSchema