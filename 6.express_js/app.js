const express = require("express");
const app = express();
const port = 3000;

// app : function dari node js
// get : request method seperti create update delete
// "/routes" : route dari method yg akan digunakan
// (req, res) : function yang akan di kembalikan
app.get("/", (req, res) => {
  // res.json({
  //   nama: "tomis",
  //   umur: 23,
  // });
  // untuk render file html harus menggunakan sendFile
  res.sendFile("./index.html", { root: __dirname }); // root : direktori utama file kita
  // diatas adalah contoh response
});

// id akan digunakan sebagai placeholder sehingga bisa ditangkap menjadi sebuah varible
// untuk placeholder contoh nya id harus berbeda jika ingin 2 id yg di panggil
// app.get("/product/:id/cate/:idCat", (req, res) => {
//   res.send("product id : " + req.params.id + "catergory : " + req.params.idCat);
// });

// contoh req query
app.get("/product/:id", (req, res) => {
  res.send("product id : " + req.params.id + " catergory : " + req.query.cate);
});

app.get("/about", (req, res) => {
  res.send("Hello about!");
});

// use digunakan jika route web sembarang
// disarankan digunakan di akhir code agar tidak di ekseksi terlbih dahulu
app.use("/", (req, res) => {
  res.send("halo use");
});

app.listen(port, () => {
  console.log(`Example app listening on port localhost:${port}`);
});
