
const {db, DataTypes, Model} = require('../db')

//Category table
class Category extends Model {

}


Category.init({
    womenClothing: DataTypes.STRING, 
    menClothing: DataTypes.STRING,
    electronics: DataTypes.STRING,
    jewelery: DataTypes.STRING
},
{
    sequelize: db,
    timestamps: false, 
})

   
module.exports = {Category}