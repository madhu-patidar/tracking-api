/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('favorite_driver', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    passenger_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'passenger',
        key: 'id'
      }
    },
    driver_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'driver',
        key: 'id'
      }
    }
  }, {
    tableName: 'favorite_driver'
  });
};
