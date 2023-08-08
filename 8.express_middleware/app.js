const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const morgan = require("morgan");
// plugin morgan cocok untuk fase development
// morgan akan menampilkan log middleware
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");

// third party middle ware
app.use(expressLayouts);
app.use(morgan("dev"));

// contoh middleware

// built-in middleware
// express static digunakan agar folder dalam path tersebut dapat digunakan
// express.static("<nama folder>")  *https://expressjs.com/en/4x/api.html#express.static
app.use(express.static("public"));

// application level middleware
app.use((req, res, next) => {
  //middleware ini akan berjalan dahulu karena mode synhcronus
  console.log("Time" + Date.now());
  next(); // next harus dituliskan agar fungsi berikutnya jalan
});

app.use((req, res, next) => {
  // lalu middleware ini
  console.log("Ini middleware kedua");
  next(); // next harus dituliskan agar fungsi berikutnya jalan
});

app.get("/", (req, res) => {
  const mahasiswa = [
    {
      nama: "tomas",
      email: "tomsa@gmail",
    },
    {
      nama: "adnri",
      email: "tomsa@gmail",
    },
    {
      nama: "asep",
      email: "tomsa@gmail",
    },
  ];
  res.render("index", {
    // 'index' merupakan file view ejs akan otomatis mencari file tersebut beserta ekstensi nya
    layout: "layouts/main-layout", //ini harus di tambahkan jika ingin menggunakan express layouts
    title: "Home",
    nama: "tomas",
    mahasiswa: mahasiswa, //variable object mahasiswa akan dilempar kesini untuk di panggil ke view
  }); //penggunaan view engine
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    layout: "layouts/main-layout",
    title: "halaman contact",
  });
});

app.get("/about", (req, res, next) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "halaman about",
  });
  // next(); //akan error karna next ini akan melanjutkan ke halaman 404
  // next juga error karna tidak bisa 2 headers dalam satu halaman
});

app.get("/product/:id", (req, res) => {
  res.send("product id : " + req.params.id + " catergory : " + req.query.cate);
});

app.use("/", (req, res) => {
  res.status(404);
  res.send("404");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
