// const fs = require("fs"); //core module
// const bebas = require("./coba"); //local module
// const moment = require("moment"); // third party module / npm module

const coba = require("./coba");
// const PI = require("./coba");

console.log(coba.PI, coba.cetakNama("tomassss"));
console.log(coba.mahasiswa.cetakMahasiswa());
console.log(new coba.Orang()); //instance dalam js harus menggunaka new
// console.log(coba("tomisss"), PI);
