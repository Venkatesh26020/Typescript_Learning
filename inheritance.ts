class Animal{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    eat(){
        console.log(`${this.name} eats food`);
    }
}
class Cat extends Animal{
    colour:string
    constructor(name:string,colour:string){
        super(name);
        this.colour=colour;
    }
        view(){
            console.log(`Cat is ${this.colour}`)
        }
    }
const animal=new Cat('Dog','Black');
animal.eat();
animal.view();


class Car{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    brand(){
        console.log(`Brand Name of Car is ${this.name}`);
    }
    model(){
        console.log(`Model Name of car is ${this.name}`)
    }
}

class Colour extends Car{
    colour:string;
    modelName:string;
    constructor(name:string,colour:string,modelName:string){
        super(name);
        this.colour=colour;
        this.modelName=modelName;
    }
    view(){
        console.log(`Colour of the car is ${this.colour}`)
    }
    model(){
        console.log(`Model name of the car is ${this.modelName}`)
    }

}
const car=new Colour('Maruthi','Red','Ertiga');
car.brand();
car.model();
car.view();


class Bike{
    showroomprice:number;
    onroadprice:number;
    constructor(showroomprice:number,onroadprice:number){
        this.showroomprice=showroomprice;
        this.onroadprice=onroadprice;
    }
    showroomcost(){
        console.log(`Showroom price of bike is ${this.showroomprice}`)
    }
    onroadcost(){
        console.log(`On road cost is ${this.onroadprice}`)
    }

}

class Mileage extends Bike{
    milege:number;
    constructor(showrromprice:number,onroadprice:number,milege:number){
        super(showrromprice,onroadprice);
        this.milege=milege;
    }
    efficiency(){
        console.log(`Milege of the bike is ${this.milege}`)
    }
}
const mileage=new Mileage(500000,580000,45)
mileage.showroomcost();
mileage.onroadcost();
mileage.efficiency();


class flowers{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    colour(){
        console.log(`colour of ${this.name} is red`);
    }
}

class Petals extends flowers{
    name:string;
    constructor(name:string){
        super(name);
        this.name=name;
    }
    petals(){
        console.log(`${this.name} has 5 petals`);
    }
}

class Sepals extends flowers{
    name:string;
    constructor(name:string){
        super(name);
        this.name=name;
    }
    sepals(){
        console.log(`${this.name} has 7 sepals`)
    }
}



const flower=new Petals('rose');
const sepal=new Sepals('hibiscus');
flower.colour();
flower.petals();
sepal.sepals();


class Subject{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    teacher(){
        console.log(`ABC teaches ${this.name}`)
    }
}

class Exam extends Subject{
    marks:number;
    constructor(name:string,marks:number){
        super(name);
        this.marks=marks;
    }
    mark(){
        console.log(`My mark in ${this.name} is ${this.marks}`);
    }
}

const subject=new Exam('Maths',80);
subject.teacher();
subject.mark();


