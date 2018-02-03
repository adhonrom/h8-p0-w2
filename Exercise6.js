//1. Melakukan Looping Menggunakan While
// LOOPING PERTAMA 
var loopingPertama = -4;
while(loopingPertama <= 16) {
  loopingPertama +=2;
  if(loopingPertama == -2){
    console.log('LOOPING PERTAMA');
    continue;
  }
  console.log(loopingPertama +2 + ' - I love coding'); 
}

//LOOPING KEDUA 
var loopingKedua = 26;
while(loopingKedua >= 6) {
  loopingKedua -=2;
  if(loopingKedua == 24){
    console.log('LOOPING KEDUA');
    continue;
  }
  console.log(loopingKedua -2 + ' - I will become fullstack developer'); 
}   



//2. Melakukan Looping Menggunakan For

var loopingPertama = 0;
for(loopingPertama = 0; loopingPertama <= 19; loopingPertama++) {console.log(loopingPertama+1 + ' I love coding')}

var loopingKedua = 21;
for(loopingKedua = 21; loopingKedua >= 2; loopingKedua--){
  console.log(loopingKedua-1 + ' I will become fullstack developer');
} 




//3. Perulangan Ganjil Genap 1-100

var counter = 0;

for (counter = 1; counter <= 100; counter++) {
  if (counter % 2 ===1) {
    console.log(counter + ' GANJIL');
  }
  else {
    console.log(counter + " GENAP")
  }
}

for (counter = 1; counter <= 100; counter+=2) {
  if ( counter % 3 ===0) {
    console.log( counter + " kelipatan 3")
  }
}

for (counter = 1; counter <= 100; counter+=5){
  if (counter % 6===0){
    console.log(counter + " kelipatan 6")
  }
}

for (counter = 1; counter <= 100; counter+=9) {
  if (counter % 10 ===0){
    console.log(counter + " kelipatan 10")
  }
}

