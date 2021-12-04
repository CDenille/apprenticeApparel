const { db, DataTypes, Model } = require('../db');

class User extends Model {}

User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING
    // name: { 
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     validate: {
    //         notEmpty: true
    //     }
    // },

    // email: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    //     unique: true,
    //     validate: {
    //         notEmpty: true
    //     }
    // }
},{
    sequelize: db,
    timestamps: false,
})

module.exports = {User};
