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
const {isAdmin} = require('./src/middlewares/adminMiddleware')

app.use(
    webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/aa', require('./server/api'));

app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
});
