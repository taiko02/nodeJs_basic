const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

//gunakan ejs
app.set("view engine", "ejs");
app.use(expressLayouts);

app.get("/", (req, res) => {
  // contoh mengirim data ke dalam view
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

app.get("/about", (req, res) => {
  res.render("about", {
    layout: "layouts/main-layout",
    title: "halaman about",
  });
});

app.get("/product/:id", (req, res) => {
  res.send("product id : " + req.params.id + " catergory : " + req.query.cate);
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
