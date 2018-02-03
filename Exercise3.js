//menggunakan If - Else

//silakan isi nama, pilihan peran: ksatria, tabib, dan peyihir 

var nama = ""
var peran = ""

if ((nama) && (peran === 'ksatria')) {
  console.log("Hallo Ksatria "+ nama + ", Kamu dapat menyerang dengan senjatamu");
} else if ((nama) && (peran === 'tabib')) {
  console.log("Hallo Tabib " + nama + ", kamu akan membantu temanmu yang terluka");
} else if ((nama) && (peran === 'penyihir')) {
  console.log("Hallo Penyihir " + nama + ", Ciptakan keajaiban yang membantu kemenanganmu");
} else if ((nama) && (peran === '')) {
  console.log("Hallo " + nama + ", pilih peranmu untuk memulai game");
} else {
  console.log('nama harus diisi');
}

