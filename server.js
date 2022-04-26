const express = require('express');

const mongoose = require('mongoose');
const Article = require('./models/article');
const articleRouter = require('./routes/articles');
const methodOverride = require('method-override');
const app = express();

mongoose.connect("mongodb+srv://user:Giwerg1234@yawnode.rvae3.mongodb.net/DoIt?retryWrites=true&w=majority")
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'))
app.get('/', async(req, res)=> {

    const articles = await Article.find().sort({
        createdAt: 'desc' })
    res.render("articles/index", {articles: articles});

});
app.use('/articles', articleRouter);
app.listen(3000);

