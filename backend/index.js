const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");
const bodyParser = require("body-parser");
const blogRoutes = require("./routes/Blog");

const projectRoutes = require("./routes/project");
const awardRoutes = require("./routes/Award");
const experienceRoutes = require("./routes/Experience");

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());
app.use("/api/blogs", blogRoutes);
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/uploads", express.static("uploads"));

app.use("/api/awards", awardRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/experiences", experienceRoutes);

app.get("/ping", (req, res) => {
  res.send("PONG");
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
