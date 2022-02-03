const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const userRessource = require("./user/api/UserResource");
const authRessource = require("./auth/api/AuthRessource");

import { getConfigForEnvironment } from "./config";

const config = getConfigForEnvironment();

mongoose.connect(`mongodb+srv://${config.mongo.connectionString}/${config.mongo.databaseName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(cors());

app.use("/", userRessource);
app.use("/", authRessource);

app.listen(config.http.port, () => {
  console.log(`server started at http://localhost:${config.http.port}`);
});
