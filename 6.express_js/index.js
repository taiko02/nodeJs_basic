const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //   res.send("hallo world");
  //   res.json({ nama: "tomas" });
  //   res.sendFile("./index.html", { root: __dirname });
});

app.get("/barang/:id", (req, res) => {
  //   res.send(
  //     "id barang : " + req.params.id + "kategori id : " + req.params.kateId
  //   );

  res.send("id barang : " + req.params.id + "nama barang " + req.query.nama);
});

app.listen(port, () => {
  console.log(`Server berjalan di port localhost:${port}`);
});
