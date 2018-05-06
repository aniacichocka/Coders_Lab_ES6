console.log('test');

function zadanie00(){
    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

    var result = cities.map(function(element){
        return element.length;
    });

    console.log(result);
}
zadanie00();


function zadanie01(){

    function randomize(param1, param2, callback){

        if(typeof callback !== 'function'){
            console.log(error);
            return;

        }else{
        var random = parseInt(Math.random()*(param2-param1)+param1);
        callback(random);
        }
    }

    randomize(10, 100, function(result){
        console.log(result);
    })
}
zadanie01();




function zadanie02(){

    var animals = ["cat", "shrimp", "giraffe"];

    function animal(element) {
        console.log(element);
    }
    animals.forEach(animal);
}
zadanie02();


function zadanie03(){

    var years = [1995, 1856, 2014, 1987];
    var year = new Date().getFullYear();

    function age(element){
        var result = year - element;
        return result;
    }

    var newArray = years.map(age);
    console.log(newArray);

}
zadanie03();

function zadanie04() {

    var arr1 = [1,2,3,4,5];

    function sum(prev, curr){
        return prev + curr;
    }

    function multi(prev, curr){
        return prev * curr;
    }

    var sumResult = arr1.reduce(sum);
    console.log(sumResult);

    var miltiResult = arr1.reduce(multi);
    console.log(multiResult);
}
zadanie04();
