interface User{
    id:number;
    name:string;
    email:string;
    contactnumber:number
}

const venky: User={
    id:18498,
    name:'Venkatesh',
    email:'venkateshsethuraman26020@gmail.com',
    contactnumber:7338935358
}
const selva:User={
    id:18502,
    name:'Selvaraj',
    email:'selvaraj.mr@gmai.com',
    contactnumber:7358525375
}

console.log(venky.id);


interface Pencil{
    name:string;
    colour():void;
}

class Apsara implements Pencil{
    name='Apsara';
    colour(){
        console.log(`${this.name} colour is Black `);
    }
}

const pencil=new Apsara();
pencil.colour();
console.log(pencil.name);