const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));
if(isNaN(age) || age < 0) {
    console.log("Please write a real positive number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age <= 50) {
    console.log("You can drink");
} else if (age === 100) {
    console.log("OMG");
} else {
    console.log("Careful!");
}