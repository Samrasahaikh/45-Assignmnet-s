//assignment 17
//the dinner table is not arrive 
var guestList = ["Maheen", "Afreen", "Shumaila", "Anila"];
//print message
console.log("Unfortunately! the new dinner table wont arrive so we can invite only two guest's ");
guestList.unshift("Alisha", "Ayesha");
//print message updated list
//remove guest from the lis
while (guestList.length > 2) {
    var removeGuest = guestList.pop();
    if (removeGuest !== undefined) {
        console.log("Sorry ".concat(removeGuest, ", we can't invite you"));
    }
}
;
//print a message to each if the tow people still on your list, letting them know they're still invite
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you both are invited for the dinner"));
});
