const { DataTypes, Model} = require('../index');

class User extends Model{}

User.init({
    fullName: DataTypes.STRING,
    email: DataTypes.STRING,

},{
    sequelize,
    timestamps:false,
})

module.exports = User;
