const { EntitySchema } = require("typeorm");

module.exports.Software = new EntitySchema({
  name: "Software",
  tableName: "software",
  columns: {
    id: { type: Number, primary: true, generated: true },
    name: { type: String },
    description: { type: "text" },
    accessLevels: { type: "simple-array" },
  },
});
