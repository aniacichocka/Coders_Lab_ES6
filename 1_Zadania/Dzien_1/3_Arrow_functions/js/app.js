// zadanie 1
function zadanie1(){

    let tekst = () => console.log('Hello World');
    tekst();
}
zadanie1();



function zadanie2(){

    let number = (a=5) => {
        return a *2
    }
    console.log(number());

}
zadanie2();


function zadanie3(){

    let num = (a, b) => {
        if (a > b){
            return a;
        }else{
            return b;
        }
    }
    console.log(num(4,8));
}
zadanie3();

function zadanie4(){


    var arr1 = [2, 3, 1, 6, 100, 49, 5, 7, 8, 9 ];

    function getSecondMaxNumber(array){

        var arr2 = array.sort((a,b) => b-a);
        return arr2[1];
    }
    console.log(getSecondMaxNumber(arr1));

}
zadanie4();

function zadanie5(){

    let n = (a => a) (5);
    console.log(n);

}
zadanie5();

function zadanie6(){

    let num1 = Math.floor(Math.random() * 10) + 1;

    let counter = 1;
    var text = (num1 = 5) => {

        let interval = setInterval(() => {

             console.log('Hello ' + counter);

             if(counter === num1){
                 clearInterval(interval);
             }

             counter += 1;

        }, 1000);
    }
    text();

}
zadanie6();
