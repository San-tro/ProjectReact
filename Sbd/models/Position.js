const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Position', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Position',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Position_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
