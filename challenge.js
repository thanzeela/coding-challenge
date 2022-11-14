//flight fares in decimal format-  5 question

// var input = require('readline-sync')
// var flight_fare =[]

// for (let i = 0; i < (4*2); i++) {
    
//     if(i % 2 == 0){
//         var value = input.question("Enter the fare: ")
//         flight_fare[i] = value
//     }
//     else{
//         flight_fare[i] = ' '
//     }
    
// }


// console.log(flight_fare)















//passenger name and total fares-7 question

var input = require('readline-sync');

var pass_name = input.question('enter name: ');

var t_miles = parseInt(input.question('enter total miles: '));

console.log('flyer points: ');
if(t_miles >= 10000 && t_miles < 20000 ){
    flyerpoint = 10;
    console.log(flyerpoint);
}
else if(t_miles >= 20000 && t_miles < 50000){
    flyerpoint = 20;
    console.log(flyerpoint);
}
else if(t_miles >= 50000 && t_miles < 100000){
    flyerpoint = 30;
    console.log(flyerpoint);
}
else if(t_miles >= 100000){
    flyerpoint = 50;
    console.log(flyerpoint);
}

























