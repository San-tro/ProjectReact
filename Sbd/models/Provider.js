const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Provider', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telephone: {
      type: DataTypes.DOUBLE,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Provider',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Provider_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
