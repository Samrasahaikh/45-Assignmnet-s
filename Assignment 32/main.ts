//Assignment 32
// Do the following to create a program that simulates how websites ensure that everyone has a unique username.
//• Make a list of five or more usernames called current_users
let current_user : string[] = ["admin", "fatima", "hamzah", "hammad", "shahmeer"];

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_user : string[] = ["admin", "fatima", "fariya", "laiba", "nida"];

// through the new_users list to see if each new username has already been used. If 
// it has, print a message that the person will need to enter a new username. If a username 
// has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should 
// not be accepted
new_user.forEach((newUser) =>{
    if (current_user.some(
    (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
    ) {
        console.log(`${newUser} will need to enter a new username`);
    } else{
        console.log(`${newUser} is avalible`);
        
    }
});