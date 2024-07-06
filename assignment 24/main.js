//assignment 24
// test for equality and inequality with string
var string1 = "Hello";
var string2 = "world";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
// test using the lower case function
var upperCase = "HELLO";
var lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
//numerical test involving equality , greatr then and less then ,
//greater then or equal yo ,and less then or equal to.
var num1 = 10;
var num2 = 20;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true
//tests using "and" and "or" oprators
var x = 10;
var y = 20;
var z = 30;
console.log(x < y && y < z); //true
console.log(x > y || y > z); //true
//resr whether an items is in a array
var array1 = [1, 2, 3, 4, 5, 6];
var itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
//test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true
