

const read = require('readline');

const rl = read.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Please Enter value of a : ", (answer) => {
    console.log(`You Entered : ${answer}`);
    rl.close();
})