const express = require("express");
const expressLayout = require("express-ejs-layouts");
const app = express();
const port = 3000;

// view engine
app.set("view engine", "ejs");
app.use(expressLayout);

app.get("/", (req, res) => {
  // contoh mengirim data ke dalam view
  const mahasiswa = [
    {
      nama: "tomas",
      email: "tomsa@gmail",
    },
    {
      nama: "adnri",
      email: "adnri@gmail",
    },
    {
      nama: "asep",
      email: "asep@gmail",
    },
  ];
  res.render("index", {
    title: "Home page",
    layout: "./layout/main-layout",
    mahasiswa: mahasiswa,
  }); //penggunaan view engine
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact page",
    layout: "./layout/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "halaman about",
    layout: "./layout/main-layout",
  });
});
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
