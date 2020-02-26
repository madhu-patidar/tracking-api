/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('family', {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'family'
  });
};
