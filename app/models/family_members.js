/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('family_members', {
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
    family_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'family',
        key: 'id'
      }
    }
  }, {
    tableName: 'family_members'
  });
};
