/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cab', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    plate_number: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    body_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    fuel_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    make: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    model_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'cab'
  });
};
