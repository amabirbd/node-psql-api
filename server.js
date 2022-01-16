const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();

let categories = db.categories.findAll();
let products = db.products;

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome Home." });
});

app.get("/categories", (req, res) => {
  // res.json({ message: "all the categories" });
  res.send(categories);
});

require("./app/routes/category.routes")(app);
require("./app/routes/product.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
