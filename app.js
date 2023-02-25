const player = {
    name: "soonhan",
    sayHello: function(otherPersonsName) {
        console.log("Hello " + otherPersonsName + " What's up");
    }
};

console.log(player.name);
player.sayHello("kyuri");
player.sayHello("soonhan");