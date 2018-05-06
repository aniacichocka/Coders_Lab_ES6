let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';


{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
    // TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.

    // Teraz jest noc i Fiona to ogrzyca, a jej ukochany to Shrek - zmienne wewnątrz bloku przysłaniają te zdeklarowane na zewnątrz.

}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// TODO: Napisz, co kryje się pod zmiennymi i wyjaśnij dlaczego.

// Teraz jest dzień i Fiona to księżniczka, a jej ukochany to Shrek - teraz widoczne są jedynie zmienne poza blokiem.
