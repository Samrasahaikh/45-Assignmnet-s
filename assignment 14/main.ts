//assignment 14
//define arry of guest list
let guestList : string[] = ["Maryam", "Ume Hani", "khalda"]

//invite each guest to dinner
//loop
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]}, you are cordialy invited to dinner`);
};
 
//map 
//invitaion guest
let invitaion : string []= guestList.map (guest=> `Dear ${guest}, you are cordialy invited to dinner`);


//for each
invitaion.forEach(invitaions => {
    console.log (invitaions);
});
