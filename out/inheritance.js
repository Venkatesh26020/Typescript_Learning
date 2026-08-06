"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats food`);
    }
}
class Cat extends Animal {
    constructor(name, colour) {
        super(name);
        this.colour = colour;
    }
    view() {
        console.log(`Cat is ${this.colour}`);
    }
}
const animal = new Cat('Dog', 'Black');
animal.eat();
animal.view();
class Car {
    constructor(name) {
        this.name = name;
    }
    brand() {
        console.log(`Brand Name of Car is ${this.name}`);
    }
    model() {
        console.log(`Model Name of car is ${this.name}`);
    }
}
class Colour extends Car {
    constructor(name, colour, modelName) {
        super(name);
        this.colour = colour;
        this.modelName = modelName;
    }
    view() {
        console.log(`Colour of the car is ${this.colour}`);
    }
    model() {
        console.log(`Model name of the car is ${this.modelName}`);
    }
}
const car = new Colour('Maruthi', 'Red', 'Ertiga');
car.brand();
car.model();
car.view();
class Bike {
    constructor(showroomprice, onroadprice) {
        this.showroomprice = showroomprice;
        this.onroadprice = onroadprice;
    }
    showroomcost() {
        console.log(`Showroom price of bike is ${this.showroomprice}`);
    }
    onroadcost() {
        console.log(`On road cost is ${this.onroadprice}`);
    }
}
class Mileage extends Bike {
    constructor(showrromprice, onroadprice, milege) {
        super(showrromprice, onroadprice);
        this.milege = milege;
    }
    efficiency() {
        console.log(`Milege of the bike is ${this.milege}`);
    }
}
const mileage = new Mileage(500000, 580000, 45);
mileage.showroomcost();
mileage.onroadcost();
mileage.efficiency();
class flowers {
    constructor(name) {
        this.name = name;
    }
    colour() {
        console.log(`$(this.name) colour is red`);
    }
}
class Petals extends flowers {
    constructor(name) {
        super(name);
        this.name = name;
    }
    petals() {
        console.log(`$(this.name) has 5 petals`);
    }
}
const flower = new Petals('rose');
flower.colour();
flower.petals();
