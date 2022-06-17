import Car from './class';

class Model extends Car {
    constructor(model, owner, name, model) {
        super(name, model, owner);
        this.model = model;
    };
    allDetails() {
        return `${this.deatils()} and thats all`;
    }
};

const carModel = new Model("Ford", "First owner", "Mustang", 2000);
console.log(carModel.allDetails());