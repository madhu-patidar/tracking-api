/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jhi_persistent_audit_event', {
    event_id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    principal: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    event_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'jhi_persistent_audit_event'
  });
};
