const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello Worldddd holaaaa");
});

mongoose
  .connect(
    "mongodb+srv://admin:SJv7kzdceQdwHGiO@backenddb.1ulsw.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed!");
  });
