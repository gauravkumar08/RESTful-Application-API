require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");

const app = express();
app.use(express.json());

connectDB();

app.use("/api/auth", require("./routes/auth"));
app.use("/api/posts", require("./routes/posts"));
app.use("/api/comments", require("./routes/comments"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
