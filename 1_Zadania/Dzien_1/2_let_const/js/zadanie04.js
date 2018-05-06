
//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
// name = "Ola"; - nie można nadpisać zmiennej const, ona jest stała.
// console.log(name);


//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];

//a)
// simpleArray = [1,7,3,9]; - nie można nadpisać zmiennej const, ona jest stała.
// b)
// simpleArray.push(45); - modyfikacja jest dozwolona
// c)
// simpleArray = [1,2,5,4]; - nie można zmieniać wartości w tablicy
// console.log(simpleArray);


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}

// a)
// const dog = {
//     name: "Reksio",
//     skill: "eating"
// }
// nie można nadpisać zmiennej const
// b)
// dog.skill= "eating";
// można zmodyfikować własność
// c)
// dog.age = "3";
// można dodać nową wlasność

// console.log(dog);
