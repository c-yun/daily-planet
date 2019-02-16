console.log("yo");

var express = require('express');
var fs = require('fs');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static("static"));
app.use(express.urlencoded({extended: false}));

app.get('/', function(req,res) {
    res.send("working");
});

app.get('/articles', function(req,res) {
    var articles = fs.readFileSync("./articles.json");
    articles = JSON.parse(articles);
    res.render('articles/index', {myArticles: articles});
});

app.get('/articles/:id', function(req,res) {
    var articles = fs.readFileSync("./articles.json");
    articles = JSON.parse(articles);
    var articleIndex  = parseInt(req.params.id);
    res.render('articles/show', {myArticle: articles[articleIndex]});
});

app.listen(3000);


