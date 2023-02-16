const express = require("express");
const app = express();
app.set("view engine", "pug");
app.search("views", "views");

app.get("/", (req, res) => {
  res.send(req.header["user-agent"]);
});

app.listen(3000, () => console.log("Listening on port 3000!"));
