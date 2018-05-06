class Vehicle{
    constructor(name){
        this.name = name;
    }

    start(){
        console.log(this.name, 'is starting...');
    }
}


class Car extends Vehicle{
    constructor(){
        super('car');
    }
    drive(){
        console.log('brum brum...');
    }
}


class Boat extends Vehicle{
    constructor(){
        super('boat');
    }
    swim(){
        console.log('chlup chlup...');
    }
}


class Plane extends Vehicle{
    constructor(){
        super('plane');
    }
    fly(){
        console.log('fru fru...');
    }
}



let car = new Car();
car.start();
car.drive();

let boat = new Boat();
boat.start();
boat.swim();

let plane = new Plane();
plane.start();
plane.fly();



// zadanie1

class Kaczka {
    constructor(type){
        this.type = type;
    }
    kwacz(){
        console.log('kwa kwa');
    }
    plywaj(){
        console.log('płynę...');
    }
    wyswietl(){
        console.log('wygląda jak ' + this.type);
    }
    lec(){
        console.log('lecę');
    }
}

let kaczucha = new Kaczka('zwykła kaczka');
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

// zadanie2
class DzikaKaczka extends Kaczka {
    constructor(){
        super('dzika');
    }
}

let dzikaKaczucha = new DzikaKaczka();
dzikaKaczucha.kwacz();
dzikaKaczucha.plywaj();
dzikaKaczucha.wyswietl();


// zadanie3
class KrzyzowkaKaczka extends Kaczka {
    constructor(){
        super('krzyżówka');
    }
}

let krzyzoKaczucha = new KrzyzowkaKaczka();
krzyzoKaczucha.kwacz();
krzyzoKaczucha.plywaj();
krzyzoKaczucha.wyswietl();

// zadanie5
class GumowaKaczka extends Kaczka {
    constructor(){
        super('gumowa');
    }
    lec(){
        console.log('gumowe kaczki nie potrafią latać :(');
    }
}

let gumowaKaczucha = new GumowaKaczka();
gumowaKaczucha.kwacz();
gumowaKaczucha.plywaj();
gumowaKaczucha.wyswietl();
gumowaKaczucha.lec();
