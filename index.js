const express = require("express");
const { Sequelize, QueryTypes } = require("sequelize");
const config = require("./config/config.json");
const sequelize = new Sequelize(config.development);
const upload = require("./src/middleware/uploadFile");

const path = require("path");

const app = express();
const port = 5000;

// template engine yang dipakai
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "src/views"));

app.use("/assets", express.static(path.join(__dirname, "src/assets")));
app.use("/upload", express.static(path.join(__dirname, "src/upload")));
// middelware : berfungsi sebagai alat memproses inputan dari form / request
app.use(express.urlencoded({ extended: false }));

//routing
app.get("/blog", blog);
app.get("/addprovinsi", viewprovinsi);
app.post("/addprovinsi", upload.single("foto"), addprovinsi);
app.get("/addkabupaten", viewkabupaten);
app.post("/addkabupaten", upload.single("foto"), addkabupaten);
app.get("/detail-prov/:id", detailProv);
app.get("/detail-kab/:id", detailKab);
app.get("/updateprovinsi/:id", editProv);
app.post("/updateprovinsi", upload.single("foto"), updateprov);
app.get("/updatekabupaten/:id", editKab);
app.post("/updatekabupaten", upload.single("foto"), updatekab);
app.post("/delete-blog/:id", deleteProv);
app.post("/blog-delete/:id", deleteKab);

async function blog(req, res) {
  const query = `SELECT "Provinsis".* 
	FROM "Provinsis";`;
  const query1 = `SELECT "Kabupatens".*
	FROM "Kabupatens";`;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  const obj1 = await sequelize.query(query1, { type: QueryTypes.SELECT });
  res.render("blog", { dataProvinsi: obj, dataKabupaten: obj1 });
}

function viewprovinsi(req, res) {
  res.render("addprovinsi");
}
function viewkabupaten(req, res) {
  res.render("addkabupaten");
}

async function addprovinsi(req, res) {
  const { nama, diresmikan, pulau } = req.body;
  const foto = req.file.filename;

  const query = `INSERT INTO "Provinsis"("Nama", "Diresmikan", "Foto", "Pulau") VALUES ('${nama}', '${diresmikan}', '${foto}' , '${pulau}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("blog");
}

async function addkabupaten(req, res) {
  const { nama, diresmikan } = req.body;
  const foto = req.file.filename;

  const query = `INSERT INTO "Kabupatens"("Nama", "Diresmikan", "Foto") VALUES ('${nama}', '${diresmikan}', '${foto}')`;
  await sequelize.query(query, { type: QueryTypes.INSERT });

  res.redirect("blog");
}

async function detailProv(req, res) {
  const { id } = req.params;
  const query = `select * from "Provinsis" where id = '${id}' `;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("detail-prov", { detailprov: obj[0] });
}
async function detailKab(req, res) {
  const { id } = req.params;
  const query = `select * from "Kabupatens" where id = '${id}' `;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("detail-kab", { detailkab: obj[0] });
}

async function editProv(req, res) {
  const { id } = req.params;
  const query = `select * from "Provinsis" where id = '${id}' `;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("updateprovinsi", { dataprov: obj[0] });
}
async function editKab(req, res) {
  const { id } = req.params;
  const query = `select * from "Kabupatens" where id = '${id}' `;
  const obj = await sequelize.query(query, { type: QueryTypes.SELECT });
  res.render("updatekabupaten", { datakab: obj[0] });
}
async function updateprov(req, res) {
  const { nama, diresmikan, pulau, id } = req.body;
  const foto = req.file.filename;
  const query = `UPDATE "Provinsis" SET "Nama"= '${nama}', "Diresmikan"= '${diresmikan}', "Foto"= '${foto}', "Pulau"= '${pulau}' WHERE id=${id}`;
  await sequelize.query(query, { type: QueryTypes.UPDATE });
  res.redirect("/blog");
}
async function updatekab(req, res) {
  const { nama, diresmikan, id } = req.body;
  const foto = req.file.filename;
  const query1 = `UPDATE "Kabupatens" SET "Nama"= '${nama}', "Diresmikan"= '${diresmikan}', "Foto"= '${foto}'  WHERE id=${id}`;
  await sequelize.query(query1, { type: QueryTypes.UPDATE });
  res.redirect("/blog");
}
async function deleteProv(req, res) {
  const { id } = req.params;
  const query = `delete from "Provinsis" where id = ${id} `;
  await sequelize.query(query, { type: QueryTypes.DELETE });
  res.redirect("/blog");
}
async function deleteKab(req, res) {
  const { id } = req.params;
  const query = `delete from "Kabupatens" where id = ${id} `;
  await sequelize.query(query, { type: QueryTypes.DELETE });
  res.redirect("/blog");
}

app.listen(port, () => {
  console.log(`server berjalan di port ${port}`);
});
