console.log("Hello, World first Messagge!");
//let height; // no permite declarar otra variable con ese nombre 
//console.log(height);  //  ->  undefined
//console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

let  steps  =  100; 
console.log(steps);  //  ->  100
steps  =  120;  //  ->  120
console.log(steps);
steps  =  steps  +  200;
console.log(steps);  //  ->  320


let  height  =  180;
{
         let  weight  =  70;
         console.log(height);  //  ->  180
         console.log(weight);  //  ->  70	
}
console.log(height);  //  ->  180
//console.log(weight);  //  ->  Uncaught  ReferenceError:  weight  is  not  defined

var  globalGreeting  =  "Good  ";
   
function  testFunction()  {
         var  localGreeting  =  "Morning  ";    
         console.log("function:");
         console.log(globalGreeting);
         console.log(localGreeting);
}
   
testFunction();
   
console.log("main  program:");
console.log(globalGreeting);
console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined
