// core module

const fs = require("fs");
const readline = require("readline");

// membaca isi file secara sync
// const data = fs.readFileSync("data/test.txt", "utf-8"); //utf-8 ditambahkan agar membaca text secara latin
// console.log(data);

// membaca isi file secara async
// fs.readFile("data/test.txt", "utf-8", (error, data) => {
//   if (error) throw error;

//   console.log(data);
// });

// Readline
const rl = readline.Interface({
  input: process.stdin,
  output: process.stdout,
});
// menuliskan string ke file secara sycronus
// try {
//   fs.writeFileSync("data/test.txt", "hello world secara synchronus");
// } catch (error) {
//   console.log(error);
// }

// menuliskan string ke file secara async
// fs.writeFile("data/test.txt", "hello world secara async", (e) => {
//   console.log(e);
// });

rl.question("siapa nama anda : ", (nama) => {
  //   console.log(`terimakasih ${nama}`);
  rl.question("berapa umur anda : ", (umur) => {
    // console.log(`Umur anda ${umur} tahun`);
    // console.log(`nama ${nama} umur anda ${umur}`);
    const data = {
      nama: nama,
      umur: umur,
    };
    const file = fs.readFileSync("data/contacts.json", "utf-8");
    const contacts = JSON.parse(file);
    contacts.push(data);
    console.log(contacts);

    fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
    console.log(`terimakasih sudah memasukan data`);
    rl.close();
  });
});
