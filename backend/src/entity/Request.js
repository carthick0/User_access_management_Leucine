const { EntitySchema } = require("typeorm");

module.exports.Request = new EntitySchema({
  name: "Request",
  tableName: "requests",
  columns: {
    id: { type: Number, primary: true, generated: true },
    accessType: { type: "varchar" },
    reason: { type: "text" },
    status: { type: "varchar" },
  },
  relations: {
    user: { type: "many-to-one", target: "User" },
    software: { type: "many-to-one", target: "Software" },
  },
});
