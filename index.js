const routercandidates = require("./routes/candidates");
const routerCompany = require("./routes/company");
const routerpreset = require("./routes/preset");

const dotenv = require("dotenv");
dotenv.config({ path: "./config/config.env" });
const connectDB = require("./config/db");
connectDB();

const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/candidates", routercandidates);
app.use("/api/company", routerCompany);
app.use("/api/preset", routerpreset);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
