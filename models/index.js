const mongoose = require('mongoose')
const actorsSchema = require('./actors')
const moviesSchema = require('./movies')
const reviewsSchema = require('./reviews')

const Actors = mongoose.model('Actors', actorsSchema)
const Movies = mongoose.model('Movies', moviesSchema)
const Reviews = mongoose.model('Reviews', reviewsSchema)

module.exports = {
    Actors,
    Movies,
    Reviews
}