const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "2op@Datasql22p",
  database: "eventsystem",
});

app.post("/create", (req, res) => {
  db.query(
    "INSERT INTO events (title,details,img) VALUES (?,?,?)",
    ["EVENT 1", "this is a event demo page"],
    (err, res) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Valuescd.. Inserted");
      }
    }
  );
});
app.listen(3000, () => {
  console.log("Your Server is Running on 3000");
});
