$(function(){
    // console.log('ready');

    // zadanie 1
    function zad1(){

        let arr = [1,2,3,4,5];

        let getNumbers = (element, i, arr) => element * 2;

        let newArr = arr.map(getNumbers);
        // console.log(newArr);
    }
    zad1();

    // zadanie 2
    function zad2(){

        var Weather = function(array){
            this.array = array;
        }

        //obliczenie sumy temperatur
        function sum(prev, curr){
            return prev + curr;
        }

        Weather.prototype.getAvgTemperature = function(){

            let suma = this.array.reduce(sum);

            let avg = (suma/this.array.length).toFixed(1);
            return avg;
            // console.log(avg);
            // console.log(suma);
        }

        var day2 = new Weather([17,8,4]);
        // console.log(day2.getAvgTemperature());

        $('.avg').text(day2.getAvgTemperature());
    }
    zad2();

    // zadanie 3

    function zad3(){
        const btn = $('button');

        btn.on('click', (event) => {
            let p = event.currentTarget.nextElementSibling;
            p.style.display = 'block';

            // console.log(event);
        })

            // console.log(event);

        // btn.on('click', function(){
        //     $(this).next('p').slideToggle();
        // })
        //
    }
    zad3();


})
