let arr = [ "snow", "rain", "wind", "sun" ];
console.log(arr);

let [var1, , ,var2] = arr;
console.log(var1);
console.log(var2);

const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
}

let {type, autoStart} = slider;
console.log(type);
console.log(autoStart);

// zadanie 1

let names = ['Kasia', 'Basia', 'Tomek'];
let [v1, v2, v3] = names;
console.log(v1);
console.log(v2);
console.log(v3);

// zadanie2
// let arr1 = [];
// let generateRandomNumbers = (max) =>{
//
//     for (let i = 0; i <= max; i++) {
//
//         arr1.push(Math.floor(Math.random() * Math.floor(max)));
//     }
// }
// console.log(generateRandomNumbers(5));
// console.log(arr1);
// let [a, , b] = arr1;
// console.log(a);
// console.log(b);

let generateRandomNumbers = () => {
  let array = [];
  for (let i = 0; i < 6; i++) {
    array.push(Math.floor(Math.random() * 5));
  }

  return array;
}

let [rand1, , rand3] = generateRandomNumbers();
console.log(rand1);
console.log(rand3);


// zadanie4
let getAnimal = ()=> {

    return {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
        }
}
let newAnimal = getAnimal();
console.log(newAnimal);

let {name:catName, age, getVoice:catVoice} = newAnimal;
console.log(catName);
console.log(catVoice);
