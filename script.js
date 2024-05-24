//complete this code
class Animal {
	constructor(species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	function makeSound() {
		console.log("The "+this.species + " makes a sound");	
	}
}

class Dog extends Animal {
	bark(){
		console.log('woof');
	}
}

class Cat extends Animal {
	purr(){
		console.log('purr');
	}
}
const animal = new Animal("Unknown");
console.log(animal.species);
animal.makeSound();

const myCat = new Cat("Cat");
console.log(myCat.species);
myCat.makeSound();
myCat.purr();

const myDog = new Dog("Dog");
console.log(myDog.species);
myDog.makeSound();
myDog.bark();


// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
