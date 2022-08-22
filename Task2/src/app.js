const Movie = require("./utils")
const yargs = require('yargs')
let log = console.log
let table = console.table

const app = (yargsObj) => {
    try {
        // check if something is true
        if (yargsObj.adds)  {
            // call your movie class
            let movie = new Movie(yargsObj.title, yargsObj.actor)
            movie.add()
            // log your movie array
            table(movie.list())
            // log(yargsObj)
        }
        else {
            log("incorrect command")
        }
        
    } catch (error){
        log(error)
    }
}

app(yargs.argv)

// log(yargs.argv)

// log(yargs.argv.actor)

// if (yargs.argv.add){
    //     log("its " +yargs.argv.title)
// } else {
//     log("Not True")
// }


// $ node app.js --add --title Spiderman --actor "Dave Smith" --age 23