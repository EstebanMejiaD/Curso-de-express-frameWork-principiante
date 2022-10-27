const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

const HomeRoutes = require("./routes/home");
const UserRoutes = require("./routes/users");

//setings of express
app.set("appName", "Express course");
app.set("port", 3000);

// crear metodos middlewares o una funcion logger
app.use(express.json());
app.use(morgan("dev"));

//routes

app.use(HomeRoutes);
app.use(UserRoutes);

app.use("/public", express.static(path.join(__dirname, "public")));
app.use("./update", express.static(path.join(__dirname, "update")));

app.listen(app.get("port"));

console.log(`server ${app.get("appName")} on port ${app.get("port")}`);
