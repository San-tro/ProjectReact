const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Order', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    employee_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Employee',
        key: 'id'
      }
    },
    buyer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Buyer',
        key: 'id'
      }
    },
    avto_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Avto',
        key: 'id'
      }
    },
    date_oreder: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    date_transfer: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'Order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "Order_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
