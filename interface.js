"use strict";
const venky = {
    id: 18498,
    name: 'Venkatesh',
    email: 'venkateshsethuraman26020@gmail.com',
    contactnumber: 7338935358
};
const selva = {
    id: 18502,
    name: 'Selvaraj',
    email: 'selvaraj.mr@gmai.com',
    contactnumber: 7358525375
};
console.log(venky.id);
class Apsara {
    name = 'Apsara';
    colour() {
        console.log(`${this.name} colour is Black `);
    }
}
const pencil = new Apsara();
pencil.colour();
console.log(pencil.name);
