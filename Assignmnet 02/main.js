// Assigenment 02
//storing a person name in a variable
var personName = "Samra Moinuddin";
//printing a person name in lowercase
console.log("lowercase:", personName.toLowerCase());
// printing a person name in uppercase
console.log("uppercase:", personName.toUpperCase());
//printing a person name in titlecase
console.log("titlecase:", personName.replace(/\b\w/g, function (c) { return c.toUpperCase(); }));
