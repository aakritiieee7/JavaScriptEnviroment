let score = "33"

console.log(typeof score); //string
console.log(typeof(score)); //output as a method

let valueInNumber = Number(score) //str to number requires Number function
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //33


"33" => 33
"33abc" => NaN ///value of number -> is not a number
 true => 1; false => 0 //global standards

let isLoggedIn = "false"

let booleanIsLoggedIn = Boolean(isLoggedIn) //convert string to boolean use Boolean command
console.log(booleanIsLoggedIn); //false

1 => true; 0 => false
"" => false //empty string is false
"aar" => true //not empty string is true

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);   // 33
console.log(typeof stringNumber); //string