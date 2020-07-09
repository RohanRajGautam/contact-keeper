const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5000;

// CONNECT TO DATABASE
connectDB();

app.get("/", (req, res) =>
  res.json({ msg: "Welcome to the contact keeper API" })
);

app.use("/api/users", require("./routes/users"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/contacts", require("./routes/contacts"));

app.listen(PORT, () => console.log(`Starting server in port ${PORT}`));
