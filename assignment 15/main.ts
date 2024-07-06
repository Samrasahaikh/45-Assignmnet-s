//assignment 15
//change gueste list 
let guesteList : string [] = ["Afreen", "Anaya", "Marukh",];

//print the name who can't  make dinner
let unableAttend : string = guesteList.splice (1,1)[0];
console.log(`${unableAttend}, can't make dinner`);

//push
guesteList.push ("Samra ");

//print a message

guesteList.forEach(guest => {
    console.log((`Dear ${guest}, you are cordially invited to dinner `));
    
});