const Movie = require("./utils")

console.log(process.argv)

const app = (argsArr) => {
    try {
        switch(argsArr[2]){
            case 'add':
                // console.log("inside add")
                // const movie = argsArr[3]
                // console.log(movie + ' is stored')

                // const actor = argsArr[4]
                // console.log(actor + ' is stored')
                
                // const movieArr = [argsArr[3], argsArr[4]]
                // console.log(movieArr)
                let movie = {}
                for(let i = 3; i < argsArr.length; i++){
                    movie = new Movie(argsArr[i], argsArr[i+1])       
                    movie.add()  
                    i++

                }
                console.log(movie.list())          
                // const movie = new Movie(argsArr[3], argsArr[4])
                // const movie2 = new Movie(argsArr[5], argsArr[6])
                // movie.add()
                // console.log(movie.list())
                // movie2.add()
                // console.log(movie.list())
                break;

            default:
                console.log("incorrect command")
                break;
        }

    } catch (error){
        console.log(error)
    }
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          
}

app(process.argv)