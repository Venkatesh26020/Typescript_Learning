abstract class Phone{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    abstract colour():void;
}

class Redmi extends Phone{ 
    modelname:string;
    constructor(modelname:string,name:string){
        super(name);
        this.modelname=modelname;
    }
    colour(): void {
        console.log(`${this.name} colour is blue`)
    }

    price(){
        console.log(`price of ${this.modelname} is 50000 rupees`)
    }
}

const phone=new Redmi('Redmi Note 16 Pro','IQOO Neo 10 R');
phone.colour();
phone.price();