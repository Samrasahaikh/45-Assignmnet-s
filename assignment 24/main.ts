//assignment 24
// test for equality and inequality with string
let string1 :string = "Hello"
let string2 :string = "world"
console.log(string1=== string2); //false
console.log(string1 !== string2); //true

// test using the lower case function
const upperCase :string = "HELLO";
const lowerCase : string = "hello";
console.log(upperCase.toLowerCase()=== lowerCase); //true

//numerical test involving equality , greatr then and less then ,
//greater then or equal yo ,and less then or equal to.

let num1 : number = 10;
let num2 : number = 20;

console.log(num1 === num2);//false
console.log(num1!== num2); //true
console.log(num1 > num2); //false
console.log(num1 < num2); //true
console.log(num1 >= num2); //false
console.log(num1 <= num2); //true

//tests using "and" and "or" oprators
const x : number = 10;
const y: number = 20;
const z : number = 30;
console.log(x < y && y < z); //true
console.log(x > y || y > z); //true

//tests using "and" and "or" oprators
const array1 : number[] = [1, 2, 3, 4, 5, 6];
const itemToFind : number = 3;
console.log(array1.indexOf(itemToFind)!== -1);//true

//test whether an item is not in a array
console.log(array1.indexOf(10)=== -1); //true
