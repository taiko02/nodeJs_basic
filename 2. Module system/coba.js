// bisa function
function cetakNama(nama) {
  return `nama saya ${nama}`;
}

// bisa variable
const PI = 3.14;

// bisa object
const mahasiswa = {
  nama: "dodi",
  umur: 23,
  cetakMahasiswa() {
    return `nama ${this.nama} umur saya ${this.umur}`;
  },
};

class Orang {
  // ketika class orang di instance contructor akan otomatis di panggil
  constructor() {
    console.log(`object orang telah dibuat`);
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// contoh export dalam satu function
// module.exports = {
//   cetakNama: cetakNama,
//   PI: PI,
//   mahasiswa: mahasiswa,
//   Orang: Orang,
// };

// atau begini yang simple
module.exports = { cetakNama, PI, mahasiswa, Orang };
