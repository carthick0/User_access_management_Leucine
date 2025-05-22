const { DataSource } = require("typeorm");
const {User} = require("../entity/User");
const {Software} = require("../entity/Software");
const {Request} = require("../entity/Request");


const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "Karthik@2004",
  database: "access_management",
  synchronize: true,
  logging: false,
  entities: [User, Software, Request],
});

module.exports = { AppDataSource };
