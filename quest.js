//12 question- merged array



// var input = require('readline-sync');

// var passname = [];

// var destname = [];


// for (let i = 0; i < 3; i++) {

//     var pass = input.question('enter your name: ')

//     var dest = input.question('enter the destination: ')

//     passname.push(pass);

//     destname.push(dest);    

// }

// console.log('array of passengers name: \n');

// console.log(passname);

// console.log('array of passengers destination: \n')

// console.log(destname);

// console.log("merged array: \n")

// for (let i = 0; i < destname.length; i++) {

//     passname.push(destname[i]);

   

// }

// console.log(passname);














//flight fares in decimal into array-8 question


const read = require('readline-sync')



let fare = [];

let dest = [];



 for (let i = 0; i < 5; i++) {

    let inp = parseFloat(read.question('Enter the flight fare: '));


    fare.push(inp);

    let des = read.question('Enter the destination: ');

    dest.push(des);

}

console.log( fare)

console.log( dest)




let num = read.question("Enter a number");

console.log(`the fare of ${dest[num-1]} is ${fare[num-1]}`);


    