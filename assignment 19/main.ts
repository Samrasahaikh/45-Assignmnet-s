// assignment 19 
// repatting exercise 17
// the dinner table is not arrive
let guestList : string[]= ["Maheen", "Afreen", "Shumaila", "Anila"];
//print message
console.log("Unfortunately! the new dinner table wont arrive so we can invite only tow gueste's");
guestList.unshift("Alisha", "Ayesha");

//print message update list 
// remove guest from the list

while (guestList.length > 2) {
    let removeGuest : string | undefined = guestList.pop();
    if (removeGuest !== undefined) {
        console.log(`sorry ${removeGuest}, we cant invite you`); 
    };
};

//print a message to each if the tow people still on your list, them konw the they're still invited 
guestList.forEach(guest => {
    console.log(`Dear ${guest}, you are invited for the dinner`);
});