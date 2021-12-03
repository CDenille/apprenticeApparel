const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const compiler = webpack(config);
const PORT = 3000;

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
    const items = await Items.findAll()
    res.json(" Apprentice Apparel")
    // res.render('items/ca', { items })
})


app.listen(PORT, function() {
    console.log(`Listening to port: ${PORT}`);
});
