//Assignment 30
// Hello Admin: Make a array of five or more usernames, including the name 
// 'admin'. Imagine you are writing code that will print a greeting to each user after 

// they log in to a website. Loop through the array, and print a greeting to each 
let userName : string[] = ["Admin", "Eric", "Jon", "Alexa", "Jony"];
userName.forEach((userName) => {
    if (userName == "admin") {
        console.log("Hello Admin, would you like to see a status report?");
    } else{
        console.log(`Hello ${userName}, thank you for loggin in again`);
    }
});
