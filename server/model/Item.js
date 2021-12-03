const {db, DataTypes, Model} = require('../db')

class Item extends Model {

}

Item.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE, 
    image: DataTypes.STRING,
    sale: DataTypes.BOOLEAN
}, {
    sequelize: db,
    timestamps: false
})

module.exports = {Item}