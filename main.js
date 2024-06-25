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
//console.log(localGreeting);  //  ->  Uncaught  ReferenceError:  localGreeting  is  not  defined

// Uso de Typeof
let  year  =  1990;
console.log(typeof  year);  //  ->  number
console.log(typeof  1991);  //  ->  number
   
let  name  =  "Alice";
console.log(typeof  name);  //  ->  string
console.log(typeof  "Bob");  //  ->  string
   
let  typeOfYear  =  typeof  year;
console.log(typeOfYear);  //  ->  number
console.log(typeof  typeOfYear);  //  ->  string
{
// Ejemplos de metodos de string
let  str  =  "java  script  language";
   
console.log(str.length);  //  ->  20
console.log('test'.length);  //  ->  4
   
console.log(str.charAt(0));  //  ->  'j'
console.log('abc'.charAt(1));  //  ->  'b'
   
console.log(str.slice(0,  4));  //  ->  'java'
console.log('test'.slice(1,  3));  //  ->  'es'
   
console.log(str.split('  '));  //  ->  ['java',  'script',  'language']
console.log('192.168.1.1'.split('.'));    //  ->  ['192',  '168',  '1',  '1']
}
// Conversion de tipos
const  num  =  42;
   
const  strFromNum1  =  String(num);
const  strFromNum2  =  String(8);
const  strFromBool  =  String(true);
const  numFromStr  =  Number("312");
const  boolFromNumber  =  Boolean(0);

// Conversion de tipos Cadena
let  str  =  "text";
let  strStr  =  String(str);
console.log(`${typeof  str}  :  ${str}`);  //  ->  string  :  text
console.log(`${typeof  strStr}  :  ${strStr}`);  //  ->  string  :  text
   
let  nr  =  42;
let  strNr  =  String(nr);
console.log(`${typeof  nr}  :  ${nr}`);  //  ->  number  :  42
console.log(`${typeof  strNr}  :  ${strNr}`);  //  ->  string  :  42
   
let  bl  =  true;
let  strBl  =  String(bl);
console.log(`${typeof  bl}  :  ${bl}`);  //  ->  boolean  :  true
console.log(`${typeof  strBl}  :  ${strBl}`);  //  ->  string  :  true
   
let  bnr  =  123n;
let  strBnr  =  String(bnr);
console.log(`${typeof  bnr}  :  ${bnr}`);  //  ->  bigint  :  123
console.log(`${typeof  strBnr}  :  ${strBnr}`);  //  ->  string  :  123
   
let  un  =  undefined;
let  strUn  =  String(un);
console.log(`${typeof  un}  :  ${un}`);  //  ->  undefined  :  undefined
console.log(`${typeof  strUn}  :  ${strUn}`);  //  ->  string  :  undefined
   
let  n  =  null;
let  strN  =  String(n);
console.log(`${typeof  n}  :  ${n}`);  //  ->  object  :  null
console.log(`${typeof  strN}  :  ${strN}`);  //  ->  string  :  null

// Conversion de tipos Numerico
console.log(Number(42));  //  ->  42
   
console.log(Number("11"));  //  ->  11
console.log(Number("0x11"));  //  ->  17
console.log(Number("0o11"));  //  ->  9
console.log(Number("0b11"));  //  ->  3
console.log(Number("12e3"));  //    ->  12000
console.log(Number("Infinity"));//  ->  Infinity
console.log(Number("text"));  //  ->  NaN
   
console.log(Number(14n));  //  ->  14
console.log(Number(123456789123456789123n));  //  -  >    123456789123
456800000
   
console.log(Number(true));  //  ->  1
console.log(Number(false));  //  ->  0
   
console.log(Number(undefined));  //    ->  NaN
   
console.log(Number(null));//  ->  0

// Ejercicio 
let number = "42";
let number2 = Number(number);
console.log(`number is type of ${typeof(number2)} su valor es ${number2}`);

{
    // Pregunta 3: Realizar una cadena de conversiones: crear unaBooleanoa partir de unaEmpezandocreado a partir de unNúmeroque fue creado a partir de unCadena. Comience con el valor"1234". ¿Es posible?
    let b = Boolean( BigInt(Number("1234")));
    console.log(`${b} [${typeof b}]`);

    // or

    let s = "1234";
    let n = Number(s);
    let bi = BigInt(n);
    b = Boolean(bi);
    console.log(`${b} [${typeof b}]`);  
}
{// Tipos de datos complejos
    let  testObj  =  {};
    console.log(typeof  testObj);  //  ->  object
    {
        let  testObj  =  {
            nr:  600,
            str:  "text"
        };    
        console.log(testObj.nr);  //  ->  600
        console.log(testObj.str);  //  ->  text
    }
    {
        let  user1  =  {
            name:  "Calvin",
            surname:  "Hart",
            age:  66,
            email:  "CalvinMHart@teleworm.us"
   };
      
        let  user2  =  {
            name:  "Mateus",
            surname:  "Pinto",
            age:  21,
            email:  "MateusPinto@dayrep.com"
        };
        console.log(user1.name);  //  ->  Calvin
        console.log(user2.name);  //  ->  Mateus
        
        console.log(user1.age);  //  ->  66
        user1.age  =  67;
        console.log(user1.age);  //  ->  67
        
        console.log(user2.phone);  //  ->  undefined
        user2.phone  =  "904-399-7557";
        console.log(user2.phone);  //  ->  904-399-7557

   
    }
}
