// console.log("hello world")
// console.log(process.argv)

// if (process.argv[2] === 'Alex') {
//     console.log("Its Alex")
// }else {
//     console.log("Not Alex")
// }

const app = (argv) => {
    switch(argv[2]) {
        case 'Alex':
            const alex = argv[2]
            console.log(alex + ' is stored in a const')
            break;

        case 'Steve':
            const steve = argv[2]
            console.log(steve + ' is stored in a const')
            break;
        default:
            console.log('Not a name')
    }
}

app(process.argv)