class Car {
    constructor(name, model) {
        this.name = name;
        this.model = model;
    };

    age() {
        let date = new Date();
        return date.getFullYear() - this.model;
    }

    deatils() {
        let date = new Date();
        return `The car name is ${this.name} and purchased in ${this.model} and this car is ${date.getFullYear() - this.model} old`
    }
};

class Model extends Car {
    constructor(name, model, greet, num1, num2) {
        super(name, model);
        this.greet = greet;
        this.num1 = num1;
        this.num2 = num2;
    };

    get sum() {
        return this.num1 + this.num2;
    }

    set sum(value1) {
        this.num1 = value1;
    }

    showWithGreet() {
        return `${this.deatils()} ${this.greet}`
    }
};

const carGreet = new Model("Ford", 2000, "Thanks you", 2, 3);
console.log(carGreet.showWithGreet());
carGreet.sum = 22;
console.log(carGreet.sum);


// const car1 = new Car("Ford", 2000);
// console.log(car1.age());
// console.log(car1.deatils());