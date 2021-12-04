const path = require('path')
const fs = require('fs').promises

const {db} = require('../db')
const {Admin} = require('../model/Admin')
const {Cart} = require('../model/Cart')
const {Category} = require('../model/Category')
const {Item} = require('../model/Item')
const {User} = require('../model/User')
require('../model')

const seed = async() => {
    await db.sync({force: true})

    const adminPath = path.join(__dirname, 'Admin.json')
    const cartPath = path.join(__dirname, 'Cart.json')
    const categoryPath = path.join(__dirname, 'category.json')
    const itemPath = path.join(__dirname, 'item.json')
    const userPath = path.join(__dirname, 'user.json')

     const adminBuffer = await fs.readFile(adminPath)
    const cartBuffer = await fs.readFile(cartPath)
    const categoryBuffer = await fs.readFile(categoryPath)
    const itemBuffer = await fs.readFile(itemPath)
    const userBuffer = await fs.readFile(userPath)

     const {admin} = JSON.parse(String(adminBuffer))
    const {cart} = JSON.parse(String(cartBuffer))
    const {category} = JSON.parse(String(categoryBuffer))
    const {items} = JSON.parse(String(itemBuffer))
    const {users} = JSON.parse(String(userBuffer))

    const adminPromises = admin.map(admin => Admin.create(admin))
    const cartPromises = cart.map(cart=> Cart.create(cartPath))
    const categoryPromises = category.map(category=> Category.create(category))
    const itemPromises = items.map(item => Item.create(item))
    const userPromises = users.map(user => User.create(user)) 

     await Promise.all(adminPromises)
    await Promise.all(cartPromises)
    await Promise.all(categoryPromises)
    await Promise.all(itemPromises)
    await Promise.all(userPromises)
   
    console.log('Data have been successfully added to our table')
}
seed()
module.exports = seed;