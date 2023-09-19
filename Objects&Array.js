// Objects
// Basic Object General :
let Char = {
    name: 'Jono',
    gender: 'male',
    strength: 3000,
    speed: 30.0,
    countLevel: function () { return true }
}
console.log(Char.countLevel)

// Basic Object with new Object :
let char =  new Object({
    name: "Kont",
    gender: "Female",
    strength: 2000,
    speed: 50.0,
    countLevel: function () { return true }
})
console.log(char["name"])
