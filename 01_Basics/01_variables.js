//how to declare CONSTANT in variable

const accountId = 144553  // const meaning this will never change 
let accountEmail = "neerajwa14@gmail.com"  // 
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState ;  // this is undefined value 

/* Variable ko declare krne ke 2 tarike hhe 1 let , 2.var  
 commonly use let becouse of scope
 {} curlly braces are known as scope */

// accountId = 2  // this is not allowed  becouse of the const

/* prefer not to use var 
becouse of the  issue in block scope {} and functional scope 
*/

accountEmail = "andsaik@gmail.ocm"
accountPassword = "jsafn"
accountCity = "bhopal"

// for printing we console.log and console.table
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity])
