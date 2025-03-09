let score = 45
// 45  output Number
// "45"  output string
/*
if 45 was in double cots "45" it means this was a string 
*/
//console.log(typeof score);
//console.log(typeof (score))

// typeof use for know what is the type of output like string,no.

let valueInNumber = Number(score)
//console.log(typeof valueInNumber)  // found NaN not a number
//console.log(valueInNumber)   


// "45"  => 45
//"45abc" => NaN
// true => 1;  false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)
//console.log(booleanIsLoggedIn);

/*
if we put 1 => true , 0=> false
if the empty string => false ,   and  put any thing like
"Neeraj" => true
*/

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber)
//console.log(typeof stringNumber)


//************************* OPERATIONS **********************

/*  2+2 =4 , two is add is the also operations so this operations */

let value = 3
let negvalue = -value
//console.log(negvalue);   // then o/p is -3

/*
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/2);
console.log(2%2);
*/

//adding two string
let str1 = "hello"
let str2 = " neeraj"

let str3 = str1 + str2
//console.log(str3);



// console.log("1" + 2);   // o/p 12
// console.log(1 + "2");   // o/p 12
// console.log("1" + 2 + 2);   // o/p 122
// console.log(1 + 2 + "2");  //o/p 32     this is massy code not good for mnc

/*  agr string first he toh sb ko string ke tarh convert kiya jayega ("1" + 2 + 2) o/p 122
    agr string last me he toh pehele conversion fir string (1 + 2 + "2")  o/p 32 
*/

//console.log(+true);  // not good way to perform code o/p is 1

let num1, num2, num3
num1 = num2 = num3 = 3 + 3
 

let gameCounter = 100
gameCounter++;
console.log(gameCounter);

/* 
website --> mdn web docs Increment
link --> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
Increment(++)
preffix operator --> --gameCounter  iske andr pehele incriment ho jati
postfix operator --> gameCounter++  isme usage ke baad incriment hoti h 
*/

