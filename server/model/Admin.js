const { db, DataTypes, Model } = require('../db');
const { User } = require('./User');

class Admin extends Model {}

Admin.init({
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING
},
{
    sequelize: db,
    timestamps: false, 
})

module.exports = { Admin };