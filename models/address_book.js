/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('address_book', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    address: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    latitudes: {
      type: "DOUBLE",
      allowNull: true
    },
    longitudes: {
      type: "DOUBLE",
      allowNull: true
    },
    passenger_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'passenger',
        key: 'id'
      }
    }
  }, {
    tableName: 'address_book'
  });
};
