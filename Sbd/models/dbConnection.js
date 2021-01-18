const Sequelize = require("sequelize");
const dbConnection = new Sequelize("avtosalon", "postgres", "war3menu", {
    dialect: "postgres",
    host: "localhost",
    port:"5432",
    define: {
        timestamps: false
    }
});
module.exports = dbConnection;