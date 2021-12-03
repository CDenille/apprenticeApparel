const {Admin} = require('./Admin')
const {Cart} = require('./Cart')
const {Category} = require('./Category')
const {Item} = require('./Item')
const {User} = require('./User')



Cart.hasMany(Item, {as: 'items', foreignKey: 'cart_id'})
Item.belongsTo(Cart, {foreignKey: 'cart_id'})

Category.hasMany(Item, {as: 'items', foreignKey: 'category_id'})
Item.belongsTo(Category, {foreignKey: 'category_id'})

User.hasOne(Cart, {as: 'cart', foreignKey: 'user_id'})
Cart.belongsTo(User, {foreignKey: 'user_id'})

// User.hasMany(Item, {as: 'items', foreignKey: 'user_id'})



module.exports = {
    Admin,
    Cart,
    Category,
    Item,
    User
}