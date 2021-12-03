const { db, DataTypes, Model } = require('../db');
const { User } = require('./User');
const { Item } = require('./Item');

class Cart extends Model {}

Cart.init({
    UserId: {
        type: DataTypes.INTEGER,
        references: {
            model: User,
            key: 'id'
        }
    },
    ItemId: {
        type: DataTypes.INTEGER,
        references: {
            model: Item,
            key: 'id'
        }
    },
    Total: DataTypes.INTEGER
},
{
    sequelize: db 
})

module.exports = { Cart };