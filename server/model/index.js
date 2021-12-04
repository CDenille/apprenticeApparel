const {Admin} = require('./Admin')
const {Cart} = require('./Cart')
const {Category} = require('./Category')
const {Item} = require('./Item')
const {User} = require('./User')
const {db} = require('../db')



Cart.hasMany(Item, {as: 'items', foreignKey: 'cartId'})
Item.belongsTo(Cart, {foreignKey: 'cartId'})

Category.hasMany(Item, {as: 'items', foreignKey: 'categoryId'})
Item.belongsTo(Category, {foreignKey: 'categoryId'})

User.hasOne(Cart, {foreignKey: 'userId'})
Cart.belongsTo(User, {foreignKey: 'userId'})

 User.hasMany(Item, {as: 'items', foreignKey: 'userId'})




module.exports = {
    Admin,
    Cart,
    Category,
    Item,
    User
}