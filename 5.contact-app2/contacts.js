const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data jika belum ada
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// logic membuat file jika tidak ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const simpanKontak = (nama, email, noHp) => {
  const data = {
    nama: nama,
    email: email,
    noHp: noHp,
  };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);

  // cek duplikat data
  const duplikat = contacts.find((data) => data.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red.inverse.bold("kontak sudah terdaftar gunakan nama lain")
    );
    return false; // agar funtion ngga lanjut kebawah
  }

  // cek email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red.inverse.bold("email tidak valid"));
      return false;
    }
  }

  // cek nomor hp
  if (!validator.isMobilePhone(noHp, "id-ID")) {
    console.log(chalk.red.inverse.bold("Nomor HP tidak valid"));
    return false;
  }

  contacts.push(data);
  console.log(contacts);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(chalk.green.bold(`terimakasih sudah memasukan data`));
};

module.exports = {
  simpanKontak: simpanKontak,
};
