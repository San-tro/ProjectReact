const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Avto', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    class: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name_model: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vin: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    bodywork: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    engine: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    cost: {
      type: DataTypes.DECIMAL(19,4),
      allowNull: false
    },
    provider_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Provider',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'Avto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Avto_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
