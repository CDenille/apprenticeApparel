const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const PORT = 3000;

const {sequelize} = require('./server/model');
const { Admin, Cart, Category, Item, User } = require("./server/model");
const seed = require('./server/seed/seed.js');

// seed();

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


//this route returns HTML for all the jewelries
app.get('/aa', async (req, res) => {
    const items = await Item.findAll()
    // console.log("Working")
    // res.send (" Apprentice Apparel")
    res.render('/aa', { items })
})

// app.get('/aa', (req, res) => {
//     res.send('hi there')
// })


app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
});
