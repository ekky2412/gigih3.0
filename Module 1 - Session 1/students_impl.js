const students = require("./students");

console.log(students[0]);

console.log(`I have a friend that very young, the name is ${students[1].name}`)
console.log(`Mas ${students[0].name} is from ${students[1]?.address?.city}`)