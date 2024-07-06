//assignment 14
//define arry of guest list
var guestList = ["Maryam", "Ume Hani", "khalda"];
//invite each guest to dinner
//loop
for (var i = 0; i < guestList.length; i++) {
    console.log("Dear ".concat(guestList[i], ", you are cordialy invited to dinner"));
}
;
//map 
//invitaion guest
var invitaion = guestList.map(function (guest) { return "Dear ".concat(guest, ", you are cordialy invited to dinner"); });
//for each
invitaion.forEach(function (invitaions) {
    console.log(invitaions);
});
