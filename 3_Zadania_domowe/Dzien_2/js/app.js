$(function(){

    // zadanie 1

    class Insect {
        constructor(name, legs){
            this.name = name;
            this.legs = legs;
        }
        getLegs(){
        }
    }

    class Centipede extends Insect {
        constructor (name, legs){
            super (name, legs);
        }
        getLegs(){
            $('.info_centipede').text(`Cześć mam na imię ${this.name} jestem stonogą i mam ${this.legs} nóg.`);
        }

    }

    class Spider extends Insect {
        constructor (name, legs){
            super (name, legs);
        }
        getLegs(){
            $('.info_spider').text(`Cześć mam na imię ${this.name} jestem pajakiem i mam ${this.legs} nóg.`);
        }
    }

    let stonogaLucy = new Centipede('Lucy', 40);
    stonogaLucy.getLegs();

    let pająkMajkel = new Spider('Majkel', 8);
    pająkMajkel.getLegs();


    // zadanie 2

    let wally = {
        name: "Wally",
        age: 2,
        proffesion: "Naprawianie innych robotów"
    }


    let saySomething = (a) => {

        let {name, age, proffesion} = wally;

        return `Cześć mam na imię ${name}, mam ${age} lata i moim zajęciem jest ${proffesion}.`

    }
    // saySomething(wally);
    console.log(saySomething(wally));


    // zadanie 3

    let arr1 = ['Ania', 'Kasia', 'Steve', 'Boguś'];

    let sayHallo = (array) => {
        [...array].forEach( a => {
            console.log('Hello: ' + a);
        })

    }
    sayHallo(arr1);


    //drugie rozwiązanie
    // let sayHello = (...par) => {
    //
    //     let names = par.map( e => `Hello: ${e}`);
    //     return console.log([...names]);
    // }
    // sayHello("Ania", "Kasia", "Steve", "Bogumił");
})
