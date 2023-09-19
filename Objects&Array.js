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
console.log(Char["skill"])
console.log(Char)

// Basic Object with new Object() :
let char =  new Object({
    name: "Kont",
    gender: "Female",
    strength: 2000,
    speed: 50.0,
    countLevel: function () { return true }
})
console.log(char["name"])
console.log(char)

// Props Object
Char["skill"] = () => {
    for (let n = 0; n < 10; n++){
        console.log(n)
    }
}

// Arrays
//Basic Array General :
let array = ['Jok','Mok','Lok','Pok'];

// Basic Array with new Array() :
let array2 = new Array('Jok','Mok','Lok','Pok')


// Mixing Session
let object1 = {id: 1, name:'juke',age:23}
let object2 = {id: 2, name:'luke',age:33}
let object3 = {id: 3, name:'Pole',age:24}

let arrayTakeObject = [object1,object2,object3]
console.log(arrayTakeObject)

console.log('the first Object: ')
console.log(arrayTakeObject[0])

console.log('the second Object: ')
console.log(arrayTakeObject[1])

console.log('the third Object: ')
console.log(arrayTakeObject[2])

// adding object with .push()
const object4 = {id:1, name:'cole',age:43}
arrayTakeObject.push(object4)


