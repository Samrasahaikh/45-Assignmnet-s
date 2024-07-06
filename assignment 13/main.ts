//assignment 13
// save transportation name in arry and print same message each trasportation
let trasportationMode : string[] = ["Car", "Motorcycle", "Bicycle", "Bus"]
//loop
for (let i = 0; i < trasportationMode.length; i++) {
    console.log(`I would like to own a${trasportationMode[i]}`);  
};
//foraech
trasportationMode.forEach (mode =>{
    console.log(`I would like to own a${mode}`); 
});

//for of loop
for (const trasportation of trasportationMode){
    console.log(`I would like to own a${trasportation}`);
    
}