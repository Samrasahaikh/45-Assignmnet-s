// assignment 12
// store names in arry 
let names : string[] =["Anam", "Hani", "Kainat", "Hina", "Bushra", "Saniya"]
// print same message aech person name 
//loop
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}! would you like to learn some TypeScript today `);  
};
//for aech
names.forEach ( friends =>{
    console.log(`Hi friends${friends}! would you like to learn some TypeScript today `);
});

//for of loop
for (let friendsName of names){
    console.log(`Hello ${friendsName}! would you likr to learn some TypeScript today`);   
};