const player = {
    name: "soonhan",
    points: 20000,
    fat: true,
};

console.log(player);
console.log(player.name);
console.log(player["name"]);

player.lastName = "potato";
player.points += 25000;
console.log(player);