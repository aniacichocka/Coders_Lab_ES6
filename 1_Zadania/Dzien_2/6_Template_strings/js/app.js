let whoAreYou = (person) => {

    let currentYear = new Date().getFullYear();

    let age = currentYear - person.yearOfBirth;

    let retString = `
    My name is ${person.name} ${person.lastName}.
    I am ${age} years old.
    My proffesion is ${person.proffesion}`

    return retString;
    }

    const person = {
      name: "Vlad",
      lastName: "Drăculea",
      yearOfBirth: 1999,
      proffesion: "Lord of Wallachia"
};
let ret = whoAreYou(person);
console.log(ret);


// zadanie1
let num1 = 2;
let num2 = 4;

let sum = num1 + num2;

console.log(`
Suma dwóch liczb ${num1} i ${num2} to: ${sum}`);

// zadanie2

let name = 'Ania';
console.log(`
Moje imię i nazwisko to: ${name} Mała`);

// zadanie3

let sentence = `"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`;

let tekst = (sentence) => {
    console.log(sentence);
    $('.cite').text(sentence);
}
tekst(sentence);


// zadanie4

let arr1 = ["Ania", "Ola", "Kasia"];

let fnArr = (array) => {
    let arr2 = [...array];
    return arr2;

}
// console.log(fnArr(arr1));

console.log(`${fnArr(arr1)}`);

// zadanie5
function zadanie5(){

    const button = {
        value: "Send message",
        idName: "sendMsg",
        width: "100px",
        padding: "20px",
    }

    console.log(`
        To jest button.
        Jego szerokość to ${button.width}.
        Napis, który na nim widnieje to "${button.value}"`);


    const button2 = {
        value: "Change message",
        idName: "chngMsg",
        width: "200px",
        padding: "80px",
    }


    $('.cite').after($('<button>', {id: `${button2.idName}`}). css('width', `${button2.width}`).css('padding', `${button2.padding}`));


}
zadanie5();
