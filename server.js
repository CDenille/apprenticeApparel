const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const PORT = 3000;

const {sequelize} = require('./server/model');
const { Admin, Cart, Category, Item, User } = require("./server/model");
const seed = require('./server/seed/seed.js');
const {checkUser} = require('./src/middlewares/loginMiddleware')
// const {isAdmin} = require('./src/middlewares/adminMiddleware')

// seed();

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//route displays homepage and store categories
app.get('/aa', async(req, res) => {
    let categories = await Category.findAll()
    res.json({categories})
})

//route displays all women clothing
app.get('/aa/womens', async(req,res) => {
    let womens = await Item.findAll({
        where: {
            categoryId: 1
        }
    })
    res.json({womens})
})

//route displays all mens clothing
app.get('/aa/mens', async(req,res) => {
    let mens = await Item.findAll({
        where: {
            categoryId: 2
        }
    })
    res.json({mens})
})

//route displays all jewelry
app.get('/aa/jewelry', async(req,res) => {
    let jewelry = await Item.findAll({
        where: {
            categoryId: 3
        }
    })
    res.json({jewelry})
})
//route displays all electronics
app.get('/aa/electronics', async(req,res) => {
    let electronics = await Item.findAll({
        where: {
            categoryId: 4
        }
    })
    res.json({electronics})
})
//route checks if the user the valid
//if user exist, redirects to login page
// if user do not exist, creates a new user
app.post('/aa/signup', async(req,res) => {
    let allUsers =  await User.findAll()
    let user= req.body
    let validUser = checkUser(user, allUsers)
    if(!validUser.email ) {
        let newUser = await User.create(req.body)
        validUser.User = newUser
        res.send({"newUser": validUser})
    }else {
        res.send({"existUser": validUser})
    } 
})
//route checks if user is valid then checks if user is an admin
// if user is an admin, redirect to admin page
//normal user is redirected to homepage
//if no user found, redirect to signup page
app.get('/aa/login', async(req,res) => {
    let allUsers =  await User.findAll()
    let user= req.body
    let validUser = checkUser(user, allUsers)
    if(!validUser.email ) {
        res.send({"newUser": validUser})
    }else {
        res.send({"existUser": validUser})
    } 
})

// route for admin page
// The application should support an admin to add new items for sale, 
// change descriptions or removed items from sale
app.get('/aa/adminView', async(req,res) => {
    let allItems= await Item.findAll()
    res.json({allItems})
})

app.get('/aa/adminView/:id', async(req,res) => {
    let itemId = req.params.id
    let updatedItem = await Item.findByPk(itemId)
    // let updatedItem = await item.update(req.body)
    res.json(updatedItem)
})

// contacts route for the contacts and about information
app.post('/aa/contactus', async(req,res) => {
    let { contactForm } = await req.body
    console.log(contactForm)
    res.send("Here is your information", contactForm)
})

// checkout route to pay or delete items in the cart.
app.get('/aa/checkout/:id', async(req,res) => {
    let id = req.params.id
    let cart = await Cart.findAll({
        where: {
            userId: id
        }
    })
    let items = []
    for (let i = 0; i < cart.length; i++) {
        let item = await Item.findAll({
            where: {
                id: cart[i].ItemId
            }
        })
        items.push(item)
    }
    res.json({items})
})
// sale route to display all the items that are on sale 
app.get('/aa/sale', async(req,res) => {
    let saleItems = await Item.findAll({
        where: {
            sale: 1
        }
    })
    res.json({saleItems})
})

//route to display all users 
app.get('/aa/users', async(req,res) => {
    let users = await User.findAll()
    res.json({users})
})

// app.use('*', (req, res) => {
//     res.redirect('/');
// })

// route to update an item
app.put('/aa/updateSubmit', async(req,res) => {
    let { updateForm } = await req.body
    console.log(updateForm)
    res.send("Here is your update", updateForm)
})

app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
});


