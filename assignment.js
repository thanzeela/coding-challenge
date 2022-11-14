//passenger names-1 question

//ascending

var input = require('readline-sync')
var array=[]
var new_array=[]
var temp=""

for( let i=0;i<4;i++){

    var pname=input.question("enter the names:")
       array.push(pname) ;
}
    
for(var i = 0; i < array.length; i++){
    
     
    for(var j = 0; j < ( array.length - i -1 ); j++){
       
        if(array[j] > array[j+1]){
        
    
    var temp = array[j+1]
    array[j+1] = array[j]
    array[j] = temp
  }
    }
}
console.log("\n array in assending order is:\n")
array.forEach((item)=>{
    process.stdout.write(`${item}, `)
})


// //descending

console.log("\n array in descending order is: \n")
for (let i = array.length-1; i >= 0; i--) {
    process.stdout.write(`${array[i]}, `)
    
}

// //lenght of element

console.log("\n The lenght is:\n")
array.forEach((item)=>{
    console.log(item.length);
})


// //split name

console.log("\n Split names :\n")
array.forEach((nam)=>{
    var new_array = nam.split(' ')
    new_array.forEach((item)=> {

        process.stdout.write(`${item}/ `)

    })

})

// //duplicate

var duplicate = [...array];

for (let i = 0; i < duplicate.length; i++) {

   for (let j = i+1; j < duplicate.length; j++) {

    if(duplicate[i] == duplicate[j]){

        console.log(duplicate[i])

    }

   }

   

}




// //search 


var tem = 0
var search = input.question("Enter name : ")
for (let i = 0; i < array.length; i++) {
    
    if (array[i] == search) {
        
        console.log(`name found at ${i+1}`)
        tem = 2
        break

        
    }

    
}
if (tem == 0) {
    console.log("The name not found! ")
}















//flight fares-3 question


//ascending order

// var input = require('readline-sync')

// var array=[]
// var new_array=[]
// var temp=""

// for( let i=0;i<4;i++){

//     var pname=parseFloat(input.question("enter the fare:"));
//        array.push(pname) ;
// }
    
// for(var i = 0; i < array.length; i++){
    
     
//     for(var j = 0; j < ( array.length - i -1 ); j++){
       
//         if(array[j] > array[j+1]){
        
    
//     var temp = array[j+1]
//     array[j+1] = array[j]
//     array[j] = temp
//   }
//     }
// }
// console.log("\n fare in assending order is:\n")
// array.forEach((item)=>{
//     process.stdout.write(`${item}, `)
// })


// //descending

// console.log("\n fare in descending order is: \n")
// for (let i = array.length-1; i >= 0; i--) {
//     process.stdout.write(`${array[i]}, `)
    
// }

// //search


// var tem = 0
// var search = input.question("Enter fare : ")
// for (let i = 0; i < array.length; i++) {
    
//     if (array[i] == search) {
        
//         console.log(`fare found at ${i+1}`)
//         tem = 2
//         break

        
//     }

    
// }
// if (tem == 0) {
//     console.log("The fare not found! ")
// }


//duplicate

// var duplicate = [...array];

// for (let i = 0; i < duplicate.length; i++) {

//    for (let j = i+1; j < duplicate.length; j++) {

//     if(duplicate[i] == duplicate[j]){

//         console.log(duplicate[i])

//     }

//    }

   

// }



// // max min

// var maxfare =array[0];
// var minfare = array[0];
// for (let i = 1; i < array.length; i++) {
//     if (maxfare<array[i]) {
//         maxfare = array[i]
//     }
//     if (minfare>array[i]) {
//         minfare = array[i]
//     }
// } 

// console.log("Max element is: " + maxfare)
// console.log("Min element is: " + minfare)
























    

    













// console.log("\n2.Sorted in dedcending order: \n ")
// for (let i = pass.length-1; i >= 0; i--) {
//     process.stdout.write(`${pass[i]}, `)
    
// }




// function bblSort(arr){
    
//     for(var i = 0; i < 8; i++){
       
      
//       for(var j = 0; j < ( 8 - i -1 ); j++){
         
    
//         if(arr[j] > arr[j+1]){
           
          
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }

//     console.log(arr);
//    }
    
//    var arr=input.question("enter the names:")
// array.push(arr) ;

   
   
    

//    bblSort(arr);
