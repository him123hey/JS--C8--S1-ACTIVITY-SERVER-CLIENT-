const express = require("express");
const app = express();

const USERS = [
  { name: "rady", password: "111" },
  { name: "ronan", password: "111" },
  { name: "him", password: "222" },
];

// 1-  Serve the /public folder
app.use(express.static("public"));

// 2-  Listen to the port 5000
app.listen(5000);

// 3-  Handle request
app.get("/login", (req, res) => {
  res.send(USERS);
});
