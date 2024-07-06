//Assignment 18 
// store favorite place in arry 
let place : string[] =["Islamabad", "Lahor", "Maree", "Naran Kagan", "Kashmeer"];

// print in original arry
 console.log("Original arry :" , place);
 
 // print arry in alphabetical order without modifyingthe  the actual list.
 console.log("Alphabetical order :", place.slice().sort());
 
 // show that arry is still in its original order by printing 
 console.log("Original arry :" , place);

 //print arry inreverse alphabetical orde without changing the order of theoriginal list
console.log("Reverse order :" , place.slice().sort().reverse());
 
// arry is stil in its original order by printing it again 
console.log("Original arry :" , place);

// reverse the order of list. print the attay to show that its order has change 
console.log("Reverse order chnage :");
place.reverse();
console.log(place);

//reverse the order of list again .print the list show it's back to original order
console.log("Original order :" , place.sort());
console.log(place);

//short array so it's stored in alphabetical order . print the array to show that it's order has changed.
console.log("Revers alphabetical order changed :" ,place.sort().reverse());
console.log(place);  

