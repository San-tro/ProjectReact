const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Employee', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    surname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    patronymic: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    passport: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    telephone: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    position_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Position',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Employee',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Employee_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
