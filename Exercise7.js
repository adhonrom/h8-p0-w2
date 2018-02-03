// LOOPING
// 1. Menyusun Barisan Bintang

 var row = 0;
while (row < 5){
  console.log("*");
  row++
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var row = 0;
var bintang = 5;

while(row < bintang) {
  var row2 = 0;
  var bintang2 = '';
  while (row2 < bintang){
    bintang2 += '*';
    row2++;
      }
      console.log(bintang2);
    row++;  
  }
  

// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping
var a = 1;
var b = 1;
var o ="";

while(a<8){   
   
  while(b<a){  
    o +="*";
    b++;
    }   
  console.log(o);   
a++;
}
