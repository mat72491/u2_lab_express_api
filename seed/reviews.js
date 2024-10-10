const db = require('../db')
const { Actors, Movies, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const seanConnery = await Actors.find({ name: 'Sean Connery' })
    const pierceBrosnan = await Actors.find({ name: 'Pierce Brosnan' })
    const danielCraig = await Actors.find({ name: 'Daniel Craig' })

    const drNo = await Movies.find({ title: 'Dr. No' })
    const goldfinger = await Movies.find({ title: 'Goldfinger' })
    const goldenEye = await Movies.find({ title: 'GoldenEye' })
    const dieAnotherDay = await Movies.find({ title: 'Die Another Day' })
    const casinoRoyale = await Movies.find({ title: 'Casino Royale' })
    const quantumOfSolace = await Movies.find({ title: 'Quantum of Solace' })

    const reviews = [
        {
            title: drNo[0]._id,
            actor: seanConnery[0]._id,
            score: '7.2/10',
            comments:"Dr No is a modest thriller with a tough, stylish hero of some charm doing his job without the assistance of elaborate ordnance or eye-popping gadgetry."
        },
        {
            title: drNo[0]._id,
        actor: seanConnery[0]._id,
        score: '95%',
        comments: "Featuring plenty of the humor, action, and escapist thrills the series would become known for, Dr. No kicks off the Bond franchise in style."
    }, 
    {
        title: goldenEye[0]._id,
        actor: pierceBrosnan[0]._id,
        score: '7.2/10',
        comments:"Goldeneye is everything a James Bond movie should be like: techno-gadgetry, awesome stunts, awesome explosions, and a very cool Bond."
    },
   { title: goldenEye[0]._id,
    actor: pierceBrosnan[0]._id,
        score: '80%',
        comments:"The first and best Pierce Brosnan Bond film, GoldenEye brings the series into a more modern context, and the result is a 007 entry that's high-tech, action-packed, and urbane."
   },
   { title: casinoRoyale[0]._id,
    actor: danielCraig[0]._id,
    score: '8/10',
    comments:"Casino Royale could hold the title of being the greatest James Bond film ever made!"
},
{ title: casinoRoyale[0]._id,
    actor: danielCraig[0]._id,
    score: '94%',
    comments:"Casino Royale disposes of the silliness and gadgetry that plagued recent James Bond outings, and Daniel Craig delivers what fans and critics have been waiting for: a caustic, haunted, intense reinvention of 007."
} ]

await Reviews.insertMany(reviews) 
console.log('Created reviews with movies!')
}
const run = async () => {
await main()
db.close()
}

run()

