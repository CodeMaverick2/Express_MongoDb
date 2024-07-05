const express = require("express");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://tejasghatule12345:lbQygZ4zJ2iRf1iA@cluster0.11bongg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Db Connected");
  })
  .catch((err) => {
    console.log("Failed" , err);
  });

const app = express();
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});