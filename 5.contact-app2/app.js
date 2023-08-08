const yargs = require("yargs");
const contacts = require("./contacts");

// mengambil command dari comman line
// console.log(process.argv[2]);

yargs.command(
  // contoh command hanya dibuat satu saja
  // "hallo",
  // "hanya mencoba",
  // () => {},
  // (argv) => {
  //   console.log(argv.nama);
  // },
  {
    command: "add",
    description: "menambahkan kontak baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHp: {
        describe: "Nomor handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      // contoh objek
      // const contact = {
      //   nama: argv.nama,
      //   email: argv.email,
      //   noHp: argv.noHp,
      // };
      //
      contacts.simpanKontak(argv.nama, argv.email, argv.noHp);
      // console.log(contact);
    },
  }
);

// jalankan fungsi ini agar yargs bisa di tampilkan di console
yargs.parse();
