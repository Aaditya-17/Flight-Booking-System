const express = require("express");
const sequelize = require("./config/database");
const { serverConfig, Logger } = require("./config");
const apiRoutes = require("./routes");
app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", apiRoutes);
sequelize
    .authenticate()
    .then(() => console.log("Database connected..."))
    .catch((err) => console.error("DB connection error:", err));

app.listen(serverConfig.PORT, () => {
    console.log(`Server is up and running on port : ${serverConfig.PORT}`);
});
