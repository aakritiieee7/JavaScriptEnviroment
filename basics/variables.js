const id = "1234" //constant value does not accept assignment
let name = "aakriti" //functional and block scope are well defined, replaces var use
var number = 100 // does not have any scope defined hence advised not to be used
city = "delhi"; //allows no type assigned variables too
let accountid; //undefined

console.log("id");

console.table([name,id,city,number,accountid]); //prints a table of index(0 to n-1) vs values 