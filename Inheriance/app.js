// Animal constructor
function Animal(color, name) {
    this.color = color;
    this.name = name;
}
// Sound
Animal.prototype.saying = function () {
    return `I am ${this.name} and I'm ${this.color}`;
}

// Cat constructor
function Cat(color, name, sound) {
    Animal.call(this, color, name);
    this.sound = sound;
}
// Inherit the Animal prototype methods
Cat.prototype = new Animal();

// Make cat.prototype return Cat()
Cat.prototype.constructor = Cat;


const mimi = new Cat('yellow', 'Kitty', 'Meo meo');
console.log(mimi);
console.log(mimi.saying());

// Dog constructor
function Dog(color, name, age) {
    Animal.call(this, color, name);
    this.age = age;
}

// Inherit the Animal prototype methods
Dog.prototype = new Animal();
// Make dog.prototype return Dog()
Dog.prototype.constructor = Dog;
// Create an dog object
const puca = new Dog('white','Puca','1');
//
Dog.prototype.saying = function(){
    return `Tui la ${this.name} va tui ${this.age} tuoi `;
}
console.log(puca);
console.log(puca.saying());
// ======================================= CONVERT TO CLASS

// Create Animal class
class Animal{
    constructor(color, name){
        this.color = color;
        this.name = name;
    }
    saying(){
        return `I am ${this.name} and I'm ${this.color}`;
    }
}
// Create Cat class inherit Animal class
class Cat extends Animal{
    constructor(color, name, sound){
        super(color,name);
        this.sound = sound;
    }
}

const mimi = new Cat('yellow', 'Kitty', 'Meo meo');
console.log(mimi);
console.log(mimi.saying());