/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('driver', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    dob: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    mobile: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    user_id: {
      type: DataTypes.BIGINT,
      allowNull: true,
      references: {
        model: 'jhi_user',
        key: 'id'
      },
      unique: true
    },
    cab_id: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'driver'
  });
};
