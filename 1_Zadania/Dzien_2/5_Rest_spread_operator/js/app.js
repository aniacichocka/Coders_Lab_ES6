let namesA = ["Zosia", "Marcin", "Kamil"];
let namesB = ["Ala", "Puszek", ...namesA,"Jan", "Karol" ];
console.log(namesA);
console.log(namesB);

// zad1w

let getAverage = (...args) => {
    console.log(args);
    let sum = args.reduce((p, c) => p + c);
    return sum/args.length;
}
let avg = getAverage(1,2,3);
console.log(avg);


// zadanie1
let name = 'Ania';
let arr1 = [...name];
console.log(arr1);

// zadanie2
let fruits = ['apple', 'orange', 'melon'];
let vegetables = ['onion', 'carrot', 'tomato'];

let mix = [...fruits, ...vegetables];
console.log(mix);
