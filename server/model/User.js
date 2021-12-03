const { db, DataTypes, Model } = require('../db');

class User extends Model {}

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
},{
    sequelize,
    timestamps: false,
})

module.exports = User;
