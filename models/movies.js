const { Schema } = require('mongoose')

const moviesSchema = new Schema (
    {
        title: { type: String, required: true },
        released: { type: Number, required: true},
        runtimeMins: { type: Number, required: true},
        rating: { type: String, required: true },
        actor: { type: Schema.Types.ObjectId, ref: 'Actors' },
        description: { type: String, required: true }, //this references the parent schema
    },
{timestamps: true}
)
 module.exports = moviesSchema