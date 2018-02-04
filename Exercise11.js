// Exercise 11 - Membalik Kata


function balikKata(kata) {
    var kataBaru = ""; // string kosong untuk ditempati yang baru
    for (var i = kata.length - 1; i >= 0; i--) {
        kataBaru = kataBaru + kata[i]; // atau bisa ditulis kataBaru += kata[i];
    }
    return kataBaru;
}


console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));


