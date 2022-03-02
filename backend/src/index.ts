const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userResource = require("./user/api/UserResource");
const authResource = require("./auth/api/AuthResource");

import { getConfigForEnvironment } from "./config";
import { globalMiddleware } from "./middleware/GlobalMiddleware";

const config = getConfigForEnvironment();

mongoose.connect(`mongodb+srv://${config.mongo.connectionString}/${config.mongo.databaseName}?retryWrites=true&w=majority`, {
  useNewUrlParser: true
});

app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

app.use(globalMiddleware);

app.use("/", userResource);
app.use("/", authResource);

app.listen(config.http.port, () => {
  console.log(`server started at http://localhost:${config.http.port}`);
});
