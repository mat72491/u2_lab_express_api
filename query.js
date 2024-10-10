const express = require('express')
const cors = require('cors')
const PORT = process.env.PORT || 3001
const db = require('./db')
const actorsSchema = require('./models/actors')
const { Actors, Movies, Reviews } = require('./models')

const app = express()

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
  res.send('This is root!')
})

app.get('/actors', async (req, res) => {
    const actors = await Actors.find({})  //we are pulling our actors from the DB
    res.json(actors)//sending the response as JSON
  })

app.get('/movies', async (req,res)  => {
    const movies = await Movies.find({})
    .populate('actor')
    res.json(movies)
})

app.get('/reviews', async (req,res) => {
    const reviews = await Reviews.find({})
    .populate('title')
    .populate('actor')
    res.json(reviews)
})

//sort reviews by score
app.get('/reviews', async (req,res) => {
    const reviews = await Reviews.find().sort({ score: -1 }) //sorts in descending order by SCORE (not rating)(highest to lowest)
    .populate('title')
    .populate('actor')
    res.send(reviews)
})

//sort movies by release date
app.get('/movies', async (req,res) => {
    const movies = await Movies.find().sort({ released: -1 }) //sorts in descending order (newest to oldest)
    .populate('actor')
    res.send(movies)
})

//search database by actor ID
app.get('/actors/:id', async (req, res) => {
    try {
        const { id } = req.params
        const actor = await Actors.findById(id) // pulls the actor by the ID
        if (!actor) throw Error ('404 actor not found') // if no actor is found, throw an error
            res.json(actor)//return the actor as a json object
    } catch (e){ // catchall
        console.log(e)
        res.send('Actor not found')
    }
})

//search database by movie ID
app.get('/movies/:id', async (req, res) => {
    try {
        const { id } = req.params
        const movie = await Movies.findById(id) // pulls the movie by the ID
        .populate('actor')
        if (!movie) throw Error ('404 movie not found') // if no movie is found, throw an error
            res.json(movie)//return the movie as a json object
    } catch (e){ // catchall
        console.log(e)
        res.send('Movie not found')
    }

})

//search database by review
app.get('/reviews/:id', async (req, res) => {
    try {
        const { id } = req.params
        const review = await Reviews.findById(id)
        .populate('title')
        .populate('actor') // pulls the review by the ID
        if (!review) throw Error ('404 review not found') // if no review is found, throw an error
            res.json(review)//return the review as a json object
    } catch (e){ // catchall
        console.log(e)
        res.send('Review not found')
    }

})
//Add something

const main = async () => {
    const actor1 = await new Actors({
        name: 'Sean Connery',
        age: 94,
        alive: false,
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/1431B/production/_115151728_seancreuters.jpg.webp'
    })
    actor1.save()
}
const run = async () => {
    await main()
//     db.close() //as soon as main function is done we close the db in case there's an error
}
run() //calls main, which calls the brands

//Update Something

const updateActors = async () => {
    if (Actors._id = '') {//instert the ID in the string
        await Actors.updateOne({alive: true}, {alive: false})
        res.send(Actors)
    }console.log(updateActors)
}

async function main() {
try { 
    await updateActors() } catch (error)
    {
        console.log(error)
      } finally {
        await db.close()
      }}

 main()   


//Delete Something
const deleteActors = async () => {
    let deleted = await Actors.deleteOne({name: ""})//insert the name in the string
console.log(deleted)
} 
 async function main() {
    try { 
        await deleteActors() } catch (error)
        {
            console.log(error)
          } finally {
            await db.close()
          }
        }
     main()   

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})