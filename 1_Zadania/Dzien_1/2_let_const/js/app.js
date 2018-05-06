const testConst = "TEST CONST";
let testLet = 'TEST LET';
var testVar = 'TEST VAR ';

console.log(testConst);
console.log(testLet);
console.log(testVar);


(function(){

    let testLet = "NADPISANY LET";
    var testVar = "NADPISANY VAR";

    console.log(testConst);
    console.log(testLet);
    console.log(testVar);

})();

console.log(testConst);
console.log(testLet);
console.log(testVar);


// zadanie 3
for (var i = 0; i < 10; i++) {
    // console.log(i);
    // wyświetli liczby od 0 - 9
}
// console.log(i);

// Wypisze 10 - wynik ostatniego ruchy pętli


for (let j = 0; j < 10; j++) {
// console.log(j);
}
// console.log(j);
// j is not defined - poza pętlą zmienna j nie jest widoczna



// zadanie 5
(function (){
    console.log("Hello World");
})();



// zadanie 6
(function(name){
    var name = "Kasia";
    console.log(name);
})();
