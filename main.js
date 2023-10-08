// If Else
var angkaInput = document.getElementById('angka');
var hasilPenjumlahann = document.getElementById('hasilPenjumlahan')

document.getElementById("btnCekPenjumlahan").addEventListener("click", function() {

   var angka = parseInt(angkaInput.value);

   if (angka === 2) {
      hasilPenjumlahann.textContent = "Benar";
   } else {
      hasilPenjumlahann.textContent = "Salah";
   }
});

// Switch Case and Function
document.querySelectorAll('input[type="radio"]').forEach(function(radio) {
   radio.addEventListener('click', function() {
       tampilkanWarnaBuah(this.id); //Memanggil fungsi
   });
});

function tampilkanWarnaBuah(buah) {
   var warna;

   switch (buah) {
       case "pilihApel":
           warna = "Merah";
           break;
       case "pilihJeruk":
           warna = "Orange";
           break;
       case "pilihMangga":
           warna = "Hijau";
           break;
   }

   document.getElementById("hasilWarna").textContent = warna;
}

// For Statement
var reqStar = document.getElementById('jmlReq');
var bintangTampil = document.getElementById('hasilBintang');
var bintangTampilWhile = document.getElementById('hasilBintangWhile');

document.getElementById("btnJml").addEventListener("click", function() {

   var bintang = parseInt(reqStar.value);

   bintangTampil.innerHTML = "";

   for (var i = 0; i < bintang; i++) {
      bintangTampil.innerHTML += "* ";
  }

});

// For Statement
var reqPlus = document.getElementById('jmlReqPlus');
var plusTampil = document.getElementById('hasilPlus');

document.getElementById("btnJmlPlus").addEventListener("click", function() {

   var plus = parseInt(reqPlus.value);

   plusTampil.innerHTML = "";
   
   var i = 0;
   while (i < plus) {
      plusTampil.innerHTML += "* ";
      i++;
  }

});