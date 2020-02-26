/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_persistent_audit_evt_data', {
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'jhi_persistent_audit_event',
        key: 'event_id'
      }
    },
    name: {
      type: DataTypes.STRING(150),
      allowNull: false,
      primaryKey: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'jhi_persistent_audit_evt_data'
  });
};
