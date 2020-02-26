/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cab_driver', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cab_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'cab',
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
    tableName: 'cab_driver'
  });
};
