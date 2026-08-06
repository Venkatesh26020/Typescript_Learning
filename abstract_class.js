"use strict";
class Phone {
    name;
    constructor(name) {
        this.name = name;
    }
}
class Redmi extends Phone {
    modelname;
    constructor(modelname, name) {
        super(name);
        this.modelname = modelname;
    }
    colour() {
        console.log(`${this.name} colour is blue`);
    }
    price() {
        console.log(`price of ${this.modelname} is 50000 rupees`);
    }
}
const phone = new Redmi('Redmi Note 16 Pro', 'IQOO Neo 10 R');
phone.colour();
phone.price();
