// Object.create
const animal = {
    saying: function(){
        return `My name is ${this.name}`;
    },
    changeName: function(newName){
        this.name = newName;
    }
}

const cat = Object.create(animal);
cat.name = 'Kitty';
console.log(cat.saying());
cat.changeName('Mini');
console.log(cat.saying());
