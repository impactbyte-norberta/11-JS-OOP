class Animal {
    constructor(name, legsNumber) {
        this.name = name;
        this.legsNumber = legsNumber;
    }

    eat() {
        return `${this.name} eat their food`;
    }
}

const cat = new Animal('cat', 4);
console.log(cat);

const dog = new Animal('dog', 4);
console.log(dog);
console.log(dog.name);
console.log(dog.eat());

class Mamals extends Animal {
    constructor(name, legsNumber, type) {
        super(name, legsNumber);

        this.type = type;
    }

    walk() {
        return `${this.name} walks`;
    }
}

const horse = new Mamals('horse', 4, 'mamals');
console.log(horse);
console.log(horse.eat());
console.log(horse.walk());

class FourLegsAnimal extends Mamals {
    constructor(name, legsNumber, color) {
        super(name, legsNumber);

        this.color = color;
    }
}

const pig = new FourLegsAnimal('pig', 4, 'pink');
console.log(pig.legsNumber);
console.log(pig.color);
