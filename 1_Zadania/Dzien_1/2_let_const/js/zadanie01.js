//I. Sprawdź najpierw zasięg let
 {
     //A1 - wypisuję zmienną numbers przed deklaracją
     //Wynik w konsoli to TODO: undefined
     //Dlaczego taki wynik? TODO: zmienna jeszcze nie jest widoczna, w tym momencie jeszcze nie została zdeklarowana
     // console.log(numbers);

     let numbers = [2,3, 4];
     //A2 - wypisuję zmienną numbers po deklaracji
     //Wynik w konsoli to TODO: tablica się wyświetla
     //Dlaczego taki wynik? TODO: zmienna została wcześniej zdeklarowana
     // console.log(numbers);
 }

 //A3 - wypisuję zmienną numbers za blokiem
 //Wynik w konsoli to TODO: number is not defined
 //Dlaczego taki wynik? TODO: zmienna została zdeklarowana w bloku i poza nim nie jest już widoczna
 // console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: Pi is not defined
    //Dlaczego taki wynik? TODO: zmienna nie została jeszcze w tym momencie zdeklarowana
    // console.log(Pi);

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: zmienna zstaje wyświetlona
    //Dlaczego taki wynik? TODO: została zdeklarowana wcześniej
    // console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: Pi is not defined
//Dlaczego taki wynik? TODO: zmienna została zdeklarowana w bloku i poza nim nie jest już widoczna
// console.log(PI);
