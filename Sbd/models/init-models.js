var DataTypes = require("sequelize").DataTypes;
var _Avto = require("./Avto");
var _Buyer = require("./Buyer");
var _Employee = require("./Employee");
var _Order = require("./Order");
var _Position = require("./Position");
var _Provider = require("./Provider");

function initModels(sequelize) {
  var Avto = _Avto(sequelize, DataTypes);
  var Buyer = _Buyer(sequelize, DataTypes);
  var Employee = _Employee(sequelize, DataTypes);
  var Order = _Order(sequelize, DataTypes);
  var Position = _Position(sequelize, DataTypes);
  var Provider = _Provider(sequelize, DataTypes);

  Avto.belongsTo(Provider, { foreignKey: "provider_id"});
  Provider.hasMany(Avto, { foreignKey: "provider_id"});
  Employee.belongsTo(Position, { foreignKey: "position_id"});
  Position.hasMany(Employee, { foreignKey: "position_id"});
  Order.belongsTo(Avto, { foreignKey: "avto_id"});
  Avto.hasMany(Order, { foreignKey: "avto_id"});
  Order.belongsTo(Buyer, { foreignKey: "buyer_id"});
  Buyer.hasMany(Order, { foreignKey: "buyer_id"});
  Order.belongsTo(Employee, { foreignKey: "employee_id"});
  Employee.hasMany(Order, { foreignKey: "employee_id"});

  return {
    Avto,
    Buyer,
    Employee,
    Order,
    Position,
    Provider,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
