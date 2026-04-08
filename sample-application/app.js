const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  const name = process.env.NAME || "Guest";
  res.send(`Hello ${name}`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening at http://0.0.0.0:${port}`);
});
