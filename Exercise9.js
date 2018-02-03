// Mengenal Penggunaan Function

// Tugas 1 


function shoutOut() {
  console.log("Halo Function!");
}

shoutOut();


// Tugas 2 
console.log('\ ')

var num1 = 5;
var num2 = 6;
function calculateMultiply(num1, num2) {
  return (num1 * num2);
}

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);



//Tugas 3 
console.log('\ ')

var nama = "Agus Santoso";
var umur = 30;
var alamat = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";


function processSentence(nama, umur, alamat, hobby){
  return ('Nama saya ' + nama + ', '+ 'umur saya' + ' ' +umur + ' tahun' + ', ' + 'alamat saya di' + ' ' + alamat + ', ' + 'hobby saya' + ' '+ hobby)
}
var fullSentence = processSentence(nama, umur, alamat, hobby);
console.log(fullSentence);


