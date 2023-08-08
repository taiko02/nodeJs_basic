const contacts = require("./contacts");
const main = async () => {
  const nama = await contacts.tulisPertanyaan("masukan nama anda : ");
  const email = await contacts.tulisPertanyaan("masukan email anda : ");
  const noHp = await contacts.tulisPertanyaan("masukan noHp anda : ");
  contacts.simpanKontak(nama, email, noHp);
};

main();
