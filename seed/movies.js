const db = require('../db')
const { Actors, Movies, Reviews } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const seanConnery = await Actors.find({ name: 'Sean Connery' })
    const pierceBrosnan = await Actors.find({ name: 'Pierce Brosnan' })
    const danielCraig = await Actors.find({ name: 'Daniel Craig' })
 
    const movies = [
        {
        title: "Dr. No",
        released: 1962,
        runtimeMins: 110,
        rating: '7.2/10',
        actor: seanConnery[0]._id,
        description: "A resourceful British government agent seeks answers in a case involving the disappearance of a colleague and the disruption of the American space program."
        },
        {
            title: "Goldfinger",
            released: 1964,
            runtimeMins: 110,
            rating: '7.7/10',
            actor: seanConnery[0]._id,
            description: "While investigating a gold magnate's smuggling, James Bond uncovers a plot to contaminate the Fort Knox gold reserve."
            },
            {
                title: "GoldenEye",
                released: 1995,
                runtimeMins: 130,
                rating: '7.2/10',
                actor: pierceBrosnan[0]._id,
                description: "When a powerful secret defense system is stolen, James Bond is assigned to stop a Russian crime syndicate from using it."
                },
                {
                    title: "Die Another Day",
                    released: 2002,
                    runtimeMins: 133,
                    rating: '6.1/10',
                    actor: pierceBrosnan[0]._id,
                    description: "James Bond is sent to investigate the connection between a North Korean terrorist and a diamond mogul, who is funding the development of an international space weapon."
                    },
                    {title: "Casino Royale",
                    released: 2006,
                    runtimeMins: 144,
                    rating: '8/10',
                    actor: danielCraig[0]._id,
                    description: "After earning a licence to kill, secret agent James Bond sets out on his first mission as 007."
                    },
                    {
                        title: "Casino Royale",
                        released: 2008,
                        runtimeMins: 106,
                        rating: '6.5/10',
                        actor: danielCraig[0]._id,
                        description: "This film is about James Bond cracking down a multi-national corporation that works with dictators to get a share of precious natural resources. "
                        },
    ]

await Movies.insertMany(movies) 
console.log('Created movies with actors!')
}
const run = async () => {
await main()
db.close()
}

run()