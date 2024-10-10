const db = require('../db')
const { Actors, Movies, Reviews } = require('../models')

db.on('error',console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const actor1 = await new Actors({
        name: 'Sean Connery',
        age: 94,
        alive: false,
        image: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/1431B/production/_115151728_seancreuters.jpg.webp'
    })
    actor1.save()

    const actor2 = await new Actors({
        name: 'Pierce Brosnan',
        age: 71,
        alive: true,
        image: 'https://media.vanityfair.com/photos/534c27a36294062e550005b1/master/w_960,c_limit/pierce-brosnan-james-bond.jpg'
    })
    actor2.save()

    const actor3 = await new Actors({
        name: 'Daniel Craig',
        age: 56,
        alive: true,
        image: 'https://cdn.britannica.com/46/144446-050-D2996CC6/Daniel-Craig.jpg?w=300'
    })
    actor3.save()
}
const run = async () => {
    await main()
//     db.close() //as soon as main function is done we close the db in case there's an error
}
run() //calls main, which calls the brands
