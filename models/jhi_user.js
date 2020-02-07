/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define('jhi_user', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        login: {
            type: DataTypes.STRING(50),
            allowNull: false,
            unique: true
        },
        password_hash: {
            type: DataTypes.STRING(60),
            allowNull: false
        },
        first_name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        last_name: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(191),
            allowNull: true,
            unique: true
        },
        image_url: {
            type: DataTypes.STRING(256),
            allowNull: true
        },
        activated: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        lang_key: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        activation_key: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        reset_key: {
            type: DataTypes.STRING(20),
            allowNull: true
        },
        created_by: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        created_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        reset_date: {
            type: DataTypes.DATE,
            allowNull: true
        },
        last_modified_by: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        last_modified_date: {
            type: DataTypes.DATE,
            allowNull: true
        }
    }, {
        tableName: 'jhi_user'
    });

    return User;
};