var input = require('readline-sync')
var pass_age= [];

var gen = [];

const today_date=new Date();

for (let i = 0; i < 3; i++) {
    var date = new Date(input.question('enter the DOB: '));
   var year = today_date.getFullYear() - date.getFullYear();
   pass_age.push(year);
 }
 pass_age.forEach((pass_age)=>{
    if(pass_age < 10){
        gen.push('kid');
    }
    else if(pass_age > 10 && pass_age < 30){
        
        gen.push('youth');
    }
    else if(pass_age > 30 && pass_age < 60){
    
        generation.push('adult');
    }
    else if(pass_age > 60){
        
        generation.push('old');
    }
    
 })
 console.log(gen);

    