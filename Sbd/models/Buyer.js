const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Buyer', {
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
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Buyer',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Buyer_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
