// core module

const readline = require("readline");
const fs = require("fs");

// Readline
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});

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

const tulisPertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (nama) => {
      resolve(nama);
    });
  });
};

const simpanKontak = (nama, email, noHp) => {
  const data = {
    nama: nama,
    email: email,
    noHp: noHp,
  };
  const file = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(file);
  contacts.push(data);
  console.log(contacts);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
  console.log(`terimakasih sudah memasukan data`);
  rl.close();
};

module.exports = {
  tulisPertanyaan: tulisPertanyaan,
  simpanKontak: simpanKontak,
};
