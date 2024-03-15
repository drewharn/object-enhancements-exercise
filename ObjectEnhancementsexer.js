//createInstructor ES2015 Version:
const createInstructor = (firstName, lastName) => ({firstName, lastName});

//ComputedProperty Names ES2015 Version:
const favoriteNumber = 42;

const instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
};
instructor[favoriteNumber] = "That is my favorite!"

//Object Methods ES2015 Version:
const instructor = {
    firstName: "Colt",
    sayHi() {
        return "Hi!";
    },
    sayBye() {
        return this.firstName + " says bye!"
    }
};

//createAnimal function:
function createAnimal(species, verb, noise){
    return{
        species,
    [verb](){
        return noise;
    }
    }
};
const sheep = createAnimal("sheep", "bleet", "baaa");
const dog = createAnimal("dog", "bark", "woof");
const cat = createAnimal("cat", "purr", "meow");